import { useEffect, useRef, useState } from "react";
import { useMotionPref } from "@/context/MotionContext";

export const CustomCursor = () => {
  const { reduced } = useMotionPref();
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const dot = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return undefined;
    }
    document.documentElement.classList.add("has-custom-cursor");
    const onMove = (event) => {
      pos.current = { x: event.clientX, y: event.clientY };
      const target = event.target;
      setHot(Boolean(target.closest("a, button, input, textarea, [data-hot]")));
    };
    window.addEventListener("pointermove", onMove);
    let frame;
    const tick = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.22;
      cur.current.y += (pos.current.y - cur.current.y) * 0.22;
      if (dot.current) {
        dot.current.style.transform = `translate(${cur.current.x}px, ${cur.current.y}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full mix-blend-screen"
      style={{
        width: hot ? 28 : 14,
        height: hot ? 28 : 14,
        background: hot ? "rgba(232,72,44,0.55)" : "rgba(237,230,218,0.45)",
        boxShadow: hot ? "0 0 22px rgba(232,72,44,0.7)" : "0 0 12px rgba(237,230,218,0.35)",
        transition: "width 160ms ease, height 160ms ease, background 160ms ease",
      }}
    />
  );
};
