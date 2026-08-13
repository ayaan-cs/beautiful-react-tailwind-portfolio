import { GrainOverlay, LightLeak } from "./components/film/Atmosphere";
import { CustomCursor } from "./components/film/CustomCursor";
import { MotionProvider } from "./context/MotionContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <MotionProvider>
      <GrainOverlay />
      <LightLeak />
      <CustomCursor />
      <Home />
    </MotionProvider>
  );
}

export default App;
