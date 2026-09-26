import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ExternalLink, Handshake, Mail } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="section-wrapper" style={{ background: 'rgba(12, 14, 22, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Handshake size={14} />
            THE SYNDICATE BACKERS
          </span>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#ffffff' }}>
            BACKED BY <span className="text-cyan">INDUSTRY TITANS</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Empowering the next generation of builders with cloud infrastructure, API grants, venture scouting, and direct hiring pipelines.
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-4" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
          {EVENT_DATA.sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}
            >
              <div style={{ fontSize: '2.5rem' }}>{sponsor.logo}</div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff' }}>{sponsor.name}</h4>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: sponsor.tier.includes('Platinum') ? '#00f2fe' : sponsor.tier.includes('Gold') ? '#ffd159' : '#ff1e42',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>

        {/* Partner with us CTA Banner */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '2.5rem',
            textAlign: 'center',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(255, 30, 66, 0.05) 100%)'
          }}
        >
          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            Want to partner with Codeverse 2.0?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Reach 1,500+ top engineers, mentor innovative squads, host track bounties, and recruit elite technical talent.
          </p>
          <a
            href="mailto:partners@codeverse.hack"
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            <Mail size={16} />
            <span>BECOME A SYNDICATE PARTNER</span>
          </a>
        </div>
      </div>
    </section>
  );
};
