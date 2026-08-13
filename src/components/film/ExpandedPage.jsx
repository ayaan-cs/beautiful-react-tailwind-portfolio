import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useMotionPref } from "@/context/MotionContext";

export const ExpandedPage = ({ layoutId, title, onClose, children }) => {
  const { reduced } = useMotionPref();
  const root = useRef(null);
  useFocusTrap(true, root);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <motion.section
      ref={root}
      layoutId={reduced ? undefined : layoutId}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${layoutId}-title`}
      className="fixed inset-0 z-50 overflow-y-auto bg-[var(--bg)]"
      transition={{ type: "spring", stiffness: 280, damping: 32 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at top, rgba(232,72,44,0.12), transparent 50%)" }} />
      <div className="page-wrap relative py-10 min-h-full">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--dim)] hover:text-[var(--cream)]"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <h2 id={`${layoutId}-title`} className="mt-10 font-serif text-5xl md:text-6xl">
          {title}
        </h2>
        <div className="mt-10 pb-20">{children}</div>
      </div>
    </motion.section>
  );
};
