import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { constellationCategories, constellationEdges, constellationNodes } from "@/content/film";
import { useMotionPref } from "@/context/MotionContext";

const FilmFrame = ({ active, onSelect, node }) => (
  <button
    type="button"
    data-hot
    onClick={() => onSelect(node)}
    onMouseEnter={() => onSelect(node)}
    className="absolute -translate-x-1/2 -translate-y-1/2"
    style={{ left: `${node.x}%`, top: `${node.y}%` }}
    aria-label={node.label}
  >
    <span
      className="relative block h-9 w-7 rounded-[3px] border transition-all duration-200"
      style={{
        borderColor: active ? "var(--safelight)" : "rgba(255,235,215,0.22)",
        background: active ? "rgba(232,72,44,0.35)" : "rgba(30,24,21,0.85)",
        boxShadow: active ? "0 0 18px rgba(232,72,44,0.55)" : "none",
        transform: active ? "scale(1.18)" : "scale(1)",
      }}
    >
      <span className="absolute left-1 right-1 top-[2px] flex justify-between">
        <i className="h-[3px] w-[3px] rounded-full bg-[rgba(237,230,218,0.35)]" />
        <i className="h-[3px] w-[3px] rounded-full bg-[rgba(237,230,218,0.35)]" />
      </span>
      <span className="absolute left-1 right-1 bottom-[2px] flex justify-between">
        <i className="h-[3px] w-[3px] rounded-full bg-[rgba(237,230,218,0.35)]" />
        <i className="h-[3px] w-[3px] rounded-full bg-[rgba(237,230,218,0.35)]" />
      </span>
    </span>
    {active && (
      <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cream)]">
        {node.label}
      </span>
    )}
  </button>
);

export const HeroConstellation = ({ ready }) => {
  const { reduced } = useMotionPref();
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(constellationNodes[0]);

  const visible = useMemo(
    () => constellationNodes.filter((node) => category === "All" || node.category === category),
    [category]
  );
  const visibleIds = useMemo(() => new Set(visible.map((node) => node.id)), [visible]);
  const edges = constellationEdges.filter((edge) => visibleIds.has(edge.from) && visibleIds.has(edge.to));
  const byId = useMemo(() => Object.fromEntries(constellationNodes.map((node) => [node.id, node])), []);

  return (
    <section id="hero" className="relative min-h-[100svh] pt-24 pb-16">
      <div className="page-wrap">
        <motion.div
          initial={reduced || !ready ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="readout mb-5">Contact sheet</p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.4rem,7vw,4.6rem)] text-[var(--cream)]">
            I build the things underneath the things you use.
          </h1>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {constellationCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
                category === item
                  ? "border-[var(--safelight)] text-[var(--safelight)]"
                  : "border-[var(--glass)] text-[var(--dim)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-6 h-[min(62vh,560px)] w-full max-w-6xl">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          {edges.map((edge) => {
            const from = byId[edge.from];
            const to = byId[edge.to];
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="rgba(255,235,215,0.16)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
        {visible.map((node) => (
          <FilmFrame
            key={node.id}
            node={node}
            active={selected?.id === node.id}
            onSelect={setSelected}
          />
        ))}

        {selected && (
          <aside className="glass-panel absolute bottom-4 right-4 w-[min(280px,calc(100%-2rem))] p-4">
            <p className="readout">{selected.category}</p>
            <h2 className="mt-2 font-serif text-2xl">{selected.label}</h2>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--dim)]">Used in</p>
            <ul className="mt-2 space-y-1 text-sm text-[var(--dim)]">
              {(selected.projects.length ? selected.projects : ["Logged, not public yet"]).map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
};
