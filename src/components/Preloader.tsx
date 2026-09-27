import React from 'react';
import { Terminal } from 'lucide-react';

interface PreloaderProps {
  loadedCount: number;
  totalFrames: number;
  isReady: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({
  loadedCount,
  totalFrames,
  isReady
}) => {
  if (isReady && loadedCount >= totalFrames) {
    return null;
  }

  const percent = Math.round((loadedCount / totalFrames) * 100);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#08080a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        opacity: isReady && loadedCount >= totalFrames ? 0 : 1,
        pointerEvents: isReady && loadedCount >= totalFrames ? 'none' : 'auto',
        transition: 'opacity 0.6s ease'
      }}
    >
      {/* Evidence Tape */}
      <div className="paper-tape" style={{ top: '20%' }} />

      {/* Brand & Loading Dossier */}
      <div
        className="dossier-panel"
        style={{
          maxWidth: '440px',
          width: '100%',
          textAlign: 'center',
          padding: '2.5rem 2rem',
          border: '1.5px solid var(--color-border-red)',
          boxShadow: 'var(--shadow-red-glow)',
          background: 'rgba(18, 19, 24, 0.95)'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
          <span className="stamp-badge">
            <Terminal size={13} />
            DJS CODEAI PRESENTS
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 900,
            color: 'var(--color-cream)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '0.25rem'
          }}
        >
          CODE<span style={{ color: 'var(--color-red)' }}>VERSE</span> 2.0
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-red)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}
        >
          INITIALIZING FRAME SEQUENCE...
        </p>

        {/* Progress Counter */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: 'var(--color-cream)',
            marginBottom: '0.75rem'
          }}
        >
          {String(loadedCount).padStart(2, '0')} <span style={{ color: 'var(--color-red)', fontSize: '1.1rem' }}>/ {totalFrames}</span>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '4px',
            background: 'rgba(244, 240, 232, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${percent}%`,
              background: 'linear-gradient(90deg, #e50914, #ff4d58)',
              boxShadow: '0 0 10px #e50914',
              transition: 'width 0.15s ease-out'
            }}
          />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-dim)',
            letterSpacing: '0.08em'
          }}
        >
          MISSION: DETECT • DEBUG • REBUILD • RESTORE
        </div>
      </div>
    </div>
  );
};
