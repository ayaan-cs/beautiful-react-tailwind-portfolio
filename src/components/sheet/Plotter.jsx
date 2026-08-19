/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { COORDS } from "../../data/portfolio";

const DRAW_MS = 1700;
const HOLD_MS = 280;

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function prefersReduced() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initialPhase() {
  if (prefersReduced()) return "gone";
  return "draw";
}

function measureSheet(width, height) {
  const inset = 8;
  const header = document.querySelector(".sheet-header");
  const hero = document.querySelector(".hero");
  const nav = document.querySelector(".sheet-nav");
  const footer = document.querySelector(".sheet-footer");
  const headerBox = header?.getBoundingClientRect();
  const heroBox = hero?.getBoundingClientRect();
  const navBox = nav?.getBoundingClientRect();
  const footerBox = footer?.getBoundingClientRect();
  const headerPad = header ? parseFloat(getComputedStyle(header).paddingLeft) || 64 : 64;
  const heroPad = hero ? parseFloat(getComputedStyle(hero).paddingLeft) || 64 : 64;

  const titleY = headerBox ? Math.round(headerBox.bottom) + 0.5 : 47.5;
  const titleTextY = headerBox
    ? Math.round((headerBox.top + headerBox.bottom) / 2) + 4
    : 28;
  const titleX = headerBox ? Math.round(headerBox.left + headerPad) : 64;
  const titleEndX = headerBox ? Math.round(headerBox.right - headerPad) : width - 64;

  let colL = heroPad + 0.5;
  let colR = width - heroPad - 0.5;
  if (heroBox) {
    colL = Math.round(heroBox.left + heroPad) + 0.5;
    colR = Math.round(heroBox.right - heroPad) - 0.5;
  }

  const bottomY = height - inset;
  const parts = [
    `M${inset} ${inset} H${width - inset} V${height - inset} H${inset} Z`,
    `M${inset} ${titleY} H${width - inset}`,
    `M${colL} ${titleY} V${bottomY}`,
    `M${colR} ${titleY} V${bottomY}`,
  ];
  if (navBox) parts.push(`M${colL} ${Math.round(navBox.bottom) + 0.5} H${colR}`);
  if (footerBox && footerBox.top < height) {
    parts.push(`M${colL} ${Math.round(footerBox.top) + 0.5} H${colR}`);
  }

  return { d: parts.join(" "), titleY, titleTextY, titleX, titleEndX };
}

export function Plotter({ reduced, replay = 0, onDone }) {
  const pathRef = useRef(null);
  const headRef = useRef(null);
  const doneRef = useRef(onDone);
  const finishRef = useRef(() => {});
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [phase, setPhase] = useState(initialPhase);
  const [layout, setLayout] = useState(null);

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
    return undefined;
  }, [reduced, replay]);

  useEffect(() => {
    if (!size.w || reduced) return undefined;
    setLayout(measureSheet(size.w, size.h));
    return undefined;
  }, [size.w, size.h, reduced, replay]);

  useEffect(() => {
    const settle = () => {
      const path = pathRef.current;
      if (path) {
        path.style.strokeDashoffset = "0";
        path.style.strokeDasharray = "none";
      }
      if (headRef.current) headRef.current.style.opacity = "0";
      setPhase("settled");
      doneRef.current?.();
    };
    finishRef.current = settle;

    if (phase !== "draw" || !layout?.d) return undefined;
    const path = pathRef.current;
    if (!path) return undefined;

    const len = path.getTotalLength();
    if (!len) {
      settle();
      return undefined;
    }

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
      settle();
    };
    finishRef.current = finish;

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

    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      finished = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(hold);
      window.removeEventListener("keydown", onKey);
    };
  }, [phase, layout?.d, replay]);

  if (reduced || phase === "gone") return null;

  const g = layout || (size.w ? measureSheet(size.w, size.h) : null);

  return (
    <div
      className={`plotter${phase === "settled" ? " is-settled" : ""}`}
      aria-hidden={phase === "settled"}
    >
      <div className="plotter__veil" />
      {g && size.w > 0 && (
        <svg
          className="plotter__svg"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
        >
          <path ref={pathRef} className="plotter__path" d={g.d} />
          <g ref={headRef} className="plotter__head" opacity="0">
            <line x1="-7" y1="0" x2="7" y2="0" />
            <line x1="0" y1="-7" x2="0" y2="7" />
            <circle r="4.5" />
          </g>
          <text className="plotter__title" x={g.titleX} y={g.titleTextY}>
            Sheet 01 — Ayaan Syed&apos;s Portfolio
          </text>
          <text
            className="plotter__title plotter__title--mute"
            x={g.titleEndX}
            y={g.titleTextY}
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
        <button type="button" className="plotter__skip" onClick={() => finishRef.current()}>
          Skip
        </button>
      </div>
    </div>
  );
}
