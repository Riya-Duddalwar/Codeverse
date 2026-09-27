import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
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

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Red Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          backgroundColor: isHovered ? '#ffffff' : '#e50914',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.15s, height 0.15s, background-color 0.15s',
          boxShadow: isHovered ? '0 0 12px #ffffff' : '0 0 10px #e50914'
        }}
      />
      {/* Targeting Red Reticle */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.75 : isHovered ? 1.5 : 1})`,
          width: '28px',
          height: '28px',
          border: `1.5px solid ${isHovered ? 'rgba(244, 240, 232, 0.9)' : 'rgba(229, 9, 20, 0.65)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.18s'
        }}
      />
    </>
  );
};
