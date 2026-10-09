import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroCards } from "@/components/HeroCards";
import { BubblesIcon, DocBulbIcon, HandCardIcon } from "@/components/StepIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORM & FEEL — มองภาพใหม่ เข้าใจตัวเอง" },
      { name: "description", content: "ระบบสะท้อนความคิดผ่านไพ่ภาพนามธรรม 3 ใบด้วย NFC" },
      { property: "og:title", content: "FORM & FEEL — มองภาพใหม่ เข้าใจตัวเอง" },
      { property: "og:description", content: "ค้นพบมุมมองใหม่ผ่านไพ่ 3 ใบ" },
    ],
  }),
  component: Index,
});

const steps = [
  { n: "01", title: "เลือกคำถาม", desc: "เลือกหัวข้อหรือพิมพ์คำถามที่อยากสำรวจ", Icon: BubblesIcon },
  { n: "02", title: "สแกนไพ่ 3 ใบ", desc: "แตะไพ่ผ่าน NFC ทีละใบตามลำดับ", Icon: HandCardIcon },
  { n: "03", title: "สะท้อนความคิด", desc: "รับมุมมองและคำแนะนำจากภาพที่คุณเลือก", Icon: DocBulbIcon },
];

function Index() {
  return (
    <main className="page-enter mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 lg:px-14">
      <section className="grid flex-1 items-center gap-10 py-6 lg:grid-cols-[2fr_3fr] lg:py-4">
        <div className="min-w-0">
          <h1 className="font-display text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl xl:text-7xl 2xl:text-8xl">
            มองภาพใหม่<br />เข้าใจตัวเอง
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl xl:text-2xl">ค้นพบมุมมองใหม่ผ่านไพ่ 3 ใบ</p>
          <Link
            to="/categories"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-lg font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] active:scale-95 xl:text-xl"
          >
            เริ่มต้นใช้งาน
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <HeroCards />
      </section>

      <section className="grid border-t-[1.5px] py-8 md:grid-cols-3">
        {steps.map(({ n, title, desc, Icon }, i) => (
          <div key={n} className={`flex items-center gap-5 py-4 md:px-8 ${i > 0 ? "border-t-[1.5px] md:border-l-[1.5px] md:border-t-0" : "md:pl-0"}`}>
            <Icon />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-muted-foreground">{n}</p>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="text-[15px] text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
