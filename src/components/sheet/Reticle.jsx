/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export function Reticle({ enabled }) {
  const elRef = useRef(null);
  const lampRef = useRef(null);
  const grainRef = useRef(null);

  useEffect(() => {
    const grain = grainRef.current;
    if (!enabled) return undefined;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return undefined;

    document.body.classList.add("hide-native-cursor");
    const el = elRef.current;
    const lamp = lampRef.current;
    const pos = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let visible = false;
    let raf = 0;

    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.28;
      cur.y += (pos.y - cur.y) * 0.28;
      const t = `translate(${cur.x}px, ${cur.y}px)`;
      if (el) {
        el.style.transform = t;
        el.style.opacity = visible ? "1" : "0";
      }
      if (lamp) {
        lamp.style.transform = t;
        lamp.style.opacity = visible ? "1" : "0";
      }
      if (grain) {
        grain.style.backgroundPosition = `${-cur.x * 0.018}px ${-cur.y * 0.018}px`;
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
      if (grain) grain.style.backgroundPosition = "0 0";
    };
  }, [enabled]);

  return (
    <>
      <div ref={grainRef} className="paper-grain" aria-hidden="true" />
      {enabled ? (
        <>
          <div ref={lampRef} className="paper-lamp" aria-hidden="true" />
          <div ref={elRef} className="reticle" aria-hidden="true">
            <div className="reticle__x" />
            <div className="reticle__y" />
            <div className="reticle__ring" />
          </div>
        </>
      ) : null}
    </>
  );
}
