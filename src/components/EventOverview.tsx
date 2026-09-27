import React from 'react';
import { eventData } from '../data/eventData';
import { Terminal, Shield, Zap, AlertTriangle, ArrowRight } from 'lucide-react';

interface EventOverviewProps {
  onPlayClick?: () => void;
  onRegisterClick?: () => void;
}

const keyDirectives = [
  {
    title: "SOLVE CHALLENGES",
    desc: "Unravel multi-layered algorithmic puzzles and construct robust computational solutions under rapid-fire constraints.",
    icon: <Terminal size={26} color="#e50914" />
  },
  {
    title: "FIX BUGS",
    desc: "Dive into obfuscated and broken codebases. Isolate anomalies, patch security exploits, and re-establish system balance.",
    icon: <AlertTriangle size={26} color="#f0b429" />
  },
  {
    title: "THINK UNDER PRESSURE",
    desc: "Coordinate with your 3-person squad as the clock ticks down. Execute fast, decisive logic when every second counts.",
    icon: <Zap size={26} color="#e50914" />
  }
];

export const EventOverview: React.FC<EventOverviewProps> = ({ onPlayClick, onRegisterClick }) => {
  return (
    <section
      id="event-overview"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 4rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            EVENT DOSSIER // CODEVERSE 2.0
          </span>
          <h2
            style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}
          >
            THE BATTLE OF <span style={{ color: 'var(--color-red)' }}>LOGIC, SPEED & PROBLEM-SOLVING</span>
          </h2>
          <p
            style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: 'var(--color-cream)',
              lineHeight: 1.6,
              letterSpacing: '-0.01em'
            }}
          >
            "{eventData.tagline}"
          </p>
        </div>

        {/* 3 Directive Cards */}
        <div className="grid grid-cols-3" style={{ gap: '2rem', marginBottom: '3.5rem' }}>
          {keyDirectives.map((item, idx) => (
            <div
              key={item.title}
              className="dossier-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem 2rem',
                position: 'relative'
              }}
            >
              <div className="pushpin-node" style={{ top: '12px', right: '12px' }} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      background: 'rgba(244, 240, 232, 0.05)',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(244, 240, 232, 0.1)'
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'var(--color-red)'
                    }}
                  >
                    0{idx + 1} //
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'var(--color-cream)',
                    textTransform: 'uppercase',
                    marginBottom: '0.85rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(244, 240, 232, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-red)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em'
                }}
              >
                <span>MANDATORY PROTOCOL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
