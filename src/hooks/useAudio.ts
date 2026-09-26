import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    bgAudioRef.current = new Audio('/audio/heist-bg.mp3');
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.4;

    clickAudioRef.current = new Audio('/audio/click.mp3');
    clickAudioRef.current.volume = 0.6;

    return () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
        bgAudioRef.current = null;
      }
      if (clickAudioRef.current) {
        clickAudioRef.current = null;
      }
    };
  }, []);

  // Play subtle UI click sound effect (with Web Audio API fallback)
  const playClick = useCallback(() => {
    if (isMuted) return;

    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch(() => {
        // Fallback Web Audio synth beep
        try {
          const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
          if (AudioContext) {
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
          }
        } catch {
          // ignore
        }
      });
    }
  }, [isMuted]);

  // Toggle ambient heist music
  const toggleMusic = useCallback(() => {
    if (!bgAudioRef.current) return;

    if (isPlaying) {
      bgAudioRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
    } else {
      bgAudioRef.current.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        // Autoplay policy prevented playback
        setIsPlaying(false);
        setIsMuted(true);
      });
    }
  }, [isPlaying]);

  return {
    isPlaying,
    isMuted,
    toggleMusic,
    playClick
  };
}
