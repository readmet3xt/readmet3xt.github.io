import { useLayoutEffect, useRef, useState } from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, tween } from '../helpers';
import type { LookProps } from '../theme';

// First-visit welcome (5 s). A service blueprint draws itself, a blue "you are
// here" dot walks the customer lane, the lanes fold into one baseline, and the
// dot writes "i'm amaan" along it before settling as the full stop.
// Works at any size: pass the visitor's screen as the composition size.

export const WELCOME_FRAMES = 150;

const LANES = ['customer', 'frontstage', 'backstage', 'support'];
const TICKS = 5;

export const Welcome: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;
  const u = Math.min(W / 1280, H / 800);
  const size = portrait ? W * 0.15 : Math.min(118 * u, W * 0.1);
  const dot = Math.max(8, size * 0.17);

  // Measure where the name and its full stop land, so the dot can travel to them.
  const block = useRef<HTMLDivElement>(null);
  const name = useRef<HTMLSpanElement>(null);
  const stop = useRef<HTMLSpanElement>(null);
  const [m, setM] = useState({ nameLeft: W * 0.35, nameW: W * 0.3, stopX: W * 0.66, baseY: H * 0.55 });
  useLayoutEffect(() => {
    const measure = () => {
      if (!block.current || !name.current || !stop.current) return;
      const bx = block.current.offsetLeft;
      const by = block.current.offsetTop;
      setM({
        nameLeft: bx + name.current.offsetLeft,
        nameW: name.current.offsetWidth,
        stopX: bx + stop.current.offsetLeft + dot / 2,
        baseY: by + stop.current.offsetTop + dot,
      });
    };
    measure();
    document.fonts?.ready.then(measure);
  }, [fonts.display, size, dot, W, H]);

  const laneLeft = portrait ? W * 0.08 : W * 0.16;
  const laneRight = W - laneLeft;
  const laneGap = portrait ? 46 * (W / 390) * 0.9 : 58 * u;
  const laneY = (i: number) => H * 0.5 + (i - 1.5) * laneGap;

  // Lanes fold onto the baseline between frames 58 and 82.
  const fold = tween(f, 58, 24);
  const baselineOut = tween(f, 112, 18);

  // The dot: walk the customer lane, drop to the baseline, write the name.
  const appear = tween(f, 22, 10);
  const walk = tween(f, 24, 36, 0, 1, TRAVEL);
  const drop = tween(f, 60, 18);
  const write = tween(f, 78, 34, 0, 1, TRAVEL);
  const dotX = f < 78 ? mix(laneLeft - 6, m.nameLeft, walk) : mix(m.nameLeft, m.stopX, write);
  const dotY = mix(laneY(0), m.baseY - dot / 2, drop);
  const settle = 1 + 0.18 * Math.sin(Math.PI * tween(f, 112, 10));

  const revealed = f < 78 ? 0 : Math.max(0, dotX - m.nameLeft - dot * 0.2);
  const clipRight = Math.max(0, m.nameW - revealed);

  return (
    <AbsoluteFill style={{ background: p.bg, overflow: 'hidden' }}>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {LANES.map((_, i) => {
          const draw = tween(f, 4 + i * 4, 26);
          const y = mix(laneY(i), m.baseY, fold);
          const opacity = i === 0 ? 1 - baselineOut : 1 - fold;
          return (
            <line
              key={i}
              x1={laneLeft}
              x2={mix(laneLeft, laneRight, draw)}
              y1={y}
              y2={y}
              stroke={p.faint}
              strokeWidth={1}
              opacity={opacity}
            />
          );
        })}
        {Array.from({ length: TICKS }, (_, k) => {
          const x = laneLeft + ((k + 0.5) * (laneRight - laneLeft)) / TICKS;
          const grow = tween(f, 20 + k * 6, 12);
          const out = 1 - tween(f, 56, 14);
          return (
            <g key={k} opacity={out}>
              <line x1={x} x2={x} y1={laneY(0)} y2={mix(laneY(0), laneY(3), grow)} stroke={p.faint} strokeWidth={1} opacity={0.7} />
              <circle cx={x} cy={laneY(0)} r={4 * Math.max(u, 0.6) * grow} fill={p.bg} stroke={p.ink} strokeWidth={1.25} />
            </g>
          );
        })}
      </svg>

      {LANES.map((label, i) => (
        <div
          key={label}
          style={{
            position: 'absolute',
            left: laneLeft,
            top: laneY(i) - 22 * Math.max(u, 0.7),
            fontFamily: fonts.mono,
            fontSize: Math.max(11, 13 * u),
            color: p.muted,
            ...fadeUp(f, 12 + i * 2, { dur: 14, dist: 6, outAt: 52, outDur: 10 }),
          }}
        >
          {label}
        </div>
      ))}

      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div ref={block} style={{ position: 'relative', fontFamily: fonts.display, fontWeight: fonts.displayWeight, fontSize: size, lineHeight: 1.04, letterSpacing: `${fonts.displayTracking}em` }}>
          <div style={{ color: p.muted, ...fadeUp(f, 104, { dur: 20, dist: 10 }) }}>hi.</div>
          <div style={{ whiteSpace: 'nowrap', color: p.ink }}>
            <span ref={name} style={{ display: 'inline-block', clipPath: `inset(-25% ${clipRight}px -25% 0)` }}>
              i’m amaan
            </span>
            <span ref={stop} style={{ display: 'inline-block', width: dot, height: dot, marginLeft: dot * 0.35 }} />
          </div>
        </div>
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          left: dotX - dot / 2,
          top: dotY - dot / 2,
          width: dot,
          height: dot,
          borderRadius: dot,
          background: p.accent,
          opacity: appear,
          transform: `scale(${appear * settle})`,
          boxShadow: `0 0 0 ${tween(f, 22, 30, 0, dot * 1.6)}px ${p.accent}${Math.round((1 - tween(f, 22, 30)) * 60).toString(16).padStart(2, '0')}`,
        }}
      />
    </AbsoluteFill>
  );
};

