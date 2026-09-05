import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FolderGit2, ArrowUpRight, ShieldAlert, Crosshair } from 'lucide-react';
import { playTerminalBeep } from '../../utils/audioFx';

export default function BatcomputerProjects() {
  const { projects } = portfolioData;

  return (
    <section id="bat-projects" className="relative w-full border-b border-[#8C7A4B]/30 text-[#E5E7EB] py-16 sm:py-24 font-mono select-none">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#B8321B] pl-4">
          <div className="flex items-center gap-2 text-[10px] text-[#B8321B] font-black tracking-[0.3em] uppercase">
            <ShieldAlert className="w-4 h-4 text-[#B8321B]" />
            <span>WAYNE TECH ARCHIVE // CLASSIFIED OPERATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F3F4F6] uppercase mt-1">
            Tactical Dossiers
          </h2>
          <p className="text-xs text-[#9CA3AF] tracking-wider mt-1">
            Immutable Terraform cloud deployments, AWS multi-zone resilience, and high-availability operations.
          </p>
        </div>

        {/* Tactical Dossiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bat-armor-plate p-7 flex flex-col justify-between relative group"
            >
              {/* Classification Stamp */}
              <div className="absolute top-4 right-4 text-[9px] font-black px-2 py-0.5 border border-[#B8321B]/60 bg-[#B8321B]/15 text-[#B8321B] tracking-widest uppercase">
                TARGET_OP-0{idx + 1}
              </div>

              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-[#4F504D]/40 mb-5 text-[11px]">
                  <span className="px-2 py-0.5 bg-[#8C7A4B]/15 text-[#8C7A4B] border border-[#8C7A4B]/30 font-bold uppercase tracking-wider text-[10px]">
                    DEPLOYMENT: {project.status.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2 ml-auto pr-24">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playTerminalBeep}
                      aria-label="Repository Source"
                      className="p-1.5 rounded-xs border border-[#4F504D] bg-[#0F1010] text-[#9CA3AF] hover:text-[#8C7A4B] hover:border-[#8C7A4B] transition-colors"
                    >
                      <FolderGit2 className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playTerminalBeep}
                      aria-label="Target Coordinates"
                      className="p-1.5 rounded-xs border border-[#4F504D] bg-[#0F1010] text-[#9CA3AF] hover:text-[#8C7A4B] hover:border-[#8C7A4B] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black tracking-tight text-[#F3F4F6] uppercase group-hover:text-[#8C7A4B] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-bold text-[#B8321B] uppercase tracking-wider mt-1 flex items-center gap-1.5">
                  <Crosshair className="w-3 h-3 text-[#B8321B]" />
                  MISSION: {project.subtitle}
                </p>

                <p className="text-xs text-[#9CA3AF] leading-relaxed mt-4 border-l border-[#4F504D] pl-3">
                  {project.description}
                </p>
              </div>

              {/* Subsystem Badges */}
              <div className="pt-6 border-t border-[#4F504D]/40 mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2.5 py-0.5 bg-[#0F1010] text-[#8C7A4B] border border-[#4F504D] group-hover:border-[#8C7A4B] transition-colors font-bold"
                  >
                    #{tag}
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