/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export function Reticle({ enabled }) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return undefined;

    document.body.classList.add("hide-native-cursor");
    const el = elRef.current;
    const pos = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let visible = false;
    let raf = 0;

    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.28;
      cur.y += (pos.y - cur.y) * 0.28;
      if (el) {
        el.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
        el.style.opacity = visible ? "1" : "0";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) {
        cur.x = e.clientX;
        cur.y = e.clientY;
        visible = true;
      }
    };
    const leave = () => {
      visible = false;
    };

    document.addEventListener("mousemove", move, true);
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("hide-native-cursor");
      document.removeEventListener("mousemove", move, true);
      document.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={elRef} className="reticle" aria-hidden="true">
      <div className="reticle__x" />
      <div className="reticle__y" />
      <div className="reticle__ring" />
    </div>
  );
}
