import React, { useEffect, useRef } from 'react';

export default function BatcomputerBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. Gotham Downpour Rain
    const rainCount = 100;
    const rainDrops = [];
    for (let i = 0; i < rainCount; i++) {
      rainDrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 24 + 16,
        speed: Math.random() * 14 + 18,
        opacity: Math.random() * 0.16 + 0.04,
      });
    }

    // 2. Knightmare Crimson & Bronze Ember Ash
    const ashCount = 45;
    const embers = [];
    for (let i = 0; i < ashCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.7 - 0.2, // Rising ash
        color: Math.random() > 0.4 ? 'rgba(140, 122, 75,' : 'rgba(184, 50, 27,',
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    // 3. Sonar Beacon Pulse
    let sonarRadius = 0;
    const maxSonarRadius = Math.max(width, height) * 0.75;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Snyder Matte Black & Charcoal Ambient Gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2, height * 0.35, 80,
        width / 2, height / 2, Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#2F302E');
      bgGrad.addColorStop(0.65, '#0F1010');
      bgGrad.addColorStop(1, '#050606');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Sonar Pulse (Weathered Brass Accent)
      sonarRadius += 1.4;
      if (sonarRadius > maxSonarRadius) sonarRadius = 0;
      const sonarOpacity = Math.max(0, 0.22 * (1 - sonarRadius / maxSonarRadius));

      ctx.beginPath();
      ctx.arc(width / 2, height * 0.3, sonarRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(140, 122, 75, ${sonarOpacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Atmospheric Diagonal Rain
      ctx.strokeStyle = 'rgba(79, 80, 77, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let i = 0; i < rainCount; i++) {
        const drop = rainDrops[i];
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 3, drop.y + drop.length);

        drop.y += drop.speed;
        drop.x -= 1.8;

        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * (width + 120);
        }
      }
      ctx.stroke();

      // Rising Knightmare Embers
      for (let i = 0; i < ashCount; i++) {
        const em = embers[i];
        em.x += em.vx;
        em.y += em.vy;

        if (em.y < 0) em.y = height;
        if (em.x < 0) em.x = width;
        if (em.x > width) em.x = 0;

        ctx.beginPath();
        ctx.arc(em.x, em.y, em.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${em.color} ${em.alpha})`;
        ctx.shadowColor = '#B8321B';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Carbon Ballistic Suit Mesh Overlay */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(140, 122, 75, 0.15) 1px, transparent 0)`,
          backgroundSize: '18px 18px'
        }}
      />

      {/* Vignette Shadow Frame */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0F1010]/60 to-[#050606] pointer-events-none" />
    </div>
  );
}