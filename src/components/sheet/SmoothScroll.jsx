/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll({ reduced, paused }) {
  useEffect(() => {
    if (reduced || paused) return undefined;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });
    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduced, paused]);

  return null;
}
