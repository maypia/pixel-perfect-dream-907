import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { canContinue, createSession, restoreSession, selectCategory, SESSION_KEY, type ReflectionSession } from "./session";

type SessionContextValue = {
  session: ReflectionSession | null;
  ready: boolean;
  start: () => void;
  choose: (id: string) => void;
  canContinue: boolean;
};
const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<ReflectionSession | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setSession(restoreSession(sessionStorage.getItem(SESSION_KEY))); } catch { /* Memory state remains available if storage is blocked. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready || !session) return;
    try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch { /* Keep the current in-memory session. */ }
  }, [session, ready]);
  const start = () => setSession(createSession());
  const choose = (id: string) => setSession((current) => selectCategory(current ?? createSession(), id));

  return <SessionContext.Provider value={{ session, ready, start, choose, canContinue: canContinue(session) }}>{children}</SessionContext.Provider>;
}

export function useReflectionSession() {
  const value = useContext(SessionContext);
  if (!value) throw new Error("SessionProvider is required");
  return value;
}

// Capture the existing Home CTA without changing its layout, typography or markup.
export function SessionStartBoundary({ children }: { children: ReactNode }) {
  const { start } = useReflectionSession();
  return <div className="contents" onClickCapture={(event) => {
    const target = event.target;
    if (!(target instanceof Element) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = target.closest("a");
    if (window.location.pathname === "/" && link?.getAttribute("href") === "/categories") start();
  }}>{children}</div>;
}