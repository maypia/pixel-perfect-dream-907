import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GeometricArt } from "@/components/GeometricArt";
import { PageFooter } from "@/components/PageFooter";
import { categories } from "@/data/categories";
import { useReflectionSession } from "@/state/SessionProvider";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [
    { title: "เลือกหมวดคำถาม — FORM & FEEL" },
    { name: "description", content: "เลือกหัวข้อที่อยากสำรวจก่อนสแกนไพ่" },
    { property: "og:title", content: "เลือกหมวดคำถาม — FORM & FEEL" },
    { property: "og:description", content: "เลือกหัวข้อที่อยากสำรวจก่อนสแกนไพ่" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CategoriesPage,
});

function CategoriesPage() {
  const { session, ready, start, choose, canContinue } = useReflectionSession();
  const navigate = useNavigate();
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => { if (ready && !session) start(); }, [ready, session, start]);

  return <>
    <main className="page-enter mx-auto w-full max-w-[1600px] flex-1 px-6 pb-4 pt-4 lg:px-14">
      <div className="mb-9 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Button asChild variant="ghost" className="w-fit rounded-full px-0 hover:bg-transparent"><Link to="/"><ArrowLeft />กลับหน้าแรก</Link></Button>
        <span className="text-sm text-muted-foreground">01 / 03</span>
      </div>
      <header className="mb-9">
        <p className="mb-3 text-sm font-semibold text-blue">เลือกหมวดคำถาม</p>
        <h1 className="font-display text-3xl font-extrabold leading-[1.4] sm:text-4xl lg:text-5xl">วันนี้คุณอยากสำรวจเรื่องอะไร?</h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">เลือกหนึ่งหัวข้อที่ตรงกับสิ่งที่คุณอยากสะท้อนคิดในวันนี้</p>
      </header>
      <div role="radiogroup" aria-label="หมวดคำถาม" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const selected = session?.categoryId === category.id;
          return <Button key={category.id} ref={(node) => { cardRefs.current[index] = node; }} variant="outline" role="radio" aria-checked={selected} aria-label={category.name} disabled={!ready} tabIndex={selected || (!session?.categoryId && index === 0) ? 0 : -1}
            onKeyDown={(event) => {
              if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next = event.key === "Home" ? 0 : event.key === "End" ? categories.length - 1 : (index + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + categories.length) % categories.length;
              choose(categories[next].id);
              cardRefs.current[next]?.focus();
            }}
            onClick={() => choose(category.id)} className={`category-card group relative flex h-auto min-w-0 flex-col items-stretch gap-0 overflow-hidden whitespace-normal rounded-lg border bg-transparent p-0 text-left shadow-none hover:bg-transparent ${selected ? "ring-2 ring-foreground ring-offset-4 ring-offset-background" : ""}`}>
            <div className={`relative h-36 w-full overflow-hidden ${category.accent}`}>
              <span className="absolute left-5 top-4 z-10 text-xs font-semibold">0{index + 1}</span>
              <GeometricArt variant={category.art} className="mx-auto h-full w-[235px] transition-transform duration-300 group-hover:scale-105" />
              <span className={`absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full border transition ${selected ? "bg-primary text-primary-foreground" : "bg-background/70 text-foreground"}`}>{selected && <Check aria-hidden="true" />}</span>
            </div>
            <div className="flex min-h-28 flex-col justify-center px-5 py-5 text-foreground">
              <h2 className="font-display text-xl font-bold">{category.name}</h2>
              <p className="mt-2 text-sm font-normal text-muted-foreground">{category.description}</p>
            </div>
          </Button>;
        })}
      </div>
      <div className="mt-9 grid grid-cols-1 items-center gap-5 border-t pt-7 sm:grid-cols-[minmax(0,1fr)_auto]">
        <p role="status" className="min-w-0 text-sm text-muted-foreground">{session?.categoryId ? <>หัวข้อที่เลือก: <span className="font-semibold text-foreground">{categories.find((c) => c.id === session.categoryId)?.name}</span></> : "ยังไม่ได้เลือกหัวข้อ"}</p>
        <Button disabled={!ready || !canContinue} onClick={() => { if (canContinue) navigate({ to: "/scan" }); }} className="h-14 rounded-full px-9 text-lg font-semibold transition-transform enabled:hover:-translate-y-0.5">ดำเนินการต่อ <ArrowRight /></Button>
      </div>
    </main>
    <PageFooter />
  </>;
}
