export class SoundManager {
    constructor() {
        this.audioContext = null;
        this.masterVolume = 0.3;
        this.sounds = {};
        this.enabled = true;
    }

    init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    setEnabled(enabled) {
        this.enabled = enabled;
    }

    setVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
    }

    // Synthesized sound effects
    playBoot() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.setValueAtTime(440, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(this.masterVolume * 0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.1);
    }

    playSuccess() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Nice ascending tone
        oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        oscillator.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5
        gainNode.gain.setValueAtTime(this.masterVolume * 0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.15);
    }

    playWhoosh() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const noise = this.createNoiseBuffer();
        const source = ctx.createBufferSource();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        source.buffer = noise;
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1000, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);

        gainNode.gain.setValueAtTime(this.masterVolume * 0.5, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

        source.start();
    }

    playEngineHum() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const oscillator1 = ctx.createOscillator();
        const oscillator2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator1.type = 'sawtooth';
        oscillator2.type = 'sine';

        oscillator1.frequency.setValueAtTime(60, ctx.currentTime);
        oscillator2.frequency.setValueAtTime(120, ctx.currentTime);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.1, ctx.currentTime + 1);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 4);

        oscillator1.start();
        oscillator2.start();
        oscillator1.stop(ctx.currentTime + 4);
        oscillator2.stop(ctx.currentTime + 4);
    }

    playDocking() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        lfo.connect(lfoGain);
        lfoGain.connect(oscillator.frequency);
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, ctx.currentTime);

        lfo.frequency.setValueAtTime(2, ctx.currentTime);
        lfoGain.gain.setValueAtTime(50, ctx.currentTime);

        gainNode.gain.setValueAtTime(this.masterVolume * 0.2, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2);

        lfo.start();
        oscillator.start();
        oscillator.stop(ctx.currentTime + 2);
        lfo.stop(ctx.currentTime + 2);
    }

    playAmbient() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const oscillators = [];
        const gainNode = ctx.createGain();

        // Create multiple oscillators for a rich ambient sound
        const frequencies = [110, 165, 220, 330];

        frequencies.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.frequency.setValueAtTime(freq * 1.01, ctx.currentTime + 10); // Slight detuning

            oscGain.gain.setValueAtTime(this.masterVolume * 0.05 / frequencies.length, ctx.currentTime);

            osc.connect(oscGain);
            oscGain.connect(gainNode);
            osc.start();

            oscillators.push(osc);
        });

        gainNode.connect(ctx.destination);

        // Stop after 10 seconds
        setTimeout(() => {
            oscillators.forEach(osc => osc.stop());
        }, 10000);
    }

    createNoiseBuffer() {
        const ctx = this.audioContext;
        const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < data.length; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        return buffer;
    }

    // UI feedback sounds
    playClick() {
        if (!this.enabled) return;
        this.init();

        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.setValueAtTime(800, ctx.currentTime);
        gainNode.gain.setValueAtTime(this.masterVolume * 0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.05);
    }

    // Create a complete soundscape
    playSoundscape(phase) {
        switch(phase) {
            case 'boot':
                this.playAmbient();
                break;
            case 'space':
                this.playWhoosh();
                this.playEngineHum();
                break;
            case 'approach':
                this.playEngineHum();
                break;
            case 'dock':
                this.playDocking();
                break;
            case 'enter':
                this.playWhoosh();
                break;
        }
    }
}

export const soundManager = new SoundManager();