import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useFrameAnimation } from '../hooks/useFrameAnimation';
import { Preloader } from './Preloader';
import { eventData } from '../data/eventData';
import { Calendar, Users, Trophy, ArrowRight, ChevronDown, Terminal, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: () => void;
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onLearnMoreClick,
  onRegisterClick,
  onPlayClick
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const [progressState, setProgressState] = useState<number>(0);
  const touchStartYRef = useRef<number | null>(null);
  const isIntroActiveRef = useRef<boolean>(true);
  const rafIdRef = useRef<number | null>(null);

  const {
    canvasRef,
    totalFrames,
    loadedCount,
    isLoaded,
    renderProgress
  } = useFrameAnimation();

  // Animation LERP & Render Loop (Smooth cinematic momentum)
  useEffect(() => {
    let isRunning = true;

    const tick = () => {
      if (!isRunning) return;

      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.12;
        setProgressState(currentProgressRef.current);
        renderProgress(Math.min(1.0, currentProgressRef.current));
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setProgressState(currentProgressRef.current);
        renderProgress(Math.min(1.0, currentProgressRef.current));
      }

      // Check if intro hold buffer has completed to unlock normal page scroll
      if (currentProgressRef.current >= 1.30) {
        isIntroActiveRef.current = false;
      } else {
        isIntroActiveRef.current = true;
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [renderProgress]);

  // Initial draw when first frame is loaded
  useEffect(() => {
    if (loadedCount > 0) {
      renderProgress(0);
    }
  }, [loadedCount, renderProgress]);

  // Mouse Wheel Handler with Sensitivity Normalization & Instant Reverse Scrub
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const isAtTop = window.scrollY <= 10;

      if (isAtTop && isIntroActiveRef.current) {
        e.preventDefault();

        // Normalize delta
        const normalizedDelta = Math.max(-100, Math.min(100, e.deltaY));

        if (normalizedDelta > 0) {
          // Scrolling forward
          targetProgressRef.current = Math.min(1.35, targetProgressRef.current + normalizedDelta * 0.0009);
        } else {
          // Scrolling backward / reverse scrub
          if (targetProgressRef.current > 1.0) {
            // Immediate snap to 1.0 to eliminate dead zone
            targetProgressRef.current = 1.0 + normalizedDelta * 0.0009;
          } else {
            targetProgressRef.current = Math.max(0, targetProgressRef.current + normalizedDelta * 0.0009);
          }
        }
      } else if (isAtTop && !isIntroActiveRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        // Re-engage intro reverse scrub if user scrolled back to top
        e.preventDefault();
        targetProgressRef.current = Math.max(0, 1.0 + Math.max(-100, e.deltaY) * 0.0009);
        isIntroActiveRef.current = true;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Touch Handler for Mobile Viewports
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null || e.touches.length !== 1) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;

      const isAtTop = window.scrollY <= 10;

      if (isAtTop && isIntroActiveRef.current) {
        e.preventDefault();

        if (deltaY > 0) {
          targetProgressRef.current = Math.min(1.35, targetProgressRef.current + deltaY * 0.0022);
        } else {
          if (targetProgressRef.current > 1.0) {
            targetProgressRef.current = 1.0 + deltaY * 0.0022;
          } else {
            targetProgressRef.current = Math.max(0, targetProgressRef.current + deltaY * 0.0022);
          }
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Explore button click handler
  const handleExploreClick = useCallback(() => {
    onPlayClick();
    targetProgressRef.current = Math.min(1.0, targetProgressRef.current + 0.22);
  }, [onPlayClick]);

  // Current frame calculated from clamped progress
  const clampedFrameProgress = Math.min(1.0, Math.max(0, progressState));
  const displayedFrameIndex = Math.min(totalFrames - 1, Math.floor(clampedFrameProgress * (totalFrames - 1)));

  // Reveal Timing calculations:
  // 0.93 - 0.96: Dark cinematic vignette
  const vignetteOpacity = Math.max(0, Math.min(0.92, (progressState - 0.92) / 0.05));
  // 0.94 - 0.97: Logo & badge
  const logoProgress = Math.max(0, Math.min(1, (progressState - 0.93) / 0.05));
  // 0.95 - 0.98: Title
  const titleProgress = Math.max(0, Math.min(1, (progressState - 0.94) / 0.05));
  // 0.96 - 0.99: Description & mission
  const descProgress = Math.max(0, Math.min(1, (progressState - 0.95) / 0.05));
  // 0.97 - 1.00: Date & buttons
  const ctaProgress = Math.max(0, Math.min(1, (progressState - 0.96) / 0.05));

  // Overall right-panel container visibility (NO empty box during early frames)
  const isPanelVisible = progressState >= 0.92;
  const panelOpacity = Math.max(0, Math.min(1, (progressState - 0.92) / 0.06));

  return (
    <div
      id="hero-container"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'var(--color-black)',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* CodeVerse-Inspired Preloader Screen */}
      <Preloader
        loadedCount={loadedCount}
        totalFrames={totalFrames}
        isReady={isLoaded}
      />

      {/* 1. Fullscreen Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 1
        }}
      />

      {/* 2. Dynamic Dark Vignette (Fades in around 0.93 - 0.96) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 35% 50%, transparent 20%, rgba(8, 8, 10, 0.75) 75%, rgba(8, 8, 10, 0.95) 100%)',
          opacity: vignetteOpacity,
          pointerEvents: 'none',
          transition: 'opacity 0.2s ease',
          zIndex: 2
        }}
      />

      {/* 3. Top Mission Status Badge */}
      <div
        style={{
          position: 'absolute',
          top: 'calc(var(--header-height) + 1.25rem)',
          left: '2rem',
          right: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 4,
          pointerEvents: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            className="stamp-badge"
            style={{ fontSize: '0.72rem', padding: '0.25rem 0.75rem' }}
          >
            <Terminal size={12} />
            MISSION INTEL // DJS CODEAI
          </span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            background: 'rgba(8, 8, 10, 0.7)',
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid rgba(244, 240, 232, 0.12)'
          }}
        >
          FRAME: {String(displayedFrameIndex + 1).padStart(3, '0')} / {totalFrames}
        </div>
      </div>

      {/* 4. Bottom "SCROLL TO EXPLORE" Indicator (Visible while progress < 0.92) */}
      {progressState < 0.92 && (
        <div
          onClick={handleExploreClick}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: Math.max(0, 1 - (progressState / 0.88)),
            transition: 'opacity 0.25s ease',
            cursor: 'pointer',
            pointerEvents: 'auto'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              color: 'var(--color-cream)',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <div className="animate-scroll-bob" style={{ color: 'var(--color-red)' }}>
            <ChevronDown size={20} />
          </div>
        </div>
      )}

      {/* 5. Bottom Progress Scrubber Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'rgba(244, 240, 232, 0.08)',
          zIndex: 4
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${Math.min(100, (progressState / 1.0) * 100)}%`,
            background: 'linear-gradient(90deg, #e50914, #ff4d58)',
            boxShadow: '0 0 10px #e50914',
            transition: 'width 0.05s linear'
          }}
        />
      </div>

      {/* 6. RIGHT-SIDE HERO EVENT CONTENT REVEAL (Artwork preserved on LEFT) */}
      {isPanelVisible && (
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            paddingTop: '3.5rem',
            pointerEvents: panelOpacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div
            className="hero-info-panel"
            style={{
              maxWidth: '620px',
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              background: 'rgba(12, 13, 18, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(229, 9, 20, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(229, 9, 20, 0.25)',
              opacity: panelOpacity,
              transform: `translateX(${(1 - panelOpacity) * 40}px)`,
              transition: 'opacity 0.25s ease, transform 0.25s ease'
            }}
          >
            {/* 0.94 - 0.97: DJS CodeAI Logo & Organizer Label */}
            <div
              style={{
                opacity: logoProgress,
                transform: `translateX(${(1 - logoProgress) * 35}px)`,
                filter: `blur(${(1 - logoProgress) * 8}px)`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <img
                src="/CodeAi Logo.png"
                alt="DJS CodeAI"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-red)'
                }}
              >
                DJS CODEAI PRESENTS
              </span>
            </div>

            {/* 0.95 - 0.98: Event Title (CODEVERSE 2.0) */}
            <div
              style={{
                opacity: titleProgress,
                transform: `translateX(${(1 - titleProgress) * 45}px)`,
                filter: `blur(${(1 - titleProgress) * 10}px)`
              }}
            >
              <h1
                className="hero-title-text"
                style={{
                  fontSize: '4.2rem',
                  lineHeight: 0.95,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-cream)',
                  margin: 0
                }}
              >
                CODE<span style={{ color: 'var(--color-red)' }}>VERSE</span>{' '}
                <span
                  style={{
                    fontSize: '2rem',
                    verticalAlign: 'super',
                    color: 'var(--color-red)',
                    fontFamily: 'var(--font-mono)',
                    border: '1.5px solid var(--color-red)',
                    padding: '2px 8px',
                    borderRadius: '6px'
                  }}
                >
                  2.0
                </span>
              </h1>
            </div>

            {/* 0.96 - 0.99: Official Tagline, Supporting Line & Mission */}
            <div
              style={{
                opacity: descProgress,
                transform: `translateX(${(1 - descProgress) * 35}px)`,
                filter: `blur(${(1 - descProgress) * 8}px)`,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--color-cream)',
                  lineHeight: 1.5,
                  letterSpacing: '-0.01em'
                }}
              >
                "{eventData.tagline}"
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  color: 'var(--color-red)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                {eventData.supportingLine}
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '0.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: 'var(--color-cream)',
                  letterSpacing: '0.12em'
                }}
              >
                <span style={{ color: 'var(--color-red)' }}>MISSION:</span> {eventData.mission}
              </div>
            </div>

            {/* 0.97 - 1.00: Date Chip & Key Stats */}
            <div
              style={{
                opacity: ctaProgress,
                transform: `translateX(${(1 - ctaProgress) * 30}px)`,
                filter: `blur(${(1 - ctaProgress) * 6}px)`,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.85rem 1rem',
                background: 'rgba(244, 240, 232, 0.05)',
                border: '1px solid rgba(244, 240, 232, 0.12)',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-cream)' }}>
                <Calendar size={16} color="#e50914" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800 }}>
                  {eventData.date}
                </span>
              </div>
              <span style={{ color: 'rgba(244, 240, 232, 0.2)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-muted)' }}>
                <Trophy size={15} color="#e50914" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {eventData.prizePool} Prize Pool
                </span>
              </div>
              <span style={{ color: 'rgba(244, 240, 232, 0.2)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-muted)' }}>
                <Users size={15} color="#f4f0e8" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {eventData.stats.teams} Teams ({eventData.stats.participantsPerTeam}/team)
                </span>
              </div>
            </div>

            {/* 0.97 - 1.00: CTA Action Buttons */}
            <div
              className="hero-buttons-wrapper"
              style={{
                opacity: ctaProgress,
                transform: `translateX(${(1 - ctaProgress) * 25}px)`,
                filter: `blur(${(1 - ctaProgress) * 5}px)`,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '0.25rem'
              }}
            >
              <button
                onClick={() => {
                  onPlayClick();
                  onRegisterClick();
                }}
                className="btn btn-primary shimmer-effect"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '0.95rem'
                }}
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => {
                  onPlayClick();
                  targetProgressRef.current = 1.35;
                  onLearnMoreClick();
                }}
                className="btn btn-secondary"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '0.95rem'
                }}
              >
                <span>LEARN MORE</span>
                <ChevronDown size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
