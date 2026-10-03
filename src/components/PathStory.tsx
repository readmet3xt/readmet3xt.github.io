import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { usePhone } from '@/hooks/use-phone';
import { useSitePrefs } from '@/lib/sitePrefs';
import { MotionStage } from '@/motion/MotionStage';
import { PATH_STORY, STORY_SIZE } from '@/motion/registry';

/** "My path so far" on its own, for the About page. Plays once when it comes into view. */
export const PathStory = () => {
  const phone = usePhone();
  const { motion } = useSitePrefs();
  const [run, setRun] = useState(0);
  const size = phone ? STORY_SIZE.tall : STORY_SIZE.wide;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-primary">
      <MotionStage
        key={`${run}-${phone ? 'tall' : 'wide'}`}
        component={PATH_STORY.component}
        width={size.width}
        height={size.height}
        durationInFrames={PATH_STORY.durationInFrames}
        initialFrame={motion && run > 0 ? 0 : undefined}
        label={PATH_STORY.label}
      />
      {motion && (
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-primary/80 text-text-primary backdrop-blur hover:bg-bg-secondary"
          aria-label="Replay my path so far"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
