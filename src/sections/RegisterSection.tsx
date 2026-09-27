import React from 'react';
import { RegistrationCTA } from '../components/RegistrationCTA';

interface RegisterSectionProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const RegisterSection: React.FC<RegisterSectionProps> = ({ onRegisterClick, onPlayClick }) => {
  return <RegistrationCTA onRegisterClick={onRegisterClick} onPlayClick={onPlayClick} />;
};
