import { useState } from "react";
import { STACK_CATS, schematicGeometry, skillProjects } from "../../data/portfolio";

const ACCENT = "#C1440E";

export function SkillSchematic() {
  const [category, setCategory] = useState("Languages");
  const [selected, setSelected] = useState(null);
  const g = schematicGeometry(category, selected, ACCENT);
  const usedIn = skillProjects(selected);

  return (
    <div className="schematic">
      <div className="fig-head">
        <span>Fig. A — Schematic, skill graph</span>
        <span className="mute">Filter by category · click a junction</span>
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
          <span>{g.cat.items.length} nodes · click a junction for usage</span>
        </div>
        <div className="schematic-frame__canvas">
          <svg
            viewBox={g.viewBox}
            width="100%"
            height={g.height}
            role="group"
            aria-label="Skill schematic diagram"
          >
            <line x1={g.busX} y1={g.busTop} x2={g.busX} y2={g.busBottom} stroke="#1C1B19" strokeWidth="1.6" />
            <circle cx={g.busX} cy={g.busTop} r="3" fill="#1C1B19" />
            <text
              x={g.busX + 9}
              y={g.busTop - 10}
              className="schematic-bus"
            >
              BUS
            </text>
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
                onClick={() => setSelected(n.label)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(n.label);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <circle cx={n.pinX} cy={n.y} r="3.2" fill={n.stroke} />
                <rect x={n.boxX} y={n.boxY} width={n.boxW} height="28" fill={n.fill} stroke={n.stroke} strokeWidth={n.sw} />
                <rect x={n.boxX} y={n.boxY} width="4" height="28" fill={n.stroke} />
                <text x={n.boxX + 15} y={n.y + 4} className="schematic-label">
                  {n.label}
                </text>
                <text x={n.boxX + n.boxW - 10} y={n.y + 4} textAnchor="end" className="schematic-ref">
                  {n.ref}
                </text>
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
                    <span key={p}>
                      <i />
                      {p}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="mute">Reserved · project write-up pending.</span>
              )}
            </div>
          ) : (
            <div className="mute">
              No junction selected — click or tab to a node to trace it back to the project that used it.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
