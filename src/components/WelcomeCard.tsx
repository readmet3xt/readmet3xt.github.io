import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useCardHoverEffect } from '@/hooks/useCardHoverEffect';
import { useSidebar } from '@/components/SidebarContext';
import { cn } from '@/lib/utils';

export const WelcomeCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useSidebar();
  const navigate = useNavigate();
  const controls = useAnimation();
  const isNavigating = useRef(false);

  // Use optimized hover effect hook (same as other project cards)
  useCardHoverEffect(cardRef, {
    maxRotation: 10,
    transitionDuration: 100,
  });

  const handleClick = useCallback(async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isNavigating.current) return;
    isNavigating.current = true;

    // Play press-down animation
    await controls.start({
      scale: 0.96,
      boxShadow: "0 0 60px rgba(255, 71, 87, 0.6)",
      transition: { duration: 0.12, ease: "easeOut" },
    });

    // Brief hold so user sees the press
    await new Promise(resolve => setTimeout(resolve, 80));

    // Navigate
    navigate('/about');
  }, [controls, navigate]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "project-card rounded-xl overflow-hidden group bg-gradient-to-br from-accent-primary/10 via-accent-primary/5 to-card border border-accent-primary/20 block flex flex-col w-full max-w-full relative hover:border-accent-primary/40 cursor-pointer touch-manipulation select-none transition-all duration-300",
        isOpen ? "min-h-[340px]" : "min-h-[300px]"
      )}
      role="link"
      tabIndex={0}
      aria-label="View About page"
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(e as any); }}
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.96,
        transition: { duration: 0.12, ease: "easeOut" }
      }}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 transition-all duration-300",
        isOpen ? "h-48 sm:h-52" : "h-40 sm:h-44"
      )}>
        <img
          src="/lovable-uploads/6bba6c1a-b7f8-404a-b8c3-367c42cbc2a0.png"
          alt="Amaan Khan - Product Designer"
          className="w-full h-full object-cover"
        />

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-accent-primary/10 rounded-full blur-xl" />
        <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent-primary/10 rounded-full blur-lg" />
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-2xl sm:text-2xl font-bold font-dm-sans text-foreground break-words text-left">Amaan Khan</h3>
          {/* Available Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white">Available</span>
          </div>
        </div>
        <p className="text-lg sm:text-lg text-text-secondary break-words text-left">Product Designer</p>
        <p className="text-base sm:text-base mt-3 text-text-secondary/80 leading-relaxed flex-1 break-words text-left">
          Hi there, Amaan here! I'm a Mechanical Engineer who traded engineering blueprints for service blueprints. I now build seamless experiences—digital or not—with an engineer's focus on function and a designer's focus on feeling.
        </p>
      </div>
    </motion.div>
  );
};