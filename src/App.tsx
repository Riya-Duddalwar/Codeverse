import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { Home } from './pages/Home';
import { UrlModal } from './components/UrlModal';
import { useAudio } from './hooks/useAudio';
import { eventData } from './data/eventData';

export const App: React.FC = () => {
  const { isPlaying, toggleMusic, playClick } = useAudio();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'register' | 'rulebook' | 'partner';
    targetUrl?: string;
  }>({
    isOpen: false,
    title: '',
    type: 'register',
    targetUrl: ''
  });

  const handleOpenModal = (type: 'register' | 'rulebook' | 'partner', url?: string) => {
    const title =
      type === 'register'
        ? 'OFFICIAL REGISTRATION PORTAL'
        : type === 'rulebook'
        ? 'CODEVERSE 2.0 RULEBOOK'
        : 'PARTNERSHIP DESK';

    setModalState({
      isOpen: true,
      title,
      type,
      targetUrl: url || (type === 'register' ? eventData.registrationUrl : eventData.rulebookUrl)
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  // Cinematic Learn More Transition: Scroll down to reveal the main content world
  const handleLearnMore = () => {
    playClick();
    const target = document.querySelector('#home-mission') || document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 1.1, behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    playClick();
    if (eventData.registrationUrl && eventData.registrationUrl.trim().length > 0) {
      window.open(eventData.registrationUrl, '_blank', 'noopener,noreferrer');
    } else {
      handleOpenModal('register', eventData.registrationUrl);
    }
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-text)' }}>
      {/* Precision Tactical Cursor */}
      <Cursor />

      {/* Floating Pill Navbar */}
      <Navbar
        isPlaying={isPlaying}
        onToggleMusic={toggleMusic}
        onPlayClick={playClick}
        onOpenModal={handleOpenModal}
      />

      {/* Main Single-Page Cinematic Flow */}
      <Home
        onLearnMoreClick={handleLearnMore}
        onRegisterClick={handleRegister}
        onPlayClick={playClick}
        onOpenPartnerModal={() => handleOpenModal('partner')}
      />

      {/* Global Footer */}
      <Footer
        onPlayClick={playClick}
        onOpenModal={handleOpenModal}
      />

      {/* External URL & Information Modal */}
      <UrlModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        title={modalState.title}
        type={modalState.type}
        targetUrl={modalState.targetUrl}
        onPlayClick={playClick}
      />
    </div>
  );
};

export default App;
