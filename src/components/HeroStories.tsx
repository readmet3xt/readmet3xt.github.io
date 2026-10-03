import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { usePhone } from '@/hooks/use-phone';
import { MotionStage } from '@/motion/MotionStage';
import { HERO_STORIES, STORY_SIZE } from '@/motion/registry';

export const STORIES_KEY = 'storiesPlayed';

const markPlayed = () => {
  try {
    localStorage.setItem(STORIES_KEY, '1');
  } catch {
    // storage blocked: they show again next visit
  }
};

/** How far the page should scroll back when the stories are removed above the reader. */
export type StoriesDone = { scrollBack: number };

/**
 * The three short stories, played in order with chapter controls like Apple's
 * highlights. Once they have played (or are skipped) they fold away so the
 * intro sits on top, and the visitor isn't shown them again.
 */
export const HeroStories = ({ onDone }: { onDone: (done: StoriesDone) => void }) => {
  const phone = usePhone();
  const size = phone ? STORY_SIZE.tall : STORY_SIZE.wide;
  const [index, setIndex] = useState(0);
  const [run, setRun] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);
  const section = useRef<HTMLElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const story = HERO_STORIES[index];
  const lastIndex = HERO_STORIES.length - 1;

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const go = (i: number) => {
    setIndex(i);
    setProgress(0);
    setPaused(false);
    setRun((r) => r + 1);
  };

  // Fold away. If the reader has already scrolled past, remove at once and keep their place.
  const close = () => {
    if (closing) return;
    markPlayed();
    const box = section.current?.getBoundingClientRect();
    if (box && box.bottom <= 0) {
      onDone({ scrollBack: box.height });
      return;
    }
    setClosing(true);
    timers.current.push(setTimeout(() => onDone({ scrollBack: 0 }), 750));
  };

  const onEnded = () => {
    if (index < lastIndex) go(index + 1);
    else {
      setProgress(1);
      timers.current.push(setTimeout(close, 1400));
    }
  };

  const fill = (i: number) => (i < index ? 1 : i === index ? progress : 0);

  return (
    <div
      className="grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={{ gridTemplateRows: closing ? '0fr' : '1fr', opacity: closing ? 0 : 1 }}
    >
      <section ref={section} aria-label="Three short stories about my work" className="min-h-0 overflow-hidden">
        <div className="pb-14 lg:pb-20">
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary">
            <MotionStage
              key={`${index}-${run}-${phone ? 'tall' : 'wide'}`}
              component={story.component}
              width={size.width}
              height={size.height}
              durationInFrames={story.durationInFrames}
              poster={story.poster}
              initialFrame={0}
              paused={paused}
              onFrame={(f) => setProgress(f / (story.durationInFrames - 1))}
              onEnded={onEnded}
              label={`${story.title}: ${story.label}`}
            />
          </div>

          <div className="mt-4 flex items-center gap-3 sm:gap-4">
            <ol className="grid flex-1 grid-cols-3 gap-2 sm:gap-3">
              {HERO_STORIES.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={i === index ? 'step' : undefined}
                    className="group block w-full text-left py-2"
                  >
                    <span className={`hidden sm:block font-mono text-xs mb-2 transition-colors ${i === index ? 'text-text-primary' : 'text-text-tertiary group-hover:text-text-secondary'}`}>
                      {s.title}
                    </span>
                    <span className="sr-only sm:hidden">{s.title}</span>
                    <span className="block h-[2px] rounded-full bg-border overflow-hidden" aria-hidden="true">
                      <span className="block h-full bg-text-primary" style={{ width: `${fill(i) * 100}%` }} />
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-text-primary hover:bg-bg-secondary transition-colors"
              aria-label={paused ? 'Play the stories' : 'Pause the stories'}
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={close}
              className="h-10 shrink-0 rounded-full border border-border px-4 font-mono text-xs text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
            >
              Skip
            </button>
          </div>
          <p className="mt-1 font-mono text-xs text-text-tertiary sm:hidden">{story.title}</p>
        </div>
      </section>
    </div>
  );
};
