import React from 'react';
import { Hero } from '../components/Hero';

interface HeistIntroProps {
  onRegisterClick: () => void;
  onPlayClick: () => void;
  onLearnMoreClick?: () => void;
}

export const HeistIntro: React.FC<HeistIntroProps> = ({
  onRegisterClick,
  onPlayClick,
  onLearnMoreClick = () => {
    const el = document.querySelector('#home-mission');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}) => {
  return (
    <div className="relative">
      <Hero
        onRegisterClick={onRegisterClick}
        onPlayClick={onPlayClick}
        onLearnMoreClick={onLearnMoreClick}
      />
    </div>
  );
};
