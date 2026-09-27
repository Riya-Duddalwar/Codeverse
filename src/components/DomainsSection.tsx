import React from 'react';
import { eventData } from '../data/eventData';
import { Layers, Lock, ShieldCheck } from 'lucide-react';

interface DomainsSectionProps {
  onPlayClick?: () => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ onPlayClick }) => {
  // If no domains are officially provided, render the placeholder state without inventing fake domains
  const hasDomains = eventData.domains && eventData.domains.length > 0;

  if (!hasDomains) {
    return (
      <section
        id="domains"
        className="section-padding halftone-overlay"
        style={{
          position: 'relative',
          background: 'transparent',
          borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
              CHALLENGE TRACKS // DOMAINS
            </span>
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: 'var(--color-cream)',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem'
              }}
            >
              DOMAIN <span style={{ color: 'var(--color-red)' }}>ARENAS</span>
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem' }}>
              Specific domain themes and problem statements will be revealed by DJS CodeAI prior to the challenge kick-off.
            </p>
          </div>

          {/* Classified Lock Card */}
          <div
            className="dossier-panel"
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '3rem 2rem',
              border: '1.5px dashed var(--color-border-red)',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(229, 9, 20, 0.15)',
                border: '1px solid var(--color-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <Lock size={26} color="#e50914" />
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--color-red)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              [ CLASSIFIED DOSSIER // REVEAL PENDING ]
            </span>

            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                color: 'var(--color-cream)',
                marginTop: '0.5rem',
                marginBottom: '0.75rem'
              }}
            >
              Tracks To Be Announced
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto' }}>
              Problem statements and specialized tracks will test your squad's capacity to <strong>Detect, Debug, Rebuild, and Restore</strong> across real-world logic systems.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // If domains are populated in eventData.ts in the future
  return (
    <section
      id="domains"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            CHALLENGE TRACKS // DOMAINS
          </span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--color-cream)' }}>
            CHALLENGE <span style={{ color: 'var(--color-red)' }}>DOMAINS</span>
          </h2>
        </div>

        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {eventData.domains.map((track) => (
            <div key={track.id} className="dossier-panel">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-cream)', marginBottom: '0.5rem' }}>{track.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
