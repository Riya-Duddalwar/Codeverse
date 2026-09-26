import React from 'react';
import { EventDetails } from '../components/EventDetails';
import { Timeline } from '../components/Timeline';

export const EventSection: React.FC = () => {
  return (
    <section id="event-section" className="relative">
      <EventDetails />
      <Timeline />
    </section>
  );
};
