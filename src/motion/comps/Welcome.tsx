import { useLayoutEffect, useRef, useState } from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';

// First-visit welcome (about 3.7 s): sketch to built. The greeting is drawn
// first as a wireframe (layout grid, outline type drawn stroke by stroke, a
// grey placeholder bar, a spacing redline, type notes). Then a build line sweeps across with the
// red "you are here" dot riding it; behind it everything becomes real. The dot
// lands as the full stop of "i'm amaan". Works at any size: pass the visitor's
// screen as the composition size.

export const WELCOME_FRAMES = 112;

const ROLE = 'Service & Product Designer';

export const Welcome: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;
  const u = Math.min(W / 1280, H / 800);
  const size = portrait ? W * 0.15 : Math.min(118 * u, W * 0.1);
  const dot = Math.max(8, size * 0.17);
  const lead = size * 1.04;
  const roleSize = Math.max(12, size * 0.19);
  const label = Math.max(10, size * 0.12);

  // Measure the name so the block can be centred and the full stop placed.
  const nameRef = useRef<SVGTextElement>(null);
  const [nameW, setNameW] = useState(size * 4.6);
  useLayoutEffect(() => {
    const measure = () => {
      if (nameRef.current) setNameW(nameRef.current.getComputedTextLength());
    };
    measure();
    document.fonts?.ready.then(measure);
  }, [size, fonts.display]);

  // Layout of the greeting block, relative to its top-left corner.
  const roleW = ROLE.length * roleSize * 0.6;
  const stopX = nameW + dot * 0.35 + dot / 2;
  const blockW = Math.max(stopX + dot / 2, roleW);
  const base1 = size * 0.9;
  const base2 = base1 + lead;
  const roleBase = base2 + size * 0.6;
  const blockH = roleBase + roleSize * 0.3;
  const left = (W - blockW) / 2;
  const top = (H - blockH) / 2;
  const X = (x: number) => left + x;
  const Y = (y: number) => top + y;

  // Timing.
  const guides = tween(f, 0, 16);
  // "hi." draws first, then the name, then the role's placeholder.
  const draw1 = tween(f, 2, 26, 0, 1, TRAVEL);
  const draw2 = tween(f, 10, 32, 0, 1, TRAVEL);
  const drawRole = tween(f, 22, 18);
  const marks = tween(f, 24, 12);
  const sweep = tween(f, 42, 40, 0, 1, TRAVEL);
  const out = tween(f, 80, 14);
  const sx = mix(X(-size * 0.45), X(blockW + size * 0.45), sweep);
  const sweepOn = span(f, 40, 84, 6);

  // The dot rides the top of the build line, then drops into the full stop.
  const lineTop = Y(-size * 0.55);
  const land = tween(f, 84, 14, 0, 1, TRAVEL);
  const stop = { x: X(stopX), y: Y(base2 - dot / 2) };
  const dotX = f < 84 ? sx : mix(sx, stop.x, land);
  const dotY = f < 84 ? lineTop : mix(lineTop, stop.y, land) - Math.sin(Math.PI * land) * size * 0.35;
  const settle = 1 + 0.2 * Math.sin(Math.PI * tween(f, 98, 10));
  const dotOn = tween(f, 38, 8);
  const ring = tween(f, 97, 16);

  // Each letter's outline draws in one stroke at a steady pace: the visible dash
  // grows to the longest outline (P); once drawn, the dash is dropped.
  const D = size * 9;
  const P = size * 4.2;
  const outline = (t: number) => (t >= 1 ? {} : { strokeDasharray: `${D} ${D}`, strokeDashoffset: D - P * t });
  const heading = { fontFamily: fonts.display, fontWeight: fonts.displayWeight, fontSize: size, letterSpacing: `${fonts.displayTracking}em` };
  const columns = [0, 1 / 3, 2 / 3, 1];

  // One copy of the greeting: as a sketch, or as built.
  const greeting = (built: boolean) => (
    <g>
      <text x={X(0)} y={Y(base1)} style={{ ...heading, ...(built ? {} : outline(draw1)) }} fill={built ? p.muted : 'none'} stroke={built ? 'none' : p.muted} strokeWidth={1.2}>
        hi.
      </text>
      <text ref={built ? nameRef : undefined} x={X(0)} y={Y(base2)} style={{ ...heading, ...(built ? {} : outline(draw2)) }} fill={built ? p.ink : 'none'} stroke={built ? 'none' : p.muted} strokeWidth={1.2}>
        i’m amaan
      </text>
      {built ? (
        <text x={X(0)} y={Y(roleBase)} style={{ fontFamily: fonts.mono, fontSize: roleSize }} fill={p.muted}>
          {ROLE}
        </text>
      ) : (
        <rect x={X(0)} y={Y(roleBase - roleSize * 0.78)} width={roleW * drawRole} height={roleSize * 0.9} rx={3} fill={p.line} />
      )}
    </g>
  );

  return (
    <AbsoluteFill style={{ background: p.bg, overflow: 'hidden' }}>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <clipPath id="welcome-built">
            <rect x={0} y={0} width={Math.max(0, sx)} height={H} />
          </clipPath>
          <clipPath id="welcome-sketch">
            <rect x={sx} y={0} width={Math.max(0, W - sx)} height={H} />
          </clipPath>
          <linearGradient id="welcome-glow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={p.accent} stopOpacity={0} />
            <stop offset="1" stopColor={p.accent} stopOpacity={0.1} />
          </linearGradient>
        </defs>

        {/* the layout grid and baselines */}
        <g opacity={guides * (1 - out)}>
          {columns.map((c) => (
            <line key={c} x1={X(blockW * c)} x2={X(blockW * c)} y1={Y(-size * 0.7)} y2={mix(Y(-size * 0.7), Y(blockH + size * 0.7), guides)} stroke={p.line} strokeWidth={1} strokeDasharray="2 6" />
          ))}
          {[base1, base2].map((b) => (
            <line key={b} x1={W * 0.06} x2={mix(W * 0.06, W * 0.94, guides)} y1={Y(b)} y2={Y(b)} stroke={p.line} strokeWidth={1} />
          ))}
        </g>

        {/* the spacing redline */}
        <g opacity={marks * (1 - out)} stroke={p.accent} strokeWidth={1}>
          <line x1={X(-size * 0.3)} x2={X(-size * 0.3)} y1={Y(base2 + size * 0.14)} y2={Y(roleBase - roleSize * 0.8)} />
          <line x1={X(-size * 0.38)} x2={X(-size * 0.22)} y1={Y(base2 + size * 0.14)} y2={Y(base2 + size * 0.14)} />
          <line x1={X(-size * 0.38)} x2={X(-size * 0.22)} y1={Y(roleBase - roleSize * 0.8)} y2={Y(roleBase - roleSize * 0.8)} />
        </g>
        <g opacity={marks * (1 - out)} style={{ fontFamily: fonts.mono, fontSize: label }} fill={p.muted}>
          <text x={X(-size * 0.46)} y={Y((base2 + roleBase) / 2 - roleSize * 0.1)} textAnchor="end">24</text>
        </g>

        {/* type notes, as on a design spec */}
        <g opacity={tween(f, 30, 12) * (1 - out)}>
          <line x1={X(size * 1.5)} x2={X(blockW) - label * 6.4} y1={Y(base1 - size * 0.32)} y2={Y(base1 - size * 0.32)} stroke={p.accent} strokeWidth={1} strokeDasharray="2 4" />
          <line x1={X(roleW + size * 0.15)} x2={X(blockW) - label * 6.9} y1={Y(roleBase - roleSize * 0.35)} y2={Y(roleBase - roleSize * 0.35)} stroke={p.accent} strokeWidth={1} strokeDasharray="2 4" />
          <g style={{ fontFamily: fonts.mono, fontSize: label }} fill={p.muted}>
            <text x={X(blockW)} y={Y(base1 - size * 0.32 + label * 0.35)} textAnchor="end">Geist 600</text>
            <text x={X(blockW)} y={Y(roleBase - roleSize * 0.35 + label * 0.35)} textAnchor="end">Geist Mono</text>
          </g>
        </g>

        <g clipPath="url(#welcome-sketch)">{greeting(false)}</g>
        <g clipPath="url(#welcome-built)">{greeting(true)}</g>

        {/* the build line, with a faint glow over what it has just built */}
        <rect x={sx - size * 0.5} y={lineTop} width={size * 0.5} height={Y(blockH + size * 0.55) - lineTop} fill="url(#welcome-glow)" opacity={sweepOn} />
        <line x1={sx} x2={sx} y1={lineTop} y2={Y(blockH + size * 0.55)} stroke={p.accent} strokeWidth={1.5} opacity={sweepOn} />

        {/* the full stop lands */}
        <circle cx={stop.x} cy={stop.y} r={mix(dot / 2, dot * 2.2, ring)} fill="none" stroke={p.accent} strokeWidth={1.5} opacity={ring > 0 && ring < 1 ? (1 - ring) * 0.7 : 0} />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: dotX - dot / 2,
          top: dotY - dot / 2,
          width: dot,
          height: dot,
          borderRadius: dot,
          background: p.accent,
          opacity: dotOn,
          transform: `scale(${dotOn * settle})`,
        }}
      />
    </AbsoluteFill>
  );
};
