import { Command } from "lucide-react";
import { site } from "@/content/film";

export const Header = ({ readout, onOpenCommand }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="page-wrap flex items-center justify-between py-5">
        <a href="#hero" className="font-serif text-lg tracking-tight">
          {site.name}
        </a>
        <div className="flex items-center gap-3">
          <span className="readout hidden sm:inline">{readout}</span>
          <button
            type="button"
            onClick={onOpenCommand}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--glass)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--dim)] hover:text-[var(--cream)]"
          >
            <Command size={12} />
            Command
            <kbd className="hidden md:inline text-[10px] opacity-70">⌘K</kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
