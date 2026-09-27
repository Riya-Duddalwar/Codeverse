import React from 'react';
import { eventData } from '../data/eventData';
import { Lightbulb, Users, Compass, BookOpen, PenTool, Zap, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onPlayClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onPlayClick }) => {
  return (
    <section
      id="about"
      className="section-padding halftone-overlay"
      style={{
        position: 'relative',
        background: 'var(--color-charcoal)',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            DOSSIER #001 // THE COMMUNITY
          </span>
          <h2
            style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            ABOUT <span style={{ color: 'var(--color-red)' }}>CODEAI</span>
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--color-cream)',
              fontWeight: 500,
              lineHeight: 1.7
            }}
          >
            {eventData.about.description}
          </p>
        </div>

        {/* Collage Composition: Two Main Sections */}
        <div className="grid grid-cols-2" style={{ gap: '2.5rem', marginBottom: '3.5rem' }}>
          {/* Card 1: Core Pillars (LEARN, CREATE, INNOVATE) */}
          <div
            className="evidence-card"
            style={{
              position: 'relative',
              background: 'var(--color-cream-card)'
            }}
          >
            <div className="paper-tape" />
            <div className="pushpin-node" style={{ top: '15px', right: '15px' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  background: 'var(--color-red)',
                  color: '#ffffff',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Zap size={20} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-dark-red)', fontWeight: 800, letterSpacing: '0.12em' }}>
                  CORE FOUNDATION
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-text-dark)', textTransform: 'uppercase' }}>
                  BRINGING PASSIONATE INDIVIDUALS TOGETHER
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {eventData.about.corePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  style={{
                    background: 'rgba(0, 0, 0, 0.04)',
                    padding: '1rem 1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--color-red)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 900, color: 'var(--color-text-dark)', letterSpacing: '0.06em' }}>
                    {pillar.title}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#4a4843', marginTop: '0.25rem', lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Connections (IDEAS, PEOPLE, OPPORTUNITIES) */}
          <div
            className="evidence-card"
            style={{
              position: 'relative',
              background: 'var(--color-cream-card)'
            }}
          >
            <div className="paper-tape" />
            <div className="pushpin-node" style={{ top: '15px', right: '15px' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  background: 'var(--color-text-dark)',
                  color: 'var(--color-cream)',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Compass size={20} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-dark-red)', fontWeight: 800, letterSpacing: '0.12em' }}>
                  CONNECTING ECOSYSTEM
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-text-dark)', textTransform: 'uppercase' }}>
                  IDEAS • PEOPLE • OPPORTUNITIES
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {eventData.about.connections.map((conn) => (
                <div
                  key={conn.title}
                  style={{
                    background: 'rgba(0, 0, 0, 0.04)',
                    padding: '1rem 1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid #121318'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 900, color: 'var(--color-text-dark)', letterSpacing: '0.06em' }}>
                    {conn.title}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#4a4843', marginTop: '0.25rem', lineHeight: 1.5 }}>
                    {conn.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Quote Banner */}
        <div
          className="dossier-panel"
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto',
            border: '1.5px dashed var(--color-border-red)',
            padding: '2rem'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-red)', fontWeight: 800, letterSpacing: '0.18em' }}>
            // OUR PURPOSE
          </span>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 900,
              color: 'var(--color-cream)',
              marginTop: '0.5rem',
              letterSpacing: '-0.01em'
            }}
          >
            "{eventData.about.impactStatement}"
          </p>
        </div>
      </div>
    </section>
  );
};
