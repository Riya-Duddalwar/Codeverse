import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, Menu, X, FileText, Lock } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavbarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  onPlayClick: () => void;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlaying,
  onToggleMusic,
  onPlayClick,
  onNavigate,
  currentPage = 'home'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollProgress } = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Vault Tracks', href: '#tracks' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Bounties', href: '#prizes' },
    { label: 'Protocols', href: '#rules' },
    { label: 'Syndicate', href: '#sponsors' },
  ];

  const handleLinkClick = (href: string) => {
    onPlayClick();
    setMobileMenuOpen(false);
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        background: isScrolled ? 'rgba(9, 10, 15, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 30, 66, 0.2)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Scroll Progress Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress * 100}%`,
          background: 'linear-gradient(90deg, #ff1e42, #ffd159)',
          boxShadow: '0 0 8px #ff1e42',
          transition: 'width 0.1s linear'
        }}
      />

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <div
          onClick={() => {
            onPlayClick();
            if (onNavigate) onNavigate('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #ff1e42 0%, #750015 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 30, 66, 0.5)'
            }}
          >
            <Shield size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '0.05em', color: '#ffffff' }}>
                CODE<span style={{ color: '#ff1e42' }}>VERSE</span>
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  color: '#ffd159',
                  background: 'rgba(255, 209, 89, 0.15)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 209, 89, 0.3)'
                }}
              >
                2.0
              </span>
            </div>
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
              OPERATION: DIGITAL VAULT
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff1e42')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Ambient Heist Music Toggle */}
          <button
            onClick={() => {
              onPlayClick();
              onToggleMusic();
            }}
            title={isPlaying ? 'Mute Heist Soundtrack' : 'Play Heist Soundtrack'}
            className="btn-secondary"
            style={{
              padding: '0.5rem 0.8rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderColor: isPlaying ? 'rgba(255, 30, 66, 0.6)' : 'rgba(255, 255, 255, 0.15)'
            }}
          >
            {isPlaying ? (
              <>
                <Volume2 size={16} color="#ff1e42" />
                <span className="hide-mobile" style={{ color: '#ff1e42', fontFamily: 'var(--font-mono)' }}>AUDIO: ON</span>
              </>
            ) : (
              <>
                <VolumeX size={16} color="var(--text-dim)" />
                <span className="hide-mobile" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>AUDIO: OFF</span>
              </>
            )}
          </button>

          {/* Rulebook Download Button */}
          <a
            href="/rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onPlayClick}
            className="btn-secondary hide-mobile"
            style={{
              padding: '0.5rem 0.8rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <FileText size={15} color="#ffd159" />
            <span style={{ fontFamily: 'var(--font-mono)' }}>RULEBOOK</span>
          </a>

          {/* Register CTA */}
          <button
            onClick={() => {
              onPlayClick();
              if (onNavigate) onNavigate('register');
            }}
            className="btn btn-primary"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem'
            }}
          >
            <Lock size={14} />
            <span>JOIN HEIST</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => {
              onPlayClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="show-mobile"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              padding: '0.5rem',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(9, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            gap: '1.5rem',
            zIndex: 999
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              style={{
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.75rem'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onPlayClick}
            className="btn btn-secondary"
            style={{ marginTop: '1rem' }}
          >
            <FileText size={18} />
            DOWNLOAD RULEBOOK DOSSIER (PDF)
          </a>
        </div>
      )}
    </header>
  );
};
