import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/ideas")({
  head: () => ({ meta: [
    { title: "ไอเดียคำถาม — FORM & FEEL" },
    { name: "description", content: "ตัวอย่างคำถามสำหรับการสำรวจตัวเอง" },
    { property: "og:title", content: "ไอเดียคำถาม — FORM & FEEL" },
    { property: "og:description", content: "ตัวอย่างคำถามสำหรับการสำรวจตัวเอง" },
  ] }),
  component: () => <StubPage title="ไอเดียคำถาม" text="รวมคำถามชวนคิดสำหรับทุกหัวข้อในชีวิต" accent="bg-blue" />,
});
