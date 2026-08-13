import { motion } from "framer-motion";
import { aboutCompact, aboutExpanded } from "@/content/film";
import { ExpandedPage } from "./ExpandedPage";
import { LetterboxdWidget } from "./LetterboxdWidget";

export const AboutPanel = ({ onExpand }) => {
  return (
    <motion.section
      id="about"
      layoutId="about"
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
        <p className="readout">{aboutCompact.kicker}</p>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--dim)]">Expand</span>
      </div>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-4xl">{aboutCompact.headline}</h2>
      <div className="mt-6 max-w-2xl space-y-4 text-[var(--dim)]">
        {aboutCompact.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
        ))}
      </div>
    </motion.section>
  );
};

export const AboutExpanded = ({ onClose }) => {
  return (
    <ExpandedPage layoutId="about" title="About" onClose={onClose}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h3 className="font-serif text-2xl">{aboutExpanded.part1.title}</h3>
          <p className="mt-4 text-[var(--dim)]">{aboutExpanded.part1.body}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["scope", "design", "build", "ship"].map((step, index) => (
              <div key={step} className="rounded-xl border border-[var(--glass)] p-4">
                <p className="readout">0{index + 1}</p>
                <p className="mt-2 font-serif text-xl capitalize">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <h3 className="font-serif text-lg text-[var(--dim)]">{aboutExpanded.part2.title}</h3>
          <p className="mt-3 text-sm text-[var(--dim)]">{aboutExpanded.part2.body}</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-serif text-2xl">{aboutExpanded.part3.title}</h3>
        <p className="mt-4 max-w-2xl text-[var(--dim)]">{aboutExpanded.part3.body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {aboutExpanded.part3.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[rgba(201,161,90,0.35)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--amber)]"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {["Travel", "Photography", "Print 03", "Print 04"].map((label, index) => (
            <div key={label} className="polaroid" style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}>
              <div className="flex aspect-[4/5] items-center justify-center bg-[#d9cbb6] text-xs uppercase tracking-[0.14em] text-[#6b5c4c]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <LetterboxdWidget />
    </ExpandedPage>
  );
};
