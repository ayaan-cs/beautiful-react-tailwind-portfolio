import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectSheet } from "./pages/ProjectSheet";
import { KonamiBlueprint } from "./components/sheet/KonamiBlueprint";

function App() {
  return (
    <BrowserRouter>
      <KonamiBlueprint />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectSheet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
