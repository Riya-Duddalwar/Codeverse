import React from 'react';
import { RegistrationForm } from '../components/RegistrationForm';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface RegisterProps {
  onBack: () => void;
  onSuccess: (data: any) => void;
  onPlayClick: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onBack, onSuccess, onPlayClick }) => {
  return (
    <div
      style={{
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '5rem',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Back Button */}
        <button
          onClick={() => {
            onPlayClick();
            onBack();
          }}
          className="btn btn-secondary"
          style={{
            marginBottom: '2rem',
            padding: '0.6rem 1.2rem',
            fontSize: '0.85rem'
          }}
        >
          <ArrowLeft size={16} />
          <span>RETURN TO MISSION CONTROL</span>
        </button>

        {/* Registration Form Component */}
        <RegistrationForm onSuccess={onSuccess} onPlayClick={onPlayClick} />
      </div>
    </div>
  );
};
