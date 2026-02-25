import { useState, useEffect, ReactNode } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SidebarToggle } from '@/components/SidebarToggle';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasClickedTypewriter, setHasClickedTypewriter] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    if (newState) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.classList.remove('sidebar-open');
  };

  useEffect(() => {
    const handleTypewriterClick = () => {
      setHasClickedTypewriter(true);
    };

    const handleScroll = () => {
      // Auto-open sidebar only on desktop
      if (!isMobile && hasClickedTypewriter && !sidebarOpen && window.scrollY > 100) {
        setSidebarOpen(true);
        document.body.classList.add('sidebar-open');
        // Optional: Reset the flag if you only want it to happen once
        // setHasClickedTypewriter(false);
      }
    };

    window.addEventListener('typewriter-clicked', handleTypewriterClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('typewriter-clicked', handleTypewriterClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasClickedTypewriter, sidebarOpen, isMobile]);

  return (
    <div className="antialiased font-inter text-text-primary bg-bg-primary">
      {/* Universal Sidebar Toggle */}
      <SidebarToggle
        isOpen={sidebarOpen}
        onClick={toggleSidebar}
        minimal={isMobile}
        className={cn(
          "fixed z-50 transition-all duration-500 ease-in-out",
          sidebarOpen
            ? "hidden lg:flex lg:left-[260px] lg:top-6"
            : "left-4 lg:left-6 top-[18px] lg:top-6"
        )}
      />

      {/* Mobile Header */}
      <header className="mobile-header lg:hidden fixed top-0 left-0 right-0 h-20 flex flex-col items-center justify-center z-20 pointer-events-none bg-bg-primary/80 backdrop-blur-sm">
        <h1 className="font-dm-sans text-lg sm:text-xl font-bold tracking-wider text-foreground pointer-events-auto">
          <a href="/" className="hover:text-accent-primary focus:text-accent-primary transition-colors duration-300">
            Amaan Khan
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
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

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
  );
};