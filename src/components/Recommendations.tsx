import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// LinkedIn recommendations, quoted in full and verbatim.

interface Recommendation {
  name: string;
  role: string;
  relationship: string;
  text: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Elin Sjursen',
    role: 'Senior Design Strategy Director, Visa',
    relationship: 'Mentored Amaan on the Pebble project at the RCA',
    text: "Amaan delivered his final student work at RCA as an employee experience project in collaboration with Visa. He and his team did an amazing job exploring ways of creating happy environments for our remotely working employees. Amaan was not only proactive in managing his stakeholders and bringing together the right people at the right time in the design thinking process, his thoughts, analysis of the insight and creative output was thoughtful, articulate and incredibly creative. Check out the Pebbles project in his portfolio and you will be very impressed. Dependable, smart, insightful and driven, I highly recommend you snap up Amaan on your team.",
  },
  {
    name: 'Chandana Gowda',
    role: 'UI/UX Designer, KoinBasket',
    relationship: 'Reported to Amaan at KoinBasket',
    text: "I had the pleasure of working with Amaan Khan, and he was an incredible mentor throughout my role. He generously shared materials, provided valuable tips, and guided me in refining my skills. What truly stands out about Amaan is his meticulous attention to detail and his ability to explore multiple solutions to meet both client expectations and design requirements. He consistently strives to enhance products through thorough research and innovative ideas while keeping a company's budget in mind. Overall, he is not only a talented designer but also a great person to work with. I'm grateful to have had the opportunity to learn from him and highly recommend him to anyone looking for a skilled and thoughtful professional.",
  },
  {
    name: 'Khaleelulla Baig',
    role: 'Founder, KoinBasket',
    relationship: 'Managed Amaan at KoinBasket',
    text: 'Amaan is a great talent in the UI UX design space. He thinks out of the box and follows the most appropriate research and implementation process. All the best and look forward to collaborating again',
  },
  {
    name: 'Deljo Joseph',
    role: 'Founder, Getter',
    relationship: 'Worked with Amaan at KoinBasket',
    text: "I worked closely with Amaan at KoinBasket on various projects. He consistently delivered impressive UI/UX work, even on tight deadlines. He's a genuine team player and a great asset to any team.",
  },
];

interface RecommendationsProps {
  showTitle?: boolean;
}

const slidesOf = (el: HTMLElement | null) => Array.from(el?.children ?? []) as HTMLElement[];

/**
 * The recommendations, one at a time, in full. The visitor moves through them
 * (arrows, dots, swipe, or arrow keys on the focused carousel); nothing advances
 * on its own. The browser's scroll snapping does the sliding, so swipe feels native.
 */
export const Recommendations = ({ showTitle = true }: RecommendationsProps) => {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState<number>();
  const count = RECOMMENDATIONS.length;

  // Phones: the carousel is as tall as the current recommendation, so a short one doesn't sit
  // above the longest one's empty space. Larger screens keep equal heights, names along the bottom.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const phone = window.matchMedia('(max-width: 767px)');
    const update = () => setHeight(phone.matches ? slidesOf(el)[index]?.offsetHeight : undefined);
    update();
    const resize = new ResizeObserver(update);
    slidesOf(el).forEach((slide) => resize.observe(slide));
    phone.addEventListener('change', update);
    return () => {
      resize.disconnect();
      phone.removeEventListener('change', update);
    };
  }, [index]);

  // The current slide follows the scroll position, however it got there.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nearest = slidesOf(el).reduce((best, slide, i, all) => (Math.abs(slide.offsetLeft - el.scrollLeft) < Math.abs(all[best].offsetLeft - el.scrollLeft) ? i : best), 0);
        setIndex(nearest);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Loops at the ends, like the image viewer.
  const go = useCallback(
    (i: number) => {
      const el = scroller.current;
      const target = slidesOf(el)[(i + count) % count];
      if (!el || !target) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollTo({ left: target.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
    },
    [count],
  );

  return (
    <section
      aria-labelledby={showTitle ? 'recommendations-heading' : undefined}
      aria-label={showTitle ? undefined : 'Recommendations'}
      aria-roledescription="carousel"
      className={showTitle ? 'border-t border-border py-16' : ''}
    >
      {showTitle && <h2 id="recommendations-heading" className="text-3xl sm:text-4xl mb-10">Recommendations</h2>}

      <div
        ref={scroller}
        tabIndex={0}
        aria-label="Recommendations, one at a time; use the arrow keys to move"
        style={{ height }}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-2xl transition-[height] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] max-md:items-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {RECOMMENDATIONS.map((r, i) => (
          <figure
            key={r.name}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className="flex w-full shrink-0 snap-start flex-col rounded-2xl border border-border bg-bg-secondary p-6 sm:p-10"
          >
            <span aria-hidden="true" className="text-5xl leading-none text-accent-primary">“</span>
            <blockquote className="mt-2 max-w-[62ch] text-lg leading-relaxed text-text-primary sm:text-xl">{r.text}</blockquote>
            <figcaption className="mt-auto pt-8 text-sm">
              <span className="block font-medium text-text-primary">{r.name}</span>
              <span className="block text-text-secondary">{r.role}</span>
              <span className="block font-mono text-xs mt-1 text-text-tertiary">{r.relationship}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="-ml-3 flex items-center" role="group" aria-label="Choose a recommendation">
          {RECOMMENDATIONS.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Recommendation ${i + 1} of ${count}, from ${r.name}`}
              aria-current={i === index ? 'true' : undefined}
              className="group flex h-11 w-11 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`block h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${i === index ? 'w-6 bg-text-primary' : 'w-1.5 bg-text-tertiary group-hover:bg-text-secondary'}`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous recommendation" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:bg-bg-secondary">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next recommendation" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:bg-bg-secondary">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Recommendation {index + 1} of {count}, from {RECOMMENDATIONS[index].name}
      </p>

      <p className="mt-4 text-sm">
        <a href="https://www.linkedin.com/in/readmetxt/details/recommendations/" target="_blank" rel="noopener noreferrer" className="link-ink inline-flex min-h-[44px] items-center">
          Read them on LinkedIn ↗
        </a>
      </p>
    </section>
  );
};
