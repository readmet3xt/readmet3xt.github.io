import { useRef, useCallback, useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  MotionValue,
  useAnimation,
  useMotionValueEvent,
  cubicBezier,
} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectData } from '@/data/projectData';

// Each card owns one scroll segment. Only the trailing TRANSITION fraction of a
// segment animates the next card in — the leading DWELL fraction lets the
// active card rest fully in view, so the stack doesn't feel perpetually mid-motion.
const TRANSITION = 0.6;
const DWELL = 1 - TRANSITION;

const entryEase = cubicBezier(0.22, 0.61, 0.36, 1);
const linear = (t: number) => t;

interface CinematicStackProps {
  projects: ProjectData[];
  onSwitchToGrid?: () => void;
}

export default function CinematicStack({ projects, onSwitchToGrid }: CinematicStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // N cards need (N-1) transitions; each transition costs 100vh of scroll.
  const numTransitions = projects.length - 1;
  const segmentSize = numTransitions > 0 ? 1 / numTransitions : 1;

  // Update activeIndex based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(
      Math.round(latest / segmentSize),
      projects.length - 1
    );
    setActiveIndex(idx);
  });

  // Fades out the "scroll" hint as soon as the user starts moving
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = containerRef.current;
      if (!el) return;
      const containerTop = el.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      // Land slightly into the dwell zone so a stray scroll tick doesn't
      // immediately re-trigger the transition (except at the very end).
      const offset = index >= numTransitions ? numTransitions : index + DWELL / 2;
      window.scrollTo({ top: containerTop + offset * vh, behavior: 'smooth' });
    },
    [numTransitions]
  );

  // Handle discrete scroll events — any scroll flips to next card
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const el = containerRef.current;
      if (!el) return;

      // Only intercept scroll within the cinematic stack area
      const rect = el.getBoundingClientRect();
      const isWithinContainer =
        e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (!isWithinContainer) return;

      // Ignore rapid consecutive scrolls
      if (isScrollingRef.current) return;

      const isScrollingDown = e.deltaY > 0;
      const isAtFirstCard = activeIndex === 0;
      const isAtLastCard = activeIndex === projects.length - 1;

      // Allow normal scroll behavior at boundaries
      if ((isScrollingDown && isAtLastCard) || (!isScrollingDown && isAtFirstCard)) {
        return;
      }

      // Prevent default scroll behavior for card transitions
      e.preventDefault();
      isScrollingRef.current = true;

      // Move to next/previous card
      const nextIndex = isScrollingDown
        ? Math.min(activeIndex + 1, projects.length - 1)
        : Math.max(activeIndex - 1, 0);

      scrollToIndex(nextIndex);

      // Debounce rapid scrolls
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, projects.length, scrollToIndex]);

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(100vh + ${numTransitions * 100}vh)` }}
      className="relative w-full -mt-[3vh] md:-mt-[5vh] lg:-mt-[7vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-visible flex flex-col justify-center gap-6">
        {/* Card area — right margin clears the pagination rail.
            On large screens this becomes a two-column row: info panel + smaller
            card. Tablet keeps the full-size card with its content inside. */}
        <div className="relative h-[80vh] max-h-[850px] mr-0 md:mr-24 lg:mr-32 lg:flex lg:items-center lg:justify-end lg:gap-12 xl:gap-16">
          {/* Desktop-only info panel — title + summary for the active project */}
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:flex-1 lg:min-w-0 lg:max-w-md xl:max-w-lg lg:pl-6 xl:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: entryEase }}
                className="flex flex-col gap-3 lg:gap-4"
              >
                <span className="font-ibm-plex-mono text-[10px] lg:text-xs uppercase tracking-[0.3em] text-white/40">
                  {String(activeIndex + 1).padStart(2, '0')}
                  <span className="mx-2 text-white/20">—</span>
                  {projects[activeIndex].description}
                </span>
                <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white font-dm-sans leading-[1.08]">
                  {projects[activeIndex].title}
                </h3>
                {projects[activeIndex].summary && (
                  <p className="text-sm lg:text-base text-neutral-300/85 leading-relaxed">
                    {projects[activeIndex].summary}
                  </p>
                )}
                <div
                  className="h-px w-12 lg:w-16 mt-1 mb-1 lg:mb-2"
                  style={{ background: projects[activeIndex].brandColor }}
                />
                <button
                  className="group/cta inline-flex items-center justify-center gap-2 self-start h-10 lg:h-11 px-5 lg:px-6 rounded-full text-[11px] lg:text-xs tracking-widest font-bold uppercase transition-all duration-300 backdrop-blur-sm border whitespace-nowrap"
                  style={{
                    backgroundColor: `${projects[activeIndex].brandColor}18`,
                    borderColor: `${projects[activeIndex].brandColor}40`,
                    color: 'white',
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    btn.style.backgroundColor = projects[activeIndex].brandColor;
                    btn.style.borderColor = projects[activeIndex].brandColor;
                    btn.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    btn.style.backgroundColor = `${projects[activeIndex].brandColor}18`;
                    btn.style.borderColor = `${projects[activeIndex].brandColor}40`;
                    btn.style.color = 'white';
                  }}
                  onClick={() => navigate(projects[activeIndex].href)}
                  aria-label={`Explore ${projects[activeIndex].title}`}
                >
                  <span className="font-ibm-plex-mono">VIEW CASE STUDY</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card stack — full size on mobile/tablet, ~half size on desktop */}
          <div className="relative h-full w-full lg:h-[60%] xl:h-[62%] lg:w-1/2 lg:max-w-[500px] xl:max-w-[560px] lg:flex-shrink-0">
            {projects.map((project, index) => (
              <CinematicCard
                key={project.href}
                project={project}
                index={index}
                total={projects.length}
                progress={scrollYProgress}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint — visible only before the journey starts */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2 pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-ibm-plex-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">
            Scroll
          </span>
          <div className="relative w-px h-8 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute left-0 w-px h-3 bg-white/60"
              animate={{ y: [-12, 32] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        <SidePagination
          projects={projects}
          activeIndex={activeIndex}
          onDotClick={scrollToIndex}
          onSwitchToGrid={onSwitchToGrid}
        />
      </div>
    </div>
  );
}

// --- Individual Cinematic Card ---
function CinematicCard({
  project,
  progress,
  index,
  total,
  isActive,
}: {
  project: ProjectData;
  progress: MotionValue<number>;
  index: number;
  total: number;
  isActive: boolean;
}) {
  const navigate = useNavigate();
  const controls = useAnimation();
  const isNavigating = useRef(false);
  // The card box takes the image's own aspect ratio so a landscape screenshot
  // fills it edge-to-edge — object-cover then crops nothing and leaves no bars.
  const [imgRatio, setImgRatio] = useState(16 / 9);

  const numTransitions = total - 1;
  const segmentSize = numTransitions > 0 ? 1 / numTransitions : 1;
  const isFirstCard = index === 0;
  const isLastCard = index === total - 1;

  // Entry happens in the trailing TRANSITION fraction of the previous segment;
  // exit mirrors the next card's entry window.
  const entryStart = ((index - 1) + DWELL) * segmentSize;
  const entryEnd = Math.min(index * segmentSize, 1);
  const exitStart = Math.min((index + DWELL) * segmentSize, 1);
  const exitEnd = Math.min((index + 1) * segmentSize, 1);

  // Slide in from below (eased), then drift up slightly while the next card covers this one
  const y = useTransform(
    progress,
    isFirstCard
      ? [exitStart, exitEnd]
      : isLastCard
        ? [entryStart, entryEnd]
        : [entryStart, entryEnd, exitStart, exitEnd],
    isFirstCard
      ? ['0%', '-4%']
      : isLastCard
        ? ['112%', '0%']
        : ['112%', '0%', '0%', '-4%'],
    { ease: isFirstCard ? [linear] : isLastCard ? [entryEase] : [entryEase, linear, linear] }
  );

  // Recede behind the incoming card
  const scale = useTransform(
    progress,
    isLastCard ? [0, 1] : [exitStart, exitEnd],
    isLastCard ? [1, 1] : [1, 0.94]
  );

  // Keep cards that haven't entered yet hidden — otherwise the one parked below
  // (e.g. the last card) peeks out in the gap beneath the smaller desktop card.
  const fadeInEnd = entryStart + (entryEnd - entryStart) * 0.2;
  const opacity = useTransform(
    progress,
    isFirstCard ? [0, 1] : [entryStart, fadeInEnd],
    isFirstCard ? [1, 1] : [0, 1]
  );

  // Dim as the next card covers this one
  const overlayOpacity = useTransform(
    progress,
    isLastCard ? [0, 1] : [exitStart, exitEnd],
    isLastCard ? [0, 0] : [0, 0.55]
  );

  // Ken Burns settle — the image arrives slightly zoomed and relaxes into place
  const imageScale = useTransform(
    progress,
    isFirstCard ? [0, 1] : [entryStart, entryEnd],
    isFirstCard ? [1, 1] : [1.14, 1],
    { ease: isFirstCard ? [linear] : [entryEase] }
  );

  // Content arrives staggered, a beat behind the card itself
  const contentStart = entryStart + (entryEnd - entryStart) * 0.3;
  const contentY = useTransform(
    progress,
    isFirstCard ? [0, 1] : [contentStart, entryEnd],
    isFirstCard ? [0, 0] : [40, 0],
    { ease: isFirstCard ? [linear] : [entryEase] }
  );
  const contentOpacity = useTransform(
    progress,
    isFirstCard ? [0, 1] : [contentStart, entryEnd],
    isFirstCard ? [1, 1] : [0, 1]
  );

  const handleClick = useCallback(
    async (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      if (isNavigating.current) return;
      isNavigating.current = true;

      await controls.start({
        scale: 0.98,
        boxShadow: `0 0 80px ${project.brandColor}55`,
        transition: { duration: 0.12, ease: 'easeOut' },
      });

      await new Promise((resolve) => setTimeout(resolve, 80));
      navigate(project.href);
    },
    [controls, navigate, project.href, project.brandColor]
  );

  return (
    /* Scroll-driven shell — keep press animation on the inner layer so the two
       transforms don't fight over the same motion values */
    <motion.div
      style={{ y, scale, opacity, zIndex: index, transformOrigin: 'top center' }}
      className="absolute inset-0 will-change-transform flex items-center justify-center"
      aria-hidden={!isActive}
    >
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleClick(e);
        }}
        role="link"
        tabIndex={isActive ? 0 : -1}
        aria-label={`View ${project.title} case study`}
        className={cn(
          "relative w-full max-h-full rounded-2xl md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-card cursor-pointer group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 border transition-all duration-300",
          // Mobile keeps the original active/idle border treatment
          isActive
            ? "border-[color:var(--brand-border)] shadow-[0_-30px_80px_-10px_rgba(0,0,0,0.6),0_0_30px_-5px]"
            : "border-white/[0.04] shadow-[0_-30px_80px_-10px_rgba(0,0,0,0.6)]",
          // Desktop: no border unless the card is hovered
          "lg:border-transparent lg:group-hover:border-[color:var(--brand-border)]"
        )}
        style={{
          aspectRatio: imgRatio,
          ['--brand-border' as string]: project.brandColor + '80',
          ...(isActive
            ? { boxShadow: `0 -30px 80px -10px rgba(0,0,0,0.6), 0 0 30px -5px ${project.brandColor}66` }
            : {}),
        }}
      >
        {/* ===== Background Image + Cinematic Grading ===== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={project.images[0]}
            alt=""
            aria-hidden="true"
            style={{ scale: imageScale }}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth && img.naturalHeight) {
                setImgRatio(img.naturalWidth / img.naturalHeight);
              }
            }}
            className={cn(
              "w-full h-full object-cover object-center transition-[filter,opacity] duration-500",
              isActive
                ? "opacity-95 brightness-[0.75]"
                : "opacity-80 brightness-[0.6] group-hover:opacity-90 group-hover:brightness-[0.68]"
            )}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
          {/* Subtle brand-colored radial glow */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-soft-light"
            style={{
              background: `radial-gradient(ellipse at 30% 80%, ${project.brandColor}44 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* ===== Card Content ===== */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="absolute inset-0 z-10 p-6 md:p-10 lg:p-12 flex flex-col justify-between h-full select-none"
        >
          {/* --- Top Row: Pills + Index Numeral --- */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {/* Status pill — frosted glass with live dot */}
              {project.pill && (
                <div className="flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-full bg-black/45 backdrop-blur-xl border border-white/[0.14]">
                  <span className="relative flex w-1.5 h-1.5">
                    {project.pill === 'ongoing' && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60 animate-ping" />
                    )}
                    <span
                      className={cn(
                        'relative inline-flex w-1.5 h-1.5 rounded-full',
                        project.pill === 'ongoing' ? 'bg-amber-400' : 'bg-emerald-400'
                      )}
                    />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white leading-none">
                    {project.pill === 'ongoing' ? 'Ongoing' : 'Launched'}
                  </span>
                </div>
              )}

              {/* Tag pills — quiet frosted chips */}
              {project.tags.map((tag, i) => (
                <div
                  key={i}
                  className="px-3.5 py-2 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 leading-none"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Index numeral */}
            <span className="font-ibm-plex-mono text-xs tracking-[0.3em] text-white/40 flex-shrink-0 pt-1">
              {String(index + 1).padStart(2, '0')}
              <span className="text-white/20"> / {String(total).padStart(2, '0')}</span>
            </span>
          </div>

          {/* --- Bottom Section --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-auto">
            {/* Left: Title Block — desktop shows this beside the card instead */}
            <div className="md:col-span-8 flex flex-col gap-2 lg:hidden">
              <span className="text-xs text-neutral-400 tracking-[0.25em] font-medium font-ibm-plex-mono uppercase">
                {project.description}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-dm-sans leading-tight">
                {project.title}
              </h3>
              {project.summary && (
                <p className="text-sm md:text-[15px] text-neutral-300/80 leading-relaxed line-clamp-2 max-w-xl mt-1">
                  {project.summary}
                </p>
              )}
            </div>

            {/* Right: CTA Button — desktop shows this in the side panel instead */}
            <div className="md:col-span-4 flex justify-start md:justify-end items-end lg:hidden">
              <button
                tabIndex={isActive ? 0 : -1}
                className="group/cta flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-widest font-bold uppercase transition-all duration-300 backdrop-blur-sm border"
                style={{
                  backgroundColor: `${project.brandColor}18`,
                  borderColor: `${project.brandColor}40`,
                  color: 'white',
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget;
                  btn.style.backgroundColor = project.brandColor;
                  btn.style.borderColor = project.brandColor;
                  btn.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget;
                  btn.style.backgroundColor = `${project.brandColor}18`;
                  btn.style.borderColor = `${project.brandColor}40`;
                  btn.style.color = 'white';
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(project.href);
                }}
                aria-label={`Explore ${project.title}`}
              >
                <span className="font-ibm-plex-mono">VIEW CASE STUDY</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ===== Exit Dimmer Overlay ===== */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-20 pointer-events-none"
        />

        {/* ===== Bottom edge shine line — hover-only on desktop ===== */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px z-30 opacity-30 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.brandColor}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// --- Side Pagination Rail ---
function SidePagination({
  projects,
  activeIndex,
  onDotClick,
  onSwitchToGrid,
}: {
  projects: ProjectData[];
  activeIndex: number;
  onDotClick: (index: number) => void;
  onSwitchToGrid?: () => void;
}) {
  return (
    <div className="absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      {/* Counter badge */}
      <div className="mb-3 font-ibm-plex-mono text-[10px] tracking-wider text-white/50">
        <span className="text-white font-semibold">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <span className="mx-0.5">/</span>
        <span>{String(projects.length).padStart(2, '0')}</span>
      </div>

      {/* Clickable dots with hover labels */}
      <div className="relative flex flex-col items-center">
        {projects.map((project, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          return (
            <button
              key={project.href}
              onClick={() => onDotClick(i)}
              aria-label={`Go to ${project.title}`}
              aria-current={isActive ? 'true' : undefined}
              className="group/dot relative flex items-center justify-center w-7 h-6"
            >
              {/* Hover label */}
              <span className="absolute right-full mr-1.5 whitespace-nowrap rounded-md bg-black/75 backdrop-blur-md border border-white/10 px-2 py-1 font-ibm-plex-mono text-[9px] uppercase tracking-wider text-white/80 opacity-0 translate-x-1 transition-all duration-200 group-hover/dot:opacity-100 group-hover/dot:translate-x-0 pointer-events-none">
                {project.title}
              </span>
              <span
                className={cn(
                  'rounded-full transition-all duration-300 ease-out',
                  isActive
                    ? 'w-1.5 h-5'
                    : isPast
                      ? 'w-1.5 h-1.5 bg-white/35 group-hover/dot:bg-white/60'
                      : 'w-1.5 h-1.5 bg-white/15 group-hover/dot:bg-white/40'
                )}
                style={
                  isActive
                    ? {
                        backgroundColor: projects[activeIndex].brandColor,
                        boxShadow: `0 0 10px ${projects[activeIndex].brandColor}66`,
                      }
                    : undefined
                }
              />
            </button>
          );
        })}
      </div>

      {/* Grid view toggle */}
      {onSwitchToGrid && (
        <>
          <div className="w-px h-4 bg-white/10 my-2.5" />
          <button
            onClick={onSwitchToGrid}
            aria-label="Switch to grid view"
            title="Grid view"
            className="p-2 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md text-white/50 hover:text-white hover:border-white/30 transition-colors duration-200"
          >
            <LayoutGrid size={13} strokeWidth={2} />
          </button>
        </>
      )}
    </div>
  );
}
