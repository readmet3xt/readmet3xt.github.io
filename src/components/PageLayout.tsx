import { useState, useEffect, ReactNode, useRef } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SidebarToggle } from '@/components/SidebarToggle';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Mouse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SidebarProvider } from './SidebarContext';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasClickedTypewriter, setHasClickedTypewriter] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useIsMobile();
  const autoCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleSidebar = () => {
    if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    if (newState) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  const closeSidebar = () => {
    if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
    setSidebarOpen(false);
    document.body.classList.remove('sidebar-open');
  };

  useEffect(() => {
    const handleTypewriterClick = () => {
      setHasClickedTypewriter(true);
    };

    const handleScroll = () => {
      // Use functional update to avoid dependency on isScrolling
      setIsScrolling(prev => {
        if (!prev) return true;
        return prev;
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);

      // Auto-open sidebar only on desktop
      // Note: we'll check these values from refs/latest state in handlescroll
      // to avoid effect re-runs when they change
      if (!isMobile && hasClickedTypewriter && !sidebarOpen && window.scrollY > 100) {
        setSidebarOpen(true);
        document.body.classList.add('sidebar-open');
        setHasClickedTypewriter(false);

        if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
        autoCloseTimeoutRef.current = setTimeout(() => {
          setSidebarOpen(false);
          document.body.classList.remove('sidebar-open');
        }, 2000);
      }
    };

    window.addEventListener('typewriter-clicked', handleTypewriterClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('typewriter-clicked', handleTypewriterClick);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [hasClickedTypewriter, sidebarOpen, isMobile]); // Removed isScrolling from dependencies

  return (
    <SidebarProvider isOpen={sidebarOpen} isScrolling={isScrolling}>
      <div className="antialiased font-inter text-text-primary bg-bg-primary">
        {/* Sidebar Status Area (Toggle or Scroll Icon) */}
        <div
          className={cn(
            "fixed z-50 transition-all duration-500 ease-in-out",
            sidebarOpen
              ? "left-[260px] top-6"
              : "left-4 lg:left-6 top-0 h-20 lg:h-auto lg:top-6 flex items-center"
          )}
        >
          <AnimatePresence mode="wait">
            {!isScrolling ? (
              <motion.div
                key="toggle"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <SidebarToggle
                  isOpen={sidebarOpen}
                  onClick={toggleSidebar}
                  minimal={isMobile}
                  isVisible={true}
                  className={cn(sidebarOpen ? "hidden lg:flex" : "")}
                />
              </motion.div>
            ) : (
              <motion.div
                key="mouse"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-2.5 rounded-xl border border-white/10 flex items-center justify-center min-h-[44px] min-w-[44px] bg-transparent backdrop-blur-sm"
              >
                <Mouse className="w-5 h-5 text-accent-primary animate-bounce-subtle" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Header */}
        <header className="mobile-header lg:hidden fixed top-0 left-0 right-0 h-20 flex flex-row items-center justify-end px-6 z-20 pointer-events-none bg-bg-primary/80 backdrop-blur-sm">
          <h1 className="font-dm-sans text-lg sm:text-xl font-bold tracking-wider text-foreground pointer-events-auto">
            <a href="/" className="hover:text-accent-primary focus:text-accent-primary transition-colors duration-300">
              amaan
            </a>
          </h1>
        </header>

        {/* Sidebar Overlay (Mobile) */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeSidebar}
          />
        )}

        <div className="w-full max-w-full overflow-x-hidden min-h-screen relative">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={closeSidebar}
            onMouseEnter={() => {
              if (autoCloseTimeoutRef.current) clearTimeout(autoCloseTimeoutRef.current);
            }}
          />

          {/* Main Content Area */}
          <div className={cn(
            "w-full min-h-screen transition-all duration-300 ease-in-out",
            sidebarOpen ? "lg:pl-80" : "lg:pl-0"
          )}>
            <main className={cn(
              "px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 pt-20 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 max-w-7xl mx-auto",
              className
            )}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};