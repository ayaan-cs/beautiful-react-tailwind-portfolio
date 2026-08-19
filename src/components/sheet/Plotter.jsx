/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function Plotter({ reduced, replay = 0 }) {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return !sessionStorage.getItem("sheet-plotted");
  });

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return undefined;
    }
    if (replay > 0) setShow(true);
  }, [reduced, replay]);

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return undefined;
    }
    if (!show) return undefined;
    const t = window.setTimeout(() => {
      sessionStorage.setItem("sheet-plotted", "1");
      setShow(false);
    }, 1650);
    return () => window.clearTimeout(t);
  }, [reduced, show]);

  if (!show || reduced) return null;

  return (
    <div className="plotter" aria-hidden="true">
      <svg viewBox="0 0 520 300" width="min(72vw, 520px)">
        <path
          className="plotter__path"
          d="M20 40 H500 V260 H20 Z M20 88 H500 M150 88 V260 M150 170 H500 M330 170 V260"
          fill="none"
          stroke="#1C1B19"
          strokeWidth="1.4"
        />
        <circle cx="20" cy="40" r="3" fill="#C1440E" />
      </svg>
    </div>
  );
}
