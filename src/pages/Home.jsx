import { useCallback, useEffect, useState } from "react";
import { LayoutGroup } from "framer-motion";
import { Header } from "../components/film/Header";
import { HeroConstellation } from "../components/film/HeroConstellation";
import { AboutExpanded, AboutPanel } from "../components/film/AboutPanel";
import { StackExpanded, StackPanel } from "../components/film/StackPanel";
import { ProjectsExpanded, ProjectsPanel } from "../components/film/ProjectsPanel";
import { ContactBoard } from "../components/film/ContactBoard";
import { Filmstrip } from "../components/film/Filmstrip";
import { CommandPalette } from "../components/film/CommandPalette";
import { useDevTime } from "../hooks/useDevTime";
import { useMotionPref } from "../context/MotionContext";

export const Home = () => {
  const { reduced } = useMotionPref();
  const [ready, setReady] = useState(reduced);
  const [commandOpen, setCommandOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const clock = useDevTime(ready);
  const readout = ready ? `dev time: ${clock}` : "initializing";

  useEffect(() => {
    if (reduced) {
      setReady(true);
      return undefined;
    }
    const id = setTimeout(() => setReady(true), 750);
    return () => clearTimeout(id);
  }, [reduced]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onCommand = useCallback((type, target) => {
    if (type === "goto") {
      setExpanded(null);
      requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }));
    }
    if (type === "expand") setExpanded(target);
  }, [reduced]);

  return (
    <LayoutGroup>
      <Header readout={readout} onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} onCommand={onCommand} />
      <HeroConstellation ready={ready} />
      <div className="relative">
        <Filmstrip />
        {expanded !== "about" && <AboutPanel onExpand={() => setExpanded("about")} />}
        {expanded !== "stack" && <StackPanel onExpand={() => setExpanded("stack")} />}
      </div>
      {expanded !== "projects" && <ProjectsPanel onExpand={() => setExpanded("projects")} />}
      <ContactBoard />
      {expanded === "about" && <AboutExpanded onClose={() => setExpanded(null)} />}
      {expanded === "stack" && <StackExpanded onClose={() => setExpanded(null)} />}
      {expanded === "projects" && <ProjectsExpanded onClose={() => setExpanded(null)} />}
    </LayoutGroup>
  );
};
