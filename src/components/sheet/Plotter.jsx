/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { COORDS } from "../../data/portfolio";

const DRAW_MS = 1700;
const HOLD_MS = 320;
const LIFT_MS = 560;
export const SHEET_PLOTTED_KEY = "sheet-plotted-v2";

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function initialPhase() {
  if (typeof window === "undefined") return "gone";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "gone";
  if (sessionStorage.getItem(SHEET_PLOTTED_KEY)) return "gone";
  return "draw";
}

function sheetPath(width, height) {
  const m = Math.round(Math.min(width, height) * 0.045);
  const x = m;
  const y = m;
  const rw = width - 2 * m;
  const rh = height - 2 * m;
  const title = y + 52;
  const col = x + Math.round(rw * 0.26);
  const mid = y + Math.round(rh * 0.5);
  const col2 = x + Math.round(rw * 0.64);
  const d = [
    `M${x} ${y} H${x + rw} V${y + rh} H${x} Z`,
    `M${x} ${title} H${x + rw}`,
    `M${col} ${title} V${y + rh}`,
    `M${col} ${mid} H${x + rw}`,
    `M${col2} ${mid} V${y + rh}`,
  ].join(" ");
  return { d, x, y, rw, title };
}

export function Plotter({ reduced, replay = 0, onDone }) {
  const pathRef = useRef(null);
  const headRef = useRef(null);
  const doneRef = useRef(onDone);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [phase, setPhase] = useState(initialPhase);

  doneRef.current = onDone;

  useEffect(() => {
    const measure = () =>
      setSize({
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase("gone");
      doneRef.current?.();
      return undefined;
    }
    if (replay > 0) setPhase("draw");
  }, [reduced, replay]);

  useEffect(() => {
    if (phase !== "draw" || !size.w) return undefined;
    const path = pathRef.current;
    if (!path) return undefined;

    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);

    let raf = 0;
    let hold = 0;
    let finished = false;
    const start = performance.now();

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(hold);
      path.style.strokeDashoffset = "0";
      if (headRef.current) headRef.current.style.opacity = "0";
      sessionStorage.setItem(SHEET_PLOTTED_KEY, "1");
      setPhase("lift");
      doneRef.current?.();
    };

    const tick = (now) => {
      if (finished) return;
      const t = Math.min(1, (now - start) / DRAW_MS);
      const p = ease(t);
      path.style.strokeDashoffset = String(len * (1 - p));
      const pt = path.getPointAtLength(Math.min(len, p * len));
      if (headRef.current) {
        headRef.current.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
        headRef.current.style.opacity = t > 0.02 && t < 0.98 ? "1" : "0";
      }
      if (t < 1) raf = requestAnimationFrame(tick);
      else hold = window.setTimeout(finish, HOLD_MS);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish);

    return () => {
      finished = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(hold);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
    };
  }, [phase, size.w, size.h]);

  useEffect(() => {
    if (phase !== "lift") return undefined;
    const t = window.setTimeout(() => setPhase("gone"), LIFT_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (reduced || phase === "gone") return null;

  const g = size.w ? sheetPath(size.w, size.h) : null;

  return (
    <div className={`plotter${phase === "lift" ? " is-done" : ""}`} aria-hidden="true">
      {g && (
        <svg
          className="plotter__svg"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
        >
          <path ref={pathRef} className="plotter__path" d={g.d} />
          <g ref={headRef} className="plotter__head" opacity="0">
            <line x1="-7" y1="0" x2="7" y2="0" />
            <line x1="0" y1="-7" x2="0" y2="7" />
            <circle r="4.5" />
          </g>
          <text className="plotter__title" x={g.x + 14} y={g.title - 18}>
            Sheet 01 — Ayaan Syed&apos;s Portfolio
          </text>
          <text
            className="plotter__title plotter__title--mute"
            x={g.x + g.rw - 14}
            y={g.title - 18}
            textAnchor="end"
          >
            {COORDS}
          </text>
        </svg>
      )}
      <div className="plotter__meta">
        <b>Plotting</b>
        <span>Sheet 01</span>
        <span>Austin, TX</span>
        <span>Click to skip</span>
      </div>
    </div>
  );
}
