import React from 'react';
import { eventData } from '../data/eventData';
import { Calendar, Clock, Sparkles, Flag } from 'lucide-react';

interface TimelineSectionProps {
  onPlayClick?: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onPlayClick }) => {
  return (
    <section
      id="timeline"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            SCHEDULE BRIEFING // OFFICIAL TIMELINE
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
            EVENT <span style={{ color: 'var(--color-red)' }}>TIMELINE</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.15rem' }}>
            Confirmed date for CodeVerse 2.0. Detailed stage schedules will be populated as official rounds are finalized.
          </p>
        </div>

        {/* Timeline Visual Container */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {eventData.timeline.map((entry, idx) => (
            <div
              key={entry.id || idx}
              className="evidence-card"
              style={{
                position: 'relative',
                background: 'var(--color-cream-card)',
                marginBottom: '2rem'
              }}
            >
              <div className="paper-tape" />
              <div className="pushpin-node" style={{ top: '15px', right: '15px' }} />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  borderBottom: '2px dashed rgba(0, 0, 0, 0.15)',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      background: 'var(--color-red)',
                      color: '#ffffff',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Calendar size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-dark-red)', letterSpacing: '0.12em' }}>
                      CONFIRMED EVENT DATE
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-text-dark)' }}>
                      {entry.date}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(229, 9, 20, 0.1)',
                    border: '1px solid var(--color-red)',
                    borderRadius: '6px',
                    padding: '0.4rem 0.9rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: 'var(--color-dark-red)'
                  }}
                >
                  <Flag size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {entry.time || 'EVENT DAY'}
                </div>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-text-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                {entry.title}
              </h3>

              <p style={{ color: '#44423d', fontSize: '1rem', lineHeight: 1.7 }}>
                {entry.description}
              </p>
            </div>
          ))}

          {/* Timeline Placeholder Note */}
          <div
            className="dossier-panel"
            style={{
              textAlign: 'center',
              border: '1px dashed var(--color-border)',
              padding: '1.75rem',
              background: 'rgba(18, 19, 24, 0.6)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-red)', fontWeight: 800, letterSpacing: '0.1em' }}>
              // SCHEDULE ARCHITECTURE READY
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', marginTop: '0.35rem' }}>
              Specific hourly schedules, reporting intervals, and round transition times will be synchronized directly in <code style={{ color: 'var(--color-cream)' }}>src/data/eventData.ts</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
