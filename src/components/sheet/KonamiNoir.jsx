import { useEffect, useRef, useState } from "react";

const SEQUENCE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];
const STORAGE_KEY = "noir";

export function KonamiNoir() {
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(0);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      document.body.classList.add("noir");
    }
  }, []);

  useEffect(() => {
    let idx = 0;

    const flash = (msg) => {
      setToast(msg);
      window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToast(null), 2100);
    };

    const onKey = (e) => {
      const el = e.target;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key.toLowerCase();
      if (key === SEQUENCE[idx]) {
        idx += 1;
        if (idx === SEQUENCE.length) {
          idx = 0;
          const on = document.body.classList.toggle("noir");
          if (on) {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } else {
            sessionStorage.removeItem(STORAGE_KEY);
          }
          flash(on ? "Noir — developed" : "Noir — cleared");
        }
      } else {
        idx = key === SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(toastTimer.current);
    };
  }, []);

  if (!toast) return null;
  return (
    <div className="toast" aria-live="polite">
      {toast}
    </div>
  );
}
