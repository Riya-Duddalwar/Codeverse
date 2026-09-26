import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Success } from './pages/Success';
import { useAudio } from './hooks/useAudio';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'success'>('home');
  const [registeredData, setRegisteredData] = useState<any>(null);
  const { isPlaying, toggleMusic, playClick } = useAudio();

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'register' || page === 'success') {
      setCurrentPage(page as 'home' | 'register' | 'success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRegistrationSuccess = (data: any) => {
    setRegisteredData(data);
    setCurrentPage('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-light bg-dark">
      {/* Custom Crosshair / Targeting Cursor */}
      <Cursor />

      {/* Persistent Navigation Bar */}
      <Navbar
        isPlaying={isPlaying}
        onToggleMusic={toggleMusic}
        onPlayClick={playClick}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Main Page Content */}
      {currentPage === 'home' && (
        <Home
          onNavigate={handleNavigate}
          onPlayClick={playClick}
        />
      )}

      {currentPage === 'register' && (
        <Register
          onBack={() => handleNavigate('home')}
          onSuccess={handleRegistrationSuccess}
          onPlayClick={playClick}
        />
      )}

      {currentPage === 'success' && (
        <Success
          formData={registeredData}
          onHomeClick={() => handleNavigate('home')}
          onPlayClick={playClick}
        />
      )}

      {/* Global Heist Footer */}
      <Footer onPlayClick={playClick} />
    </div>
  );
};

export default App;
