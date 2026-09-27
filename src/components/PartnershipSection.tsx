import React from 'react';
import { eventData } from '../data/eventData';
import { Handshake, Trophy, Award, Users, FileCode, Mail, ArrowRight } from 'lucide-react';

interface PartnershipSectionProps {
  onPlayClick?: () => void;
  onOpenPartnerModal?: () => void;
}

const oppIcons = [
  <Trophy size={24} color="#e50914" />,
  <Award size={24} color="#f0b429" />,
  <Users size={24} color="#e50914" />,
  <FileCode size={24} color="#f4f0e8" />
];

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  onPlayClick,
  onOpenPartnerModal
}) => {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(244, 240, 232, 0.08)'
      }}
    >
      {/* Target anchors for #partner and legacy #partnership */}
      <div id="partner" style={{ position: 'absolute', top: 0, left: 0 }} />
      <div id="partnership" style={{ position: 'absolute', top: 0, left: 0 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <span className="stamp-badge" style={{ marginBottom: '1rem' }}>
            <Handshake size={14} />
            SYNDICATE COLLABORATION
          </span>
          <h2
            style={{
              fontSize: '3.4rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'var(--color-cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            {eventData.partnership.heading}
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--color-cream)',
              lineHeight: 1.6
            }}
          >
            "{eventData.partnership.message}"
          </p>
        </div>

        {/* 4 Partnership Opportunities Grid */}
        <div className="grid grid-cols-4" style={{ gap: '1.75rem', marginBottom: '4rem' }}>
          {eventData.partnership.opportunities.map((opp, idx) => (
            <div
              key={opp.title}
              className="dossier-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.2rem 1.75rem',
                position: 'relative'
              }}
            >
              <div className="pushpin-node" style={{ top: '12px', right: '12px' }} />

              <div>
                <div
                  style={{
                    background: 'rgba(244, 240, 232, 0.05)',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    width: 'fit-content',
                    marginBottom: '1.25rem'
                  }}
                >
                  {oppIcons[idx] || <Handshake size={24} color="#e50914" />}
                </div>

                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 900,
                    color: 'var(--color-cream)',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {opp.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  {opp.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-dim)'
                }}
              >

              </div>
            </div>
          ))}
        </div>

        {/* Big CTA Statement Card */}
        <div
          className="evidence-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem 2rem',
            position: 'relative',
            background: 'var(--color-cream-card)'
          }}
        >
          <div className="paper-tape paper-tape-left" />
          <div className="paper-tape paper-tape-right" />

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 900,
              color: 'var(--color-text-dark)',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            PARTNER WITH US.<br />
            <span style={{ color: 'var(--color-red)' }}>POWER THE NEXT BIG IDEA.</span>
          </h3>

          <p style={{ color: '#4a4843', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Collaborate with DJS CodeAI for CodeVerse 2.0 to connect with 100+ aspiring technologists, mentor top squads, and shape technical innovation.
          </p>

          <a
            href={`mailto:${eventData.partnership.contactEmail}?subject=CodeVerse%202.0%20Partnership%20Inquiry`}
            onClick={() => {
              if (onPlayClick) onPlayClick();
            }}
            className="btn btn-primary"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem'
            }}
          >
            <Mail size={18} />
            <span>CONNECT WITH DJS CODEAI</span>
          </a>
        </div>
      </div>
    </section>
  );
};
