import { useId } from "react";
import { cn } from "@/lib/utils";

export function GeometricArt({ variant = 0, className }: { variant?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return <svg aria-hidden="true" viewBox="0 0 260 180" className={cn("geometric-art", className)}>
    <defs><pattern id={id} width="7" height="9" patternUnits="userSpaceOnUse"><circle cx="1" cy="2" r="0.65" fill="currentColor" opacity=".13" /><circle cx="5" cy="7" r="0.5" fill="currentColor" opacity=".09" /></pattern></defs>
    {variant === 0 && <><circle cx="116" cy="89" r="64" className="fill-pink" /><path d="M116 25a64 64 0 0 1 0 128Z" className="fill-blue" /><circle cx="116" cy="89" r="27" className="fill-yellow" /><path d="M192 34v38m-19-19h38" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="201" cy="134" r="9" className="fill-green" /></>}
    {variant === 1 && <><path d="M46 117Q78 7 110 117T174 117T238 117V151H46Z" className="fill-blue" /><circle cx="158" cy="53" r="34" className="fill-orange" /><path d="M20 90q20-30 40 0t40 0t40 0t40 0" fill="none" stroke="currentColor" strokeWidth="3" /></>}
    {variant === 2 && <><circle cx="99" cy="89" r="59" className="fill-blue" /><circle cx="160" cy="89" r="59" className="fill-pink" fillOpacity=".88" /><path d="M130 39a59 59 0 0 1 0 100 59 59 0 0 1 0-100" className="fill-yellow" /><path d="M32 28l14 14m-14 0 14-14M215 140l14 14m-14 0 14-14" stroke="currentColor" strokeWidth="3" /></>}
    {variant === 3 && <><path d="M47 146V104h40V64h40V24h45v122Z" className="fill-yellow" /><circle cx="182" cy="59" r="27" className="fill-pink" /><path d="m176 119 42-42m-30 0h30v30" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="43" cy="42" r="9" className="fill-green" /></>}
    {variant === 4 && <><circle cx="130" cy="84" r="61" className="fill-yellow" /><circle cx="130" cy="84" r="39" className="fill-pink" /><circle cx="130" cy="84" r="16" className="fill-blue" /><path d="m128 85 85-52m-24-4 27 1-10 25M44 135h42m-21-21v42" fill="none" stroke="currentColor" strokeWidth="3" /></>}
    {variant === 5 && <><path d="M129 150V58" fill="none" stroke="currentColor" strokeWidth="3" /><path d="M129 102Q48 115 48 41q81-13 81 61" className="fill-green" /><path d="M129 130q78 9 78-70-78-9-78 70" className="fill-blue" /><circle cx="168" cy="31" r="18" className="fill-orange" /><path d="M96 154h67" stroke="currentColor" strokeWidth="3" /></>}
    <rect width="260" height="180" fill={`url(#${id})`} />
  </svg>;
}