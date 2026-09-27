import React from 'react';
import { eventData } from '../data/eventData';
import { ArrowUp, FileText, ArrowRight, Mail, Globe, Heart } from 'lucide-react';

interface FooterProps {
  onPlayClick?: () => void;
  onOpenModal: (type: 'register' | 'rulebook', url?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlayClick, onOpenModal }) => {
  const scrollToTop = () => {
    if (onPlayClick) onPlayClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero-container' },
    { label: 'About CodeAI', href: '#about' },
    { label: 'Mission', href: '#home-mission' },
    { label: 'Event Overview', href: '#event-overview' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Phases', href: '#phases' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Partnership', href: '#partnership' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <footer
      style={{
        background: '#060608',
        borderTop: '1.5px solid rgba(229, 9, 20, 0.3)',
        padding: '5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1.2fr',
            gap: '3rem',
            marginBottom: '4rem'
          }}
          className="grid-cols-4"
        >
          {/* Col 1: Brand & Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src="/CodeAi Logo.png"
                alt="DJS CodeAI Logo"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(229, 9, 20, 0.4))'
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.35rem',
                    letterSpacing: '0.06em',
                    color: 'var(--color-cream)'
                  }}
                >
                  CODE<span style={{ color: 'var(--color-red)' }}>VERSE</span> 2.0
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted)', letterSpacing: '0.12em' }}>
                  DJS CodeAI Presents
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '340px' }}>
              {eventData.about.description}
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="stamp-badge" style={{ fontSize: '0.72rem' }}>
                MISSION: {eventData.mission}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-red)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                letterSpacing: '0.12em',
                fontWeight: 800
              }}
            >
              // NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onPlayClick) onPlayClick();
                      const target = document.querySelector(item.href);
                      target?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      color: 'var(--color-muted)',
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontFamily: 'var(--font-primary)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Event Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-red)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                letterSpacing: '0.12em',
                fontWeight: 800
              }}
            >
              // RESOURCES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenModal('rulebook', eventData.rulebookUrl);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-muted)',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                >
                  <FileText size={14} color="#e50914" />
                  <span>Rulebook</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenModal('register', eventData.registrationUrl);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-muted)',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                >
                  <ArrowRight size={14} color="#e50914" />
                  <span>Registration Portal</span>
                </button>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: 'var(--color-muted)', fontSize: '0.88rem', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                >
                  FAQ & Inquiries
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${eventData.partnership.contactEmail}`}
                  style={{ color: 'var(--color-muted)', fontSize: '0.88rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                >
                  <Mail size={14} />
                  <span>Contact Organizing Team</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Return to Top & Motto */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--color-cream)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.12em',
                  fontWeight: 800
                }}
              >
                EVENT DATE
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: 'var(--color-red)'
                }}
              >
                {eventData.date}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
                {eventData.stats.teams} Teams • ₹99 Registration
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{
                alignSelf: 'flex-start',
                padding: '0.6rem 1.25rem',
                fontSize: '0.8rem',
                marginTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <ArrowUp size={15} />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(244, 240, 232, 0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-dim)'
          }}
        >
          <div>
            © {eventData.year} {eventData.name}. ORGANIZED BY {eventData.organizer.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div>
            "{eventData.tagline}"
          </div>
        </div>
      </div>
    </footer>
  );
};
