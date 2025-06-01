import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SentinelAIDetailPage } from "./pages/projects/SentinelAIDetailPage";
import { MindSightDetailPage } from "./pages/projects/MindSightDetailPage";
import { GoGuardianDetailPage } from "./pages/projects/GoGuardianDetailPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
    return (
        <>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/projects/sentinelai" element={<SentinelAIDetailPage />} />
                    <Route path="/projects/mindsight" element={<MindSightDetailPage />} />
                    <Route path="/projects/goguardian" element={<GoGuardianDetailPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;