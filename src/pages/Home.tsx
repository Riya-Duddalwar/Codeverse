import React from 'react';
import { Hero } from '../components/Hero';
import { HomeMission } from '../components/HomeMission';
import { AboutSection } from '../components/AboutSection';
import { EventOverview } from '../components/EventOverview';
import { StatsSection } from '../components/StatsSection';
import { TimelineSection } from '../components/TimelineSection';
import { PhasesSection } from '../components/PhasesSection';
import { DomainsSection } from '../components/DomainsSection';
import { PrizesSection } from '../components/PrizesSection';
import { PartnershipSection } from '../components/PartnershipSection';
import { FAQSection } from '../components/FAQSection';

interface HomeProps {
  onLearnMoreClick: () => void;
  onRegisterClick: () => void;
  onPlayClick: () => void;
  onOpenPartnerModal?: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onLearnMoreClick,
  onRegisterClick,
  onPlayClick,
  onOpenPartnerModal
}) => {
  return (
    <main>
      {/* 1. CINEMATIC HERO EXPERIENCE (SCROLL-CONTROLLED FRAME ANIMATION) */}
      <Hero
        onLearnMoreClick={onLearnMoreClick}
        onRegisterClick={onRegisterClick}
        onPlayClick={onPlayClick}
      />

      {/* 2. HOME MISSION SECTION ("DETECT, DEBUG, REBUILD, RESTORE") */}
      <HomeMission
        onPlayClick={onPlayClick}
        onRegisterClick={onRegisterClick}
      />

      {/* 3. ABOUT CODEAI SECTION */}
      <AboutSection onPlayClick={onPlayClick} />

      {/* 4. EVENT OVERVIEW SECTION */}
      <EventOverview
        onPlayClick={onPlayClick}
        onRegisterClick={onRegisterClick}
      />

      {/* 5. EVENT STATS SECTION */}
      <StatsSection onPlayClick={onPlayClick} />

      {/* 6. TIMELINE SECTION */}
      <TimelineSection onPlayClick={onPlayClick} />

      {/* 7. PHASES SECTION (PHASE 01 & PHASE 02) */}
      <PhasesSection
        onPlayClick={onPlayClick}
        onRegisterClick={onRegisterClick}
      />

      {/* 8. DOMAINS SECTION */}
      <DomainsSection onPlayClick={onPlayClick} />

      {/* 9. PRIZES SECTION */}
      <PrizesSection onPlayClick={onPlayClick} />

      {/* 10. BECOME A PARTNER SECTION */}
      <PartnershipSection
        onPlayClick={onPlayClick}
        onOpenPartnerModal={onOpenPartnerModal}
      />

      {/* 11. FAQ SECTION */}
      <FAQSection onPlayClick={onPlayClick} />
    </main>
  );
};
