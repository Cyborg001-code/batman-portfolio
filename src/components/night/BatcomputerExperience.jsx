import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Crosshair, CheckCircle2 } from 'lucide-react';
import { playTerminalBeep } from '../../utils/audioFx';

export default function BatcomputerExperience() {
  const { experience } = portfolioData;

  return (
    <section id="bat-experience" className="relative w-full border-b border-[#8C7A4B]/30 text-[#E5E7EB] py-16 sm:py-24 font-mono select-none">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#8C7A4B] pl-4">
          <div className="flex items-center gap-2 text-[10px] text-[#8C7A4B] font-black tracking-[0.3em] uppercase">
            <Terminal className="w-3.5 h-3.5 text-[#B8321B]" />
            <span>FIELD OPERATIONS // TACTICAL SERVICE RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F3F4F6] uppercase mt-1">
            Operational Trajectory
          </h2>
          <p className="text-xs text-[#9CA3AF] tracking-wider mt-1">
            Enterprise perimeter defenses, zero incident records, and multi-tier systems uptime.
          </p>
        </div>

        {/* Tactical Timeline */}
        <div className="relative border-l-2 border-[#4F504D]/60 ml-3 sm:ml-6 space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-7 sm:pl-10 group">
              {/* Tactical Pulsing Node */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-xs bg-[#0F1010] border-2 border-[#8C7A4B] group-hover:border-[#B8321B] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_#8C7A4B]" />

              <div 
                onMouseEnter={playTerminalBeep}
                className="bat-armor-plate p-7 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
                  <span className="px-2.5 py-0.5 rounded-xs bg-[#8C7A4B]/15 text-[#8C7A4B] border border-[#8C7A4B]/40 font-bold uppercase tracking-wider">
                    DEPLOYED: {item.period}
                  </span>
                  <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <Crosshair className="w-3.5 h-3.5 text-[#B8321B]" />
                    <span>SECTOR: {item.location}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black tracking-tight text-[#F3F4F6] uppercase group-hover:text-[#8C7A4B] transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-bold text-[#B8321B] uppercase tracking-wider mt-1">
                  FACILITY: {item.company}
                </p>

                <ul className="mt-5 space-y-3 text-xs text-[#9CA3AF] leading-relaxed">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8C7A4B] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}