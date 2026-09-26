import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ShieldCheck, Disc as Discord, Download, Home as HomeIcon, CheckCircle2, Copy } from 'lucide-react';

interface SuccessProps {
  formData: any;
  onHomeClick: () => void;
  onPlayClick: () => void;
}

export const Success: React.FC<SuccessProps> = ({ formData, onHomeClick, onPlayClick }) => {
  useEffect(() => {
    // Fire celebratory cyber heist confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff1e42', '#ffd159', '#00f2fe', '#ffffff']
      });
    } catch {
      // ignore
    }
  }, []);

  const clearanceCode = `HEIST-CV2-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <div
      style={{
        paddingTop: 'calc(var(--header-height) + 3rem)',
        paddingBottom: '5rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '750px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '3.5rem 2.5rem',
            border: '2px solid #00f090',
            background: 'linear-gradient(180deg, rgba(14, 28, 22, 0.95) 0%, rgba(9, 10, 15, 0.98) 100%)',
            boxShadow: '0 0 50px rgba(0, 240, 144, 0.25)',
            textAlign: 'center',
            borderRadius: '20px'
          }}
        >
          {/* Success Icon */}
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(0, 240, 144, 0.15)',
              border: '2px solid #00f090',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}
          >
            <ShieldCheck size={38} color="#00f090" />
          </div>

          <span className="badge" style={{ background: 'rgba(0, 240, 144, 0.15)', color: '#00f090', border: '1px solid #00f090', marginBottom: '0.75rem' }}>
            REGISTRATION CONFIRMED // CLEARANCE GRANTED
          </span>

          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            WELCOME TO THE <span style={{ color: '#00f090' }}>SYNDICATE</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Squad <strong style={{ color: '#ffffff' }}>{formData?.teamName || 'OPERATIVE SQUAD'}</strong> has been officially encrypted into the Codeverse 2.0 mainframe.
          </p>

          {/* Clearance Pass Box */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px dashed rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2.5rem',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                OPERATIVE CLEARANCE PASS
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#ffd159', fontWeight: 800 }}>
                {clearanceCode}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: 'var(--text-dim)' }}>LEADER: </span>
                <span style={{ color: '#ffffff' }}>{formData?.leader?.name || 'Operative Leader'}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)' }}>SQUAD SIZE: </span>
                <span style={{ color: '#ffffff' }}>{1 + (formData?.members?.length || 1)} Hackers</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)' }}>TRACK: </span>
                <span style={{ color: '#00f2fe' }}>{formData?.track?.toUpperCase() || 'AGENTIC AI'}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)' }}>STATUS: </span>
                <span style={{ color: '#00f090' }}>CONFIRMED</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '420px', margin: '0 auto' }}>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, #5865F2 0%, #3e48b5 100%)',
                boxShadow: '0 4px 20px rgba(88, 101, 242, 0.4)'
              }}
            >
              <Discord size={18} />
              <span>JOIN SECRET HEIST DISCORD SERVER</span>
            </a>

            <button
              onClick={() => {
                onPlayClick();
                onHomeClick();
              }}
              className="btn btn-secondary"
            >
              <HomeIcon size={16} />
              <span>RETURN TO HOME PAGE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
