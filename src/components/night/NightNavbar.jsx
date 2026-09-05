import React from 'react';
import { Radio, LogOut, ShieldAlert } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { playTerminalBeep } from '../../utils/audioFx';

export default function NightNavbar() {
  const { toggleTheme } = useThemeStore();

  const navLinks = [
    { label: "DIAGNOSTICS", href: "#bat-overview" },
    { label: "TACTICAL_DOSSIERS", href: "#bat-projects" },
    { label: "ARSENAL", href: "#bat-skills" },
    { label: "FIELD_LOGS", href: "#bat-experience" },
    { label: "SECURE_UPLINK", href: "#bat-contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#8C7A4B]/30 bg-[#0F1010]/95 backdrop-blur-md font-mono text-[#E5E7EB] select-none shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
      {/* Tactical Status Banner */}
      <div className="w-full bg-[#B8321B]/15 border-b border-[#B8321B]/30 px-6 py-1 flex items-center justify-between text-[9px] tracking-[0.25em]">
        <span className="flex items-center gap-2 text-[#B8321B] font-black">
          <span className="w-2 h-2 rounded-full bg-[#B8321B] animate-ping" />
          BATSUIT TACTICAL TELEMETRY // MECH-OS ENGAGED
        </span>
        <span className="hidden sm:inline text-[#8C7A4B] font-bold">
          FREQUENCY: 428.6 MHz [ARMOR CLEARANCE LEVEL 0]
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Snyder Insignia Monogram */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xs border border-[#8C7A4B]/50 bg-[#2F302E] flex items-center justify-center p-1 relative shadow-[0_0_15px_rgba(140,122,75,0.3)]">
            <ShieldAlert className="w-6 h-6 text-[#8C7A4B]" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#B8321B]" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-black tracking-[0.25em] text-[#F3F4F6] flex items-center gap-2">
              WAYNE TECH <span className="text-[#8C7A4B] text-[10px]">MK-IV</span>
            </span>
            <span className="text-[9px] text-[#4F504D] tracking-widest uppercase flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8321B]" />
              PERIMETER: DEFENDED
            </span>
          </div>
        </div>

        {/* Tactical Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.2em] font-bold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={playTerminalBeep}
              className="text-[#9CA3AF] hover:text-[#8C7A4B] transition-colors relative py-1 group flex items-center gap-1.5"
            >
              <span className="text-[#B8321B] opacity-40 group-hover:opacity-100 transition-opacity">&gt;</span>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8C7A4B] group-hover:w-full transition-all duration-200 shadow-[0_0_8px_#8C7A4B]" />
            </a>
          ))}
        </nav>

        {/* Disengage to Day Mode */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-xs border border-[#4F504D]/40 bg-[#2F302E]/60 text-[10px] text-[#8C7A4B]">
            <Radio className="w-3.5 h-3.5 text-[#B8321B] animate-pulse" />
            <span>TAC_SAT: ONLINE</span>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xs border border-[#B8321B] bg-[#B8321B]/15 text-[#B8321B] hover:bg-[#B8321B] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(184,50,27,0.3)] cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>DISENGAGE</span>
          </button>
        </div>

      </div>
    </header>
  );
}