import React from 'react';
import { eventData } from '../data/eventData';
import { Trophy, Award, Medal, Sparkles, Crown } from 'lucide-react';

interface PrizesSectionProps {
  onPlayClick?: () => void;
}

export const PrizesSection: React.FC<PrizesSectionProps> = ({ onPlayClick }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown size={32} color="#f0b429" />;
      case 2:
        return <Trophy size={28} color="#e50914" />;
      case 3:
        return <Medal size={28} color="#cd7f32" />;
      default:
        return <Award size={26} color="#e50914" />;
    }
  };

  return (
    <section
      id="prizes"
      className="section-padding noise-subtle"
      style={{
        position: 'relative',
        background: 'var(--color-black)',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4.5rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            OFFICIAL PRIZE POOL // {eventData.prizePool}
          </span>
          <h2
            style={{
              fontSize: '3.6rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            TOTAL PRIZE POOL: <span style={{ color: 'var(--color-red)' }}>{eventData.prizePool}</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Direct cash rewards for top-performing squads demonstrating unmatched logic, speed, and debugging mastery.
          </p>
        </div>

        {/* 3 Prize Cards Grid (Podium Layout) */}
        <div className="grid grid-cols-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
          {eventData.prizes.map((prize) => {
            const isWinner = prize.highlight;

            return (
              <div
                key={prize.position}
                className={isWinner ? "evidence-card" : "dossier-panel"}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: isWinner ? '3rem 2.2rem' : '2.5rem 2rem',
                  border: isWinner
                    ? '2px solid var(--color-red)'
                    : '1px solid var(--color-border)',
                  background: isWinner
                    ? 'var(--color-cream-card)'
                    : 'var(--color-charcoal-card)',
                  color: isWinner ? 'var(--color-text-dark)' : 'var(--color-cream)',
                  boxShadow: isWinner
                    ? '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(229, 9, 20, 0.35)'
                    : 'var(--shadow-card)',
                  transform: isWinner ? 'translateY(-10px)' : undefined,
                  zIndex: isWinner ? 3 : 1
                }}
              >
                {/* Paper Tape / Pushpin decoration */}
                {isWinner ? (
                  <>
                    <div className="paper-tape" />
                    <div className="pushpin-node" style={{ top: '15px', right: '15px' }} />
                  </>
                ) : (
                  <div className="pushpin-node" style={{ top: '12px', right: '12px' }} />
                )}

                <div>
                  {/* Top Rank Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        padding: '0.35rem 0.9rem',
                        borderRadius: '999px',
                        background: isWinner ? 'var(--color-red)' : 'rgba(244, 240, 232, 0.08)',
                        color: isWinner ? '#ffffff' : 'var(--color-cream)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {prize.title}
                    </span>

                    {getRankIcon(prize.rankNumber)}
                  </div>

                  {/* Position Subtitle */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: isWinner ? 'var(--color-dark-red)' : 'var(--color-red)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {prize.position}
                  </div>

                  {/* Prize Amount Display (Oversized Typography) */}
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '3.6rem',
                      fontWeight: 900,
                      color: isWinner ? 'var(--color-text-dark)' : 'var(--color-cream)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {prize.amount}
                  </div>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: isWinner ? '#44423d' : 'var(--color-muted)',
                      lineHeight: 1.6
                    }}
                  >
                    Awarded to the squad achieving {prize.rankNumber === 1 ? 'rank 1' : prize.rankNumber === 2 ? 'rank 2' : 'rank 3'} in overall event score, logic precision, and speed under pressure.
                  </p>
                </div>

                {/* Bottom Verification Seal */}
                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.25rem',
                    borderTop: isWinner ? '1px dashed rgba(0, 0, 0, 0.2)' : '1px solid rgba(244, 240, 232, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: isWinner ? 'var(--color-dark-red)' : 'var(--color-dim)'
                  }}
                >
                  <span>OFFICIAL BOUNTY</span>
                  <span>DJS CODEAI</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
