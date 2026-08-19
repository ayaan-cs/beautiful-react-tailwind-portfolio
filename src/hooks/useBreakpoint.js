import { useEffect, useState } from "react";

const HAND = 700;
const TABLET = 1100;

export function screenFromWidth(width) {
  if (width < HAND) return "hand";
  if (width < TABLET) return "tablet";
  return "desk";
}

export function useBreakpoint() {
  const [screen, setScreen] = useState(() =>
    typeof window === "undefined" ? "desk" : screenFromWidth(window.innerWidth)
  );

  useEffect(() => {
    const onResize = () => setScreen(screenFromWidth(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screen;
}
