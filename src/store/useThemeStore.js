import { create } from 'zustand';
import { playSwitchSound, playThunderSound, playBatmanVoice } from '../utils/audioFx';

export const useThemeStore = create((set, get) => ({
  theme: 'day',
  isTransforming: false,
  transformStage: 0,

  toggleTheme: () => {
    const current = get().theme;
    const nextTheme = current === 'day' ? 'night' : 'day';

    playSwitchSound();
    playThunderSound();

    // Reset scroll to top smoothly so Batcomputer Hero is immediately in view
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (nextTheme === 'night') {
      playBatmanVoice();

      // Immediately set theme to 'night' so the DOM renders it right away underneath
      set({ theme: 'night', isTransforming: true, transformStage: 1 });

      setTimeout(() => set({ transformStage: 2 }), 2000);
      setTimeout(() => set({ transformStage: 3 }), 4000);
      setTimeout(() => set({ transformStage: 4 }), 7000);

      // Force-clear overlay
      setTimeout(() => {
        set({ isTransforming: false, transformStage: 0 });
      }, 8200);

    } else {
      set({ theme: 'day', isTransforming: true, transformStage: 1 });

      setTimeout(() => {
        set({ isTransforming: false, transformStage: 0 });
      }, 1800);
    }
  }
}));