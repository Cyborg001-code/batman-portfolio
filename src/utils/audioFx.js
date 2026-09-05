// Web Audio API procedural sound synthesizer & Voice Synthesis Engine

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const playSwitchSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (err) {
    // Graceful fallback
  }
};

export const playThunderSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 2.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.5));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(50, ctx.currentTime + 2.2);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.2);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch (err) {
    // Graceful fallback
  }
};

// Subtle tactical UI chirp on hover/clicks
export const playTerminalBeep = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.02);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (err) {
    // Graceful fallback
  }
};

// "I am Vengeance... I am the Night... I am Batman!" Voice Engine
export const playBatmanVoice = () => {
  const customAudio = new Audio('/batman-voice.mp3');
  customAudio.volume = 0.9;

  const playPromise = customAudio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Fallback: Browser native voice synthesis if mp3 is not present
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(
          "I am Vengeance. I am the Night. I am Batman."
        );
        utterance.pitch = 0.4;
        utterance.rate = 0.78;
        utterance.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const deepVoice = voices.find(
          (v) =>
            v.lang.includes('en') &&
            (v.name.toLowerCase().includes('male') ||
             v.name.toLowerCase().includes('david') ||
             v.name.toLowerCase().includes('george'))
        );
        if (deepVoice) utterance.voice = deepVoice;

        window.speechSynthesis.speak(utterance);
      }
    });
  }
};