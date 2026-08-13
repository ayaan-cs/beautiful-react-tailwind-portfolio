import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const SiteLayout = ({ children, onOpenCommand }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar onOpenCommand={onOpenCommand} />
        <main>{children}</main>
        <Footer />
      </div>
      <span className="sr-only">{ready ? "ready" : ""}</span>
    </div>
  );
};
