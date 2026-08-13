import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { navItems } from "@/content/nav";

export const CommandMenu = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const items = useMemo(() => {
    const pages = [
      ...navItems.map((item) => ({
        id: item.name,
        label: item.name,
        hint: "Section",
        href: item.href,
      })),
      { id: "contact", label: "Contact", hint: "Section", href: "/#contact" },
      { id: "github", label: "GitHub", hint: "External", href: profile.github, external: true },
      { id: "linkedin", label: "LinkedIn", hint: "External", href: profile.linkedin, external: true },
      ...projects.map((project) => ({
        id: project.slug,
        label: project.title,
        hint: "Project",
        href: `/work/${project.slug}`,
      })),
    ];

    const needle = query.trim().toLowerCase();
    if (!needle) return pages;
    return pages.filter((item) => item.label.toLowerCase().includes(needle) || item.hint.toLowerCase().includes(needle));
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const go = (item) => {
    onClose();
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    if (item.href.startsWith("/#") || item.href.startsWith("#")) {
      window.location.href = item.href;
      return;
    }
    navigate(item.href);
  };

  return (
    <div className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm" onClick={onClose} role="presentation">
      <div
        className="panel mx-auto mt-[15vh] w-[min(560px,calc(100%-1.5rem))] overflow-hidden shadow-none"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-label="Command menu"
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search size={16} className="text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Jump to a section, project, or link"
            className="w-full bg-transparent py-3 text-sm outline-none"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto py-2">
          {items.length === 0 && (
            <li className="px-4 py-3 text-sm text-muted">No matches.</li>
          )}
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => go(item)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-secondary"
              >
                <span>{item.label}</span>
                <span className="flex items-center gap-2 text-xs text-muted">
                  {item.hint}
                  {item.external && <ArrowUpRight size={12} />}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
