import { useState, useEffect, useRef, useCallback } from 'react';
import { FRAME_PATHS, FRAME_COUNT } from '../data/framesData';

interface UseFrameAnimationOptions {
  framePaths?: string[];
}

export function useFrameAnimation({
  framePaths = FRAME_PATHS
}: UseFrameAnimationOptions = {}) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const totalFrames = framePaths.length || FRAME_COUNT;

  // Preload all 60 frames into refs
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = framePaths[i];

      img.onload = () => {
        if (isCancelled) return;
        count++;
        setLoadedCount(count);
        if (count >= 1) {
          // As soon as first frame is ready, initial render can happen
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        count++;
        setLoadedCount(count);
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, [framePaths, totalFrames]);

  // Synchronize canvas resolution with DPR
  const syncCanvasSize = useCallback((canvas: HTMLCanvasElement) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(window.innerWidth * dpr);
    const height = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }, []);

  // Render frame with cover mathematics and sub-frame interpolation
  const renderProgress = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    syncCanvasSize(canvas);

    // Clamped progress between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, progress));

    // Floating-point frame position (0 to 59)
    const framePosition = clampedProgress * (totalFrames - 1);
    const currentFrameIndex = Math.floor(framePosition);
    const nextFrameIndex = Math.min(totalFrames - 1, currentFrameIndex + 1);
    const fraction = framePosition - currentFrameIndex;

    const imgCurrent = imagesRef.current[currentFrameIndex];
    const imgNext = imagesRef.current[nextFrameIndex];

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const drawCoverImage = (img: HTMLImageElement, alpha = 1.0) => {
      if (!img || !img.complete || img.naturalWidth === 0) return false;

      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const renderWidth = img.naturalWidth * scale;
      const renderHeight = img.naturalHeight * scale;
      const x = (canvas.width - renderWidth) / 2;
      const y = (canvas.height - renderHeight) / 2;

      ctx.globalAlpha = alpha;
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
      return true;
    };

    // Sub-frame crossfade rendering without ghosting
    // If next frame is available and fraction > 0.05, perform smooth crossfade
    if (fraction > 0.05 && imgNext && imgNext.complete && imgNext.naturalWidth > 0) {
      // Draw base current frame
      const drewCurrent = drawCoverImage(imgCurrent, 1.0);
      if (!drewCurrent) {
        ctx.fillStyle = '#08080a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      // Blend next frame with opacity fraction
      drawCoverImage(imgNext, fraction);
    } else {
      // Direct sharp render
      const drew = drawCoverImage(imgCurrent, 1.0);
      if (!drew) {
        // Fallback to nearest loaded image
        let fallbackFound = false;
        for (let i = currentFrameIndex - 1; i >= 0; i--) {
          if (imagesRef.current[i]?.complete && imagesRef.current[i]?.naturalWidth > 0) {
            drawCoverImage(imagesRef.current[i], 1.0);
            fallbackFound = true;
            break;
          }
        }
        if (!fallbackFound) {
          ctx.fillStyle = '#08080a';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    }

    ctx.globalAlpha = 1.0;
  }, [totalFrames, syncCanvasSize]);

  return {
    canvasRef,
    totalFrames,
    loadedCount,
    isLoaded: loadedCount >= totalFrames,
    isPartiallyLoaded: isLoaded,
    renderProgress
  };
}
