// src/config/animationConfig.js
export const animationConfig = {
    // Enable/disable features
    features: {
        enableSound: true,
        enableGlitch: true,
        enableScanlines: true,
        skipAnimation: false, // Set to true to disable startup animation entirely
    },

    // Timing (in milliseconds)
    timing: {
        bootSequenceDuration: 4000,
        spacePhaseDuration: 2000,
        approachPhaseDuration: 2500,
        dockPhaseDuration: 2500,
        enterPhaseDuration: 2000,
    },

    // Customizable messages
    messages: {
        title: "AYAAN NEXUS SYSTEM",
        version: "v3.0.1",
        terminalPath: "AYAAN://PORTFOLIO/SYSTEM/BOOT",

        statusMessages: {
            init: "INITIALIZING SYSTEMS...",
            boot: "QUANTUM CORE ONLINE",
            space: "NAVIGATING COSMOS",
            approach: "SPACE STATION DETECTED",
            dock: "DOCKING SEQUENCE ENGAGED",
            enter: "WELCOME TO THE NEXUS",
        },

        subMessages: {
            boot: "Please stand by...",
            space: "Calculating optimal trajectory...",
            approach: "Distance: 1,247 km",
            dock: "Aligning with docking port...",
            enter: "Access granted",
        }
    },

    // Visual settings
    visual: {
        starCount: 1000,
        starSpeed: 10,
        dockingStarSpeed: 50,
        glitchChance: 0.2, // 20% chance for glitch effect
    }
};

// Export individual timing values for easier access
export const PHASE_DURATIONS = {
    BOOT: animationConfig.timing.bootSequenceDuration,
    SPACE: animationConfig.timing.spacePhaseDuration,
    APPROACH: animationConfig.timing.approachPhaseDuration,
    DOCK: animationConfig.timing.dockPhaseDuration,
    ENTER: animationConfig.timing.enterPhaseDuration,
};

// Calculate total animation duration
export const TOTAL_ANIMATION_DURATION = Object.values(PHASE_DURATIONS).reduce((a, b) => a + b, 500); // +500ms for initial delay