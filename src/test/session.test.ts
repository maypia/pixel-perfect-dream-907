import { describe, expect, it, vi, afterEach } from "vitest";
import { canContinue, createSession, restoreSession, selectCategory } from "@/state/session";

afterEach(() => vi.useRealTimers());

describe("Reflection session rules", () => {
  it("creates a UUID on every new start", () => {
    const first = createSession();
    expect(first.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(createSession().id).not.toBe(first.id);
  });
  it("records the start timestamp", () => {
    vi.useFakeTimers(); vi.setSystemTime(new Date("2026-10-09T14:47:00.000Z"));
    expect(createSession().startedAt).toBe("2026-10-09T14:47:00.000Z");
  });
  it("starts with active status", () => { expect(createSession().status).toBe("active"); });
  it("does not allow continuing before choosing a category", () => { expect(canContinue(createSession())).toBe(false); });
  it("allows continuing after selecting one category", () => { expect(canContinue(selectCategory(createSession(), "emotions"))).toBe(true); });
  it("replaces the previous selection rather than accumulating categories", () => {
    const selected = selectCategory(selectCategory(createSession(), "emotions"), "relationships");
    expect(selected.categoryId).toBe("relationships");
    expect(Object.values(selected)).not.toContain("emotions");
  });
  it("restores the selected category from the current session", () => {
    const selected = selectCategory(createSession(), "growth");
    expect(restoreSession(JSON.stringify(selected))).toEqual(selected);
  });
  it("does not allow unrecognized categories", () => { expect(canContinue(selectCategory(createSession(), "invalid"))).toBe(false); });
  it("starts over with no category on a new start", () => {
    const previous = selectCategory(createSession(), "growth");
    const next = createSession();
    expect(next.categoryId).toBeNull(); expect(next.id).not.toBe(previous.id);
  });
});