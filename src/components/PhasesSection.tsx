import React, { useState } from 'react';
import { eventData, EventPhase } from '../data/eventData';
import { Terminal, Bug, Cpu, ArrowRight, CheckCircle2, ShieldAlert, Award, Layers } from 'lucide-react';

interface PhasesSectionProps {
  onPlayClick?: () => void;
  onRegisterClick?: () => void;
}

export const PhasesSection: React.FC<PhasesSectionProps> = ({ onPlayClick, onRegisterClick }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const activePhase: EventPhase = eventData.phases[activePhaseIndex] || eventData.phases[0];

  const handleSelectPhase = (index: number) => {
    if (onPlayClick) onPlayClick();
    setActivePhaseIndex(index);
  };

  return (
    <section
      id="phases"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      {/* Decorative Red Connecting Line between Phase Nodes */}
      <svg
        style={{
          position: 'absolute',
          top: '20%',
          left: 0,
          width: '100%',
          height: '60%',
          pointerEvents: 'none',
          opacity: 0.2,
          zIndex: 0
        }}
      >
        <line
          x1="20%"
          y1="50%"
          x2="80%"
          y2="50%"
          stroke="#e50914"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <circle cx="20%" cy="50%" r="5" fill="#e50914" />
        <circle cx="80%" cy="50%" r="5" fill="#e50914" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            <Layers size={14} />
            CHALLENGE ARCHITECTURE // TWO-PHASE SPRINT
          </span>
          <h2
            style={{
              fontSize: '3.4rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            EVENT <span style={{ color: 'var(--color-red)' }}>PHASES</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            CodeVerse 2.0 unfolds in two intense operational phases — testing logic, debugging precision, and system reconstruction.
          </p>
        </div>

        {/* Phase Toggle Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap'
          }}
        >
          {eventData.phases.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;

            return (
              <button
                key={phase.number}
                onClick={() => handleSelectPhase(idx)}
                style={{
                  background: isSelected ? 'var(--color-red)' : 'rgba(244, 240, 232, 0.06)',
                  color: isSelected ? '#ffffff' : 'var(--color-cream)',
                  border: isSelected ? '1.5px solid var(--color-red-bright)' : '1px solid var(--color-border)',
                  borderRadius: '999px',
                  padding: '0.85rem 2.2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: isSelected
                    ? '0 6px 30px rgba(229, 9, 20, 0.5), 0 0 15px rgba(229, 9, 20, 0.3)'
                    : 'none',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <span
                  style={{
                    background: isSelected ? 'rgba(0, 0, 0, 0.35)' : 'rgba(229, 9, 20, 0.2)',
                    color: isSelected ? '#ffffff' : 'var(--color-red)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem'
                  }}
                >
                  {phase.number}
                </span>
                <span>{phase.title}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: isSelected ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-muted)',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 600
                  }}
                >
                  ({phase.codename})
                </span>
              </button>
            );
          })}
        </div>

        {/* Phase Details Display (Cinematic Dossier Layout) */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            transition: 'all 0.35s ease'
          }}
        >
          <div
            className="evidence-card"
            style={{
              position: 'relative',
              background: 'var(--color-cream-card)',
              padding: '3rem 2.5rem',
              boxShadow: 'var(--shadow-paper)'
            }}
          >
            {/* Paper Tape Decorations */}
            <div className="paper-tape paper-tape-left" />
            <div className="paper-tape paper-tape-right" />
            <div className="pushpin-node" style={{ top: '15px', right: '15px' }} />

            {/* Header Badge & Title */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      color: 'var(--color-dark-red)',
                      background: 'rgba(229, 9, 20, 0.1)',
                      border: '1px solid var(--color-red)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {activePhase.badge}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--color-text-dark)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    // CODENAME: {activePhase.codename}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--color-text-dark)',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  {activePhase.title}: {activePhase.subtitle}
                </h3>
              </div>

              <div
                style={{
                  background: 'var(--color-red)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(229, 9, 20, 0.4)'
                }}
              >
                {activePhase.number}
              </div>
            </div>

            {/* Main Phase Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: '#383632',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                borderLeft: '4px solid var(--color-red)',
                paddingLeft: '1.25rem'
              }}
            >
              {activePhase.description}
            </p>

            {/* Activities & Requirements Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2.25rem'
              }}
              className="grid-cols-2"
            >
              {/* Col 1: Key Activities */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.04)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    color: 'var(--color-dark-red)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Terminal size={16} />
                  CORE ACTIVITIES & FOCUS
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activePhase.activities.map((act, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} color="#e50914" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.92rem', color: 'var(--color-text-dark)', lineHeight: 1.5 }}>
                        {act}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 2: Squad Requirements */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.04)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    color: 'var(--color-dark-red)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ShieldAlert size={16} />
                  SQUAD PROTOCOLS & EVALUATION
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activePhase.requirements.map((req, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--color-red)',
                          flexShrink: 0,
                          marginTop: '8px'
                        }}
                      />
                      <span style={{ fontSize: '0.92rem', color: 'var(--color-text-dark)', lineHeight: 1.5 }}>
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progression Banner */}
            <div
              style={{
                background: 'rgba(229, 9, 20, 0.08)',
                border: '1.5px dashed var(--color-red)',
                borderRadius: '8px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={22} color="#e50914" />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--color-dark-red)', letterSpacing: '0.1em' }}>
                    PROGRESSION DIRECTIVE
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text-dark)', marginTop: '2px' }}>
                    {activePhase.progression}
                  </div>
                </div>
              </div>

              {activePhaseIndex === 0 ? (
                <button
                  onClick={() => handleSelectPhase(1)}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.8rem' }}
                >
                  <span>VIEW PHASE 2 FINALE</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={() => handleSelectPhase(0)}
                  className="btn btn-secondary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.8rem', color: 'var(--color-text-dark)', borderColor: 'rgba(0,0,0,0.3)' }}
                >
                  <span>BACK TO PHASE 1</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
