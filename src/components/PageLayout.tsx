import { useState, useEffect, ReactNode } from 'react';
import { PanelLeft } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle('sidebar-open', !sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.classList.remove('sidebar-open');
  };

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  return (
    <div className="antialiased">
      {/* Mobile Header */}
      <header className="mobile-header lg:hidden fixed top-0 left-0 right-0 h-20 flex items-center justify-center z-20 shadow-md">
        <button 
          onClick={toggleSidebar}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-accent-primary/10 transition-colors"
          aria-label={sidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={sidebarOpen}
          aria-controls="sidebar"
        >
          <PanelLeft size={20} className="text-text-primary" />
        </button>
        <h1 className="font-dm-sans text-lg sm:text-xl font-bold tracking-wider text-foreground">
          <a href="/" className="hover:text-accent-primary focus:text-accent-primary transition-colors duration-300">
            Amaan
          </a>
        </h1>
      </header>
      
      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={closeSidebar}
        />
      )}

      <div className="flex w-full max-w-full overflow-x-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-80 w-full max-w-full overflow-x-hidden">
          <main className={`px-3 sm:px-4 md:px-6 lg:px-12 pt-20 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 ${className}`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};