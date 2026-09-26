import React, { useEffect, useRef } from 'react';
import { useFrameAnimation } from '../hooks/useFrameAnimation';
import { Lock, Unlock, ShieldAlert, Cpu } from 'lucide-react';

export const ScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { canvasRef, currentFrame, totalFrames, renderFrame } = useFrameAnimation({
    frameCount: 240
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through container
      const totalScrollable = containerRef.current.offsetHeight - windowHeight;
      const scrolled = -rect.top;
      
      if (totalScrollable > 0) {
        const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
        const frameIndex = Math.floor(rawProgress * (totalFrames - 1));
        renderFrame(frameIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames, renderFrame]);

  const progressPercent = Math.round((currentFrame / (totalFrames - 1)) * 100);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '250vh',
        background: '#07080c'
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Canvas Frame Scrubber Render */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.85
          }}
        />

        {/* Overlay Heist HUD HUD Elements */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 30%, rgba(7, 8, 12, 0.85) 100%)',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem'
          }}
        >
          {/* Top HUD Line */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldAlert size={18} color="#ff1e42" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ff1e42', fontWeight: 700, letterSpacing: '0.15em' }}>
                SECURITY LEVEL: MAXIMUM INFILTRATION
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ffd159' }}>
              FRAME: {String(currentFrame).padStart(3, '0')} / {totalFrames}
            </div>
          </div>

          {/* Center Dynamic HUD Info */}
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 1rem',
                borderRadius: '999px',
                background: progressPercent === 100 ? 'rgba(0, 240, 144, 0.15)' : 'rgba(255, 30, 66, 0.15)',
                border: `1px solid ${progressPercent === 100 ? '#00f090' : '#ff1e42'}`,
                marginBottom: '1rem'
              }}
            >
              {progressPercent === 100 ? <Unlock size={16} color="#00f090" /> : <Lock size={16} color="#ff1e42" />}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: progressPercent === 100 ? '#00f090' : '#ff1e42'
                }}
              >
                {progressPercent === 100 ? 'MAINFRAME BYPASSED' : `VAULT SEQUENCE LOCK: ${progressPercent}%`}
              </span>
            </div>

            <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              {progressPercent < 33 && 'Bypassing Firewalls & Perimeter Sensors'}
              {progressPercent >= 33 && progressPercent < 66 && 'Decrypting Master Keychains & Quantum Nodes'}
              {progressPercent >= 66 && progressPercent < 100 && 'Disarming Vault Alarms & Activating Stealth'}
              {progressPercent === 100 && 'Digital Vault Unlocked: Enter Codeverse'}
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Scroll continuously to crack all 240 mainframe layers and access the secret challenge tracks.
            </p>
          </div>

          {/* Bottom HUD Telemetry */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={16} color="#00f2fe" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                TELEMETRY: SYNCHRONIZED
              </span>
            </div>
            {/* Progress Visualizer */}
            <div style={{ width: '200px', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #ff1e42, #ffd159)',
                  transition: 'width 0.05s linear'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
