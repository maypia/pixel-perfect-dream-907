const s = { fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function BubblesIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0">
      <circle cx="54" cy="26" r="16" className="fill-yellow" />
      <path {...s} d="M10 18h36a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H24l-10 8v-8h-4a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6z" />
      <path {...s} d="M56 34h12a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6h-2v7l-9-7H44a6 6 0 0 1-6-6v-4" />
    </svg>
  );
}
export function HandCardIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0">
      <circle cx="26" cy="24" r="16" className="fill-pink" />
      <rect {...s} x="30" y="8" width="26" height="38" rx="4" transform="rotate(12 43 27)" />
      <path {...s} d="M40 22c3 2 3 7 0 9M45 19c5 4 5 11 0 15" />
      <path {...s} d="M12 70l8-18c2-4 6-6 10-5l14 3c3 1 3 5 0 6l-10 1 18-4c3 0 4 4 1 5l-16 6c6 0 12 1 18 0" />
    </svg>
  );
}
export function DocBulbIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0">
      <circle cx="56" cy="54" r="16" className="fill-green" />
      <path {...s} d="M14 8h30l12 12v48a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" />
      <path {...s} d="M44 8v12h12M20 30h18M20 40h12" />
      <path {...s} d="M54 38a10 10 0 0 0-6 18v4h12v-4a10 10 0 0 0-6-18zM50 64h8" />
    </svg>
  );
}
