import { useEffect, useState } from "react";

const pad = (value) => String(value).padStart(2, "0");

export const useDevTime = (running) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mm = pad(Math.floor(seconds / 60));
  const ss = pad(seconds % 60);
  return `${mm}:${ss}`;
};
