import React from 'react';
import { Hero } from '../components/Hero';

interface HeistIntroProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
}

export const HeistIntro: React.FC<HeistIntroProps> = ({ onRegisterClick, onPlayClick }) => {
  return (
    <div className="relative">
      <Hero onRegisterClick={onRegisterClick} onPlayClick={onPlayClick} />
    </div>
  );
};
