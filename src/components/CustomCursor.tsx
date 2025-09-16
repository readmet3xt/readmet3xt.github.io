import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    
    if (!mediaQuery.matches) return;

    const updateCursorPosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: Event) => {
      const target = e.target as Element;
      const isInteractive = target.matches('a, button, [role="button"], [onclick], .cursor-pointer, input, textarea, select, .project-card, .sidebar-link, .footer-link, .image-grid-item') ||
                           target.closest('a, button, [role="button"], .project-card, .sidebar-link, .footer-link, .image-grid-item');
      
      setIsHovered(!!isInteractive);
    };

    const handleElementLeave = () => setIsHovered(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Use more specific hover detection
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
    };
  }, []);

  // Don't render on mobile or when not visible
  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] will-change-transform transition-transform duration-150 ease-out"
      style={{
        left: 0,
        top: 0,
        transform: `translate(-50%, -50%) scale(${isHovered ? 2.2 : 1})`,
      }}
    >
      <div 
        className="w-2 h-2 rounded-full bg-primary transition-opacity duration-200"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </div>
  );
};