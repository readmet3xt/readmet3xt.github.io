import { useEffect, useState, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { SidebarToggle } from '@/components/SidebarToggle';
import { cn } from '@/lib/utils';
import { SidebarProvider } from './SidebarContext';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const replayIntro = () => {
    try {
      localStorage.removeItem('welcomed');
      localStorage.removeItem('storiesPlayed');
    } catch {
      // storage blocked
    }
    window.scrollTo(0, 0);
    if (pathname === '/') window.dispatchEvent(new Event('replay-intro'));
    else navigate('/', { state: { replayIntro: true } });
  };

  const setOpen = (open: boolean) => {
    setSidebarOpen(open);
    document.body.classList.toggle('sidebar-open', open);
  };

  // Escape closes the sidebar; leaving the page never leaves the body scroll-locked.
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [sidebarOpen]);

  useEffect(() => () => document.body.classList.remove('sidebar-open'), []);

  return (
    <SidebarProvider isOpen={sidebarOpen}>
      <div className="text-text-primary bg-bg-primary">
        {/* Top bar: menu toggle on the left, name on the right. */}
        <header className="fixed top-0 inset-x-0 z-20 h-16 flex items-center justify-between px-4 lg:px-6 bg-bg-primary/95 border-b border-border lg:bg-transparent lg:border-0 pointer-events-none">
          <SidebarToggle
            isOpen={sidebarOpen}
            onClick={() => setOpen(!sidebarOpen)}
            className={cn('pointer-events-auto', sidebarOpen && 'lg:invisible')}
          />
          <Link
            to="/"
            className="pointer-events-auto text-lg font-semibold tracking-tight text-text-primary hover:text-accent-primary transition-colors lg:pr-6"
          >
            Amaan Khan
          </Link>
        </header>

        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className="w-full max-w-full overflow-clip min-h-screen relative">
          <Sidebar isOpen={sidebarOpen} onClose={() => setOpen(false)} />

          <div className={cn("w-full min-h-screen transition-[padding] duration-200", sidebarOpen ? "lg:pl-80" : "lg:pl-0")}>
            <main
              className={cn(
                "px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-16 lg:pt-20 max-w-7xl mx-auto",
                className
              )}
            >
              {children}
            </main>

            <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-10">
              <div className="border-t border-border pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-text-secondary">
                <nav aria-label="Contact and links" className="flex flex-wrap gap-x-6 gap-y-2">
                  <a className="link-ink" href="mailto:mdamkhan.work@gmail.com">mdamkhan.work@gmail.com</a>
                  <a className="link-ink" href="https://www.linkedin.com/in/readmetxt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="link-ink" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
                  <Link className="link-ink" to="/play">Play</Link>
                  <button type="button" className="link-ink" onClick={replayIntro}>Replay the intro</button>
                </nav>
                <p className="text-text-tertiary">© 2026 Amaan Khan</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
