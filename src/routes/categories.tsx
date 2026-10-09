import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [
    { title: "เลือกหมวดคำถาม — FORM & FEEL" },
    { name: "description", content: "เลือกหัวข้อที่อยากสำรวจก่อนสแกนไพ่" },
    { property: "og:title", content: "เลือกหมวดคำถาม — FORM & FEEL" },
    { property: "og:description", content: "เลือกหัวข้อที่อยากสำรวจก่อนสแกนไพ่" },
  ] }),
  component: () => <StubPage title="เลือกหมวดคำถาม" text="หน้านี้กำลังจะมาเร็ว ๆ นี้" accent="bg-yellow" />,
});
