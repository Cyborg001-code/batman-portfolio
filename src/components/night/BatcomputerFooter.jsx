import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useThemeStore } from '../../store/useThemeStore';
import { ArrowUp, LogOut, ShieldAlert } from 'lucide-react';
import { playTerminalBeep } from '../../utils/audioFx';

export default function BatcomputerFooter() {
  const { profile } = portfolioData;
  const { toggleTheme } = useThemeStore();

  const scrollToTop = () => {
    playTerminalBeep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080909] border-t border-[#8C7A4B]/30 py-10 font-mono select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Status */}
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-black text-[#F3F4F6] tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-[#B8321B]" />
            <span>WAYNE ENTERPRISES // DEFENSE MATRIX ACTIVE</span>
          </div>
          <p className="text-[10px] text-[#4F504D] tracking-widest uppercase font-bold">
            OPERATOR: {profile.name} • ALL ARCHIVES ENCRYPTED
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-xs border border-[#B8321B] bg-[#B8321B]/15 text-[#B8321B] hover:bg-[#B8321B] hover:text-white transition-all cursor-pointer shadow-[0_0_12px_rgba(184,50,27,0.3)]"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>RETURN TO DAY IDENTITY</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Return to top"
            className="p-2 rounded-xs border border-[#4F504D] bg-[#0F1010] text-[#9CA3AF] hover:text-[#8C7A4B] hover:border-[#8C7A4B] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}