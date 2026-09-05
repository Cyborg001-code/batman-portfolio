import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useThemeStore } from '../../store/useThemeStore';

export default function DayNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isTransforming } = useThemeStore();
  const { profile } = portfolioData;

  const isNight = theme === 'night';

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-champagne/80 bg-ivory/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Monogram & Direct Name */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-sm bg-surface border border-champagne flex items-center justify-center font-serif text-xs tracking-wider text-navy font-bold shadow-xs group-hover:border-gold transition-colors">
            {profile.avatarPlaceholder}
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xs uppercase tracking-wider text-navy font-bold">
              {profile.name}
            </span>
            <span className="text-[10px] text-slate font-medium">
              Portfolio
            </span>
          </div>
        </a>

        {/* Unified Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider text-slate hover:text-navy transition-colors font-semibold relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Right Controls: Pill Switch Toggle + Resume Action */}
        <div className="flex items-center gap-4">
          
          {/* Mechanical Pill Switch Toggle (Hooked to Transformation Engine) */}
          <button
            type="button"
            role="switch"
            disabled={isTransforming}
            aria-checked={isNight}
            onClick={toggleTheme}
            className={`relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border border-champagne p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gold/40 shadow-inner disabled:opacity-50 ${
              isNight ? 'bg-navy border-navy' : 'bg-[#E2DDD3]'
            }`}
            title="Toggle Day / Night"
          >
            <span className="sr-only">Toggle theme</span>
            
            <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] pointer-events-none">
              <Sun className={`w-3.5 h-3.5 transition-opacity duration-300 ${isNight ? 'opacity-20 text-slate' : 'opacity-0'}`} />
              <Moon className={`w-3.5 h-3.5 transition-opacity duration-300 ${isNight ? 'opacity-0' : 'opacity-30 text-slate'}`} />
            </div>

            <span
              className={`pointer-events-none z-10 flex h-6 w-6 transform items-center justify-center rounded-full bg-surface shadow-md ring-0 transition-transform duration-300 ease-in-out ${
                isNight ? 'translate-x-8 bg-surface' : 'translate-x-0 bg-surface'
              }`}
            >
              {isNight ? (
                <Moon className="w-3.5 h-3.5 text-navy" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-gold" />
              )}
            </span>
          </button>

          {/* Primary Action: Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-wider px-4 py-2 rounded-sm border border-gold bg-navy text-surface hover:bg-gold hover:text-navy transition-all font-semibold shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate hover:text-navy cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-champagne bg-surface px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-wider font-semibold text-slate hover:text-navy py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-center text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm bg-navy text-surface font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}