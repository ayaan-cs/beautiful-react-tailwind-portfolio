import { useEffect } from "react";

export const useFocusTrap = (active, ref) => {
  useEffect(() => {
    if (!active || !ref.current) return undefined;
    const root = ref.current;
    const selector = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const nodes = () => Array.from(root.querySelectorAll(selector));
    const previouslyFocused = document.activeElement;
    requestAnimationFrame(() => nodes()[0]?.focus());

    const onKey = (event) => {
      if (event.key !== "Tab") return;
      const items = nodes();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    root.addEventListener("keydown", onKey);
    return () => {
      root.removeEventListener("keydown", onKey);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [active, ref]);
};

export const useFinePointer = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};
