import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Settings, X } from "lucide-react";
import { api, type NfcStatus } from "@/services/api";

const links = [
  { to: "/", label: "หน้าแรก" },
  { to: "/how-to", label: "วิธีใช้งาน" },
  { to: "/ideas", label: "ไอเดียคำถาม" },
  { to: "/about", label: "เกี่ยวกับเรา" },
] as const;

export function SiteHeader() {
  const [nfc, setNfc] = useState<NfcStatus | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => { api.getNfcStatus().then(setNfc); }, []);

  return (
    <header className="mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 lg:grid-cols-[1fr_auto_1fr] lg:px-14">
      <Link to="/" className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">FORM &amp; FEEL</Link>
      <nav className="hidden items-center gap-10 text-[15px] lg:flex">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: true }}>{l.label}</Link>
        ))}
      </nav>
      <div className="flex items-center justify-end gap-4">
        <span className="flex items-center gap-2 text-sm">
          <span className={`h-3 w-3 shrink-0 rounded-full ${nfc?.connected ? "bg-green" : "bg-orange"}`} />
          <span className="hidden sm:inline">{nfc?.connected ? "NFC พร้อมใช้งาน" : "กำลังเชื่อมต่อ…"}</span>
        </span>
        <button aria-label="ตั้งค่า" onClick={() => setOpen(true)} className="rounded-full p-2 transition hover:bg-secondary hover:rotate-45">
          <Settings className="h-5 w-5" />
        </button>
      </div>
      <nav className="col-span-2 flex justify-between gap-4 text-sm lg:hidden">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: true }}>{l.label}</Link>
        ))}
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 p-4" onClick={() => setOpen(false)}>
          <div className="page-enter w-full max-w-sm rounded-3xl border-2 bg-background p-7" onClick={(e) => e.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">ตั้งค่า</h2>
              <button aria-label="ปิด" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between"><dt>เครื่องอ่าน NFC</dt><dd>{nfc?.device}</dd></div>
              <div className="flex justify-between"><dt>สถานะ</dt><dd>{nfc?.connected ? "เชื่อมต่อแล้ว" : "ไม่เชื่อมต่อ"}</dd></div>
              <div className="flex justify-between"><dt>เซิร์ฟเวอร์</dt><dd>localhost:8000</dd></div>
            </dl>
          </div>
        </div>
      )}
    </header>
  );
}
