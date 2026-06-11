import { useState, useRef, useCallback, lazy, Suspense } from 'react';
import { AnimatedProjectCard } from '@/components/AnimatedProjectCard';
// import { WelcomeCard } from '@/components/WelcomeCard';
import { useSidebar } from '@/components/SidebarContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { PROJECTS } from '@/data/projectData';
import { LayoutGrid, Layers } from 'lucide-react';

// Lazy-load the cinematic stack since it's heavy and not needed on mobile
const CinematicStack = lazy(
  () => import('@/components/CinematicStack')
);

type ViewMode = 'cinematic' | 'grid';

export const ProjectsGrid = () => {
  const { isOpen } = useSidebar();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  // Respect reduced-motion: the scroll-hijacking stack defaults off for those users
  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'grid'
      : 'cinematic'
  );

  // On mobile, always force grid — no toggle shown
  const effectiveView = isMobile ? 'grid' : viewMode;

  // Switching views collapses/expands the tall scroll container, which would
  // otherwise strand the user's scroll position — snap back to the section top.
  const switchView = useCallback((mode: ViewMode) => {
    setViewMode((prev) => {
      if (prev === mode) return prev;
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
      return mode;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="scroll-mt-20"
      aria-label="Portfolio projects"
    >
      <header className="mb-6 sm:mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent-primary mb-2">
            Selected Work
          </p>
          <h2 className="font-dm-sans font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
            Nine projects, end-to-end
          </h2>
        </div>

        {/* View Toggle — hidden on mobile */}
        {!isMobile && (
          <div className="flex-shrink-0 flex items-center gap-1 p-1 rounded-xl bg-bg-secondary border border-foreground/[0.08] backdrop-blur-sm">
            <button
              onClick={() => switchView('cinematic')}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wider uppercase transition-all duration-200 font-ibm-plex-mono',
                viewMode === 'cinematic'
                  ? 'bg-accent-primary/15 text-accent-primary shadow-sm'
                  : 'text-text-tertiary hover:text-text-secondary'
              )}
              aria-label="Cinematic stack view"
              aria-pressed={viewMode === 'cinematic'}
            >
              <Layers size={13} strokeWidth={2} />
              <span className="hidden lg:inline">Stack</span>
            </button>
            <button
              onClick={() => switchView('grid')}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wider uppercase transition-all duration-200 font-ibm-plex-mono',
                viewMode === 'grid'
                  ? 'bg-accent-primary/15 text-accent-primary shadow-sm'
                  : 'text-text-tertiary hover:text-text-secondary'
              )}
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <LayoutGrid size={13} strokeWidth={2} />
              <span className="hidden lg:inline">Grid</span>
            </button>
          </div>
        )}
      </header>

      {/* ===== Cinematic Stack View ===== */}
      {effectiveView === 'cinematic' && (
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent-primary" />
            </div>
          }
        >
          <CinematicStack
            projects={PROJECTS}
            onSwitchToGrid={() => switchView('grid')}
          />
        </Suspense>
      )}

      {/* ===== Grid View (original) ===== */}
      {effectiveView === 'grid' && (
        <div
          className={cn(
            "grid gap-8 mb-12 sm:mb-16 lg:mb-20 auto-rows-fr w-full max-w-full",
            isOpen
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
        {/* <WelcomeCard /> */}

        {PROJECTS.map((project, index) => (
          <AnimatedProjectCard
            key={project.href}
            index={index}
            href={project.href}
            title={project.title}
            description={project.description}
            pill={project.pill}
            images={project.images}
            className=""
            summary={project.summary}
            tags={project.tags}
            brandColor={project.brandColor}
          />
        ))}
        </div>
      )}
    </section>
  );
};
