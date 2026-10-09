import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "เกี่ยวกับเรา — FORM & FEEL" },
    { name: "description", content: "เรื่องราวเบื้องหลังโปรเจกต์ FORM & FEEL" },
    { property: "og:title", content: "เกี่ยวกับเรา — FORM & FEEL" },
    { property: "og:description", content: "เรื่องราวเบื้องหลังโปรเจกต์ FORM & FEEL" },
  ] }),
  component: () => <StubPage title="เกี่ยวกับเรา" text="ศิลปะนามธรรมที่ชวนให้คุณมองตัวเองในมุมใหม่" accent="bg-green" />,
});
