import { motion } from "framer-motion";
import { compactStack, expandedStack } from "@/content/film";
import { BrandIcon } from "./BrandIcon";
import { ExpandedPage } from "./ExpandedPage";

const sizeClass = {
  lg: "md:col-span-2 md:row-span-2 min-h-[160px]",
  md: "md:col-span-1 min-h-[110px]",
  sm: "min-h-[88px]",
};

export const StackPanel = ({ onExpand }) => {
  return (
    <motion.section
      id="stack"
      layoutId="stack"
      className="glass-panel page-wrap my-10 cursor-pointer p-8 md:p-10"
      onClick={onExpand}
      data-hot
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onExpand();
        }
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="readout">Tools I reach for</p>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--dim)]">Expand</span>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {compactStack.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col justify-between rounded-2xl border border-[var(--glass)] bg-[rgba(23,19,16,0.55)] p-4 ${sizeClass[item.size]}`}
          >
            <BrandIcon name={item.icon} className="h-7 w-7 text-[var(--cream)]" />
            <p className="mt-4 font-serif text-lg">{item.name}</p>
          </div>
        ))}
      </div>
      <button type="button" onClick={onExpand} className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--safelight)]">
        Full stack →
      </button>
    </motion.section>
  );
};

export const StackExpanded = ({ onClose }) => {
  return (
    <ExpandedPage layoutId="stack" title="Stack" onClose={onClose}>
      <p className="max-w-xl text-[var(--dim)]">
        Everything else, categorized. Brand marks where Simple Icons has them. SQL uses a generic cylinder.
      </p>
      <div className="mt-10 space-y-10">
        {expandedStack.map((group) => (
          <section key={group.title} className={group.secondary ? "opacity-75" : ""}>
            <h3 className="font-serif text-2xl">{group.title}</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-[var(--glass)] px-3 py-2">
                  <BrandIcon name={item} className="h-4 w-4 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ExpandedPage>
  );
};
