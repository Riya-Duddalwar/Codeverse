import React from 'react';
import { eventData } from '../data/eventData';
import { ArrowRight, ShieldCheck, FileText, ExternalLink } from 'lucide-react';

interface RegistrationFormProps {
  onSuccess?: (data: any) => void;
  onPlayClick?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onPlayClick }) => {
  const handleOpenUnstop = () => {
    if (onPlayClick) onPlayClick();
    if (eventData.registrationUrl) {
      window.open(eventData.registrationUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("The official Unstop registration link will be updated in src/data/eventData.ts once live.");
    }
  };

  return (
    <div className="dossier-panel" style={{ maxWidth: '650px', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
      <span className="stamp-badge" style={{ marginBottom: '1.25rem' }}>
        <ShieldCheck size={15} />
        OFFICIAL REGISTRATION // UNSTOP
      </span>

      <h2 style={{ fontSize: '2.4rem', color: 'var(--color-cream)', textTransform: 'uppercase', marginBottom: '1rem' }}>
        CODEVERSE 2.0 REGISTRATION
      </h2>

      <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
        Official team registration (₹99 per team of 3) will be processed through the official Unstop platform.
      </p>

      <button
        onClick={handleOpenUnstop}
        className="btn btn-primary"
        style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
      >
        <span>PROCEED TO UNSTOP REGISTRATION</span>
        <ExternalLink size={16} />
      </button>
    </div>
  );
};

export default RegistrationForm;
