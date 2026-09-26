import React from 'react';
import { RegistrationCTA } from '../components/RegistrationCTA';

interface RegisterSectionProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const RegisterSection: React.FC<RegisterSectionProps> = ({ onRegisterClick, onPlayClick }) => {
  return (
    <section id="register-section" className="relative">
      <RegistrationCTA onRegisterClick={onRegisterClick} onPlayClick={onPlayClick} />
    </section>
  );
};
