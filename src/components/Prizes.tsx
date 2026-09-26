import React from 'react';
import { PRIZES_DATA } from '../data/prizes';
import { Trophy, Award, CheckCircle2, Sparkles, Gem } from 'lucide-react';

export const Prizes: React.FC = () => {
  const topThree = PRIZES_DATA.slice(0, 3);
  const specialPrizes = PRIZES_DATA.slice(3);

  return (
    <section id="prizes" className="section-wrapper" style={{ background: 'rgba(10, 11, 17, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Gem size={14} />
            THE HEIST LOOT // PRIZE POOL
          </span>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#ffffff' }}>
            TOTAL BOUNTY: <span className="text-gold">₹5,00,000+</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Direct cash payouts, venture fast-tracks, custom trophies, cloud infrastructure grants, and high-value developer swag.
          </p>
        </div>

        {/* Podium Top 3 Cards */}
        <div className="grid grid-cols-3" style={{ gap: '2rem', marginBottom: '3rem', alignItems: 'stretch' }}>
          {topThree.map((prize, idx) => {
            const isWinner = prize.highlight;
            return (
              <div
                key={prize.id}
                className="glass-panel"
                style={{
                  position: 'relative',
                  padding: '2.5rem 2rem',
                  border: isWinner ? '2px solid rgba(255, 209, 89, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isWinner ? 'rgba(25, 22, 35, 0.85)' : 'var(--bg-card)',
                  boxShadow: isWinner ? '0 0 35px rgba(255, 209, 89, 0.25)' : undefined,
                  transform: isWinner ? 'scale(1.04)' : undefined,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Top Rank Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.8rem',
                        borderRadius: '999px',
                        background: isWinner ? 'rgba(255, 209, 89, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                        color: isWinner ? '#ffd159' : '#ffffff',
                        border: isWinner ? '1px solid #ffd159' : '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {prize.badge}
                    </span>
                    <Trophy size={28} color={idx === 0 ? '#ffd159' : idx === 1 ? '#e0e0e0' : '#cd7f32'} />
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    {prize.rank}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    {prize.title}
                  </h3>

                  {/* Prize Amount Display */}
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.4rem',
                      fontWeight: 900,
                      color: isWinner ? 'var(--accent-gold)' : '#ffffff',
                      marginBottom: '1.5rem',
                      lineHeight: 1
                    }}
                  >
                    {prize.amount}
                  </div>

                  {/* Perks List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {prize.perks.map((perk, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle2 size={16} color={isWinner ? '#ffd159' : '#ff1e42'} style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category & Special Bounties Grid */}
        <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center', textTransform: 'uppercase' }}>
          Special Category Bounties
        </h3>
        <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
          {specialPrizes.map((special) => (
            <div
              key={special.id}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge badge-crimson">{special.badge}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                  {special.amount}
                </span>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem' }}>{special.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {special.perks.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Sparkles size={13} color="#00f2fe" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
