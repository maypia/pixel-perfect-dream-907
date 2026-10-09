import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/how-to")({
  head: () => ({ meta: [
    { title: "วิธีใช้งาน — FORM & FEEL" },
    { name: "description", content: "ขั้นตอนการใช้ไพ่ NFC เพื่อสะท้อนความคิด" },
    { property: "og:title", content: "วิธีใช้งาน — FORM & FEEL" },
    { property: "og:description", content: "ขั้นตอนการใช้ไพ่ NFC เพื่อสะท้อนความคิด" },
  ] }),
  component: () => <StubPage title="วิธีใช้งาน" text="เลือกคำถาม แตะไพ่ 3 ใบ แล้วรับมุมมองใหม่" accent="bg-pink" />,
});
