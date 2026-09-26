import React from 'react';
import { TIMELINE_DATA } from '../data/timeline';
import { Clock, Shield, Flame } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
            OPERATION PROTOCOL // 36 HOURS
          </span>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#ffffff' }}>
            THE HEIST <span className="text-crimson">TIMELINE</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Precision is everything. Review each infiltration phase from the initial mission briefing to the final vault commit.
          </p>
        </div>

        {/* Timeline Flow */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0'
          }}
        >
          {/* Center Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              background: 'linear-gradient(180deg, #ff1e42 0%, #ffd159 50%, #00f2fe 100%)',
              transform: 'translateX(-50%)',
              opacity: 0.4
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.phase}
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {/* Content Card */}
                  <div
                    className="glass-panel"
                    style={{
                      width: '45%',
                      padding: '1.75rem',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      textAlign: isEven ? 'right' : 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: isEven ? 'flex-end' : 'flex-start', marginBottom: '0.5rem' }}>
                      <Clock size={14} color="#ffd159" />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#ffd159', fontWeight: 700 }}>
                        {item.date} • {item.time}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Center Node Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#090a0f',
                      border: '2px solid #ff1e42',
                      boxShadow: '0 0 15px rgba(255, 30, 66, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 900, color: '#ffffff' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Empty Spacer */}
                  <div style={{ width: '45%' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
