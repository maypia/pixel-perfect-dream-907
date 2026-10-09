import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import type { CSSProperties } from "react";

const cards = [
  { src: card1, cls: "left-[2%] top-[12%] z-10", r: "-10deg", delay: "0s" },
  { src: card2, cls: "left-[33%] top-[2%] z-20", r: "2deg", delay: "-2s" },
  { src: card3, cls: "left-[62%] top-[14%] z-30", r: "11deg", delay: "-4s" },
];

export function HeroCards() {
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-[860px]">
      {/* hand-drawn accents */}
      <svg className="absolute -left-2 top-0 h-16 w-24 text-foreground" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M5 40c15-30 30 10 45-15s30 10 45-10" />
      </svg>
      <svg className="absolute bottom-2 left-[20%] h-10 w-10" viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
      <svg className="absolute right-0 top-0 h-14 w-14" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 4v32M4 20h32M9 9l22 22M31 9L9 31" />
      </svg>
      <span className="absolute bottom-6 right-[6%] h-5 w-5 rounded-full bg-orange" />
      <span className="absolute left-[30%] top-[-2%] h-3 w-3 rounded-full bg-blue" />
      <svg className="absolute bottom-0 right-[30%] h-6 w-28" viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M2 10h20M32 10h20M62 10h20M92 10h20" />
      </svg>

      {cards.map((c, i) => (
        <div
          key={i}
          className={`art-card w-[36%] aspect-[2/3] ${c.cls}`}
          style={{ "--r": c.r, animationDelay: c.delay } as CSSProperties}
        >
          <img src={c.src} alt="" width={768} height={1152} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
