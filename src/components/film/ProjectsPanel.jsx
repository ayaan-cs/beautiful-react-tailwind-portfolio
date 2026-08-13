import { motion } from "framer-motion";
import { ExpandedPage } from "./ExpandedPage";

const stubs = [
  { title: "Print 01", rotate: -3 },
  { title: "Print 02", rotate: 2.5 },
  { title: "Print 03", rotate: -1.5 },
];

export const ProjectsPanel = ({ onExpand }) => {
  return (
    <motion.section
      id="projects"
      layoutId="projects"
      className="page-wrap my-16 cursor-pointer"
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
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="readout">Projects</p>
          <h2 className="mt-2 font-serif text-3xl">{"// coming online next"}</h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--dim)]">Expand</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-6">
        {stubs.map((stub) => (
          <article key={stub.title} className="polaroid w-44" style={{ transform: `rotate(${stub.rotate}deg)` }}>
            <div className="flex aspect-[4/5] items-center justify-center bg-[#1e1815] font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--dim)]">
              {stub.title}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export const ProjectsExpanded = ({ onClose }) => {
  return (
    <ExpandedPage layoutId="projects" title="Projects" onClose={onClose}>
      <p className="font-mono text-sm text-[var(--dim)]">{"// coming online next"}</p>
      <div className="mt-10 flex flex-wrap gap-10">
        {stubs.concat([{ title: "Print 04", rotate: 3 }]).map((stub) => (
          <article key={stub.title} className="polaroid w-52" style={{ transform: `rotate(${stub.rotate}deg)` }}>
            <div className="flex aspect-[4/5] items-center justify-center bg-[#1e1815] font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--dim)]">
              {stub.title}
            </div>
            <p className="mt-3 text-center text-sm">Holder for a future print.</p>
          </article>
        ))}
      </div>
    </ExpandedPage>
  );
};
