import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Nfc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFooter } from "@/components/PageFooter";
import { categories } from "@/data/categories";
import { useReflectionSession } from "@/state/SessionProvider";

export const Route = createFileRoute("/scan")({
  head: () => ({ meta: [
    { title: "สแกนไพ่ NFC — FORM & FEEL" },
    { name: "description", content: "ขั้นตอนสแกนไพ่ 3 ใบเพื่อสะท้อนความคิดใน FORM & FEEL" },
    { property: "og:title", content: "สแกนไพ่ NFC — FORM & FEEL" },
    { property: "og:description", content: "เตรียมไพ่สำหรับหัวข้อที่เลือก เพื่อสำรวจมุมมองของตัวเอง" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ScanPage,
});

function ScanPage() {
  const { session } = useReflectionSession();
  const category = categories.find((c) => c.id === session?.categoryId);
  return <><main className="page-enter mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 pt-4 lg:px-14">
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><Button asChild variant="ghost" className="w-fit rounded-full px-0 hover:bg-transparent"><Link to="/categories"><ArrowLeft />กลับไปเลือกหมวดคำถาม</Link></Button><span className="text-sm text-muted-foreground">02 / 03</span></div>
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center py-16 text-center">
      <div className="mb-7 grid h-28 w-28 place-items-center rounded-full bg-yellow"><Nfc className="h-12 w-12" strokeWidth={1.5} /></div>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">สแกนไพ่ 3 ใบ</h1>
      {category && <p className="mt-5 text-lg">{category.name}</p>}
      <p className="mt-6 text-muted-foreground">ขั้นตอนสแกนไพ่กำลังอยู่ระหว่างการพัฒนา<br />ยังไม่ได้เชื่อมต่อเครื่องอ่าน NFC</p>
      <div className="mt-9 grid w-full grid-cols-3 gap-4" aria-label="ไพ่ที่ยังไม่ได้สแกน">{[1, 2, 3].map((n) => <div key={n} className="grid aspect-[2/3] place-items-center rounded-lg border border-dashed text-2xl text-muted-foreground">0{n}</div>)}</div>
    </div>
  </main><PageFooter /></>;
}