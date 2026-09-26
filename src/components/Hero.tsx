import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, Terminal, Calendar, MapPin, ArrowRight, Play, FileDown } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface HeroProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onPlayClick }) => {
  // Countdown Timer to Hackathon start (e.g., Oct 24, 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 36,
    seconds: 52
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 30, 66, 0.15) 0%, rgba(255, 30, 66, 0.02) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Mission Status Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span className="badge badge-crimson animate-pulse-glow" style={{ fontSize: '0.85rem', padding: '0.4rem 1.2rem' }}>
            <Terminal size={14} />
            VAULT STATUS: BREACH PROTOCOL INITIALIZED
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="heist-hero-title animate-glitch"
          style={{
            fontSize: '4.8rem',
            lineHeight: 1.05,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(180deg, #ffffff 0%, #d1d5db 60%, #ff1e42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 35px rgba(255, 30, 66, 0.35))'
          }}
        >
          CODEVERSE 2.0
        </h1>

        {/* Subtitle / Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--accent-gold)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          {EVENT_DATA.subtitle} • {EVENT_DATA.tagline}
        </p>

        {/* Event Quick Meta (Date & Location) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} color="#ff1e42" />
            <span>{EVENT_DATA.date}</span>
          </div>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} color="#ffd159" />
            <span>{EVENT_DATA.location}</span>
          </div>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={16} color="#00f2fe" />
            <span>{EVENT_DATA.totalPrizePool} IN BOUNTIES</span>
          </div>
        </div>

        {/* Heist Countdown Timer Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '560px',
            margin: '0 auto 2.5rem auto',
            padding: '1.25rem 2rem',
            border: '1px solid rgba(255, 30, 66, 0.3)',
            background: 'rgba(15, 17, 26, 0.8)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent-crimson)',
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
              fontWeight: 700
            }}
          >
            T-MINUS TO MAINFRAME INFILTRATION
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
            {[
              { val: timeLeft.days, label: 'DAYS' },
              { val: timeLeft.hours, label: 'HOURS' },
              { val: timeLeft.minutes, label: 'MINUTES' },
              { val: timeLeft.seconds, label: 'SECONDS' }
            ].map((unit) => (
              <div key={unit.label} style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                  {String(unit.val).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', marginTop: '4px', letterSpacing: '0.1em' }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
          <button
            onClick={() => {
              onPlayClick();
              onRegisterClick();
            }}
            className="btn btn-primary laser-shine"
            style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            <span>JOIN THE SQUAD / REGISTER</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="/rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onPlayClick}
            className="btn btn-secondary"
            style={{ padding: '1rem 2rem', fontSize: '1rem' }}
          >
            <FileDown size={18} color="#ffd159" />
            <span>MISSION DOSSIER (PDF)</span>
          </a>
        </div>

        {/* Heist Metrics Row */}
        <div className="grid grid-cols-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {[
            { label: 'BOUNTY VAULT', value: '₹5,00,000+', icon: '💎', sub: 'Cash & Hardware' },
            { label: 'SQUAD SIZE', value: '2 - 4 HACKERS', icon: '👥', sub: 'Cross-Domain' },
            { label: 'DURATION', value: '36 HOURS', icon: '⏱️', sub: 'Non-stop Sprint' },
            { label: 'GLOBAL ACCESS', value: 'HYBRID', icon: '🌐', sub: 'Onsite + Remote' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{stat.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-crimson)', fontWeight: 700, letterSpacing: '0.1em' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
