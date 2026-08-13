import { cn } from "@/lib/utils";
import { Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Playground", href: "/playground" },
  { name: "Method", href: "/#method" },
  { name: "Stack", href: "/#stack" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/#about" },
];

export const Navbar = ({ onOpenCommand }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="font-semibold tracking-tight">
          Ayaan <span className="text-primary">Syed</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm">
          {navItems.map((item) =>
            item.href.startsWith("/#") || item.href === "/" ? (
              <a
                key={item.name}
                href={item.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted hover:text-foreground"
            aria-label="Open command menu"
          >
            <Command size={14} />
            <span>Search</span>
            <kbd className="mono-num text-[10px] border border-border rounded px-1">⌘K</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lg:hidden p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container-page flex flex-col gap-4 py-6 text-base">
            {navItems.map((item) =>
              item.href.startsWith("/#") ? (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              )
            )}
            <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
