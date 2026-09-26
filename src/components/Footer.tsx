import React from 'react';
import { Shield, Github, Twitter, Disc as Discord, Linkedin, FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  onPlayClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlayClick }) => {
  const scrollToTop = () => {
    if (onPlayClick) onPlayClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#07080c',
        borderTop: '1px solid rgba(255, 30, 66, 0.2)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="grid-cols-4"
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #ff1e42 0%, #750015 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Shield size={20} color="#ffffff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.25rem', color: '#ffffff' }}>
                CODE<span style={{ color: '#ff1e42' }}>VERSE</span> 2.0
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '320px' }}>
              The premier cyber heist hackathon assembling the sharpest minds to crack modern computing frontiers.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Discord size={18} />, href: 'https://discord.gg' },
                { icon: <Github size={18} />, href: 'https://github.com' },
                { icon: <Twitter size={18} />, href: 'https://x.com' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ff1e42';
                    e.currentTarget.style.borderColor = '#ff1e42';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffd159', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.1em' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Mission', 'Tracks', 'Timeline', 'Bounties', 'Rules'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffd159', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.1em' }}>
              RESOURCES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a
                  href="/rulebook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <FileText size={14} color="#ffd159" />
                  <span>Rulebook (PDF)</span>
                </a>
              </li>
              <li>
                <a href="#rules" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#sponsors" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Sponsor Dossier
                </a>
              </li>
              <li>
                <a href="mailto:contact@codeverse.hack" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Support & Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Heist Quote & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-crimson)', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>
                SYNDICATE MOTTO
              </h4>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#ffffff', fontSize: '0.95rem' }}>
                "In code we trust, the mainframe we breach."
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{
                alignSelf: 'flex-start',
                padding: '0.5rem 1rem',
                fontSize: '0.8rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1rem'
              }}
            >
              <ArrowUp size={14} />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>© 2026 CODEVERSE 2.0. ALL RIGHTS RESERVED. CLASSIFIED OPERATION.</div>
          <div>ENCRYPTED WITH SHA-256 // ZERO-KNOWLEDGE READY</div>
        </div>
      </div>
    </footer>
  );
};
