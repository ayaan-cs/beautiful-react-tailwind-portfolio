import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectSheet } from "./pages/ProjectSheet";
import { KonamiNoir } from "./components/sheet/KonamiNoir";

function App() {
  return (
    <BrowserRouter>
      <KonamiNoir />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectSheet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
