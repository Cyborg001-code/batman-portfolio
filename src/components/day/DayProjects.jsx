import React, { useState, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export default function DayProjects() {
  const { projects } = portfolioData;
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full border-b border-champagne/80 bg-ivory py-20 sm:py-24 overflow-hidden select-none"
    >
      {/* 1. Dynamic Cursor Spotlight */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(176, 141, 87, 0.08), transparent 80%)`
        }}
      />

      {/* 2. Precision Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#E6E3DD 1px, transparent 1px), linear-gradient(90deg, #E6E3DD 1px, #F5F3EE 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 3. Subtle Telemetry Scanline */}
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none animate-scanline" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 animate-fade-in-rise">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-bold mb-2">
            Section 03 // Deployments
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-navy font-serif">
            Cloud & Infrastructure Deployments
          </h2>
          <p className="text-sm text-slate max-w-2xl mt-2 font-normal">
            Automated cloud architectures, Terraform configuration suites, and highly resilient multi-tier deployments.
          </p>
        </div>

        {/* Projects Grid with Interactive Light Sweeps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-8 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
            >
              {/* Top Accent Flare */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />

              {/* Corner Brass Rivets */}
              <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />

              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-xs bg-ivory border border-champagne text-navy font-bold shadow-2xs">
                      {project.status}
                    </span>
                    <span className="text-[10px] font-mono text-slate">{project.year}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repository Source"
                      className="p-2 rounded-sm border border-champagne bg-ivory text-slate hover:text-navy hover:border-gold hover:shadow-2xs transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <FolderGit2 className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Deployment Details"
                      className="p-2 rounded-sm border border-champagne bg-ivory text-slate hover:text-navy hover:border-gold hover:shadow-2xs transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy font-serif group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-gold font-semibold mt-1">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate leading-relaxed mt-4 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-softgray mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-xs bg-ivory text-charcoal border border-champagne/80 font-medium hover:border-gold transition-colors"
                  >
                    {tag}
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