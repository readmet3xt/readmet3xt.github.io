import { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type FC } from 'react';
import { useSitePrefs } from '@/lib/sitePrefs';
import { readableOn } from './colors';
import { FrameProvider } from './core';
import type { LookProps } from './theme';
import { getWelcomeActive, subscribeTick, subscribeWelcome } from './ticker';

/* Plays one composition, scaled to fit its box. It starts when it comes into
   view (or on mount), pauses off screen, and rests on `poster` when animations
   are off. Text inside is real DOM text, so it stays sharp at any size. */

type Props = {
  component: FC<LookProps>;
  width: number;
  height: number;
  durationInFrames: number;
  fps?: number;
  loop?: boolean;
  autoPlay?: 'visible' | 'mount' | 'never';
  paused?: boolean;
  /** frame shown at rest and when animations are off (default: the last) */
  poster?: number;
  /** frame shown before playback starts (default: the poster) */
  initialFrame?: number;
  /** cover the parent instead of keeping the composition's aspect ratio */
  fill?: boolean;
  /** a project's own colour, used in place of the site accent (adjusted to read on the tile) */
  accent?: string;
  onEnded?: () => void;
  onFrame?: (frame: number) => void;
  /** what the animation shows, for screen readers */
  label: string;
  className?: string;
  style?: CSSProperties;
};

export const MotionStage = ({
  component: Comp,
  width,
  height,
  durationInFrames,
  fps = 30,
  loop = false,
  autoPlay = 'visible',
  paused = false,
  poster,
  initialFrame,
  fill = false,
  accent,
  onEnded,
  onFrame,
  label,
  className,
  style,
}: Props) => {
  const { look: siteLook, motion } = useSitePrefs();
  const look = useMemo(
    () => (accent ? { ...siteLook, palette: { ...siteLook.palette, accent: readableOn(accent, siteLook.palette.panel, 3) } } : siteLook),
    [siteLook, accent],
  );
  const welcome = useSyncExternalStore(subscribeWelcome, getWelcomeActive, () => false);
  const last = durationInFrames - 1;
  const rest = poster ?? last;

  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [visible, setVisible] = useState(false);
  const [frame, setFrame] = useState(initialFrame ?? rest);
  const frameRef = useRef(initialFrame ?? rest);
  const started = useRef(false);
  const ended = useRef(false);
  const callbacks = useRef({ onEnded, onFrame });
  callbacks.current = { onEnded, onFrame };

  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => setScale(fill ? Math.min(el.clientWidth / width, el.clientHeight / height) : el.clientWidth / width);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, height, fill]);

  useEffect(() => {
    if (autoPlay !== 'visible' || !box.current) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    io.observe(box.current);
    return () => io.disconnect();
  }, [autoPlay]);

  // Animations off: show the resting frame.
  useEffect(() => {
    if (!motion) {
      frameRef.current = rest;
      setFrame(rest);
    }
  }, [motion, rest]);

  const wantsPlay =
    motion && !paused && !(welcome && autoPlay !== 'mount') && (autoPlay === 'mount' || (autoPlay === 'visible' && visible));

  useEffect(() => {
    if (!wantsPlay || (!loop && ended.current)) return;
    if (!started.current) {
      started.current = true;
      if (!loop) {
        frameRef.current = 0;
        setFrame(0);
      }
    }
    let origin = -1;
    let stop = () => {};
    stop = subscribeTick((now) => {
      if (origin < 0) origin = now - (frameRef.current * 1000) / fps;
      let f = Math.floor(((now - origin) * fps) / 1000);
      if (f > last) {
        if (loop) f %= durationInFrames;
        else {
          ended.current = true;
          frameRef.current = last;
          setFrame(last);
          stop();
          callbacks.current.onEnded?.();
          return;
        }
      }
      if (f !== frameRef.current) {
        frameRef.current = f;
        setFrame(f);
        callbacks.current.onFrame?.(f);
      }
    });
    return stop;
  }, [wantsPlay, loop, fps, last, durationInFrames]);

  return (
    <div
      ref={box}
      role="img"
      aria-label={label}
      className={className}
      style={{ position: 'relative', width: '100%', ...(fill ? { height: '100%' } : { aspectRatio: `${width} / ${height}` }), overflow: 'hidden', ...style }}
    >
      {scale > 0 && (
        <div
          style={{
            position: 'absolute',
            left: fill ? `calc(50% - ${(width * scale) / 2}px)` : 0,
            top: fill ? `calc(50% - ${(height * scale) / 2}px)` : 0,
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
          }}
        >
          <FrameProvider frame={frame} config={{ width, height, fps, durationInFrames }}>
            <Comp {...look} />
          </FrameProvider>
        </div>
      )}
    </div>
  );
};
