import React, { useState } from 'react';
import { eventData } from '../data/eventData';
import { Search, Bug, Cpu, RefreshCw, Shield, Terminal, ArrowRight } from 'lucide-react';

interface HomeMissionProps {
  onPlayClick: () => void;
  onRegisterClick: () => void;
}

const missionPillars = [
  {
    word: "DETECT",
    num: "01",
    icon: <Search size={24} color="#e50914" />,
    shortDesc: "Uncover logic anomalies, edge-case failures, and architectural vulnerabilities."
  },
  {
    word: "DEBUG",
    num: "02",
    icon: <Bug size={24} color="#e50914" />,
    shortDesc: "Trace faulty executions under intense time constraints and eliminate critical flaws."
  },
  {
    word: "REBUILD",
    num: "03",
    icon: <Cpu size={24} color="#e50914" />,
    shortDesc: "Re-engineer resilient algorithms and modular components from scratch."
  },
  {
    word: "RESTORE",
    num: "04",
    icon: <RefreshCw size={24} color="#e50914" />,
    shortDesc: "Re-establish system integrity, pass validation suites, and deploy winning prototypes."
  }
];

export const HomeMission: React.FC<HomeMissionProps> = ({ onPlayClick, onRegisterClick }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section
      id="home-mission"
      className="section-padding noise-subtle"
      style={{
        position: 'relative',
        background: 'var(--color-black)',
        borderTop: '1px solid rgba(244, 240, 232, 0.08)',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      {/* Evidence Red Connecting Line Graphic (SVG) */}
      <svg
        style={{
          position: 'absolute',
          top: '15%',
          left: 0,
          width: '100%',
          height: '70%',
          pointerEvents: 'none',
          opacity: 0.25,
          zIndex: 0
        }}
      >
        <line
          x1="10%"
          y1="30%"
          x2="50%"
          y2="20%"
          stroke="#e50914"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <line
          x1="50%"
          y1="20%"
          x2="90%"
          y2="40%"
          stroke="#e50914"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="10%" cy="30%" r="4" fill="#e50914" />
        <circle cx="50%" cy="20%" r="4" fill="#e50914" />
        <circle cx="90%" cy="40%" r="4" fill="#e50914" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="stamp-badge">
              <Terminal size={14} />
              CORE DIRECTIVE // {eventData.date}
            </span>
          </div>

          <h2
            style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            MISSION: <span style={{ color: 'var(--color-red)' }}>DETECT, DEBUG, REBUILD, RESTORE</span>
          </h2>

          <p style={{ color: 'var(--color-muted)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            {eventData.tagline}
          </p>
        </div>

        {/* 4 Mission Pillars Grid (Detective Dossier Style) */}
        <div className="grid grid-cols-4" style={{ gap: '1.75rem', marginBottom: '3.5rem' }}>
          {missionPillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <div
                key={pillar.word}
                className="dossier-panel"
                onClick={() => {
                  onPlayClick();
                  setActivePillar(idx);
                }}
                style={{
                  cursor: 'pointer',
                  borderColor: isActive ? 'var(--color-red)' : 'var(--color-border)',
                  background: isActive ? 'rgba(28, 20, 24, 0.85)' : 'var(--color-charcoal-card)',
                  boxShadow: isActive ? 'var(--shadow-red-glow)' : undefined,
                  transform: isActive ? 'translateY(-6px)' : undefined,
                  position: 'relative'
                }}
              >
                {/* Red Pushpin */}
                <div className="pushpin-node" style={{ top: '12px', right: '12px' }} />

                {/* Pillar Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: isActive ? 'var(--color-red)' : 'var(--color-dim)',
                    marginBottom: '1rem'
                  }}
                >
                  // PHASE {pillar.num}
                </div>

                {/* Pillar Icon & Title */}
                <div style={{ marginBottom: '1.25rem' }}>{pillar.icon}</div>

                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: 'var(--color-cream)',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {pillar.word}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  {pillar.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Mission CTA Strip */}
        <div
          className="evidence-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          <div className="paper-tape paper-tape-left" />
          <div className="paper-tape paper-tape-right" />

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-red)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              40 TEAMS • 120 PARTICIPANTS • ₹99 / TEAM
            </div>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-text-dark)', marginTop: '0.2rem' }}>
              Are you ready to think under pressure?
            </h4>
          </div>

          <button
            onClick={() => {
              onPlayClick();
              onRegisterClick();
            }}
            className="btn btn-primary"
            style={{
              padding: '0.9rem 2rem'
            }}
          >
            <span>JOIN THE BATTLE</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
