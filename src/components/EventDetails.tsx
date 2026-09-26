import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Cpu, ShieldCheck, Terminal, Zap, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={26} color="#00f2fe" />,
  ShieldCheck: <ShieldCheck size={26} color="#ffd159" />,
  Terminal: <Terminal size={26} color="#ff1e42" />,
  Zap: <Zap size={26} color="#00f090" />
};

export const EventDetails: React.FC = () => {
  return (
    <section id="tracks" className="section-wrapper" style={{ background: 'rgba(14, 16, 25, 0.4)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            VAULT SECTORS // HACKATHON TRACKS
          </span>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#ffffff' }}>
            CHOOSE YOUR <span className="text-gold">TARGET VAULT</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Four distinct heist vectors tailored for specialized engineering squads. Pick your target, deploy your weapons, and claim the sector bounty.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {EVENT_DATA.tracks.map((track) => (
            <div
              key={track.id}
              className="glass-panel"
              style={{
                position: 'relative',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Track Codename & Bounty Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {iconMap[track.icon] || <Cpu size={26} color="#ff1e42" />}
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-crimson)', fontWeight: 700, letterSpacing: '0.1em' }}>
                        CODENAME: {track.codename}
                      </span>
                      <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '2px' }}>{track.title}</h3>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                      BOUNTY
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                      {track.bounty}
                    </div>
                  </div>
                </div>

                {/* Track Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {track.description}
                </p>
              </div>

              {/* Skills / Tech Stack Tags */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  KEY ARSENAL & TECH
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-main)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
