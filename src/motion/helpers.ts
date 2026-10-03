import type { CSSProperties } from 'react';
import { Easing, interpolate } from './core';

// One calm curve everywhere (ease-out, no overshoot), plus an in-out for travel.
export const EASE = Easing.bezier(0.23, 1, 0.32, 1);
export const TRAVEL = Easing.bezier(0.65, 0, 0.35, 1);

/** 0→1 (or from→to) between `start` and `start + dur` frames, clamped. */
export const tween = (frame: number, start: number, dur: number, from = 0, to = 1, easing = EASE) =>
  interpolate(frame, [start, start + dur], [from, to], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing });

/** Fade in while rising a few pixels; optionally fade out again at `outAt`. */
export const fadeUp = (frame: number, start: number, opts: { dur?: number; dist?: number; outAt?: number; outDur?: number } = {}): CSSProperties => {
  const { dur = 18, dist = 12, outAt, outDur = 10 } = opts;
  const inn = tween(frame, start, dur);
  const out = outAt === undefined ? 0 : tween(frame, outAt, outDur);
  return { opacity: inn * (1 - out), transform: `translateY(${(1 - inn) * dist - out * dist * 0.6}px)` };
};

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/** Deterministic pseudo-random numbers, so every play matches. */
export const seeded = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

/** A loop-friendly 0→1→0 envelope: rises at `a`, falls at `b`. */
export const span = (frame: number, a: number, b: number, dur = 12) => tween(frame, a, dur) * (1 - tween(frame, b, dur));
