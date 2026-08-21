import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button';
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Cursor Glow Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-10 h-10 rounded-full border border-gold/40 bg-gold/5 backdrop-blur-[1px] shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
      </div>

      {/* Center Precision Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#f3d068]" />
      </div>
    </>
  );
};
