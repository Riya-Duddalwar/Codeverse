import React from 'react';
import { eventData } from '../data/eventData';
import { Users, UserCheck, CreditCard, Sparkles, Network } from 'lucide-react';

interface StatsSectionProps {
  onPlayClick?: () => void;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ onPlayClick }) => {
  const statsList = [
    {
      value: `${eventData.stats.teams}`,
      label: "TEAMS",
      subtext: "Capacity limit",
      icon: <Users size={22} color="#e50914" />
    },
    {
      value: `${eventData.stats.participantsPerTeam}`,
      label: "PARTICIPANTS / TEAM",
      subtext: "Exact squad size",
      icon: <UserCheck size={22} color="#f4f0e8" />
    },
    {
      value: `${eventData.stats.totalParticipants}`,
      label: "TOTAL PARTICIPANTS",
      subtext: "Competitors in arena",
      icon: <Network size={22} color="#e50914" />
    },
    {
      value: "₹99",
      label: "REGISTRATION / TEAM",
      subtext: "Entry commitment",
      icon: <CreditCard size={22} color="#f0b429" />
    },
    {
      value: "100+",
      label: "ASPIRING TECHNOLOGISTS",
      subtext: "Partner outreach community",
      icon: <Sparkles size={22} color="#e50914" />
    }
  ];

  return (
    <section
      id="event-stats"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            BY THE NUMBERS // VERIFIED METRICS
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
            EVENT <span style={{ color: 'var(--color-red)' }}>SCALE & CAPACITY</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem' }}>
            Official metrics confirmed in the CodeVerse 2.0 brochure.
          </p>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-5" style={{ gap: '1.25rem' }}>
          {statsList.map((stat, idx) => (
            <div
              key={stat.label}
              className="dossier-panel"
              style={{
                textAlign: 'center',
                padding: '2rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* Pushpin on first and last card */}
              {(idx === 0 || idx === 4) && (
                <div className="pushpin-node" style={{ top: '10px', right: '10px' }} />
              )}

              <div
                style={{
                  background: 'rgba(244, 240, 232, 0.05)',
                  padding: '0.6rem',
                  borderRadius: '50%',
                  marginBottom: '1rem'
                }}
              >
                {stat.icon}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  fontWeight: 900,
                  color: 'var(--color-cream)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.03em'
                }}
              >
                {stat.value}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--color-red)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}
              >
                {stat.label}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-dim)' }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on 100+ technologists */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-dim)' }}>
            * Note: {eventData.stats.aspiringTechnologistsNote}
          </span>
        </div>
      </div>
    </section>
  );
};
