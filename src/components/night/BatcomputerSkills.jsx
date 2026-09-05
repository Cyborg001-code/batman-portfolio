import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Shield, Cloud, Activity, Cpu, Database } from 'lucide-react';
import { playTerminalBeep } from '../../utils/audioFx';

export default function BatcomputerSkills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    "Systems & OS Administration": <Terminal className="w-4 h-4 text-[#8C7A4B]" />,
    "Identity & Access (IAM)": <Shield className="w-4 h-4 text-[#8C7A4B]" />,
    "Cloud Infrastructure (AWS)": <Cloud className="w-4 h-4 text-[#8C7A4B]" />,
    "Networking & Connectivity": <Activity className="w-4 h-4 text-[#8C7A4B]" />,
    "Automation, IaC & DevOps": <Cpu className="w-4 h-4 text-[#8C7A4B]" />,
    "Enterprise Suite & Observability": <Database className="w-4 h-4 text-[#8C7A4B]" />,
  };

  return (
    <section id="bat-skills" className="relative w-full border-b border-[#8C7A4B]/30 text-[#E5E7EB] py-16 sm:py-24 font-mono select-none">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#8C7A4B] pl-4">
          <div className="flex items-center gap-2 text-[10px] text-[#8C7A4B] font-black tracking-[0.3em] uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#B8321B]" />
            <span>SUBSYSTEM ARSENAL // MECH SPECIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F3F4F6] uppercase mt-1">
            Tactical Arsenal
          </h2>
          <p className="text-xs text-[#9CA3AF] tracking-wider mt-1">
            Hardware boundaries, multi-region routing protocols, and automated cloud orchestration.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bat-armor-plate p-6 relative group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xs bg-[#0F1010] border border-[#4F504D] flex items-center justify-center group-hover:border-[#8C7A4B] transition-colors">
                  {categoryIcons[skillGroup.category] || <Terminal className="w-4 h-4 text-[#8C7A4B]" />}
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider text-[#F3F4F6] group-hover:text-[#8C7A4B] transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={playTerminalBeep}
                    className="text-[11px] px-2.5 py-1 rounded-xs bg-[#0F1010] text-[#D1D5DB] border border-[#4F504D] group-hover:border-[#8C7A4B]/60 hover:text-[#8C7A4B] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}