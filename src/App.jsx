import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { WorkPage } from "./pages/WorkPage";
import { PlaygroundPage } from "./pages/PlaygroundPage";
import { AllSkillsPage } from "./pages/AllSkillsPage";
import { Toaster } from "@/components/ui/toaster";
import { StartupAnimation } from "./components/StartupAnimation";
import { CommandMenu } from "./components/CommandMenu";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenStartupAnimation");
    if (hasSeenAnimation) setShowStartup(false);
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("hasSeenStartupAnimation", "true");
    setShowStartup(false);
  };

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape" && showStartup) handleAnimationComplete();
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showStartup]);

  return (
    <div>
      <Toaster />
      {showStartup && <StartupAnimation onAnimationComplete={handleAnimationComplete} />}
      {showStartup && (
        <button
          type="button"
          onClick={handleAnimationComplete}
          className="fixed bottom-4 right-4 z-[101] px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 rounded-lg hover:bg-white/20 text-sm font-mono"
        >
          Skip Animation [ESC]
        </button>
      )}
      {!showStartup && (
        <BrowserRouter>
          <ScrollToTop />
          <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
          <Routes>
            <Route index element={<Home onOpenCommand={() => setCommandOpen(true)} />} />
            <Route path="/skills" element={<AllSkillsPage onOpenCommand={() => setCommandOpen(true)} />} />
            <Route path="/playground" element={<PlaygroundPage onOpenCommand={() => setCommandOpen(true)} />} />
            <Route path="/work/:slug" element={<WorkPage onOpenCommand={() => setCommandOpen(true)} />} />
            <Route path="/projects/:slug" element={<LegacyProjectRedirect />} />
            <Route path="*" element={<NotFound onOpenCommand={() => setCommandOpen(true)} />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

const LegacyProjectRedirect = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/").pop();
  return <Navigate to={`/work/${slug}`} replace />;
};

export default App;
