import React, { useEffect, useRef, useState } from 'react';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInWindow, setIsInWindow] = useState(true);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);
    let mouseX = -200;
    let mouseY = -200;
    let rafId: number;

    // Anchor point calculation:
    // Displayed cursor width = 38px, height ≈ 26.87px
    // Arrow tip offset in image: tipX = 25.54px, tipY = 7.87px
    const tipOffsetX = 25.54;
    const tipOffsetY = 7.87;

    const renderLoop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX - tipOffsetX}px, ${mouseY - tipOffsetY}px, 0)`;
      }
      rafId = requestAnimationFrame(renderLoop);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isInWindow) setIsInWindow(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseEnter = () => setIsInWindow(true);
    const onMouseLeave = () => setIsInWindow(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isInWindow]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        willChange: 'transform',
        opacity: isInWindow ? 1 : 0,
        transition: 'opacity 0.2s ease',
        userSelect: 'none'
      }}
    >
      <img
        src="/cursor.png"
        alt="Custom Cursor"
        draggable={false}
        style={{
          width: '38px',
          height: 'auto',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
          transformOrigin: '25.54px 7.87px',
          transform: `scale(${isClicked ? 0.86 : isHovered ? 1.15 : 1})`,
          filter: isHovered
            ? 'drop-shadow(0 0 10px rgba(229, 9, 20, 0.95)) drop-shadow(0 0 20px rgba(229, 9, 20, 0.5)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))'
            : isClicked
            ? 'drop-shadow(0 0 14px rgba(255, 77, 88, 1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))'
            : 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 5px rgba(229, 9, 20, 0.45))',
          transition: 'transform 0.14s cubic-bezier(0.16, 1, 0.3, 1), filter 0.18s ease'
        }}
      />
    </div>
  );
};
