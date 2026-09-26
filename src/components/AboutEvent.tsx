import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Target, Skull, ShieldCheck, Zap, Compass, Users } from 'lucide-react';

export const AboutEvent: React.FC = () => {
  return (
    <section id="mission" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
            DOSSIER #002 // THE OBJECTIVE
          </span>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#ffffff' }}>
            THE MISSION: <span className="text-crimson">BREACH THE STATUS QUO</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Codeverse 2.0 isn't just another hackathon. It is a high-octane engineering heist where the smartest minds dismantle real-world friction.
          </p>
        </div>

        {/* Mastermind Dossier Grid */}
        <div className="grid grid-cols-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {/* Story Dossier */}
          <div className="dossier-card glass-panel" style={{ position: 'relative' }}>
            <div className="tape-top" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(255, 30, 66, 0.2)', padding: '0.6rem', borderRadius: '8px', color: '#ff1e42' }}>
                <Skull size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>THE BACKGROUND INTEL</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)' }}>OPERATION BRIEFING</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              {EVENT_DATA.about.story}
            </p>
          </div>

          {/* Execution Strategy */}
          <div className="dossier-card glass-panel" style={{ position: 'relative' }}>
            <div className="tape-top" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(255, 209, 89, 0.2)', padding: '0.6rem', borderRadius: '8px', color: '#ffd159' }}>
                <Target size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>THE EXECUTION DIRECTIVE</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)' }}>36-HOUR PROTOCOL</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              {EVENT_DATA.about.mission}
            </p>
          </div>
        </div>

        {/* 4 Pillars of Operation */}
        <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
          {[
            {
              icon: <Zap size={22} color="#ff1e42" />,
              title: "Rapid Prototyping",
              desc: "From blueprint wireframe to functional production stack in 36 continuous hours."
            },
            {
              icon: <ShieldCheck size={22} color="#00f2fe" />,
              title: "Tier-1 Mentorship",
              desc: "Direct access to lead engineers, VC syndicate scouts, and security auditors."
            },
            {
              icon: <Compass size={22} color="#ffd159" />,
              title: "High-Stake Bounties",
              desc: "Over ₹5 Lakhs in bounties, cloud grants, fast-track hiring, and hardware perks."
            },
            {
              icon: <Users size={22} color="#00f090" />,
              title: "Global Syndicate",
              desc: "Connect with 1,500+ elite builders, designers, and algorithmic architects."
            }
          ].map((pillar, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{pillar.icon}</div>
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.5rem' }}>{pillar.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
