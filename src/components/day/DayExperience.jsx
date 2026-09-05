import React, { useState, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function DayExperience() {
  const { experience } = portfolioData;
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
      id="experience" 
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
            Section 04 // History
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-navy font-serif">
            Enterprise Experience
          </h2>
          <p className="text-sm text-slate max-w-2xl mt-2 font-normal">
            Operational trajectory delivering continuous uptime and security across multi-OS environments.
          </p>
        </div>

        {/* Timeline with Animated Node Pulse */}
        <div className="relative border-l-2 border-champagne ml-3 sm:ml-6 space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-7 sm:pl-10 group">
              {/* Glowing Pulse Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-surface border-2 border-gold group-hover:scale-125 transition-transform duration-300 shadow-xs group-hover:shadow-md" />

              <div className="p-8 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                {/* Top Accent Flare */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-navy px-3 py-1 rounded-xs bg-ivory border border-champagne uppercase tracking-wider shadow-2xs">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy font-serif group-hover:text-gold transition-colors duration-300">
                  {item.role}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-gold font-semibold mt-1">
                  {item.company}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate leading-relaxed group-hover:text-navy transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{point}</span>
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