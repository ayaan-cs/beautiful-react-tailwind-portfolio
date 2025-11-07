import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SentinelAIDetailPage } from "./pages/projects/SentinelAIDetailPage";
import { MusicSentimentAnalyzerDetailPage } from "./pages/projects/MusicSentimentAnalyzerDetailPage";
import { MindSightDetailPage } from "./pages/projects/MindSightDetailPage";
import { LaLigaTierListDetailPage } from "./pages/projects/LaLigaTierListDetailPage";
import { IMDBSentimentDetailPage } from "./pages/projects/IMDBSentimentDetailPage";
import { Toaster } from "@/components/ui/toaster";
import { StartupAnimation } from "./components/StartupAnimation";

function App() {
    const [showStartup, setShowStartup] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Check if user has already seen the animation
    useEffect(() => {
        const hasSeenAnimation = sessionStorage.getItem('hasSeenStartupAnimation');
        if (hasSeenAnimation) {
            setShowStartup(false);
        }
    }, []);

    // Handle animation completion
    const handleAnimationComplete = () => {
        sessionStorage.setItem('hasSeenStartupAnimation', 'true');
        setShowStartup(false);
    };

    // Handle user interaction for audio context
    const handleUserInteraction = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
            // Create audio context on first user interaction
            if (window.AudioContext || window.webkitAudioContext) {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }
            }
        }
    };

    // Optional: Skip animation with ESC key
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape' && showStartup) {
                handleAnimationComplete();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [showStartup]);

    return (
        <div onClick={handleUserInteraction} onTouchStart={handleUserInteraction}>
            <Toaster />

            {/* Show startup animation first */}
            {showStartup && (
                <StartupAnimation onAnimationComplete={handleAnimationComplete} />
            )}

            {/* Main application */}
            {!showStartup && (
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/projects/sentinelai" element={<SentinelAIDetailPage />} />
                        <Route path="/projects/music-sentiment-analyzer" element={<MusicSentimentAnalyzerDetailPage />} />
                        <Route path="/projects/mindsight" element={<MindSightDetailPage />} />
                        <Route path="/projects/laliga-tierlist" element={<LaLigaTierListDetailPage />} />
                        <Route path="/projects/imdb-sentiment" element={<IMDBSentimentDetailPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            )}

            {/* Skip button during animation */}
            {showStartup && (
                <button
                    onClick={handleAnimationComplete}
                    className="fixed bottom-4 right-4 z-[101] px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 rounded-lg hover:bg-white/20 transition-colors duration-300 text-sm font-mono"
                >
                    Skip Animation [ESC]
                </button>
            )}
        </div>
    );
}

export default App;