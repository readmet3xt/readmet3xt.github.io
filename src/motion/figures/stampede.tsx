import type { FC } from 'react';
import { useCurrentFrame } from '../core';
import { TRAVEL, mix, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, figure, mono, sans } from './kit';

// Stampede, in three figures: the pace gap in the room, the six stages and
// the kick-off, and all seven animals on the Power × Pace matrix.

/* "How long would it take?" → Airbnb 7 days, WWT 6 months → roughly 25 times the pace. */
const Pace: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const axis = { x: 140, w: 460, y: 330 };
  const dayX = (d: number) => axis.x + (d / 180) * axis.w;
  const airbnb = tween(f, 76, 14, 0, 1, TRAVEL);
  const wwt = tween(f, 92, 40, 0, 1, TRAVEL);
  const gap = tween(f, 146, 16);
  const bar = (y: number, days: number, t: number, strong: boolean) => (
    <div style={{ position: 'absolute', left: axis.x, top: y, width: Math.max(4, (dayX(days) - axis.x) * t), height: 34, borderRadius: 8, background: strong ? p.accent : p.ink, opacity: t > 0 ? 1 : 0 }} />
  );

  return (
    <Frame {...look}>
      <div style={{ position: 'absolute', left: 32, top: 30, right: 32, padding: '14px 18px', borderRadius: 14, background: p.bg, border: `1.5px solid ${p.line}`, ...sans(look, 22, p.ink, 500), opacity: tween(f, 6, 12), transform: `translateY(${(1 - tween(f, 6, 12)) * 8}px)` }}>
        “How long would it take you to do this?”
      </div>

      <div style={{ position: 'absolute', left: 32, top: 170, ...sans(look, 22, p.ink, 600), opacity: tween(f, 70, 10) }}>Airbnb</div>
      {bar(166, 7, airbnb, true)}
      <div style={{ position: 'absolute', left: dayX(7) + 14, top: 170, ...mono(look, 20, p.ink), opacity: airbnb }}>7 days</div>

      <div style={{ position: 'absolute', left: 32, top: 240, ...sans(look, 22, p.ink, 600), opacity: tween(f, 86, 10) }}>WWT</div>
      {bar(236, 180, wwt, false)}
      <div style={{ position: 'absolute', left: dayX(180) - 110, width: 110, top: 280, textAlign: 'right', ...mono(look, 20, p.ink), opacity: wwt > 0.95 ? 1 : 0 }}>6 months</div>

      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={axis.x} y1={axis.y} x2={axis.x + axis.w} y2={axis.y} stroke={p.line} strokeWidth={1.5} />
        {[0, 30, 90, 180].map((d) => (
          <line key={d} x1={dayX(d)} y1={axis.y} x2={dayX(d)} y2={axis.y + 8} stroke={p.line} strokeWidth={1.5} />
        ))}
        {/* the gap between the two answers */}
        <line x1={dayX(7)} y1={210} x2={dayX(7)} y2={236} stroke={p.accent} strokeWidth={2} opacity={gap} />
        <line x1={dayX(7)} y1={223} x2={mix(dayX(7), dayX(180), gap)} y2={223} stroke={p.accent} strokeWidth={2} strokeDasharray="4 6" opacity={gap} />
      </svg>
      {[[30, '1 month'], [90, '3 months']].map(([d, t]) => (
        <div key={t} style={{ position: 'absolute', left: dayX(Number(d)) - 60, width: 120, top: axis.y + 14, textAlign: 'center', ...mono(look, 20, p.muted) }}>{t}</div>
      ))}
      <div style={{ position: 'absolute', left: dayX(90) - 20, top: 112, height: 36, borderRadius: 18, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: gap, transform: `translateY(${(1 - gap) * 6}px)` }}>≈ 25× the pace</div>

      <Beats {...look} beats={['how long would it take?', 'Airbnb: 7 days. WWT: 6 months', 'the gap, named and planned for']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* Six stages, no single way in → the kick-off's five steps → tested in 3 hours: three steps, 40 / 60 / 70 minutes. */
const STAGES = ['purpose finding', 'matchmaking', 'connecting', 'kick-off', 'delivery', 'measuring'];
const STEPS: [string, string | null][] = [
  ['unpacking', '40 min'],
  ['sketching', '60 min'],
  ['solutioning', '70 min'],
  ['prototyping', null],
  ['validating', null],
];

const Kickoff: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const zoom = tween(f, 70, 22, 0, 1, TRAVEL);
  const tested = tween(f, 142, 14);
  const sx = (i: number) => 62 + i * 103;
  const rowY = 180;
  const k = { x: mix(sx(3), 120, zoom), y: mix(rowY, 200, zoom), r: mix(28, 64, zoom) };

  return (
    <Frame {...look}>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={sx(0)} y1={rowY} x2={sx(5)} y2={rowY} stroke={p.line} strokeWidth={2} opacity={1 - zoom} />
        {/* the 3-hour ring */}
        <circle cx={k.x} cy={k.y} r={k.r + 14} fill="none" stroke={p.accent} strokeWidth={3} strokeDasharray={`${tested * 2 * Math.PI * (k.r + 14)} 999`} transform={`rotate(-90 ${k.x} ${k.y})`} />
      </svg>
      {STAGES.map((s, i) => {
        const kick = i === 3;
        const up = i % 2 === 1;
        return (
          <div key={s} style={{ opacity: kick ? 1 : tween(f, 4 + i * 6, 10) * (1 - zoom) }}>
            {!kick && <div style={{ position: 'absolute', left: sx(i) - 28, top: rowY - 28, width: 56, height: 56, borderRadius: 28, background: p.bg, border: `2px solid ${p.ink}` }} />}
            {!kick && <div style={{ position: 'absolute', left: sx(i) - 80, width: 160, top: up ? rowY - 66 : rowY + 38, textAlign: 'center', ...mono(look, 20, p.ink) }}>{s}</div>}
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: k.x - k.r, top: k.y - k.r, width: k.r * 2, height: k.r * 2, borderRadius: k.r, background: p.accent, opacity: tween(f, 22, 10) }} />
      <div style={{ position: 'absolute', left: k.x - 80, width: 160, top: zoom > 0.5 ? k.y + k.r + 24 : rowY - 66, textAlign: 'center', ...(zoom > 0.5 ? sans(look, 22, p.ink, 600) : mono(look, 20, p.ink)), opacity: tween(f, 22, 10) }}>kick-off</div>
      <div style={{ position: 'absolute', left: k.x - 80, width: 160, top: k.y - 14, textAlign: 'center', ...mono(look, 22, p.onAccent), opacity: tested }}>3 hours</div>

      {STEPS.map(([s, mins], i) => {
        const ran = mins !== null;
        return (
          <div key={s} style={{ position: 'absolute', left: 262, top: 54 + i * 62, width: 346, height: 48, borderRadius: 12, background: p.bg, border: `1.5px solid ${ran && tested > 0.5 ? p.accent : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', boxSizing: 'border-box', opacity: tween(f, 84 + i * 7, 10) * (ran ? 1 : 1 - tested * 0.6) }}>
            <span style={mono(look, 20, p.ink)}>{`${i + 1} ${s}`}</span>
            {mins && <span style={{ ...mono(look, 20, p.ink), opacity: tween(f, 148 + i * 8, 10) }}>{mins}</span>}
          </div>
        );
      })}

      <Beats {...look} beats={['six stages, no single way in', 'the kick-off: five steps', 'tested in 3 hours: 3 of 5']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* Seven organisation types → placed by Power and Pace → partners pair across the gap (the matrix's three connectors). */
const ANIMALS: { name: string; x: number; y: number; side: 'left' | 'right' }[] = [
  { name: 'Walrus', x: 110, y: 74, side: 'right' },
  { name: 'Giant tortoise', x: 145, y: 152, side: 'right' },
  { name: 'Worm', x: 145, y: 322, side: 'right' },
  { name: 'Sheep', x: 282, y: 256, side: 'left' },
  { name: 'Tiger', x: 510, y: 70, side: 'left' },
  { name: 'Octopus', x: 556, y: 128, side: 'left' },
  { name: 'Bumblebee', x: 512, y: 300, side: 'left' },
];
const LINKS: [number, number, number, number][] = [
  [333, 209, 472, 154],
  [320, 242, 430, 242],
  [527, 191, 527, 245],
];

const Matrix: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const o = { x: 330, y: 210 };
  const axes = tween(f, 70, 16);
  const place = tween(f, 72, 30, 0, 1, TRAVEL);

  return (
    <Frame {...look}>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={60} y1={o.y} x2={mix(o.x, 610, axes)} y2={o.y} stroke={p.muted} strokeWidth={1.5} opacity={axes} />
        <line x1={o.x} y1={380} x2={o.x} y2={mix(o.y, 34, axes)} stroke={p.muted} strokeWidth={1.5} opacity={axes} />
        {LINKS.map(([x1, y1, x2, y2], i) => {
          const t = tween(f, 146 + i * 10, 18, 0, 1, TRAVEL);
          return (
            <g key={i} opacity={t > 0 ? 1 : 0}>
              <line x1={x1} y1={y1} x2={mix(x1, x2, t)} y2={mix(y1, y2, t)} stroke={p.accent} strokeWidth={3} strokeDasharray="8 8" />
              <circle cx={x1} cy={y1} r={8} fill={p.accent} />
              <circle cx={mix(x1, x2, t)} cy={mix(y1, y2, t)} r={8} fill={p.accent} />
            </g>
          );
        })}
      </svg>
      <div style={{ position: 'absolute', left: o.x + 10, top: 26, ...mono(look, 20, p.muted), opacity: axes }}>power ↑</div>
      <div style={{ position: 'absolute', left: 540, width: 92, top: o.y - 34, textAlign: 'right', ...mono(look, 20, p.muted), opacity: axes }}>pace →</div>

      {ANIMALS.map((a, i) => {
        // before the axes appear, the animals wait in a row
        const row = { x: 70 + i * 84, y: 200 };
        const x = mix(row.x, a.x, place);
        const y = mix(row.y, a.y, place);
        const labelLeft = place > 0.5 ? a.side === 'left' : false;
        return (
          <div key={a.name} style={{ opacity: tween(f, 4 + i * 5, 10) }}>
            <div style={{ position: 'absolute', left: x - 18, top: y - 18, width: 36, height: 36, borderRadius: 18, background: p.bg, border: `2px solid ${p.ink}` }} />
            <div
              style={{
                position: 'absolute',
                left: place > 0.5 ? (labelLeft ? x - 26 - 170 : x + 26) : x - 60,
                width: place > 0.5 ? 170 : 120,
                top: place > 0.5 ? y - 13 : (i % 2 ? y + 26 : y - 50),
                textAlign: place > 0.5 ? (labelLeft ? 'right' : 'left') : 'center',
                ...mono(look, 20, p.ink),
                whiteSpace: 'nowrap',
              }}
            >
              {place > 0.5 || a.name.length < 10 ? a.name : a.name.split(' ').pop()}
            </div>
          </div>
        );
      })}

      <Beats {...look} beats={['seven organisation types', 'placed by Power and Pace', 'partners pair across the gap']} starts={[0, 70, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  pace: figure(Pace, 210, 'Asked how long a first project would take, Airbnb said 7 days and WWT said 6 months: the same goal at roughly 25 times the pace, named in the room and planned for.'),
  kickoff: figure(Kickoff, 210, 'Stampede has six stages: purpose finding, matchmaking, connecting, the kick-off, delivery and measuring. The kick-off has five steps; the 3-hour test ran three of them: unpacking (40 minutes), sketching (60) and solutioning (70).'),
  matrix: figure(Matrix, 210, 'Seven organisation types (Walrus, Giant tortoise, Worm, Sheep, Tiger, Octopus, Bumblebee) placed on the Power and Pace matrix, with partners paired across the gap.'),
};
