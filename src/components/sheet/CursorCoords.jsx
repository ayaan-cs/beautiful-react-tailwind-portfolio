import { useEffect, useRef, useState } from "react";
import { COORDS } from "../../data/portfolio";

const pad = (n) => String(Math.max(0, Math.round(n))).padStart(4, "0");

export function CursorCoords() {
  const [pos, setPos] = useState(null);
  const raf = useRef(0);
  const next = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const flush = () => {
      raf.current = 0;
      setPos({ x: next.current.x, y: next.current.y });
    };
    const move = (e) => {
      if (e.pointerType === "touch") return;
      next.current.x = e.clientX;
      next.current.y = e.clientY;
      if (!raf.current) raf.current = requestAnimationFrame(flush);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!pos) return <span>{COORDS}</span>;
  return (
    <span>
      X {pad(pos.x)} · Y {pad(pos.y)}
    </span>
  );
}
