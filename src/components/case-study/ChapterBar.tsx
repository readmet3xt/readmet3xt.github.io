import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';

type Chapter = { id: string; title: string };

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Sticky chapter navigation for a case study: shows where you are and jumps to any section. */
export const ChapterBar = ({ article }: { article: RefObject<HTMLElement> }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [active, setActive] = useState(-1);
  const strip = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  // Read the chapters from the article's section headings.
  useEffect(() => {
    const el = article.current;
    if (!el) return;
    const sections = [...el.querySelectorAll<HTMLElement>(':scope > section.case-study-section')].filter((s) => s.querySelector('h2'));
    setChapters(
      sections.map((s, i) => {
        const title = s.querySelector('h2')!.textContent!.trim();
        if (!s.id) s.id = slug(title) || `chapter-${i + 1}`;
        return { id: s.id, title };
      }),
    );
  }, [article]);

  // Track the chapter being read.
  useEffect(() => {
    if (!chapters.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      let current = -1;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = i;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [chapters]);

  // Slide the line under the current chapter and keep it in view.
  useLayoutEffect(() => {
    const b = buttons.current[active];
    const line = indicator.current;
    if (!line) return;
    if (!b) {
      line.style.opacity = '0';
      return;
    }
    line.style.opacity = '1';
    line.style.width = `${b.offsetWidth}px`;
    line.style.transform = `translateX(${b.offsetLeft}px)`;
    const s = strip.current;
    if (s && (b.offsetLeft < s.scrollLeft || b.offsetLeft + b.offsetWidth > s.scrollLeft + s.clientWidth)) {
      s.scrollTo({ left: b.offsetLeft - 16, behavior: 'smooth' });
    }
  }, [active, chapters]);

  if (chapters.length < 2) return null;

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 128, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <nav aria-label="Chapters" className="sticky top-16 z-10 -mx-4 sm:mx-0 mb-12 border-b border-border bg-bg-primary/85 backdrop-blur-md">
      <div ref={strip} className="relative flex gap-1 overflow-x-auto px-2 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {chapters.map((c, i) => (
          <button
            key={c.id}
            ref={(el) => (buttons.current[i] = el)}
            type="button"
            onClick={() => jump(c.id)}
            aria-current={i === active ? 'location' : undefined}
            className={`shrink-0 whitespace-nowrap px-3 py-3 text-sm transition-colors ${i === active ? 'text-text-primary' : 'text-text-tertiary hover:text-text-secondary'}`}
          >
            {c.title}
          </button>
        ))}
        <span
          ref={indicator}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] rounded-full bg-accent-primary transition-[transform,width,opacity] duration-[450ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ opacity: 0 }}
        />
      </div>
    </nav>
  );
};
