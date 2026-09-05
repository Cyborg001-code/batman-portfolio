import React from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import BatLogo3D from './BatLogo3D';

export default function TransformationOverlay() {
  const { isTransforming, transformStage, theme } = useThemeStore();

  if (!isTransforming) return null;

  const isEnteringNight = theme === 'night' || transformStage <= 2;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col items-center justify-center bg-[#0F1010] text-[#E5E7EB] overflow-hidden select-none">
      
      {/* 1. Atmospheric Warehouse Crimson Lightning Surge */}
      <div 
        className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 ${
          transformStage === 3 
            ? 'bg-[#B8321B]/35 animate-pulse' 
            : 'bg-[#B8321B]/15 animate-lightning'
        }`} 
      />

      {/* 2. Heavy Industrial Rain Streaks Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(105deg, transparent, transparent 14px, rgba(140,122,75,0.12) 15px, transparent 18px)`,
          backgroundSize: '200% 200%'
        }}
      />

      {/* 3. Deep Charcoal/Knightmare Fog Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#2F302E]/40 to-[#050606] pointer-events-none z-10" />

      {/* 4. THE 3D BAT-SIGNAL STAGE */}
      <div className="relative z-20 flex flex-col items-center max-w-xl px-6 text-center">
        
        {/* Volumetric Glowing Light Cylinder */}
        <div className="relative flex items-center justify-center mb-2">
          
          {/* Pulsing Light Cone Aura: Weathered Brass into Crimson Fringe */}
          <div 
            className={`absolute rounded-full bg-radial from-[#8C7A4B]/40 via-[#B8321B]/20 to-transparent blur-3xl transition-all duration-700 ${
              transformStage === 3 
                ? 'w-[440px] h-[440px] scale-110 shadow-[0_0_120px_rgba(184,50,27,0.7)]' 
                : 'w-72 h-72 sm:w-88 sm:h-88 animate-signal-pulse'
            }`} 
          />
          
          {/* Tactical Targeting Rings (Snyderverse Brass Reticle) */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 border border-[#8C7A4B]/20 rounded-full" />
          <div className="absolute w-80 h-80 border border-[#B8321B]/15 rounded-full" />
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8C7A4B]/30 to-transparent" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#8C7A4B]/30 to-transparent" />

          {/* Procedural 3D WebGL Bat Mesh */}
          <BatLogo3D />
        </div>

        {/* Cinematic Tactical Subtitles */}
        <div className="space-y-2 font-mono">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A4B] font-bold">
            {isEnteringNight ? "GOTHAM SECTOR // VOICE PATTERN CONFIRMED" : "TACTICAL DE-ESCALATION PROTOCOL"}
          </p>

          <h2 className="text-lg sm:text-2xl uppercase tracking-[0.35em] font-black text-[#F3F4F6] h-10 flex items-center justify-center">
            {isEnteringNight ? (
              <>
                {transformStage === 1 && (
                  <span className="text-[#9CA3AF] tracking-[0.3em] animate-pulse">
                    I AM VENGEANCE.
                  </span>
                )}
                {transformStage === 2 && (
                  <span className="text-[#8C7A4B] tracking-[0.35em] animate-pulse">
                    I AM THE NIGHT.
                  </span>
                )}
                {transformStage === 3 && (
                  <span className="text-[#FF4D30] tracking-[0.4em] drop-shadow-[0_0_30px_rgba(184,50,27,0.95)] scale-110 transition-all duration-500 font-black">
                    I AM BATMAN!
                  </span>
                )}
                {transformStage === 4 && (
                  <span className="text-[#8C7A4B] tracking-[0.25em] animate-pulse font-black">
                    BATSUIT SYSTEMS ARMED
                  </span>
                )}
              </>
            ) : (
              <span className="text-[#8C7A4B] tracking-[0.25em] font-bold">
                RESTORING DAY IDENTITY...
              </span>
            )}
          </h2>

          <p className="text-[9px] font-mono tracking-widest text-[#4F504D] uppercase font-bold">
            SECURITY CLEARANCE: LEVEL 0 // ARMOR DEPLOYED
          </p>
        </div>

        {/* Snyderverse Titanium/Brass Progress Bar */}
        <div className="w-72 h-[2px] bg-[#2F302E] mt-6 relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-transparent via-[#8C7A4B] to-[#B8321B] transition-all duration-700 ease-out shadow-[0_0_10px_#B8321B]"
            style={{
              width: 
                transformStage === 1 ? '22%' :
                transformStage === 2 ? '50%' :
                transformStage === 3 ? '85%' : '100%'
            }}
          />
        </div>

      </div>

    </div>
  );
}