import { categories } from "@/data/categories";

export const SESSION_KEY = "form-feel.current-session";
export type ReflectionSession = {
  id: string;
  startedAt: string;
  status: "active";
  categoryId: string | null;
};

export function createSession(): ReflectionSession {
  return { id: crypto.randomUUID(), startedAt: new Date().toISOString(), status: "active", categoryId: null };
}

export function selectCategory(session: ReflectionSession, categoryId: string): ReflectionSession {
  if (!categories.some((category) => category.id === categoryId)) return session;
  return { ...session, categoryId };
}

export function canContinue(session: ReflectionSession | null): boolean {
  return !!session?.categoryId && categories.some((category) => category.id === session.categoryId);
}

export function restoreSession(raw: string | null): ReflectionSession | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (typeof value.id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value.id) || typeof value.startedAt !== "string" || !Number.isFinite(Date.parse(value.startedAt)) || value.status !== "active") return null;
    return { id: value.id, startedAt: value.startedAt, status: "active", categoryId: categories.some((c) => c.id === value.categoryId) ? value.categoryId : null };
  } catch { return null; }
}