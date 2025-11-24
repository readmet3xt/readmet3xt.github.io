import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const isDesktop = useRef(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    
    if (!mediaQuery.matches) {
      isDesktop.current = false;
      return;
    }
    
    isDesktop.current = true;

    // Initialize cursor position at center on mount
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    positionRef.current = { x: initX, y: initY };
    currentPositionRef.current = { x: initX, y: initY };

    // Initialize cursor visual position immediately
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate3d(${initX}px, ${initY}px, 0) translate(-50%, -50%)`;
    }
    if (cursorOutlineRef.current) {
      cursorOutlineRef.current.style.transform = `translate3d(${initX}px, ${initY}px, 0) translate(-50%, -50%)`;
    }

    // Smooth cursor animation with requestAnimationFrame
    const animateCursor = () => {
      const { x, y } = positionRef.current;
      const current = currentPositionRef.current;
      
      // Smooth interpolation (lower value = smoother but slower, higher = faster but less smooth)
      const ease = 0.15;
      current.x += (x - current.x) * ease;
      current.y += (y - current.y) * ease;

      // Update dot position instantly for precision
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      // Update outline with slight delay for trail effect
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(animateCursor);

    // Update position on mouse move (no style changes here for performance)
    const updateCursorPosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    // Detect interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as Element;
      const isInteractive = target.matches('a, button, [role="button"], [onclick], .cursor-pointer, input, textarea, select, .project-card, .sidebar-link, .footer-link, .image-grid-item, .case-study-pill, nav a, nav button') ||
                           target.closest('a, button, [role="button"], .project-card, .sidebar-link, .footer-link, .image-grid-item, .case-study-pill, nav');
      
      setIsHovered(!!isInteractive);
    };

    const handleElementLeave = () => setIsHovered(false);

    // Add event listeners with passive flag for performance
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseout', handleElementLeave, { passive: true });

    return () => {
      // Cleanup
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
    };
  }, []);

  // Don't render on mobile
  if (!isDesktop.current) return null;

  return (
    <>
      {/* Cursor Dot - Precise position */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          willChange: 'transform',
        }}
      >
        <div 
          className={`w-1.5 h-1.5 rounded-full bg-white transition-transform duration-200 ease-out ${
            isHovered ? 'scale-0' : 'scale-100'
          }`}
        />
      </div>

      {/* Cursor Outline - Smooth trailing */}
      <div
        ref={cursorOutlineRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: 0,
          top: 0,
          willChange: 'transform',
        }}
      >
        <div 
          className={`rounded-full border-2 transition-all duration-300 ease-out ${
            isHovered 
              ? 'w-12 h-12 border-accent-primary bg-accent-primary/10' 
              : 'w-8 h-8 border-white/30 bg-transparent'
          }`}
          style={{
            boxShadow: isHovered 
              ? '0 0 20px hsl(var(--accent-primary) / 0.3)' 
              : 'none'
          }}
        />
      </div>
    </>
  );
};