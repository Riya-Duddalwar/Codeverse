import React from 'react';
import { Hero } from './Hero';

export const ScrollAnimation: React.FC = () => {
  return (
    <Hero
      onLearnMoreClick={() => {
        const el = document.querySelector('#home-mission');
        el?.scrollIntoView({ behavior: 'smooth' });
      }}
      onRegisterClick={() => {}}
      onPlayClick={() => {}}
    />
  );
};

export default ScrollAnimation;
