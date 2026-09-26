import React from 'react';
import { HeistIntro } from '../sections/HeistIntro';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { MissionSection } from '../sections/MissionSection';
import { EventSection } from '../sections/EventSection';
import { PrizeSection } from '../sections/PrizeSection';
import { RulesSection } from '../sections/RulesSection';
import { RegisterSection } from '../sections/RegisterSection';

interface HomeProps {
  onNavigate: (page: string) => void;
  onPlayClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onPlayClick }) => {
  return (
    <main>
      <HeistIntro
        onRegisterClick={() => onNavigate('register')}
        onPlayClick={onPlayClick}
      />
      <ScrollAnimation />
      <MissionSection />
      <EventSection />
      <PrizeSection />
      <RulesSection />
      <RegisterSection
        onRegisterClick={() => onNavigate('register')}
        onPlayClick={onPlayClick}
      />
    </main>
  );
};
