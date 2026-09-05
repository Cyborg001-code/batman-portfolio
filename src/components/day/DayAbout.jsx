import React, { useState, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

export default function DayAbout() {
  const { profile, education, certifications } = portfolioData;
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
      id="about" 
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
            Section 01 // Overview
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-navy font-serif">
            Qualifications & Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-slate text-base sm:text-lg leading-relaxed font-normal">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="text-slate">
                {paragraph}
              </p>
            ))}

            {/* Certifications Block */}
            <div className="pt-6 border-t border-champagne">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-navy font-bold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" />
                Accredited Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-sm bg-surface border border-champagne shadow-xs flex items-start justify-between gap-2 hover:border-gold hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
                    <div>
                      <p className="text-xs font-bold text-navy font-serif group-hover:text-gold transition-colors">{cert.title}</p>
                      <p className="text-[11px] font-mono text-slate mt-0.5">{cert.issuer} • {cert.year}</p>
                    </div>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-xs font-semibold whitespace-nowrap uppercase tracking-wider ${
                      cert.status === 'Certified' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' 
                        : 'bg-amber-50 text-amber-800 border border-amber-300'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-navy font-bold flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-gold" />
              Academic Degrees
            </h3>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-ivory border border-champagne text-gold uppercase tracking-wider">
                    {edu.year}
                  </span>
                  <span className="text-[10px] font-mono text-slate uppercase tracking-wider">Verified Credential</span>
                </div>
                <h4 className="text-base font-bold text-navy font-serif group-hover:text-gold transition-colors">{edu.degree}</h4>
                <p className="text-xs text-slate mt-1 font-medium">{edu.institution}</p>
                <p className="text-xs text-slate/90 mt-2 leading-relaxed font-normal">{edu.details}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}