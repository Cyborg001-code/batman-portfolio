import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Lock, 
  Activity, 
  HardDrive,
  Fingerprint
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function DayHero() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // Interactive Mouse Spotlight State
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef(null);

  // 3D Tilt Deck State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleDeckTilt = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Constrain tilt angle within 7 degrees for subtle luxury response
    const rotateX = (-mouseY / (card.height / 2)) * 7;
    const rotateY = (mouseX / (card.width / 2)) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleDeckLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full border-b border-champagne/80 bg-ivory text-charcoal pt-8 pb-16 sm:pb-20 overflow-hidden select-none"
    >
      
      {/* 1. Interactive Cursor Glow Spotlight (Follows mouse dynamically) */}
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

      {/* 3. Subtle Horizontal Telemetry Scanline */}
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none animate-scanline" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Executive Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-champagne mb-8 animate-fade-in-rise">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-navy font-semibold">
              Systems Administration & Cloud Engineering
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate">
            <div className="flex items-center gap-1.5 bg-surface px-2.5 py-1 rounded-sm border border-champagne shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-300">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>{currentTime || '00:00:00 UTC'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface px-2.5 py-1 rounded-sm border border-champagne shadow-2xs hover:border-gold hover:shadow-xs transition-all duration-300">
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Identity, Bio, Actions */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-rise" style={{ animationDelay: '100ms' }}>
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-champagne bg-surface shadow-xs hover:border-gold hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy font-bold">
                Infrastructure & Operations
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-navy leading-[1.06] font-serif transition-colors duration-300">
                {profile.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-gold font-bold">
                {profile.title}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate leading-relaxed font-normal max-w-2xl">
              Managing enterprise Windows and Linux environments, Active Directory, and automated AWS cloud infrastructure[cite: 1]. Focused on high system uptime, secure user access management, and automated deployments[cite: 1].
            </p>

            {/* Action Buttons with Micro-Interactions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider px-6 py-3.5 rounded-sm bg-navy text-surface overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-bold"
              >
                {/* Subtle shine sweep on hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative z-10 group-hover:text-gold transition-colors duration-300">View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-gold" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-5 py-3.5 rounded-sm border border-champagne bg-surface text-navy hover:border-gold hover:bg-softgray/30 transition-all duration-200 cursor-pointer shadow-xs transform hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-700 font-semibold">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Copy Email</span>
                  </>
                )}
              </button>

              <div className="h-5 w-px bg-champagne hidden sm:block mx-1" />

              {/* Social Channels with Hover Lift */}
              <div className="flex items-center gap-2">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                  className="p-3 rounded-sm border border-champagne bg-surface text-slate hover:text-navy hover:border-gold hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-sm border border-champagne bg-surface text-slate hover:text-navy hover:border-gold hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive 3D Tilt Telemetry Deck */}
          <div 
            className="lg:col-span-5 w-full animate-fade-in-rise" 
            style={{ animationDelay: '200ms', perspective: 1000 }}
          >
            <div 
              onMouseMove={handleDeckTilt}
              onMouseLeave={handleDeckLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
              }}
              className="rounded-sm border border-champagne bg-surface p-5 sm:p-6 shadow-md relative group hover:border-gold/80 hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Corner Brass Rivets */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-champagne group-hover:bg-gold transition-colors duration-300" />

              {/* Monogram Crest Container */}
              <div className="relative w-full h-52 sm:h-56 rounded-sm border border-champagne bg-gradient-to-b from-surface via-ivory to-softgray/40 overflow-hidden mb-4 flex flex-col items-center justify-center p-5 text-center group/deck">
                
                <div className="relative mb-2">
                  <div className="w-18 h-18 rounded-full border-2 border-champagne bg-surface flex items-center justify-center shadow-xs group-hover/deck:border-gold transition-colors animate-pulse-glow">
                    <span className="font-serif text-2xl font-bold text-navy tracking-wider">
                      {profile.avatarPlaceholder}
                    </span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-surface border-2 border-white flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </span>
                </div>

                <span className="font-serif text-base font-bold text-navy tracking-tight">
                  {profile.name}
                </span>
                <span className="text-[11px] font-mono text-slate mt-0.5 tracking-wide">
                  Systems Administrator • Verified Profile
                </span>

                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-sm bg-navy/85 backdrop-blur-xs text-surface text-[9px] font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Operations Active</span>
                </div>
              </div>

              {/* Telemetry Diagnostics Rows with Hover Accent */}
              <div className="py-3 space-y-2.5 font-mono text-xs border-y border-softgray">
                <div className="flex items-center justify-between text-slate hover:text-navy transition-colors p-1 rounded-xs hover:bg-softgray/30">
                  <span className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-gold" />
                    Systems Uptime
                  </span>
                  <span className="font-semibold text-navy">99.00%</span>
                </div>

                <div className="flex items-center justify-between text-slate hover:text-navy transition-colors p-1 rounded-xs hover:bg-softgray/30">
                  <span className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-gold" />
                    Access Security
                  </span>
                  <span className="font-semibold text-emerald-800">Zero Incidents</span>
                </div>

                <div className="flex items-center justify-between text-slate hover:text-navy transition-colors p-1 rounded-xs hover:bg-softgray/30">
                  <span className="flex items-center gap-2">
                    <HardDrive className="w-3.5 h-3.5 text-gold" />
                    Setup Efficiency
                  </span>
                  <span className="font-semibold text-navy">+70% via IaC</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-slate">
                <span className="flex items-center gap-1.5">
                  <Fingerprint className="w-3.5 h-3.5 text-gold" />
                  Systems Administrator
                </span>
                <span className="font-semibold text-navy">Enterprise IT</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Interactive Metric Cards with Counter Micro-Animations */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 animate-fade-in-rise" style={{ animationDelay: '300ms' }}>
          {profile.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-sm bg-surface border border-champagne hover:border-gold hover:shadow-md transition-all duration-300 shadow-2xs transform hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
              
              <span className="text-2xl sm:text-3xl font-light text-navy font-mono group-hover:text-gold transition-colors duration-300 block">
                {stat.value}
              </span>
              <p className="text-xs font-bold text-navy mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate mt-0.5">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}