import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export const StartupAnimation = ({ onAnimationComplete }) => {
    const [phase, setPhase] = useState('init'); // init, boot, space, approach, dock, enter
    const [bootProgress, setBootProgress] = useState(0);
    const [systemStatus, setSystemStatus] = useState([]);
    const [glitchEffect, setGlitchEffect] = useState(false);
    const canvasRef = useRef(null);
    const audioContextRef = useRef(null);

    // Boot sequence messages
    const bootSequence = [
        { delay: 200, text: "▶ INITIALIZING NEURAL INTERFACE...", type: 'system' },
        { delay: 400, text: "▶ CONNECTING TO QUANTUM MESH NETWORK...", type: 'system' },
        { delay: 600, text: "  └─ HANDSHAKE PROTOCOL: SUCCESS", type: 'success' },
        { delay: 800, text: "▶ LOADING AI CONSCIOUSNESS MATRIX...", type: 'system' },
        { delay: 1000, text: "  ├─ PATTERN RECOGNITION: ONLINE", type: 'success' },
        { delay: 1200, text: "  ├─ NEURAL PATHWAYS: CALIBRATED", type: 'success' },
        { delay: 1400, text: "  └─ COGNITIVE FUNCTIONS: OPTIMAL", type: 'success' },
        { delay: 1600, text: "▶ SCANNING PORTFOLIO DATABASE...", type: 'system' },
        { delay: 1800, text: "  ├─ PROJECTS: 3 FOUND", type: 'data' },
        { delay: 2000, text: "  ├─ SKILLS: 25+ LOADED", type: 'data' },
        { delay: 2200, text: "  └─ ACHIEVEMENTS: SYNCED", type: 'data' },
        { delay: 2400, text: "▶ ESTABLISHING SECURE CONNECTION...", type: 'system' },
        { delay: 2600, text: "  └─ ENCRYPTION: AES-256-GCM", type: 'success' },
        { delay: 2800, text: "", type: 'blank' },
        { delay: 3000, text: "█ ALL SYSTEMS OPERATIONAL", type: 'final' },
        { delay: 3200, text: "█ LAUNCHING VIEWPORT...", type: 'final' },
    ];

    // Create starfield effect
    useEffect(() => {
        if (phase === 'space' || phase === 'approach' || phase === 'dock') {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const stars = Array(1000).fill().map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 1000,
                prevZ: 0,
            }));

            let animationId;

            const animate = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                stars.forEach(star => {
                    star.prevZ = star.z;
                    star.z -= phase === 'dock' ? 50 : 10;

                    if (star.z <= 0) {
                        star.x = Math.random() * canvas.width;
                        star.y = Math.random() * canvas.height;
                        star.z = 1000;
                        star.prevZ = star.z;
                    }

                    const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
                    const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
                    const prevX = (star.x - canvas.width / 2) * (canvas.width / star.prevZ) + canvas.width / 2;
                    const prevY = (star.y - canvas.height / 2) * (canvas.width / star.prevZ) + canvas.height / 2;

                    ctx.beginPath();
                    ctx.moveTo(prevX, prevY);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - star.z / 1000})`;
                    ctx.lineWidth = 1 - star.z / 1000;
                    ctx.stroke();
                });

                animationId = requestAnimationFrame(animate);
            };

            animate();

            // Cleanup function
            return () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            };
        }
    }, [phase]);

    // Sound effects generator with user interaction check
    const playSound = (type) => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }

            // Check if AudioContext is suspended (due to browser policy)
            if (audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }

            const ctx = audioContextRef.current;
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            switch(type) {
                case 'boot':
                    oscillator.frequency.setValueAtTime(440, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
                    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                    break;
                case 'success':
                    oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15);
                    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
                    break;
                case 'whoosh':
                    const noise = ctx.createBufferSource();
                    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
                    const data = buffer.getChannelData(0);
                    for (let i = 0; i < data.length; i++) {
                        data[i] = Math.random() * 2 - 1;
                    }
                    noise.buffer = buffer;
                    noise.connect(gainNode);
                    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                    noise.start();
                    return;
            }

            oscillator.start();
            oscillator.stop(ctx.currentTime + 0.2);
        } catch (error) {
            console.log('Audio playback failed:', error.message);
            // Continue without sound
        }
    };

    // Animation sequence
    useEffect(() => {
        // Initial delay
        const timeouts = [];

        timeouts.push(setTimeout(() => setPhase('boot'), 500));

        // Boot sequence
        bootSequence.forEach((item, index) => {
            timeouts.push(setTimeout(() => {
                setSystemStatus(prev => [...prev, item]);
                setBootProgress((index + 1) / bootSequence.length * 100);

                // Play sound effects
                if (item.type === 'success') playSound('success');
                else if (item.type === 'system') playSound('boot');

                // Random glitch effect
                if (Math.random() > 0.8) {
                    setGlitchEffect(true);
                    timeouts.push(setTimeout(() => setGlitchEffect(false), 100));
                }
            }, item.delay));
        });

        // Phase transitions
        timeouts.push(setTimeout(() => {
            setPhase('space');
            playSound('whoosh');
        }, 4000));

        timeouts.push(setTimeout(() => setPhase('approach'), 6000));
        timeouts.push(setTimeout(() => setPhase('dock'), 8500));
        timeouts.push(setTimeout(() => setPhase('enter'), 11000));
        timeouts.push(setTimeout(() => {
            if (onAnimationComplete) {
                onAnimationComplete();
            }
        }, 13000));

        // Cleanup function
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, [onAnimationComplete]);

    const getTextColor = (type) => {
        switch(type) {
            case 'success': return 'text-green-400';
            case 'data': return 'text-blue-400';
            case 'final': return 'text-primary';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black overflow-hidden">
            {/* Canvas for starfield */}
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Scanlines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                    style={{
                        animation: 'scanline 8s linear infinite'
                    }}
                />
            </div>

            {/* Boot Screen */}
            {(phase === 'init' || phase === 'boot') && (
                <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                    phase === 'boot' ? 'opacity-100' : 'opacity-0'
                )}>
                    <div className="w-full max-w-5xl px-8">
                        {/* Terminal window */}
                        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden">
                            {/* Terminal header */}
                            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-xs text-gray-400 font-mono">AYAAN://PORTFOLIO/SYSTEM/BOOT</span>
                            </div>

                            {/* Terminal content */}
                            <div className="p-6 font-mono text-sm">
                                <div className={cn(
                                    "mb-6 text-2xl font-bold animate-pulse",
                                    glitchEffect && "animate-glitch"
                                )}>
                                    <span className="text-primary">AYAAN</span>
                                    <span className="text-white"> NEXUS SYSTEM</span>
                                    <span className="text-gray-500"> v3.0.1</span>
                                </div>

                                <div className="space-y-1">
                                    {systemStatus.map((status, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                "opacity-0",
                                                getTextColor(status.type)
                                            )}
                                            style={{
                                                animation: `typewriter 0.5s ease-out forwards`,
                                                animationDelay: `${index * 0.05}s`
                                            }}
                                        >
                                            {status.text}
                                        </div>
                                    ))}
                                </div>

                                {/* Progress bar */}
                                <div className="mt-8 bg-gray-800 rounded-full h-2 overflow-hidden">
                                    <div className="relative h-full">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary"
                                            style={{
                                                width: `${bootProgress}%`,
                                                transition: 'width 0.3s ease-out',
                                                animation: 'shimmer 2s linear infinite'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-2 text-xs text-gray-500 text-right">
                                    {Math.floor(bootProgress)}% COMPLETE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Space view with planets */}
            {phase === 'space' && (
                <div
                    className="absolute inset-0"
                    style={{ animation: 'fadeIn 1s ease-out' }}
                >
                    {/* Planets */}
                    <div
                        className="absolute top-20 right-32 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-purple-950 shadow-2xl"
                        style={{ animation: 'float 10s ease-in-out infinite' }}
                    >
                        <div className="absolute inset-4 rounded-full bg-purple-900/50 blur-xl" />
                    </div>

                    <div
                        className="absolute bottom-32 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-blue-800 to-blue-950 shadow-xl"
                        style={{ animation: 'float 8s ease-in-out infinite reverse' }}
                    >
                        <div className="absolute inset-2 rounded-full bg-blue-800/50 blur-lg" />
                    </div>

                    {/* Nebula effect */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" />
                        <div
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"
                            style={{ animationDelay: '1s' }}
                        />
                    </div>
                </div>
            )}

            {/* Space Station */}
            {(phase === 'approach' || phase === 'dock' || phase === 'enter') && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
                    <div
                        className={cn(
                            "relative transform transition-all ease-in-out",
                            phase === 'approach' && 'scale-[0.05]',
                            phase === 'dock' && 'scale-[0.5]',
                            phase === 'enter' && 'scale-[100]'
                        )}
                        style={{
                            transitionDuration: phase === 'approach' ? '2500ms' : phase === 'dock' ? '2500ms' : '2000ms'
                        }}
                    >
                        {/* Station structure */}
                        <div className="relative w-[600px] h-[600px]">
                            {/* Outer ring */}
                            <div
                                className="absolute inset-0 rounded-full border-4 border-gray-600"
                                style={{ animation: 'spin 30s linear infinite' }}
                            >
                                {/* Ring segments */}
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Middle ring */}
                            <div
                                className="absolute inset-16 rounded-full border-2 border-gray-700"
                                style={{ animation: 'spin 20s linear infinite reverse' }}
                            >
                                {/* Solar panels */}
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-32 h-16 bg-gradient-to-b from-blue-900 to-blue-950 border border-blue-800"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(120px)`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Inner core */}
                            <div className="absolute inset-32 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-700">
                                {/* Docking ports */}
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-4 h-4 bg-yellow-500 rounded-full animate-pulse"
                                        style={{
                                            top: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
                                            left: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />
                                ))}

                                {/* Central window - the portfolio entrance */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-purple-600"
                                        style={{ animation: 'pulse 2s ease-in-out infinite' }}
                                    />
                                    <div className="absolute inset-2 bg-black rounded-full" />
                                    <div
                                        className="absolute inset-4 bg-gradient-to-br from-primary to-blue-600 rounded-full"
                                        style={{ animation: 'shimmer 3s linear infinite' }}
                                    />
                                </div>
                            </div>

                            {/* Station details */}
                            <div className="absolute inset-0">
                                {/* Communication arrays */}
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-16 bg-gradient-to-b from-gray-600 to-transparent"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${i * 90 + 45}deg) translateY(-250px)`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Light burst effect when entering */}
                    {phase === 'enter' && (
                        <div
                            className="absolute inset-0 bg-white"
                            style={{ animation: 'flash 2s ease-out forwards' }}
                        />
                    )}
                </div>
            )}

            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top HUD */}
                <div className="absolute top-0 left-0 right-0 p-8 text-white/50 font-mono text-xs">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <div>COORDINATES: {phase === 'space' ? 'SCANNING...' : '47.6062°N, 122.3321°W'}</div>
                            <div>VELOCITY: {phase === 'dock' ? '250 m/s' : phase === 'approach' ? '1,250 m/s' : '0 m/s'}</div>
                            <div>SYSTEM STATUS: OPTIMAL</div>
                        </div>
                        <div className="text-right space-y-1">
                            <div>DATE: {new Date().toLocaleDateString()}</div>
                            <div>TIME: {new Date().toLocaleTimeString()}</div>
                            <div className="text-green-400">● ONLINE</div>
                        </div>
                    </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-16 left-16 w-32 h-32 border-l-2 border-t-2 border-white/20" />
                <div className="absolute top-16 right-16 w-32 h-32 border-r-2 border-t-2 border-white/20" />
                <div className="absolute bottom-16 left-16 w-32 h-32 border-l-2 border-b-2 border-white/20" />
                <div className="absolute bottom-16 right-16 w-32 h-32 border-r-2 border-b-2 border-white/20" />

                {/* Center crosshair */}
                {(phase === 'approach' || phase === 'dock') && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-64 h-64">
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20" />
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/40 animate-ping" />
                        </div>
                    </div>
                )}
            </div>

            {/* Status text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <div className="font-mono space-y-2">
                    <div className={cn(
                        "text-2xl font-bold transition-all duration-500",
                        phase === 'enter' ? 'text-white' : 'text-white/80'
                    )}>
                        {phase === 'init' && "INITIALIZING SYSTEMS..."}
                        {phase === 'boot' && "QUANTUM CORE ONLINE"}
                        {phase === 'space' && "NAVIGATING COSMOS"}
                        {phase === 'approach' && "SPACE STATION DETECTED"}
                        {phase === 'dock' && "DOCKING SEQUENCE ENGAGED"}
                        {phase === 'enter' && "WELCOME TO THE NEXUS"}
                    </div>
                    <div className="text-sm text-white/50">
                        {phase === 'boot' && "Please stand by..."}
                        {phase === 'space' && "Calculating optimal trajectory..."}
                        {phase === 'approach' && "Distance: 1,247 km"}
                        {phase === 'dock' && "Aligning with docking port..."}
                        {phase === 'enter' && "Access granted"}
                    </div>
                </div>
            </div>
        </div>
    );
};