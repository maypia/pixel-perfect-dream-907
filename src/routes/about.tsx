import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, UserRound, Asterisk } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeometricArt } from "@/components/GeometricArt";
import { PageFooter } from "@/components/PageFooter";
import { concepts, creator } from "@/data/creator";
import aboutRiso from "@/assets/about-riso.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "เกี่ยวกับเรา — FORM & FEEL" },
    { name: "description", content: "เรื่องราวเบื้องหลังโปรเจกต์ FORM & FEEL" },
    { property: "og:title", content: "เกี่ยวกับเรา — FORM & FEEL" },
    { property: "og:description", content: "เรื่องราวเบื้องหลังโปรเจกต์ FORM & FEEL" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  const fields = [
    ["ชื่อเล่น", creator.nickname], ["รหัสนักศึกษา", creator.studentId],
    ["คณะ", creator.faculty], ["สาขาวิชา", creator.major], ["มหาวิทยาลัย", creator.university],
  ];
  return <>
    <main className="page-enter mx-auto w-full max-w-[1600px] flex-1 px-6 pt-4 lg:px-14">
      <Button asChild variant="ghost" className="mb-8 w-fit rounded-full px-0 hover:bg-transparent"><Link to="/"><ArrowLeft />กลับหน้าแรก</Link></Button>
      <section className="about-intro relative isolate flex min-h-[320px] items-center overflow-hidden border-b pb-9 lg:min-h-[400px]">
        <img src={aboutRiso} alt="" width={1536} height={640} className="about-cover absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="relative max-w-[65%] min-w-0 py-10">
          <p className="mb-4 text-sm font-semibold">ART × TECHNOLOGY × YOU</p>
          <h1 className="font-display text-3xl font-extrabold leading-[1.35] sm:text-4xl lg:text-5xl xl:text-6xl">เบื้องหลัง<br />FORM &amp; FEEL</h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">พื้นที่สำหรับการสำรวจความรู้สึกและสะท้อนความคิดผ่านศิลปะและเทคโนโลยี</p>
        </div>
      </section>

      <section className="grid gap-8 border-b py-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-16">
        <div><p className="mb-3 text-sm text-blue">01 — THE PROJECT</p><h2 className="font-display text-3xl font-bold">เกี่ยวกับโครงงาน</h2><GeometricArt variant={2} className="mt-5 hidden h-36 w-60 lg:block" /></div>
        <div><p className="text-base leading-[2] sm:text-lg">FORM &amp; FEEL เป็นระบบที่ผสมผสานศิลปะและเทคโนโลยี เพื่อเปิดพื้นที่ให้ผู้ใช้งานได้สำรวจความรู้สึกและมุมมองของตนเอง ผ่านการเลือกหมวดคำถาม การสแกนไพ่ภาพด้วยเทคโนโลยี NFC จำนวน 3 ใบ และการนำภาพมาจัดวางซ้อนทับกันบน Light Box ก่อนตีความภาพด้วยตนเอง ระบบจะนำข้อมูลจากไพ่และการตีความมาประมวลผลร่วมกับ AI เพื่อสร้างข้อความสะท้อนคิดที่ช่วยเปิดมุมมองใหม่ โดยไม่มุ่งเน้นการทำนายอนาคตหรือการตัดสินคำตอบว่าถูกหรือผิด</p>
        <div className="mt-7 flex items-start gap-3 border-l-4 border-pink pl-5"><Asterisk className="h-6 w-6 shrink-0 text-pink" /><p className="font-display text-lg font-semibold">ไม่ใช่การทำนาย แต่คือการมองตัวเองในมุมใหม่</p></div></div>
      </section>

      <section className="border-b py-12 lg:py-16">
        <p className="mb-3 text-sm text-blue">02 — THE CREATOR</p>
        <h2 className="mb-10 font-display text-3xl font-bold">ผู้จัดทำโครงงาน</h2>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[440px] px-5 py-5">
            <span aria-hidden="true" className="absolute left-0 top-0 h-24 w-24 rounded-full bg-yellow" />
            <span aria-hidden="true" className="absolute bottom-0 right-0 h-32 w-24 rounded-t-full bg-green" />
            <span aria-hidden="true" className="absolute right-0 top-8 h-16 w-16 rotate-12 bg-pink" />
            <div className="portrait-frame relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl border-2 bg-secondary">
              {creator.portrait ? <img src={creator.portrait} alt={`ภาพผู้จัดทำโครงงาน ${creator.fullName}`} loading="lazy" width={640} height={800} className="h-full w-full object-contain" /> : <><UserRound className="h-24 w-24 stroke-1 text-muted-foreground" /><p className="text-sm text-muted-foreground">[ภาพผู้จัดทำโครงงาน]</p></>}
            </div>
            <Asterisk aria-hidden="true" className="absolute -bottom-2 left-0 h-20 w-20 text-blue" strokeWidth={1.5} />
          </div>
          <div className="min-w-0">
            <p className="mb-4 text-sm font-semibold text-blue">PROJECT CREATOR</p>
            <h3 className="break-words font-display text-3xl font-bold leading-relaxed lg:text-4xl">{creator.fullName}</h3>
            <p className="mt-2 text-muted-foreground">{creator.role}</p>
            <dl className="mt-7 divide-y divide-foreground/15">
              {fields.map(([label, value]) => <div key={label} className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-3 py-3 text-base"><dt className="text-muted-foreground">{label}</dt><dd className="min-w-0 break-words font-medium">{value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <p className="mb-3 text-sm text-blue">03 — THE CONCEPT</p>
        <h2 className="mb-9 font-display text-3xl font-bold">แนวคิดเบื้องหลังโครงงาน</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {concepts.map((concept) => <article key={concept.number} className={`concept-card relative flex min-w-0 flex-col overflow-hidden rounded-lg border p-6 ${concept.accent}`}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2"><span className="font-display text-4xl font-bold">{concept.number}</span><span className="text-xs font-semibold">{concept.label}</span></div>
            <GeometricArt variant={concept.art} className="mx-auto my-3 h-36 w-full max-w-64" />
            <h3 className="font-display text-2xl font-bold">{concept.title}</h3><p className="mt-3 text-base leading-relaxed">{concept.description}</p>
          </article>)}
        </div>
      </section>
      <div className="pb-4 text-center"><Button asChild variant="outline" className="h-12 rounded-full border-2 px-7 font-semibold"><Link to="/"><ArrowLeft />กลับหน้าแรก</Link></Button></div>
    </main>
    <PageFooter />
  </>;
}
