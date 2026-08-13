import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MotionContext = createContext({
  reduced: false,
  toggle: () => {},
});

export const MotionProvider = ({ children }) => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("reduce-motion");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (stored === "on") setReduced(true);
      else if (stored === "off") setReduced(false);
      else setReduced(media.matches);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduced);
  }, [reduced]);

  const value = useMemo(
    () => ({
      reduced,
      toggle: () => {
        setReduced((prev) => {
          const next = !prev;
          localStorage.setItem("reduce-motion", next ? "on" : "off");
          return next;
        });
      },
    }),
    [reduced]
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
};

export const useMotionPref = () => useContext(MotionContext);
