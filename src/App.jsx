import React, { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';

// Day Mode Components
import DayNavbar from './components/day/DayNavbar';
import DayHero from './components/day/DayHero';
import DayAbout from './components/day/DayAbout';
import DaySkills from './components/day/DaySkills';
import DayProjects from './components/day/DayProjects';
import DayExperience from './components/day/DayExperience';
import DayContact from './components/day/DayContact';
import DayFooter from './components/day/DayFooter';

// Cinematic Transformation Veil
import TransformationOverlay from './components/transition/TransformationOverlay';

// Night Mode Components
import NightNavbar from './components/night/NightNavbar';
import BatcomputerBackground from './components/night/BatcomputerBackground';
import BatcomputerHero from './components/night/BatcomputerHero';
import BatcomputerProjects from './components/night/BatcomputerProjects';
import BatcomputerSkills from './components/night/BatcomputerSkills';
import BatcomputerExperience from './components/night/BatcomputerExperience';
import BatcomputerContact from './components/night/BatcomputerContact';
import BatcomputerFooter from './components/night/BatcomputerFooter';

export default function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'night') {
      document.body.style.backgroundColor = '#040608';
      document.body.style.color = '#E2E8F0';
    } else {
      document.body.style.backgroundColor = '#F5F3EE';
      document.body.style.color = '#202124';
    }
  }, [theme]);

  return (
    <main className="relative min-h-screen w-full">
      {/* 1. The Full-Screen Cinematic Transition Overlay */}
      <TransformationOverlay />

      {/* 2. Public Identity: Day Mode */}
      {theme === 'day' && (
        <div className="w-full bg-[#F5F3EE] text-[#202124] flex flex-col">
          <DayNavbar />
          <DayHero />
          <DayAbout />
          <DaySkills />
          <DayProjects />
          <DayExperience />
          <DayContact />
          <DayFooter />
        </div>
      )}

      {/* 3. Tactical Identity: Night Mode (Batcomputer Terminal with CRT overlay) */}
      {theme === 'night' && (
        <div className="relative min-h-screen w-full bg-[#040608] text-[#E2E8F0] flex flex-col crt-scanlines">
          {/* Dynamic Gotham Rain & Sonar Atmosphere */}
          <BatcomputerBackground />

          <div className="relative z-10 w-full flex flex-col">
            <NightNavbar />
            <BatcomputerHero />
            <BatcomputerProjects />
            <BatcomputerSkills />
            <BatcomputerExperience />
            <BatcomputerContact />
            <BatcomputerFooter />
          </div>
        </div>
      )}
    </main>
  );
}