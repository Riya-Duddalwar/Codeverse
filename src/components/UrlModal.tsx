import React from 'react';
import { FileText, ExternalLink, X, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface UrlModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'register' | 'rulebook' | 'partner';
  targetUrl?: string;
  onPlayClick?: () => void;
}

export const UrlModal: React.FC<UrlModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
  targetUrl,
  onPlayClick
}) => {
  if (!isOpen) return null;

  const isUrlAvailable = Boolean(targetUrl && targetUrl.trim().length > 0 && targetUrl !== '#');

  const handleOpenExternal = () => {
    if (onPlayClick) onPlayClick();
    if (isUrlAvailable && targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 5, 8, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onClick={() => {
        if (onPlayClick) onPlayClick();
        onClose();
      }}
    >
      <div
        className="dossier-panel"
        style={{
          maxWidth: '520px',
          width: '100%',
          background: 'var(--color-charcoal-card)',
          border: '1.5px solid var(--color-border-red)',
          boxShadow: 'var(--shadow-red-glow-lg)',
          position: 'relative',
          padding: '2.5rem 2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tape decoration */}
        <div className="paper-tape" />

        {/* Close Button */}
        <button
          onClick={() => {
            if (onPlayClick) onPlayClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(244, 240, 232, 0.08)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-cream)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Icon & Stamp */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <span className="stamp-badge">
            <ShieldAlert size={14} />
            OFFICIAL DOSSIER
          </span>
        </div>

        <h3 style={{ fontSize: '1.75rem', color: 'var(--color-cream)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          {title}
        </h3>

        {isUrlAvailable ? (
          <div>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              You are now navigating to the official {type === 'register' ? 'Unstop registration portal' : 'CodeVerse 2.0 document'} for DJS CodeAI.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleOpenExternal}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <span>PROCEED TO LINK</span>
                <ExternalLink size={16} />
              </button>
              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onClose();
                }}
                className="btn btn-secondary"
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                background: 'rgba(229, 9, 20, 0.08)',
                border: '1px solid rgba(229, 9, 20, 0.3)',
                borderRadius: '8px',
                padding: '1.25rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="#e50914" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.25rem' }}>
                    {type === 'register' ? 'REGISTRATION LINK PENDING RELEASE' : type === 'rulebook' ? 'RULEBOOK PENDING RELEASE' : 'PARTNERSHIP DESK'}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                    {type === 'register'
                      ? 'The official Unstop registration URL will be configured in `src/data/eventData.ts` as soon as registrations go live. Entry is ₹99 per team of 3.'
                      : type === 'rulebook'
                      ? 'The official CodeVerse 2.0 Rulebook will be linked in `src/data/eventData.ts` once published by the DJS CodeAI organizing committee.'
                      : 'Reach out to DJS CodeAI at djscodeai@gmail.com to discuss partnership, mentorship, or challenge sponsorship.'}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                onClose();
              }}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              ACKNOWLEDGE // CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
