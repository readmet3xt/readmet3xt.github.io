import { useEffect, useRef, RefObject } from 'react';

interface UseCardHoverEffectOptions {
  /** Maximum rotation angle in degrees */
  maxRotation?: number;
  /** Transition duration in ms */
  transitionDuration?: number;
  /** Enable/disable the effect */
  enabled?: boolean;
}

/**
 * Custom hook for 3D card tilt effect on mouse move
 * Optimized with requestAnimationFrame for smooth 60fps animation
 */
export const useCardHoverEffect = <T extends HTMLElement>(
  cardRef: RefObject<T>,
  options: UseCardHoverEffectOptions = {}
) => {
  const {
    maxRotation = 10,
    transitionDuration = 100,
    enabled = true
  } = options;

  const rafRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveringRef.current) return;

      // Cancel previous animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth 60fps animation
      rafRef.current = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxRotation;
        const rotateY = ((x - centerX) / centerX) * maxRotation;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      card.style.transition = `transform ${transitionDuration}ms ease-out`;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      
      // Clean up animation frame on unmount
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [cardRef, maxRotation, transitionDuration, enabled]);

  return null;
};
