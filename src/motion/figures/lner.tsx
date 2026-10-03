import type { FC } from 'react';
import { assetUrl, useCurrentFrame } from '../core';
import { TRAVEL, mix, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Phone, figure, mono, sans } from './kit';

// LNER App Clip, in three figures: Dotty's journey (the journey map), the
// five things people need on the platform, and the journey-planning rework.

const IMG = '/images/casestudies/softwire';

/* Dotty's feeling across the 11 stages of the journey map: low in the queue,
   highest when the ticket arrives, low again at the train exit. */
const FEELING = [0.09, 0.35, 0.41, 0.78, 0.28, 0.67, 0.97, 0.73, 0.41, 0.03, 0.45];
const CALLOUTS: [number, string, 'up' | 'down'][] = [
  [0, 'long queue', 'down'],
  [1, 'scans the QR', 'up'],
  [6, 'her ticket', 'up'],
  [9, 'train exit', 'down'],
];

const Journey: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const x = (i: number) => 64 + i * 51;
  const y = (i: number) => 320 - FEELING[i] * 190;
  // how far the line has been drawn, in stages
  const drawn = f < 70 ? mix(0, 1, tween(f, 14, 40, 0, 1, (t) => t)) : f < 140 ? mix(1, 6, tween(f, 72, 56, 0, 1, (t) => t)) : mix(6, 10, tween(f, 142, 50, 0, 1, (t) => t));
  const upto = Math.floor(drawn);
  const frac = drawn - upto;
  const pts: [number, number][] = [];
  for (let i = 0; i <= upto; i++) pts.push([x(i), y(i)]);
  if (upto < 10 && frac > 0) pts.push([mix(x(upto), x(upto + 1), frac), mix(y(upto), y(upto + 1), frac)]);
  // a smooth line through the points
  const path = pts.map(([px, py], i) => {
    if (i === 0) return `M ${px} ${py}`;
    const [qx, qy] = pts[i - 1];
    const mx = (qx + px) / 2;
    return `C ${mx} ${qy}, ${mx} ${py}, ${px} ${py}`;
  }).join(' ');
  const edge = (i: number) => (x(i) + x(i + 1)) / 2;
  const zones = [
    { left: x(0) - 30, right: edge(1), label: 'station', clip: false },
    { left: edge(1), right: edge(6), label: 'App Clip', clip: true },
    { left: edge(6), right: x(10) + 30, label: 'train', clip: false },
  ];
  const notif = tween(f, 150, 14);

  return (
    <Frame {...look}>
      <div style={{ position: 'absolute', left: 32, top: 22, height: 34, borderRadius: 17, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.line}`, ...mono(look, 20, p.ink), opacity: tween(f, 2, 10) }}>Dotty, 25</div>

      {zones.map((z) => (
        <div key={z.label} style={{ position: 'absolute', left: z.left + 3, width: z.right - z.left - 6, top: 100, height: 246, borderRadius: 10, background: z.clip ? p.bg : 'transparent', border: `1.5px solid ${z.clip ? p.accent : p.line}`, opacity: z.clip ? tween(f, 72, 12) : 0.7 }} />
      ))}
      {zones.map((z) => (
        <div key={z.label} style={{ position: 'absolute', left: z.left, width: z.right - z.left, top: 354, textAlign: 'center', ...mono(look, 20, z.clip ? p.ink : p.muted) }}>{z.label}</div>
      ))}

      {/* the map's notifications band over the later stages */}
      <div style={{ position: 'absolute', left: x(5) - 10, width: x(10) - x(5) + 35, top: 66, height: 28, borderRadius: 8, border: `1.5px dashed ${p.muted}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 20, p.ink), opacity: notif }}>notifications</div>

      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <path d={path} fill="none" stroke={p.ink} strokeWidth={2.5} strokeLinecap="round" />
        {FEELING.map((_, i) => (i <= drawn ? <circle key={i} cx={x(i)} cy={y(i)} r={6} fill={i >= 2 && i <= 6 ? p.accent : p.panel} stroke={i >= 2 && i <= 6 ? p.accent : p.ink} strokeWidth={2} /> : null))}
      </svg>
      {CALLOUTS.map(([i, text, dir]) => (
        <div key={text} style={{ position: 'absolute', left: Math.max(16, x(i) - 70), width: 140, top: dir === 'up' ? y(i) - 40 : y(i) + 12, textAlign: i === 0 ? 'left' : 'center', ...mono(look, 20, p.ink), opacity: drawn >= i ? 1 : 0, whiteSpace: 'nowrap' }}>{text}</div>
      ))}

      <Beats {...look} beats={['a long queue, so she scans', 'it rises as she buys', 'and dips after boarding']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* Everything people asked for → most of it could wait → five things, on one train card. */
const NOTES: [string, string | null][] = [
  ['arrival time', 'live times'],
  ['seat reservation', null],
  ['highlight delays', 'delays'],
  ['last train', null],
  ['platform information', 'platform'],
  ['language', null],
  ['price: peak → off peak', 'price'],
  ['how busy is the train?', null],
  ['slow & fast trains', 'journey length'],
  ['tube connections', null],
];
const FIELDS: [string, string][] = [
  ['live times', '10:00 → 11:00'],
  ['delays', 'live'],
  ['platform', '2'],
  ['price', '£22.00'],
  ['journey length', '1h'],
];

const Five: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const wait = tween(f, 72, 16);
  const card = { x: 150, y: 70, w: 340, h: 290 };

  return (
    <Frame {...look}>
      {/* the train card the five end up on */}
      <div style={{ position: 'absolute', left: card.x, top: card.y, width: card.w, height: card.h, borderRadius: 18, background: p.bg, border: `1.5px solid ${p.accent}`, opacity: tween(f, 138, 12) }}>
        <div style={{ margin: '14px 0 0 20px', ...sans(look, 22, p.ink, 600) }}>KGX → BHI</div>
        {FIELDS.map(([name, value], i) => (
          <div key={name} style={{ position: 'absolute', left: 20, right: 20, top: 50 + i * 46, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: i ? `1px solid ${p.line}` : 'none', opacity: tween(f, 150 + i * 5, 10) }}>
            <span style={mono(look, 20, p.muted)}>{name}</span>
            <span style={{ ...mono(look, 20, p.ink), display: 'flex', alignItems: 'center', gap: 8 }}>
              {value === 'live' && <span style={{ width: 9, height: 9, borderRadius: 5, background: p.accent }} />}
              {value}
            </span>
          </div>
        ))}
      </div>

      {NOTES.map(([text, keep], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const home = { x: 32 + col * 296, y: 30 + row * 62 };
        const k = keep ? FIELDS.findIndex(([n]) => n === keep) : -1;
        const fly = keep ? tween(f, 140 + k * 5, 18, 0, 1, TRAVEL) : 0;
        const target = { x: card.x + 20, y: card.y + 50 + k * 46 };
        return (
          <div
            key={text}
            style={{
              position: 'absolute',
              left: mix(home.x, target.x, fly),
              top: mix(home.y, target.y, fly),
              height: 44,
              borderRadius: 10,
              padding: '0 14px',
              display: 'flex',
              alignItems: 'center',
              background: p.bg,
              border: `1.5px solid ${keep && wait > 0.5 ? p.accent : p.line}`,
              ...mono(look, 20, p.ink),
              whiteSpace: 'nowrap',
              opacity: tween(f, 4 + i * 4, 10) * (keep ? 1 - fly : (1 - wait * 0.8) * (1 - tween(f, 136, 12))),
              transform: `scale(${keep ? 1 : mix(1, 0.92, wait)})`,
            }}
          >
            {text}
          </div>
        );
      })}

      <Beats {...look} beats={['everything people asked for', 'most of it could wait', 'five things, on one card']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* One question per card (five steps) → hard to change halfway → one overview, edited inline (three steps). */
const OVERVIEW = ['ticket type', 'outward', 'return', 'passengers', 'railcard'];

const Planning: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const phone = { x: 40, y: 22, w: 176, h: 364 };
  const after = tween(f, 140, 16);
  const back = tween(f, 80, 40, 0, 1, (t) => t);
  const merge = tween(f, 142, 22, 0, 1, TRAVEL);
  const cards = [0, 1, 2, 3];
  const cx = (i: number) => 268 + i * 88;

  return (
    <Frame {...look}>
      <Phone {...look} {...phone} src={`${IMG}/14-4-product-initial.webp`}>
        <img src={assetUrl(`${IMG}/14-3-product-final.webp`)} alt="" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: after }} />
      </Phone>
      <div style={{ position: 'absolute', left: phone.x, width: phone.w, top: phone.y + phone.h + 6, textAlign: 'center', ...mono(look, 20, p.muted) }}>{after > 0.5 ? 'after testing' : 'before'}</div>

      {/* the steps, as cards */}
      {cards.map((i) => (
        <div key={i} style={{ position: 'absolute', left: mix(cx(i), 268, merge), top: 110, width: 72, height: 100, borderRadius: 12, background: p.bg, border: `1.5px solid ${i === 1 && back > 0.4 && back < 1 ? p.accent : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 22, p.ink), opacity: tween(f, 10 + i * 8, 10) * (1 - merge) }}>
          {i + 1}
        </div>
      ))}
      <div style={{ position: 'absolute', left: 268, top: 62, ...mono(look, 20, p.muted), opacity: 1 - merge }}>one question per card</div>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <path d={`M ${cx(3) + 36} 214 C ${cx(3) + 36} 270, ${cx(1) + 36} 270, ${cx(1) + 36} 214`} fill="none" stroke={p.accent} strokeWidth={2} strokeDasharray={`${back * 300} 300`} opacity={1 - merge} />
      </svg>
      <div style={{ position: 'absolute', left: cx(1), width: 260, top: 268, ...mono(look, 20, p.ink), opacity: tween(f, 96, 10) * (1 - merge) }}>back, back, change</div>

      {/* one overview */}
      <div style={{ position: 'absolute', left: 268, top: 62, width: 340, height: 290, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.accent}`, opacity: merge }}>
        <div style={{ margin: '16px 0 0 20px', ...sans(look, 22, p.ink, 600) }}>Plan your journey</div>
        {OVERVIEW.map((row, i) => (
          <div key={row} style={{ position: 'absolute', left: 20, right: 20, top: 58 + i * 44, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: i ? `1px solid ${p.line}` : 'none', opacity: tween(f, 152 + i * 5, 10) }}>
            <span style={mono(look, 20, p.ink)}>{row}</span>
            <span style={mono(look, 20, p.muted)}>edit</span>
          </div>
        ))}
      </div>

      <Beats {...look} beats={['one question per card', 'hard to change halfway', 'one overview, edit inline']} starts={[0, 70, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  journey: figure(Journey, 210, "Dotty's journey from the journey map: her feeling is low in the station queue and when scanning the QR code, rises through the App Clip purchase to its highest when the ticket arrives, and dips again on the train, lowest at the train exit."),
  five: figure(Five, 210, 'Notes from the workshop (arrival time, seat reservation, highlight delays, last train, platform information, language, price, how busy the train is, slow and fast trains, tube connections). Most could wait; five became the train card: live times, delays, platform, price and journey length.'),
  planning: figure(Planning, 210, 'Before testing, journey planning asked one question per card, and changing an answer meant going back. After testing it became one overview with inline editing.'),
};
