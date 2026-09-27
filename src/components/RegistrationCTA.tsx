import React from 'react';
import { eventData } from '../data/eventData';
import { ArrowRight } from 'lucide-react';

interface RegistrationCTAProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onRegisterClick, onPlayClick }) => {
  return (
    <section className="section-padding" style={{ background: 'var(--color-black)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', color: 'var(--color-cream)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          JOIN CODEVERSE 2.0
        </h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
          {eventData.date} • {eventData.stats.teams} Teams • {eventData.prizePool} Prize Pool
        </p>
        <button
          onClick={() => {
            onPlayClick();
            onRegisterClick();
          }}
          className="btn btn-primary"
        >
          <span>REGISTER NOW</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default RegistrationCTA;
