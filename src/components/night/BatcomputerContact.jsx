import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Radio, Send, Lock, PhoneCall, Mail, ShieldAlert } from 'lucide-react';
import { playTerminalBeep } from '../../utils/audioFx';

export default function BatcomputerContact() {
  const { profile } = portfolioData;
  const [dispatched, setDispatched] = useState(false);
  const [msgData, setMsgData] = useState({
    codename: '',
    frequency: '',
    transmission: ''
  });

  const handleChange = (e) => {
    setMsgData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDispatch = (e) => {
    e.preventDefault();
    playTerminalBeep();
    setDispatched(true);
    setTimeout(() => {
      setDispatched(false);
      setMsgData({ codename: '', frequency: '', transmission: '' });
    }, 4000);
  };

  return (
    <section id="bat-contact" className="relative w-full border-b border-[#8C7A4B]/30 text-[#E5E7EB] py-16 sm:py-24 font-mono select-none">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#B8321B] pl-4">
          <div className="flex items-center gap-2 text-[10px] text-[#B8321B] font-black tracking-[0.3em] uppercase">
            <Radio className="w-3.5 h-3.5 text-[#B8321B]" />
            <span>ENCRYPTED BAT-FREQUENCY // COMMERCE & DEFENSE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F3F4F6] uppercase mt-1">
            Establish Secure Uplink
          </h2>
          <p className="text-xs text-[#9CA3AF] tracking-wider mt-1">
            Encrypted channel for enterprise infrastructure directives, AWS architecture, and consulting engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tactical Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div 
              onMouseEnter={playTerminalBeep}
              className="bat-armor-plate p-6 relative"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-[#8C7A4B]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-[#F3F4F6]">
                  Encrypted Comm-Channel
                </h3>
              </div>
              <a 
                href={`mailto:${profile.social.email}`}
                className="text-xs text-[#8C7A4B] hover:text-[#B8321B] transition-colors"
              >
                {profile.social.email}
              </a>
              <p className="text-[10px] text-[#4F504D] mt-1 font-bold">
                ENCRYPTION: 4096-BIT RSA PGP KEY
              </p>
            </div>

            <div 
              onMouseEnter={playTerminalBeep}
              className="bat-armor-plate p-6 relative"
            >
              <div className="flex items-center gap-3 mb-2">
                <PhoneCall className="w-4 h-4 text-[#B8321B]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-[#F3F4F6]">
                  Tactical Voice Relay
                </h3>
              </div>
              <p className="text-xs text-[#E5E7EB] font-bold">
                {profile.phone}
              </p>
              <p className="text-[10px] text-[#4F504D] mt-1 font-bold">
                CARRIER: SECURE CELLULAR ROUTING
              </p>
            </div>

            <div className="p-5 rounded-xs border border-[#4F504D]/60 bg-[#0F1010]/80 text-[11px] text-[#9CA3AF] space-y-1">
              <span className="flex items-center gap-1.5 text-[#8C7A4B] font-black">
                <Lock className="w-3.5 h-3.5 text-[#B8321B]" />
                SECURITY ASSURANCE
              </span>
              <p>
                Inquiries dispatched via this terminal are encrypted end-to-end and routed directly to the operator workstation.
              </p>
            </div>

          </div>

          {/* Form Console */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleDispatch}
              className="bat-armor-plate p-8 space-y-4 relative"
            >
              {dispatched ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <Radio className="w-10 h-10 text-[#8C7A4B] animate-pulse" />
                  <h3 className="text-sm font-black text-[#F3F4F6] tracking-widest uppercase">
                    Transmission Dispatched
                  </h3>
                  <p className="text-xs text-[#9CA3AF] max-w-xs">
                    Frequency payload delivered to Ankush Sanjay Gangurde. Standby for operational response.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-black text-[#8C7A4B]">
                        Operative / Organization
                      </label>
                      <input
                        type="text"
                        name="codename"
                        required
                        value={msgData.codename}
                        onChange={handleChange}
                        placeholder="Commissioner Gordon"
                        className="w-full px-3.5 py-2.5 rounded-xs border border-[#4F504D] bg-[#0F1010] text-xs text-[#F3F4F6] focus:outline-none focus:border-[#8C7A4B] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-black text-[#8C7A4B]">
                        Frequency / Email
                      </label>
                      <input
                        type="email"
                        name="frequency"
                        required
                        value={msgData.frequency}
                        onChange={handleChange}
                        placeholder="gcpd@secure.org"
                        className="w-full px-3.5 py-2.5 rounded-xs border border-[#4F504D] bg-[#0F1010] text-xs text-[#F3F4F6] focus:outline-none focus:border-[#8C7A4B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-black text-[#8C7A4B]">
                      Directive / Mission Transmission
                    </label>
                    <textarea
                      rows={4}
                      name="transmission"
                      required
                      value={msgData.transmission}
                      onChange={handleChange}
                      placeholder="Specify target cloud infrastructure, systems automation parameters, or consulting scope..."
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[#4F504D] bg-[#0F1010] text-xs text-[#F3F4F6] focus:outline-none focus:border-[#8C7A4B] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.2em] px-6 py-3.5 bg-[#8C7A4B] text-black hover:bg-[#B8321B] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(140,122,75,0.4)] cursor-pointer"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  >
                    <span>Transmit Encrypted Payload</span>
                    <Send className="w-3.5 h-3.5" />
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