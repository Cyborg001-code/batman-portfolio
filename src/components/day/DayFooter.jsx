import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function DayFooter() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface border-t border-champagne py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-sm font-bold text-navy font-serif tracking-tight">
            {profile.name}
          </p>
          <p className="text-xs font-mono text-slate">
            &copy; {new Date().getFullYear()} Private Office. High-Availability Infrastructure Systems.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-xs font-mono uppercase tracking-wider text-slate hover:text-navy transition-colors"
          >
            Overview
          </a>
          <a
            href="#skills"
            className="text-xs font-mono uppercase tracking-wider text-slate hover:text-navy transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#projects"
            className="text-xs font-mono uppercase tracking-wider text-slate hover:text-navy transition-colors"
          >
            Deployments
          </a>
          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-wider text-slate hover:text-navy transition-colors"
          >
            Channel
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-sm border border-champagne bg-ivory text-slate hover:text-navy hover:border-gold transition-all cursor-pointer shadow-xs"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}