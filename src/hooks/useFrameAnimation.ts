import { useState, useEffect, useRef, useCallback } from 'react';

interface UseFrameAnimationProps {
  frameCount?: number;
  framePrefix?: string;
  frameExtension?: string;
  padLength?: number;
}

export function useFrameAnimation({
  frameCount = 240,
  framePrefix = '/frames/frame_',
  frameExtension = '.webp',
  padLength = 3
}: UseFrameAnimationProps = {}) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Preload frames
  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    const getFrameUrl = (index: number) => {
      const paddedIndex = String(index).padStart(padLength, '0');
      return `${framePrefix}${paddedIndex}${frameExtension}`;
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (isCancelled) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= Math.min(20, frameCount)) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        if (isCancelled) return;
        loaded++;
        setLoadedCount(loaded);
      };
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isCancelled = true;
    };
  }, [frameCount, framePrefix, frameExtension, padLength]);

  // Render specific frame onto canvas
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const safeIndex = Math.max(0, Math.min(frameIndex, frameCount - 1));
    const img = imagesRef.current[safeIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      // Clear and draw with cover aspect ratio
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;
      
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
      );
    } else {
      // Sleek fallback canvas visualization if images are placeholder
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Cyber Heist Vault Radar visualization
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const progress = safeIndex / frameCount;

      ctx.save();
      ctx.fillStyle = '#0e1018';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Rotating Vault Ring
      ctx.strokeStyle = 'rgba(255, 30, 66, 0.4)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(centerX, centerY) * 0.65, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating Gear Teeth
      const teeth = 24;
      const angleStep = (Math.PI * 2) / teeth;
      const rot = progress * Math.PI * 4;

      for (let i = 0; i < teeth; i++) {
        const a = rot + i * angleStep;
        const r1 = Math.min(centerX, centerY) * 0.65;
        const r2 = r1 + (i % 2 === 0 ? 12 : 6);
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(a) * r1, centerY + Math.sin(a) * r1);
        ctx.lineTo(centerX + Math.cos(a) * r2, centerY + Math.sin(a) * r2);
        ctx.strokeStyle = i % 2 === 0 ? '#ff1e42' : '#ffd159';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Vault Core Lock Status
      ctx.fillStyle = '#ff1e42';
      ctx.font = 'bold 16px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`VAULT SEQUENCE: ${Math.round(progress * 100)}%`, centerX, centerY + 8);
      ctx.restore();
    }

    setCurrentFrame(safeIndex);
  }, [frameCount]);

  return {
    canvasRef,
    currentFrame,
    isLoaded,
    loadedCount,
    totalFrames: frameCount,
    renderFrame
  };
}
