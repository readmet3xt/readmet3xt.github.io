import { useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { usePhone } from '@/hooks/use-phone';
import { useSitePrefs } from '@/lib/sitePrefs';
import { MotionStage } from '@/motion/MotionStage';
import { HERO_STORIES, STORY_SIZE } from '@/motion/registry';

/** The four short stories, played in order, with chapter controls like Apple's highlights. */
export const HeroStories = () => {
  const { motion } = useSitePrefs();
  const phone = usePhone();
  const size = phone ? STORY_SIZE.tall : STORY_SIZE.wide;
  const [index, setIndex] = useState(0);
  const [run, setRun] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const story = HERO_STORIES[index];
  const lastIndex = HERO_STORIES.length - 1;

  const go = (i: number) => {
    setIndex(i);
    setProgress(0);
    setDone(false);
    setPaused(false);
    setRun((r) => r + 1);
  };

  const onEnded = () => {
    if (index < lastIndex) go(index + 1);
    else {
      setProgress(1);
      setDone(true);
    }
  };

  const fill = (i: number) => {
    if (!motion) return i === index ? 1 : 0;
    if (i < index) return 1;
    return i === index ? progress : 0;
  };

  return (
    <section aria-label="Four short stories about my work" className="pb-14 lg:pb-20">
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary">
        <MotionStage
          key={`${index}-${run}-${phone ? 'tall' : 'wide'}`}
          component={story.component}
          width={size.width}
          height={size.height}
          durationInFrames={story.durationInFrames}
          poster={story.poster}
          initialFrame={motion ? 0 : undefined}
          paused={paused}
          onFrame={(f) => setProgress(f / (story.durationInFrames - 1))}
          onEnded={onEnded}
          label={`${story.title}: ${story.label}`}
        />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <ol className="grid flex-1 grid-cols-4 gap-2 sm:gap-3">
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
        {motion && (
          <button
            type="button"
            onClick={() => (done ? go(0) : setPaused((p) => !p))}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-text-primary hover:bg-bg-secondary transition-colors"
            aria-label={done ? 'Replay the stories' : paused ? 'Play the stories' : 'Pause the stories'}
          >
            {done ? <RotateCcw className="h-4 w-4" /> : paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        )}
      </div>
      <p className="mt-1 font-mono text-xs text-text-tertiary sm:hidden">{story.title}</p>
    </section>
  );
};
