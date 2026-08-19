/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from "react";

const STAGES = [
  { label: "INGEST · BQ", rail: "left", along: 0.12 },
  { label: "TABLES", rail: "left", along: 0.48 },
  { label: "SYNC · NIGHTLY", rail: "left", along: 0.84 },
  { label: "CACHE · SQL", rail: "bottom", along: 0.22, hot: true },
  { label: "DASH", rail: "bottom", along: 0.5 },
  { label: "YAML", rail: "bottom", along: 0.78 },
  { label: "MR · GITLAB", rail: "right", along: 0.22 },
  { label: "RUN · CLOUD", rail: "right", along: 0.82 },
];

const PACKET_COUNT = 7;
const LOOP_MS = 26000;

function margin(width) {
  return width < 720 ? 12 : 22;
}

function geometry(width, height) {
  const m = margin(width);
  const x = m;
  const y = m;
  const rw = Math.max(0, width - 2 * m);
  const rh = Math.max(0, height - 2 * m);
  const length = 2 * (rw + rh);
  const d = `M${x} ${y} V${y + rh} H${x + rw} V${y} Z`;
  return { x, y, rw, rh, length, d, m };
}

/** Counterclockwise from top-left: down the left rail, across the bottom, up the right, back along the top. */
function pointOnLoop(t, g) {
  const p = ((t % 1) + 1) % 1;
  let dist = p * g.length;
  if (dist <= g.rh) return { x: g.x, y: g.y + dist };
  dist -= g.rh;
  if (dist <= g.rw) return { x: g.x + dist, y: g.y + g.rh };
  dist -= g.rw;
  if (dist <= g.rh) return { x: g.x + g.rw, y: g.y + g.rh - dist };
  dist -= g.rh;
  return { x: g.x + g.rw - dist, y: g.y };
}

function ticksFor(g, step = 22) {
  const marks = [];
  for (let s = step; s < g.rh; s += step) {
    marks.push({ x1: g.x - 3, y1: g.y + s, x2: g.x + 3, y2: g.y + s });
    marks.push({ x1: g.x + g.rw - 3, y1: g.y + s, x2: g.x + g.rw + 3, y2: g.y + s });
  }
  for (let s = step; s < g.rw; s += step) {
    marks.push({ x1: g.x + s, y1: g.y - 3, x2: g.x + s, y2: g.y + 3 });
    marks.push({ x1: g.x + s, y1: g.y + g.rh - 3, x2: g.x + s, y2: g.y + g.rh + 3 });
  }
  return marks;
}

function spursFor(g) {
  const midY = g.y + g.rh * 0.48;
  const midX = g.x + g.rw * 0.5;
  const len = Math.min(42, Math.max(18, g.m + 16));
  return [
    { x1: g.x, y1: midY, x2: g.x + len, y2: midY },
    { x1: g.x + g.rw, y1: midY, x2: g.x + g.rw - len, y2: midY },
    { x1: midX, y1: g.y + g.rh, x2: midX, y2: g.y + g.rh - len },
  ];
}

function labelProps(station) {
  const { x, y, rail } = station;
  if (rail === "left") {
    return {
      x: x + 9,
      y,
      textAnchor: "middle",
      transform: `rotate(-90 ${x + 9} ${y})`,
    };
  }
  if (rail === "right") {
    return {
      x: x - 9,
      y,
      textAnchor: "middle",
      transform: `rotate(90 ${x - 9} ${y})`,
    };
  }
  return { x, y: y + 12, textAnchor: "middle" };
}

function stationPoint(stage, g) {
  const { rail, along } = stage;
  if (rail === "left") return { x: g.x, y: g.y + g.rh * along };
  if (rail === "bottom") return { x: g.x + g.rw * along, y: g.y + g.rh };
  if (rail === "right") return { x: g.x + g.rw, y: g.y + g.rh * (1 - along) };
  return { x: g.x + g.rw * (1 - along), y: g.y };
}

export function Pipeline({ reduced }) {
  const packetRefs = useRef([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

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

  const g = useMemo(() => (size.w ? geometry(size.w, size.h) : null), [size.w, size.h]);
  const ticks = useMemo(() => (g ? ticksFor(g) : []), [g]);
  const spurs = useMemo(() => (g ? spursFor(g) : []), [g]);
  const stations = useMemo(() => {
    if (!g) return [];
    return STAGES.map((stage) => {
      const pt = stationPoint(stage, g);
      return { ...stage, ...pt, hidden: pt.y < 56 };
    });
  }, [g]);

  useEffect(() => {
    if (reduced || !g) return undefined;

    const packets = Array.from({ length: PACKET_COUNT }, (_, i) => ({
      t: i / PACKET_COUNT,
    }));
    let raf = 0;
    let last = performance.now();
    let hidden = document.hidden;

    const onVis = () => {
      hidden = document.hidden;
      last = performance.now();
    };
    document.addEventListener("visibilitychange", onVis);

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      if (hidden) return;
      const dt = Math.min(48, now - last);
      last = now;
      const speed = 1 / LOOP_MS;
      packets.forEach((packet, i) => {
        packet.t = (packet.t + dt * speed) % 1;
        const pt = pointOnLoop(packet.t, g);
        const el = packetRefs.current[i];
        if (el) {
          el.setAttribute("cx", String(pt.x));
          el.setAttribute("cy", String(pt.y));
        }
      });
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced, g]);

  if (reduced || !g) return null;

  const showLabels = size.w >= 880;
  const corners = [
    { x: g.x, y: g.y },
    { x: g.x + g.rw, y: g.y },
    { x: g.x, y: g.y + g.rh },
    { x: g.x + g.rw, y: g.y + g.rh },
  ];

  return (
    <div className="pipeline" aria-hidden="true">
      <svg
        className="pipeline__svg"
        width={size.w}
        height={size.h}
        viewBox={`0 0 ${size.w} ${size.h}`}
      >
        <path className="pipeline__loop" d={g.d} />
        <path className="pipeline__loop pipeline__loop--flow" d={g.d} />
        {ticks.map((tick) => (
          <line key={`${tick.x1}-${tick.y1}-${tick.x2}`} {...tick} className="pipeline__tick" />
        ))}
        {spurs.map((spur) => (
          <line key={`${spur.x1}-${spur.y1}`} {...spur} className="pipeline__spur" />
        ))}
        {corners.map((corner) => (
          <rect
            key={`${corner.x}-${corner.y}`}
            x={corner.x - 2.5}
            y={corner.y - 2.5}
            width="5"
            height="5"
            className="pipeline__elbow"
          />
        ))}
        {stations.map((station) => {
          const label = labelProps(station);
          return (
            <g key={station.label} className={station.hot ? "pipeline__node is-hot" : "pipeline__node"}>
              <circle cx={station.x} cy={station.y} r={station.hot ? 3.4 : 2.4} />
              {showLabels && !station.hidden && (
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor={label.textAnchor}
                  transform={label.transform}
                >
                  {station.label}
                </text>
              )}
            </g>
          );
        })}
        {Array.from({ length: PACKET_COUNT }, (_, i) => (
          <circle
            key={i}
            ref={(el) => {
              packetRefs.current[i] = el;
            }}
            className={i % 3 === 0 ? "pipeline__pkt is-hot" : "pipeline__pkt"}
            r={i % 3 === 0 ? 2.6 : 2.1}
            cx={-20}
            cy={-20}
          />
        ))}
      </svg>
    </div>
  );
}
