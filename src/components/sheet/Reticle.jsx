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

    const move = (e) => {
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.style.opacity = "1";
    };
    const leave = () => {
      if (el) el.style.opacity = "0";
    };

    document.addEventListener("mousemove", move, true);
    document.addEventListener("mouseleave", leave);
    return () => {
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
