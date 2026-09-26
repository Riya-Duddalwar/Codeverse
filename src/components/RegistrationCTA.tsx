import React from 'react';
import { ShieldAlert, ArrowRight, Sparkles, Check } from 'lucide-react';

interface RegistrationCTAProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onRegisterClick, onPlayClick }) => {
  return (
    <section id="register" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Heist Visual */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255, 30, 66, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '4rem 3rem',
            border: '2px solid rgba(255, 30, 66, 0.5)',
            background: 'linear-gradient(180deg, rgba(20, 22, 34, 0.9) 0%, rgba(12, 13, 20, 0.95) 100%)',
            boxShadow: '0 0 50px rgba(255, 30, 66, 0.25)',
            textAlign: 'center',
            borderRadius: '24px'
          }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
            <span className="badge badge-crimson" style={{ fontSize: '0.85rem' }}>
              <ShieldAlert size={14} />
              SLOTS ARE LIMITED // SQUAD REGISTRATION OPEN
            </span>
          </div>

          <h2
            style={{
              fontSize: '3.5rem',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '1rem',
              color: '#ffffff'
            }}
          >
            READY TO JOIN THE <span className="text-crimson">HEIST OF THE DECADE?</span>
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            Assemble your crew, select your track, and prepare for 36 hours of relentless innovation, sleepless hacking, and massive loot.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Check size={16} color="#00f090" />
              <span>100% Free Entry</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Check size={16} color="#00f090" />
              <span>₹5L+ Prize Pool</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Check size={16} color="#00f090" />
              <span>Swag Kits for all Finalists</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Check size={16} color="#00f090" />
              <span>Global Hybrid Format</span>
            </div>
          </div>

          <button
            onClick={() => {
              onPlayClick();
              onRegisterClick();
            }}
            className="btn btn-primary laser-shine"
            style={{
              padding: '1.2rem 3.5rem',
              fontSize: '1.15rem',
              boxShadow: '0 0 35px rgba(255, 30, 66, 0.6)'
            }}
          >
            <span>INFILTRATE & REGISTER NOW</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
