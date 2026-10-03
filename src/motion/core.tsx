import { createContext, forwardRef, useContext, type CSSProperties, type ReactNode } from 'react';

/* A few-KB stand-in for the parts of Remotion the compositions use. The same
   compositions are authored and rendered to video in Remotion (Projects\amaan-motion);
   on the site they run on this runtime, so visitors don't download Remotion's player. */

export type VideoConfig = { width: number; height: number; fps: number; durationInFrames: number };

const FrameContext = createContext(0);
const ConfigContext = createContext<VideoConfig>({ width: 1280, height: 720, fps: 30, durationInFrames: 1 });

export const FrameProvider = ({ frame, config, children }: { frame: number; config: VideoConfig; children: ReactNode }) => (
  <ConfigContext.Provider value={config}>
    <FrameContext.Provider value={frame}>{children}</FrameContext.Provider>
  </ConfigContext.Provider>
);

export const useCurrentFrame = () => useContext(FrameContext);

/** A file in the site's public folder (Remotion swaps in its own staticFile). */
export const assetUrl = (path: string) => path;
export const useVideoConfig = () => useContext(ConfigContext);

export const AbsoluteFill = forwardRef<HTMLDivElement, { style?: CSSProperties; className?: string; children?: ReactNode }>(
  ({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', ...style }}
      {...rest}
    />
  ),
);
AbsoluteFill.displayName = 'AbsoluteFill';

type Extrapolate = 'clamp' | 'extend';

/** Piecewise-linear mapping with optional easing, as in Remotion. */
export function interpolate(
  input: number,
  inputRange: readonly number[],
  outputRange: readonly number[],
  options: { easing?: (t: number) => number; extrapolateLeft?: Extrapolate; extrapolateRight?: Extrapolate } = {},
): number {
  const { easing = (t: number) => t, extrapolateLeft = 'extend', extrapolateRight = 'extend' } = options;
  let i = 1;
  while (i < inputRange.length - 1 && input > inputRange[i]) i++;
  const a = inputRange[i - 1];
  const b = inputRange[i];
  const c = outputRange[i - 1];
  const d = outputRange[i];
  let t = b === a ? 0 : (input - a) / (b - a);
  if (t < 0 && extrapolateLeft === 'clamp') t = 0;
  if (t > 1 && extrapolateRight === 'clamp') t = 1;
  return c + (d - c) * easing(t);
}

/** CSS-style cubic-bezier timing function. */
const bezier = (x1: number, y1: number, x2: number, y2: number) => {
  const a = (p1: number, p2: number) => 1 - 3 * p2 + 3 * p1;
  const b = (p1: number, p2: number) => 3 * p2 - 6 * p1;
  const c = (p1: number) => 3 * p1;
  const at = (t: number, p1: number, p2: number) => ((a(p1, p2) * t + b(p1, p2)) * t + c(p1)) * t;
  const slope = (t: number, p1: number, p2: number) => 3 * a(p1, p2) * t * t + 2 * b(p1, p2) * t + c(p1);
  const solveX = (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const s = slope(t, x1, x2);
      if (Math.abs(s) < 1e-6) break;
      t -= (at(t, x1, x2) - x) / s;
    }
    if (t >= 0 && t <= 1 && Math.abs(at(t, x1, x2) - x) < 1e-4) return t;
    let lo = 0;
    let hi = 1;
    t = x;
    for (let i = 0; i < 40; i++) {
      const v = at(t, x1, x2);
      if (Math.abs(v - x) < 1e-6) break;
      if (v > x) hi = t;
      else lo = t;
      t = (lo + hi) / 2;
    }
    return t;
  };
  return (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : at(solveX(x), y1, y2));
};

export const Easing = { bezier, linear: (t: number) => t };
