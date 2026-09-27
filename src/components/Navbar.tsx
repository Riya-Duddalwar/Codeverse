import React, { useState, useEffect } from 'react';
import { eventData } from '../data/eventData';
import { Volume2, VolumeX, Menu, X, FileText, ArrowRight } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavbarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  onPlayClick: () => void;
  onOpenModal: (type: 'register' | 'rulebook', url?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlaying,
  onToggleMusic,
  onPlayClick,
  onOpenModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero-container');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollProgress } = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy for active nav item
      const sections = ['faq', 'prizes', 'phases', 'timeline', 'about', 'hero-container'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero-container', id: 'hero-container' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'TIMELINE', href: '#timeline', id: 'timeline' },
    { label: 'PHASES', href: '#phases', id: 'phases' },
    { label: 'PRIZES', href: '#prizes', id: 'prizes' },
    { label: "FAQ'S", href: '#faq', id: 'faq' }
  ];

  const handleNavClick = (href: string, id: string) => {
    onPlayClick();
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (href === '#hero-container') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    onPlayClick();
    if (eventData.registrationUrl && eventData.registrationUrl.trim().length > 0) {
      window.open(eventData.registrationUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenModal('register', eventData.registrationUrl);
    }
  };

  const handleRulebook = () => {
    onPlayClick();
    if (eventData.rulebookUrl && eventData.rulebookUrl.trim().length > 0) {
      window.open(eventData.rulebookUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenModal('rulebook', eventData.rulebookUrl);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none'
      }}
    >
      {/* Floating Pill Nav Container */}
      <div
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1200px',
          height: '62px',
          borderRadius: '9999px',
          background: isScrolled
            ? 'rgba(10, 10, 14, 0.88)'
            : 'rgba(14, 15, 20, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(244, 240, 232, 0.14)',
          boxShadow: isScrolled
            ? '0 12px 35px rgba(0, 0, 0, 0.65), 0 0 1px rgba(229, 9, 20, 0.35)'
            : '0 8px 25px rgba(0, 0, 0, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 0.85rem 0 1.25rem',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}
      >
        {/* Subtle Scroll Progress Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '20px',
            right: '20px',
            height: '1.5px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.06)',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${scrollProgress * 100}%`,
              background: 'linear-gradient(90deg, #e50914, #ff4d58)',
              boxShadow: '0 0 8px #e50914',
              transition: 'width 0.1s linear'
            }}
          />
        </div>

        {/* LEFT: Official DJS CodeAI Logo */}
        <div
          onClick={() => handleNavClick('#hero-container', 'hero-container')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          title="DJS CodeAI - CodeVerse 2.0"
        >
          <img
            src="/CodeAi Logo.png"
            alt="DJS CodeAI Official Logo"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.35))',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                color: 'var(--color-cream)',
                lineHeight: 1.1
              }}
            >
              CODE<span style={{ color: 'var(--color-red)' }}>VERSE</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              DJS CodeAI
            </span>
          </div>
        </div>

        {/* CENTER: Navigation Links (HOME, ABOUT, TIMELINE, PHASES, PRIZES, FAQ'S) */}
        <nav
          className="hide-desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
                style={{
                  color: isActive ? 'var(--color-red)' : 'var(--color-cream)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  padding: '0.35rem 0',
                  textShadow: isActive ? '0 0 10px rgba(229, 9, 20, 0.6)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-red)';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(229, 9, 20, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-cream)';
                    e.currentTarget.style.textShadow = 'none';
                  }
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '2px',
                      background: 'var(--color-red)',
                      borderRadius: '2px',
                      boxShadow: '0 0 6px var(--color-red)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Persistent CTAs & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Audio Soundtrack Toggle */}
          <button
            onClick={() => {
              onPlayClick();
              onToggleMusic();
            }}
            title={isPlaying ? 'Mute Soundtrack' : 'Play Soundtrack'}
            style={{
              background: isPlaying ? 'rgba(229, 9, 20, 0.15)' : 'rgba(244, 240, 232, 0.05)',
              border: isPlaying ? '1px solid rgba(229, 9, 20, 0.5)' : '1px solid var(--color-border)',
              borderRadius: '999px',
              padding: '0.45rem 0.65rem',
              color: isPlaying ? 'var(--color-red)' : 'var(--color-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 700
            }}
          >
            {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span className="hide-mobile">{isPlaying ? 'AUDIO ON' : 'AUDIO OFF'}</span>
          </button>

          {/* Persistent RULEBOOK Button */}
          <button
            onClick={handleRulebook}
            className="hide-mobile"
            style={{
              background: 'rgba(244, 240, 232, 0.06)',
              border: '1px solid rgba(244, 240, 232, 0.2)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(244, 240, 232, 0.14)';
              e.currentTarget.style.borderColor = 'rgba(244, 240, 232, 0.4)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(244, 240, 232, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(244, 240, 232, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FileText size={13} color="#f4f0e8" />
            <span>RULEBOOK</span>
          </button>

          {/* Persistent REGISTER Button */}
          <button
            onClick={handleRegister}
            style={{
              background: 'var(--color-red)',
              border: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              padding: '0.55rem 1.25rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 2px 14px rgba(229, 9, 20, 0.45)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-red-bright)';
              e.currentTarget.style.boxShadow = '0 4px 22px rgba(229, 9, 20, 0.75)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-red)';
              e.currentTarget.style.boxShadow = '0 2px 14px rgba(229, 9, 20, 0.45)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>REGISTER</span>
            <ArrowRight size={13} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              onPlayClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="show-mobile-nav"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-cream)',
              padding: '0.4rem',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'calc(1.25rem + 70px)',
            left: '1rem',
            right: '1rem',
            background: 'rgba(12, 13, 18, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid var(--color-border-red)',
            borderRadius: '18px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85)',
            pointerEvents: 'auto',
            zIndex: 1001
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
                style={{
                  color: isActive ? 'var(--color-red)' : 'var(--color-cream)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  paddingBottom: '0.6rem',
                  borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
                }}
              >
                {link.label}
              </a>
            );
          })}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={handleRulebook}
              className="btn btn-secondary"
              style={{ width: '100%', fontSize: '0.85rem', padding: '0.75rem' }}
            >
              <FileText size={15} />
              RULEBOOK
            </button>
            <button
              onClick={handleRegister}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '0.85rem', padding: '0.75rem' }}
            >
              REGISTER FOR CODEVERSE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
