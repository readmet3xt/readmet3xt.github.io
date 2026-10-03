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

  // The header stays out of the way at the top of a page and slides in once the
  // visitor scrolls. Pages too short to scroll keep it visible, so the menu is
  // always reachable; keyboard focus (not a tap or click) also brings it in.
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const scrollable = document.documentElement.scrollHeight > window.innerHeight + 24;
      setShowHeader(window.scrollY > 16 || !scrollable);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const late = setTimeout(update, 600);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      clearTimeout(late);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);
  const headerVisible = showHeader || sidebarOpen;

  return (
    <SidebarProvider isOpen={sidebarOpen}>
      <div className="text-text-primary bg-bg-primary">
        {/* Top bar: name on the left, menu toggle on the right (the sidebar opens from the right). */}
        <header
          className={cn(
            'fixed top-0 inset-x-0 z-20 h-16 flex items-center justify-between px-4 lg:px-6 bg-bg-primary/80 backdrop-blur-md border-b border-border',
            'transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
            headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none has-[:focus-visible]:translate-y-0 has-[:focus-visible]:opacity-100 has-[:focus-visible]:pointer-events-auto',
          )}
        >
          {/* The whole bar, up to the menu button, goes home; on the home page it goes back to the top. */}
          <Link
            to="/"
            aria-label="Amaan Khan, home"
            onClick={(e) => {
              if (pathname !== '/') return;
              e.preventDefault();
              const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
            }}
            className="group flex-1 self-stretch flex items-center lg:pl-6"
          >
            <span className="text-lg font-semibold tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
              Amaan Khan
            </span>
          </Link>
          <SidebarToggle
            isOpen={sidebarOpen}
            onClick={() => setOpen(!sidebarOpen)}
            className={cn(sidebarOpen && 'lg:invisible')}
          />
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

          <div className={cn("w-full min-h-screen transition-[padding] duration-200", sidebarOpen ? "lg:pr-80" : "lg:pr-0")}>
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
