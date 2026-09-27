import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements with existing audio asset
  useEffect(() => {
    // Exact path to the background audio in /public/audio
    const audioSrc = '/audio/WhatsApp Audio 2026-09-27 at 12.33.06 AM.mpeg';
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.35;
    bgAudioRef.current = audio;

    return () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
        bgAudioRef.current = null;
      }
    };
  }, []);

  // Play subtle tactical UI click sound effect via Web Audio API synth
  const playClick = useCallback(() => {
    if (isMuted) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      }
    } catch {
      // ignore silently if audio context unavailable
    }
  }, [isMuted]);

  // Toggle ambient soundtrack
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
        // Autoplay policy prevented immediate playback
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
