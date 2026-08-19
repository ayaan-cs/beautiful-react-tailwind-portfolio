/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { STACK_CATS, schematicGeometry, skillProjects } from "../../data/portfolio";

const ACCENT = "#C1440E";
const GRID = 8;

function svgPoint(svg, clientX, clientY) {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function snapTo(v, on) {
  return on ? Math.round(v / GRID) * GRID : v;
}

export function SkillSchematic({ playable = true }) {
  const [category, setCategory] = useState("Languages");
  const [selected, setSelected] = useState(null);
  const [offsetsByCat, setOffsetsByCat] = useState({});
  const [snap, setSnap] = useState(false);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);
  const dragRef = useRef(null);
  const snapRef = useRef(false);
  const categoryRef = useRef(category);

  categoryRef.current = category;
  snapRef.current = snap;

  const offsets = offsetsByCat[category] || {};
  const g = schematicGeometry(category, selected, ACCENT, offsets);
  const usedIn = skillProjects(selected);
  const dirty = Object.values(offsets).some((o) => o.x || o.y);

  const patchOffsets = (label, point) => {
    const cat = categoryRef.current;
    setOffsetsByCat((prev) => ({
      ...prev,
      [cat]: { ...(prev[cat] || {}), [label]: point },
    }));
  };

  const setOffsets = (next) => {
    setOffsetsByCat((prev) => ({ ...prev, [category]: next }));
  };

  const reset = () => setOffsets({});

  const scatter = () => {
    const next = {};
    g.cat.items.forEach((label) => {
      next[label] = {
        x: snapTo(Math.round((Math.random() - 0.5) * 260), snap),
        y: snapTo(Math.round((Math.random() - 0.5) * 180), snap),
      };
    });
    setOffsets(next);
  };

  const fan = () => {
    const next = {};
    const n = g.cat.items.length;
    g.cat.items.forEach((label, i) => {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const angle = (-75 + t * 150) * (Math.PI / 180);
      next[label] = {
        x: snapTo(Math.round(Math.cos(angle) * 120), snap),
        y: snapTo(Math.round(Math.sin(angle) * 86), snap),
      };
    });
    setOffsets(next);
  };

  useEffect(() => {
    if (!playable) return undefined;

    const onMove = (e) => {
      const drag = dragRef.current;
      const svg = svgRef.current;
      if (!drag || !svg) return;
      const p = svgPoint(svg, e.clientX, e.clientY);
      const dx = p.x - drag.startX;
      const dy = p.y - drag.startY;
      if (Math.hypot(dx, dy) > 3) drag.moved = true;
      const holdSnap = snapRef.current || e.shiftKey;
      patchOffsets(drag.label, {
        x: snapTo(drag.origX + dx, holdSnap),
        y: snapTo(drag.origY + dy, holdSnap),
      });
    };

    const onUp = () => {
      const drag = dragRef.current;
      if (!drag) return;
      dragRef.current = null;
      setDragging(false);
      if (!drag.moved) setSelected(drag.label);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [playable]);

  const onNodePointerDown = (e, label) => {
    if (!playable) {
      setSelected(label);
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const svg = svgRef.current;
    if (!svg) return;
    const p = svgPoint(svg, e.clientX, e.clientY);
    const cur = offsets[label] || { x: 0, y: 0 };
    dragRef.current = {
      label,
      startX: p.x,
      startY: p.y,
      origX: cur.x,
      origY: cur.y,
      moved: false,
    };
    setDragging(true);
  };

  const reseat = (label) => {
    setOffsetsByCat((prev) => {
      const cur = { ...(prev[category] || {}) };
      delete cur[label];
      return { ...prev, [category]: cur };
    });
  };

  const nudge = (dx, dy) => {
    if (!selected) return;
    const cur = offsets[selected] || { x: 0, y: 0 };
    patchOffsets(selected, {
      x: snapTo(cur.x + dx, snap),
      y: snapTo(cur.y + dy, snap),
    });
  };

  return (
    <div
      className={dragging ? "schematic is-dragging" : "schematic"}
      onKeyDown={(e) => {
        if (!playable || !selected) return;
        const step = e.shiftKey || snap ? GRID * 2 : GRID;
        if (e.key === "ArrowLeft") { e.preventDefault(); nudge(-step, 0); }
        else if (e.key === "ArrowRight") { e.preventDefault(); nudge(step, 0); }
        else if (e.key === "ArrowUp") { e.preventDefault(); nudge(0, -step); }
        else if (e.key === "ArrowDown") { e.preventDefault(); nudge(0, step); }
        else if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
          reseat(selected);
        }
      }}
    >
      <div className="fig-head">
        <span>Fig. A — Schematic, skill graph</span>
        <span className="mute">
          {playable
            ? "Drag the junctions · scatter or fan the traces · click for usage"
            : "Filter by category · click a junction"}
        </span>
      </div>

      <div className="schematic-tabs">
        {STACK_CATS.map((c) => {
          const on = c.name === category;
          return (
            <button
              key={c.ref}
              type="button"
              className={on ? "is-on" : ""}
              onClick={() => {
                setCategory(c.name);
                setSelected(null);
              }}
            >
              {c.ref} · {c.name}
            </button>
          );
        })}
      </div>

      <div className="schematic-frame">
        <div className="schematic-frame__bar">
          <span>Dwg. A-{g.cat.ref} · {g.cat.name}</span>
          {playable ? (
            <span className="schematic-tools">
              <button type="button" onClick={scatter}>Scatter</button>
              <button type="button" onClick={fan}>Fan</button>
              <button
                type="button"
                className={snap ? "is-on" : ""}
                aria-pressed={snap}
                onClick={() => setSnap((on) => !on)}
              >
                Snap
              </button>
              <button type="button" onClick={reset} disabled={!dirty}>Re-plot</button>
            </span>
          ) : (
            <span>{g.cat.items.length} nodes · click a junction for usage</span>
          )}
        </div>
        <div className="schematic-frame__canvas">
          <svg
            ref={svgRef}
            viewBox={g.viewBox}
            width="100%"
            height={Math.max(g.height, 280)}
            role="group"
            aria-label="Skill schematic diagram. Drag nodes to rearrange traces."
          >
            <line x1={g.busX} y1={g.busTop} x2={g.busX} y2={g.busBottom} stroke="#1C1B19" strokeWidth="1.6" />
            <circle cx={g.busX} cy={g.busTop} r="3" fill="#1C1B19" />
            <text x={g.busX + 9} y={g.busTop - 10} className="schematic-bus">BUS</text>
            {g.traces.map((s, i) => (
              <line
                key={`${s.x1}-${s.y1}-${s.x2}-${s.y2}-${i}`}
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke={s.stroke}
                strokeWidth={s.w}
              />
            ))}
            {g.nodes.map((n) => (
              <g
                key={n.ref}
                tabIndex={0}
                role="button"
                aria-label={n.label}
                aria-pressed={selected === n.label}
                onPointerDown={(e) => onNodePointerDown(e, n.label)}
                onDoubleClick={(e) => {
                  e.preventDefault();
                  reseat(n.label);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(n.label);
                  }
                }}
                className={n.loose ? "schematic-node is-loose" : "schematic-node"}
              >
                <circle cx={n.pinX} cy={n.y0} r="3.2" fill={n.stroke} />
                <rect x={n.boxX} y={n.boxY} width={n.boxW} height="28" fill={n.fill} stroke={n.stroke} strokeWidth={n.sw} />
                <rect x={n.boxX} y={n.boxY} width="4" height="28" fill={n.stroke} />
                <text x={n.boxX + 15} y={n.y + 4} className="schematic-label">{n.label}</text>
                <text x={n.boxX + n.boxW - 10} y={n.y + 4} textAnchor="end" className="schematic-ref">{n.ref}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="schematic-legend">
          {selected ? (
            <div className="schematic-legend__row">
              <div className="accent">
                Node {g.nodes.find((n) => n.label === selected)?.ref} · {selected}
              </div>
              <div className="mute">Used in</div>
              {usedIn.length > 0 ? (
                <div className="schematic-chips">
                  {usedIn.map((p) => (
                    <span key={p}><i />{p}</span>
                  ))}
                </div>
              ) : (
                <span className="mute">Reserved · project write-up pending.</span>
              )}
            </div>
          ) : (
            <div className="mute">
              {playable
                ? "Drag a junction off the bus — traces stretch with it. Scatter or fan to restage the sheet. Snap to the grid, or hold Shift. Double-click a node (or Delete) to reseat it. Re-plot restores the drawing."
                : "No junction selected — click or tab to a node to trace it back to the project that used it."}
            </div>
          )}
        </div>
        <p className="schematic-rev">
          Phase 4.5 — live data pipeline behind the sheet · ingest → cache → dash
        </p>
      </div>
    </div>
  );
}
