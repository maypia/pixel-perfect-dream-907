import { Link } from "@tanstack/react-router";

export function StubPage({ title, text, accent }: { title: string; text: string; accent: string }) {
  return (
    <main className="page-enter mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-6 px-6 py-16">
      <span className={`h-16 w-16 rounded-full ${accent}`} />
      <h1 className="font-display text-5xl font-extrabold sm:text-6xl">{title}</h1>
      <p className="text-xl text-muted-foreground">{text}</p>
      <Link to="/" className="rounded-full border-2 px-6 py-3 font-semibold transition hover:bg-primary hover:text-primary-foreground active:scale-95">← กลับหน้าแรก</Link>
    </main>
  );
}
