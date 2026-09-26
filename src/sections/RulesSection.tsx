import React from 'react';
import { Rules } from '../components/Rules';
import { Sponsors } from '../components/Sponsors';

export const RulesSection: React.FC = () => {
  return (
    <section id="rules-section" className="relative">
      <Rules />
      <Sponsors />
    </section>
  );
};
