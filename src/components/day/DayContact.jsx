import React, { useState, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Phone } from 'lucide-react';

export default function DayContact() {
  const { profile } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
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
            Section 05 // Channel
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-navy font-serif">
            Direct Communication Channel
          </h2>
          <p className="text-sm text-slate max-w-2xl mt-2 font-normal">
            For technical leadership proposals, infrastructure consultation, or administrative inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Channel Cards with Hover Lift */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-ivory border border-champagne flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy font-serif">Primary Channel</h3>
                  <p className="text-[11px] font-mono text-slate">Direct inquiries</p>
                </div>
              </div>
              <a
                href={`mailto:${profile.social.email}`}
                className="text-xs font-mono font-semibold text-navy hover:text-gold block mt-2 transition-colors"
              >
                {profile.social.email}
              </a>
            </div>

            <div className="p-6 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-ivory border border-champagne flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy font-serif">Direct Telephony</h3>
                  <p className="text-[11px] font-mono text-slate">Verified contact</p>
                </div>
              </div>
              <p className="text-xs font-mono font-semibold text-navy mt-2">
                {profile.phone}
              </p>
            </div>

            <div className="p-6 rounded-sm bg-surface border border-champagne shadow-xs hover:border-gold hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-ivory border border-champagne flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy font-serif">Operational Base</h3>
                  <p className="text-[11px] font-mono text-slate">Jurisdiction</p>
                </div>
              </div>
              <p className="text-xs font-mono text-navy font-semibold mt-2">
                {profile.location}
              </p>
            </div>
          </div>

          {/* Form with Elevated Focus & Shimmer Button */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-sm bg-surface border border-champagne shadow-lg space-y-4 relative overflow-hidden"
            >
              {submitted ? (
                <div className="py-14 flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-gold animate-bounce" />
                  <h3 className="text-base font-bold text-navy font-serif">Communication Dispatched</h3>
                  <p className="text-xs font-mono text-slate max-w-xs">
                    Your transmission has been routed to Ankush Sanjay Gangurde's desk queue.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-navy font-bold">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-3 rounded-sm border border-champagne bg-ivory text-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-navy font-bold">
                        Business Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@enterprise.com"
                        className="w-full px-3.5 py-3 rounded-sm border border-champagne bg-ivory text-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-navy font-bold">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Infrastructure Review / Enterprise Systems"
                      className="w-full px-3.5 py-3 rounded-sm border border-champagne bg-ivory text-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-navy font-bold">
                      Message Parameters
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify system requirements, project scope, or administrative objectives..."
                      className="w-full px-3.5 py-3 rounded-sm border border-champagne bg-ivory text-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full mt-2 inline-flex items-center justify-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] px-6 py-4 rounded-sm bg-navy text-surface overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 font-bold cursor-pointer"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
                    <span className="relative z-10 group-hover:text-gold transition-colors duration-300">Transmit Message</span>
                    <Send className="w-3.5 h-3.5 relative z-10 text-gold group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}