import React, { useState, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Database, ShieldCheck, Cloud, Cpu, Activity } from 'lucide-react';

export default function DaySkills() {
  const { skills } = portfolioData;
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

  const categoryIcons = {
    "Systems & OS Administration": <Terminal className="w-4 h-4 text-gold" />,
    "Identity & Access (IAM)": <ShieldCheck className="w-4 h-4 text-gold" />,
    "Cloud Infrastructure (AWS)": <Cloud className="w-4 h-4 text-gold" />,
    "Networking & Connectivity": <Activity className="w-4 h-4 text-gold" />,
    "Automation, IaC & DevOps": <Cpu className="w-4 h-4 text-gold" />,
    "Enterprise Suite & Observability": <Database className="w-4 h-4 text-gold" />,
  };

  return (
    <section 
      id="skills" 
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
            Section 02 // Capabilities
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-navy font-serif">
            Technical Competencies
          </h2>
          <p className="text-sm text-slate max-w-2xl mt-2 font-normal">
            Enterprise infrastructure maintenance, multi-cloud governance, and automated configuration engineering.
          </p>
        </div>

        {/* Skills Grid with Progressive Hover & Top Flare */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
            >
              {/* Top Accent Flare */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
              
              {/* Corner Brass Rivet */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-sm bg-ivory border border-champagne flex items-center justify-center group-hover:border-gold transition-colors">
                  {categoryIcons[skillGroup.category] || <Terminal className="w-4 h-4 text-gold" />}
                </div>
                <h3 className="text-sm font-bold text-navy font-serif tracking-tight group-hover:text-gold transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills Badges with Interactive Lift */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-3 py-1.5 rounded-sm bg-ivory border border-champagne text-charcoal hover:border-gold hover:text-navy hover:shadow-2xs transition-all duration-200 cursor-default transform hover:-translate-y-0.5"
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