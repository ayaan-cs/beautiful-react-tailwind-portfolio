import { useEffect, useMemo, useRef, useState } from "react";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useMotionPref } from "@/context/MotionContext";
import { site } from "@/content/film";

export const CommandPalette = ({ open, onClose, onCommand }) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const dialog = useRef(null);
  const { reduced, toggle } = useMotionPref();
  useFocusTrap(open, dialog);

  const commands = useMemo(
    () => [
      { id: "goto-about", label: "Go to About", hint: "Scroll", run: () => onCommand("goto", "about") },
      { id: "goto-stack", label: "Go to Stack", hint: "Scroll", run: () => onCommand("goto", "stack") },
      { id: "goto-projects", label: "Go to Projects", hint: "Scroll", run: () => onCommand("goto", "projects") },
      { id: "expand-about", label: "Expand About", hint: "Page", run: () => onCommand("expand", "about") },
      { id: "expand-stack", label: "Expand Stack", hint: "Page", run: () => onCommand("expand", "stack") },
      { id: "expand-projects", label: "Expand Projects", hint: "Page", run: () => onCommand("expand", "projects") },
      { id: "github", label: "Open GitHub", hint: "External", run: () => window.open(site.github, "_blank", "noopener") },
      { id: "linkedin", label: "Open LinkedIn", hint: "External", run: () => window.open(site.linkedin, "_blank", "noopener") },
      {
        id: "email",
        label: "Copy email",
        hint: site.email,
        run: async () => {
          await navigator.clipboard.writeText(site.email);
        },
      },
      { id: "motion", label: reduced ? "Enable motion" : "Toggle reduced motion", hint: "Pref", run: toggle },
    ],
    [onCommand, reduced, toggle]
  );

  const filtered = commands.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      }
      if (event.key === "Enter") {
        event.preventDefault();
        filtered[active]?.run();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[85] bg-black/55 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(event) => event.stopPropagation()}
        className="glass-panel mx-auto mt-[18vh] w-[min(560px,calc(100%-1.5rem))] overflow-hidden"
      >
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type a command"
          className="w-full bg-transparent px-4 py-3 font-mono text-sm outline-none border-b border-[var(--glass)]"
        />
        <ul className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && <li className="px-4 py-3 text-sm text-[var(--dim)]">No matches.</li>}
          {filtered.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => {
                  item.run();
                  onClose();
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-sm ${
                  index === active ? "bg-[rgba(232,72,44,0.14)] text-[var(--cream)]" : "text-[var(--dim)]"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] uppercase tracking-[0.14em]">{item.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
