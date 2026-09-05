import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Activity, 
  Database, 
  Radio, 
  Lock, 
  Crosshair, 
  ExternalLink,
  Flame
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { playTerminalBeep } from '../../utils/audioFx';

export default function BatcomputerHero() {
  const { profile } = portfolioData;
  const [activeLogIdx, setActiveLogIdx] = useState(0);

  const logs = [
    "[ARMOR] Tactical Ballistic weave intact. Deflection rating: 100%.",
    "[ORCHESTRATION] Terraform cloud infrastructure synchronized across Multi-AZ pods.",
    "[SECURITY] Zero breach events recorded. Active Directory perimeter locked.",
    "[RADAR] Nashik Sector telemetry nominal. Threat level: CONTAINED.",
    "[SYS] All tactical countermeasures online and active."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogIdx((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [logs.length]);

  return (
    <section id="bat-overview" className="relative w-full border-b border-[#8C7A4B]/30 text-[#E5E7EB] py-16 sm:py-24 font-mono select-none overflow-hidden">
      
      {/* 1:1 WATERMARK BAT-INSIGNIA WITH RADIAL GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[700px] sm:w-[950px] lg:w-[1200px] aspect-[2/1] flex items-center justify-center">
          <div className="absolute inset-0 bg-radial from-[#8C7A4B]/15 via-transparent to-transparent blur-3xl" />
          
          <img 
            src="/bat-emblem.png" 
            alt="Bat Insignia Watermark" 
            className="w-full h-full object-contain opacity-[0.09] invert brightness-200 contrast-200 select-none pointer-events-none"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Telemetry Header (Enhanced contrast & tracking) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#4F504D]/60 mb-10 text-xs text-[#CBD5E1]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8321B] shadow-[0_0_12px_#B8321B] animate-ping" />
            <span className="text-[#8C7A4B] font-black tracking-[0.25em] uppercase">
              SECTOR GRID: {profile.location.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <div className="flex items-center gap-2 text-[#94A3B8]">
              <Crosshair className="w-3.5 h-3.5 text-[#8C7A4B]" />
              <span className="tracking-wider">COORDINATES: 19.9975° N, 73.7898° E</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#B8321B]/20 border border-[#B8321B]/60 text-[#FF4D30] font-black tracking-wider">
              <Flame className="w-3 h-3 text-[#FF4D30]" />
              <span>THREAT LEVEL: HIGH</span>
            </div>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Tactical Dossier */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[#8C7A4B]/60 bg-[#8C7A4B]/20 text-[#8C7A4B] text-[10px] font-black tracking-[0.3em] uppercase shadow-[0_0_15px_rgba(140,122,75,0.25)]">
              <Terminal className="w-3.5 h-3.5 text-[#B8321B]" />
              <span>OPERATOR PROFILE // CLASSIFIED</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-[#8C7A4B] font-bold tracking-[0.3em] uppercase">
                Wayne R&D Systems & Defense Architect
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F8FAFC] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {profile.name}
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF4D30] uppercase">
                CODENAME: THE ENFORCER // {profile.title}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-2xl font-normal border-l-2 border-[#8C7A4B] pl-4 py-1">
              {profile.summary}
            </p>

            {/* Live Terminal HUD Box */}
            <div className="p-4 rounded-xs border border-[#8C7A4B]/50 bg-[#0F1010]/95 shadow-[0_10px_30px_rgba(0,0,0,0.95)] space-y-2 relative">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B8321B]" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#8C7A4B]" />

              <div className="flex items-center justify-between text-[10px] text-[#94A3B8] border-b border-[#2F302E] pb-2">
                <span className="flex items-center gap-2 text-[#8C7A4B] font-bold tracking-wider">
                  <Terminal className="w-3.5 h-3.5 text-[#B8321B]" />
                  BATSUIT_CORE_TELEMETRY
                </span>
                <span className="text-[#8C7A4B] font-black tracking-widest animate-pulse">STREAM ONLINE</span>
              </div>

              <p className="text-xs text-[#F1F5F9] tracking-wider h-6 flex items-center font-semibold">
                <span className="text-[#FF4D30] mr-2">batman@batcave:~#</span>
                {logs[activeLogIdx]}
              </p>
            </div>

            {/* Action Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#bat-projects"
                onClick={playTerminalBeep}
                className="inline-flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.25em] px-6 py-3.5 bg-[#8C7A4B] text-black hover:bg-[#B8321B] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(140,122,75,0.4)] cursor-pointer"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <span>ACCESS MISSION FILES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${profile.social.email}`}
                onClick={playTerminalBeep}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-5 py-3.5 border border-[#4F504D] bg-[#2F302E] text-[#F1F5F9] hover:border-[#8C7A4B] hover:text-[#8C7A4B] transition-all duration-200 cursor-pointer shadow-lg"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <Radio className="w-3.5 h-3.5 text-[#FF4D30]" />
                <span>ENCRYPTED COMM-CHANNEL</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): Tactical Suit Vitals */}
          <div className="lg:col-span-5 w-full">
            <div className="bat-armor-plate p-6 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#4F504D]/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xs bg-[#0F1010] border border-[#8C7A4B]/70 flex items-center justify-center text-[#8C7A4B] font-black text-xl shadow-[0_0_15px_rgba(140,122,75,0.3)]">
                    AG
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#F8FAFC] tracking-wider uppercase">
                      SYSTEMS COMMAND
                    </h3>
                    <p className="text-[10px] text-[#FF4D30] tracking-widest uppercase font-bold">
                      PERIMETER DEFENSE ACTIVE
                    </p>
                  </div>
                </div>

                <span className="text-[9px] font-black px-2 py-0.5 rounded-xs bg-[#8C7A4B]/20 text-[#8C7A4B] border border-[#8C7A4B]/50">
                  OPTIMAL
                </span>
              </div>

              {/* Status Bars */}
              <div className="py-5 space-y-4 text-xs border-b border-[#4F504D]/50">
                <div>
                  <div className="flex items-center justify-between text-[#CBD5E1] mb-1">
                    <span className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#8C7A4B]" />
                      Infrastructure Uptime
                    </span>
                    <span className="font-bold text-[#8C7A4B]">99.00% DEFENDED</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0F1010] rounded-xs overflow-hidden">
                    <div className="w-[99%] h-full bg-[#8C7A4B] shadow-[0_0_8px_#8C7A4B]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[#CBD5E1] mb-1">
                    <span className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#FF4D30]" />
                      Perimeter Intrusion
                    </span>
                    <span className="font-bold text-[#FF4D30]">0 INCIDENTS</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0F1010] rounded-xs overflow-hidden">
                    <div className="w-[0%] h-full bg-[#FF4D30]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[#CBD5E1] mb-1">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#94A3B8]" />
                      Terraform Automation
                    </span>
                    <span className="font-bold text-[#F8FAFC]">+70% ACCELERATION</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0F1010] rounded-xs overflow-hidden">
                    <div className="w-[70%] h-full bg-[#4F504D]" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 flex items-center justify-between text-[10px] text-[#94A3B8]">
                <span className="flex items-center gap-1.5 text-[#8C7A4B] font-bold">
                  <Crosshair className="w-3 h-3 text-[#FF4D30]" />
                  HUD TARGETING ENGAGED
                </span>
                <span className="text-[#CBD5E1]">SHA-512 ENCRYPTED</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}