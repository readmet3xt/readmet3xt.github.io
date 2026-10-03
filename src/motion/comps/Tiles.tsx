import type { ReactNode } from 'react';
import { AbsoluteFill, useCurrentFrame } from '../core';
import { TRAVEL, fadeUp, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';

// Project tiles (600×450, 6 s seamless loops). Each tells its case in three
// short beats: the problem, what was made, and the outcome, with a few words of
// caption per beat. Facts come from the case studies.

export const TILE_FRAMES = 180;
export const TILE_W = 600;
export const TILE_H = 450;
const B2 = 60;
const B3 = 120;
const END = 166; // everything resets between END and the loop

const Tile: React.FC<LookProps & { children: ReactNode }> = ({ palette: p, children }) => (
  <AbsoluteFill style={{ background: p.panel, overflow: 'hidden' }}>{children}</AbsoluteFill>
);

const mono = (look: LookProps, size: number, color: string) => ({ fontFamily: look.fonts.mono, fontSize: size, color });

/** The beat's caption (bottom left) and three progress marks (bottom right). */
const Beats: React.FC<LookProps & { beats: [string, string, string] }> = ({ palette: p, fonts, beats }) => {
  const f = useCurrentFrame();
  const starts = [0, B2, B3];
  const ends = [B2 - 6, B3 - 6, END];
  return (
    <>
      {beats.map((text, i) => (
        <div key={i} style={{ position: 'absolute', left: 32, bottom: 26, whiteSpace: 'nowrap', ...mono({ palette: p, fonts }, 21, p.ink), ...fadeUp(f, starts[i] + 4, { dur: 12, dist: 8, outAt: ends[i], outDur: 8 }) }}>
          {text}
        </div>
      ))}
      <div style={{ position: 'absolute', right: 32, bottom: 35, display: 'flex', gap: 6 }}>
        {starts.map((s, i) => {
          const on = tween(f, s, 8) * (1 - tween(f, ends[i] + 2, 8));
          return <div key={i} style={{ width: 6 + 14 * on, height: 6, borderRadius: 3, background: on > 0.5 ? p.accent : p.line }} />;
        })}
      </div>
    </>
  );
};

/** 1 at the start of the loop, fades out at `out`, and fades back in for the next loop. */
const opening = (f: number, out: number) => Math.min(1, 1 - tween(f, out, 10) + tween(f, END, 12));

/* Pebble: remote and alone → a virtual café → adopted by VISA. */
const PEOPLE = [[110, 92], [470, 80], [500, 250], [360, 300], [130, 270], [275, 62]];

export const TilePebble: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const gather = tween(f, 62, 30, 0, 1, TRAVEL) * (1 - tween(f, 160, 20, 0, 1, TRAVEL));
  const adopted = span(f, 124, 160, 10);
  const C = { x: 300, y: 190 };
  const R = 92;

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <circle cx={C.x} cy={C.y} r={R - 32} fill="none" stroke={adopted > 0.3 ? p.accent : p.line} strokeWidth={adopted > 0.3 ? 2 : 1.5} strokeDasharray={410} strokeDashoffset={410 * (1 - gather)} />
      </svg>
      <div style={{ position: 'absolute', left: C.x - 60, width: 120, top: C.y - 11, textAlign: 'center', opacity: span(f, 86, 160, 10), ...mono(look, 16, p.muted) }}>virtual café</div>
      {PEOPLE.map(([x, y], i) => {
        const angle = (i / PEOPLE.length) * Math.PI * 2 - Math.PI / 2;
        const tx = C.x + Math.cos(angle) * R;
        const ty = C.y + Math.sin(angle) * R;
        const drift = Math.sin((f / TILE_FRAMES) * Math.PI * 2 + i) * 4 * (1 - gather);
        const talk = gather > 0.95 ? Math.sin(Math.PI * tween(f, 94 + i * 4, 10)) : 0;
        const you = i === 0;
        const px = mix(x, tx, gather);
        const py = mix(y, ty, gather) + drift;
        return (
          <div key={i}>
            <div style={{ position: 'absolute', left: px - 27, top: py - 27, width: 54, height: 54, borderRadius: 12, border: `1.5px solid ${p.line}`, opacity: 1 - gather }} />
            <div style={{ position: 'absolute', left: px - 14, top: py - 14, width: 28, height: 28, borderRadius: 14, background: you ? p.accent : p.bg, border: `2px solid ${you ? p.accent : p.ink}`, opacity: mix(0.6, 1, gather), transform: `scale(${1 + talk * 0.18})` }} />
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: C.x - 15, top: C.y - 50, width: 30, height: 30, borderRadius: 15, background: p.accent, color: p.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, opacity: adopted, transform: `scale(${0.6 + 0.4 * adopted})` }}>✓</div>
      <Beats {...look} beats={['remote, and alone', 'a virtual café', 'adopted by VISA']} />
    </Tile>
  );
};

/* Stampede: partners meet by luck → matched on power × pace → "100× more productive". */
const ANIMALS: [string, number, number][] = [
  ['giant tortoise', 0.06, 0.93],
  ['walrus', 0.2, 0.8],
  ['tiger', 0.85, 0.85],
  ['octopus', 0.65, 0.66],
  ['sheep', 0.3, 0.52],
  ['bumblebee', 0.82, 0.22],
  ['worm', 0.25, 0.14],
];
const PAIR = ['walrus', 'bumblebee'];

export const TileStampede: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const O = { x: 64, y: 360 };
  const ax = (pace: number) => 86 + pace * 420;
  const ay = (power: number) => 338 - power * 268;
  const order = tween(f, 62, 30, 0, 1, TRAVEL) * (1 - tween(f, 158, 20, 0, 1, TRAVEL));
  const labels = span(f, 80, 156, 10);
  const link = tween(f, 96, 18, 0, 1, TRAVEL) * (1 - tween(f, 156, 12));
  const luck = span(f, 16, 46, 8);
  const loop = (f / TILE_FRAMES) * Math.PI * 2;
  const pos = (i: number, pace: number, power: number) => {
    const wx = 300 + 190 * Math.sin(loop + i * 0.9);
    const wy = 200 + 110 * Math.cos(loop + i * 1.7);
    return { x: mix(wx, ax(pace), order), y: mix(wy, ay(power), order) };
  };
  const a = ANIMALS.findIndex(([n]) => n === PAIR[0]);
  const b = ANIMALS.findIndex(([n]) => n === PAIR[1]);
  const pa = pos(a, ANIMALS[a][1], ANIMALS[a][2]);
  const pb = pos(b, ANIMALS[b][1], ANIMALS[b][2]);
  const l1 = pos(2, ANIMALS[2][1], ANIMALS[2][2]);
  const l2 = pos(4, ANIMALS[4][1], ANIMALS[4][2]);
  const pulse = span(f, 122, 156, 8) * (1 + Math.sin(f / 4)) * 0.5;

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <g opacity={order}>
          <line x1={O.x} y1={O.y} x2={556} y2={O.y} stroke={p.line} strokeWidth={1.5} />
          <line x1={O.x} y1={O.y} x2={O.x} y2={40} stroke={p.line} strokeWidth={1.5} />
        </g>
        <line x1={l1.x} y1={l1.y} x2={l2.x} y2={l2.y} stroke={p.muted} strokeWidth={1.5} strokeDasharray="2 6" opacity={luck} />
        <line x1={pa.x} y1={pa.y} x2={mix(pa.x, pb.x, link)} y2={mix(pa.y, pb.y, link)} stroke={p.accent} strokeWidth={2 + 1.5 * pulse} strokeDasharray="1 7" strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', left: 494, top: O.y - 26, opacity: order, ...mono(look, 15, p.faint) }}>pace →</div>
      <div style={{ position: 'absolute', left: O.x + 10, top: 34, opacity: order, ...mono(look, 15, p.faint) }}>power ↑</div>
      {ANIMALS.map(([name, pace, power], i) => {
        const paired = PAIR.includes(name);
        const lit = paired && link > 0.05;
        const { x, y } = pos(i, pace, power);
        return (
          <div key={name} style={{ position: 'absolute', left: x - 7, top: y - 7, display: 'flex', alignItems: 'center', gap: 9, opacity: paired || link < 0.05 ? 1 : 1 - link * 0.65 }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: lit ? p.accent : p.ink, boxShadow: lit ? `0 0 0 4px ${p.panel}, 0 0 0 5.5px ${p.accent}` : 'none' }} />
            <div style={{ ...mono(look, 17, lit ? p.ink : p.muted), fontWeight: lit ? 500 : 400, opacity: labels }}>{name}</div>
          </div>
        );
      })}
      <Beats {...look} beats={['partners meet by luck', 'matched on power × pace', '“100× more productive”']} />
    </Tile>
  );
};

/* I.V.I.: unpaid care, unseen → counted hour by hour → Core77 Student Notable. */
const TASKS: [number, number][] = [[6, 8], [9, 10.5], [12.5, 13.5], [17, 19.5], [21, 22]];
const arc = (cx: number, cy: number, r: number, h1: number, h2: number) => {
  const a1 = (h1 / 24) * Math.PI * 2 - Math.PI / 2;
  const a2 = (h2 / 24) * Math.PI * 2 - Math.PI / 2;
  return `M ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} A ${r} ${r} 0 ${h2 - h1 > 12 ? 1 : 0} 1 ${cx + r * Math.cos(a2)} ${cy + r * Math.sin(a2)}`;
};
const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const rr = i % 2 ? r * 0.45 : r;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    return `${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)}`;
  }).join(' ');

export const TileIvi: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const C = { x: 300, y: 196 };
  const R = 124;
  const reset = tween(f, END - 4, 14);
  const award = span(f, 124, 160, 10);

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <circle cx={C.x} cy={C.y} r={R} fill="none" stroke={p.line} strokeWidth={1.5} />
        {Array.from({ length: 24 }, (_, h) => {
          const a = (h / 24) * Math.PI * 2 - Math.PI / 2;
          const len = h % 6 === 0 ? 12 : 6;
          return <line key={h} x1={C.x + (R - len) * Math.cos(a)} y1={C.y + (R - len) * Math.sin(a)} x2={C.x + R * Math.cos(a)} y2={C.y + R * Math.sin(a)} stroke={p.line} strokeWidth={1.5} />;
        })}
        {TASKS.map(([h1, h2], i) => {
          const appear = tween(f, 8 + i * 7, 12) * (1 - reset);
          const solid = tween(f, 64 + i * 8, 12) * (1 - reset);
          return <path key={i} d={arc(C.x, C.y, R, h1, h2)} fill="none" stroke={solid > 0.5 ? p.accent : p.muted} strokeWidth={mix(4, 9, solid)} strokeDasharray={solid > 0.5 ? undefined : '4 6'} strokeLinecap="round" opacity={appear} />;
        })}
        <polygon points={star(C.x, C.y - 4, 28)} fill={p.accent} fillOpacity={0.18} stroke={p.accent} strokeWidth={2.5} strokeLinejoin="round" opacity={award} transform={`rotate(${(1 - award) * -20} ${C.x} ${C.y})`} />
      </svg>
      <div style={{ position: 'absolute', left: C.x - 90, width: 180, top: C.y - 12, textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: span(f, 6, 58, 10), ...mono(look, 18, p.muted) }}>unseen</div>
        <div style={{ position: 'absolute', inset: 0, opacity: span(f, 64, 118, 10), ...mono(look, 18, p.ink) }}>counted</div>
      </div>
      <Beats {...look} beats={['unpaid care, unseen', 'counted, hour by hour', 'Core77 Student Notable']} />
    </Tile>
  );
};

/* LNER App Clip: queues at the machine → five essentials, one tap → 40% faster checkout. */
const ESSENTIALS = ['time', 'price', 'duration', 'changes', 'delay status'];

export const TileLner: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const before = opening(f, 54);
  const clip = span(f, 60, 116, 10);
  const pay = Math.sin(Math.PI * tween(f, 100, 8));
  const ready = tween(f, 106, 8);
  const bars = span(f, 122, 162, 10);
  const grow = tween(f, 124, 18, 0, 1, TRAVEL);
  const trainX = mix(-150, 630, f / TILE_FRAMES);

  return (
    <Tile {...look}>
      <div style={{ opacity: before }}>
        <div style={{ position: 'absolute', left: 150, top: 92, width: 104, height: 196, borderRadius: 12, background: p.bg, border: `1.5px solid ${p.line}` }}>
          <div style={{ margin: '16px auto 0', width: 72, height: 54, borderRadius: 6, background: p.line }} />
          <div style={{ margin: '14px auto 0', width: 46, height: 6, borderRadius: 3, background: p.line }} />
        </div>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{ position: 'absolute', left: 290 + i * 44 - 13, top: 240 - 13 + Math.sin(f / 6 + i) * 1.5, width: 26, height: 26, borderRadius: 13, background: i === 4 ? p.accent : p.bg, border: `2px solid ${i === 4 ? p.accent : p.ink}` }} />
        ))}
      </div>
      <div style={{ position: 'absolute', left: 170, top: 30, width: 260, height: 256, borderRadius: 22, background: p.bg, border: `1.5px solid ${p.line}`, padding: '18px 22px', boxSizing: 'border-box', opacity: clip }}>
        {ESSENTIALS.map((e, i) => (
          <div key={e} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 30, ...mono(look, 15, p.muted), opacity: tween(f, 62 + i * 6, 10) }}>
            <span>{e}</span>
            <span style={{ width: 50 - i * 4, height: 7, borderRadius: 4, background: i === 4 ? p.accent : p.line }} />
          </div>
        ))}
        <div style={{ marginTop: 14, height: 38, borderRadius: 19, background: p.accent, color: p.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: look.fonts.text, fontSize: 16, fontWeight: 600, opacity: tween(f, 90, 8), transform: `scale(${1 - pay * 0.05})` }}>
          {ready > 0.5 ? 'Ticket ready' : 'Pay'}
        </div>
      </div>
      <div style={{ opacity: bars }}>
        {([['first design', 300, p.muted], ['after testing', 180, p.accent]] as [string, number, string][]).map(([label, w, color], i) => (
          <div key={label} style={{ position: 'absolute', left: 96, top: 110 + i * 92 }}>
            <div style={mono(look, 16, p.muted)}>{label}</div>
            <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: w * grow, height: 14, borderRadius: 7, background: color }} />
              {i === 1 && <div style={{ ...mono(look, 18, p.ink), opacity: tween(f, 138, 8) }}>−40%</div>}
            </div>
          </div>
        ))}
      </div>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <line x1={0} x2={600} y1={352} y2={352} stroke={p.line} strokeWidth={1.5} />
        {Array.from({ length: 26 }, (_, i) => <line key={i} x1={i * 24 + 6} x2={i * 24 + 6} y1={352} y2={359} stroke={p.line} strokeWidth={1.5} />)}
        <rect x={trainX} y={320} width={136} height={28} rx={14} fill={p.bg} stroke={p.ink} strokeWidth={1.5} />
        {[0, 1, 2].map((w) => <rect key={w} x={trainX + 24 + w * 32} y={328} width={22} height={9} rx={3} fill={p.line} />)}
      </svg>
      <Beats {...look} beats={['queues at the machine', 'five essentials, one tap', '40% faster checkout']} />
    </Tile>
  );
};

/* KoinBasket: crypto feels risky → curated baskets, funds stay with you → grew past 70,000 users. */
const ZIGZAG = [[40, 220], [90, 150], [140, 250], [190, 120], [240, 230], [290, 160], [340, 270], [390, 110], [440, 210], [490, 140], [560, 250]];

export const TileKoinBasket: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const risky = opening(f, 54);
  const draw = tween(f, 4, 40, 0, 1, (x) => x);
  const basket = span(f, 58, END, 10);
  const crowd = span(f, 122, END, 8);
  const coins = [240, 280, 320, 360, 300];
  const rest = [318, 318, 318, 318, 284];
  const scatter = [[120, 110], [210, 290], [330, 90], [430, 300], [500, 170]];
  const link = tween(f, 96, 18, 0, 1, TRAVEL) * (1 - tween(f, END, 10));

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <polyline points={ZIGZAG.map(([x, y]) => `${x},${y}`).join(' ')} fill="none" stroke={p.muted} strokeWidth={2} strokeLinejoin="round" strokeDasharray={1400} strokeDashoffset={1400 * (1 - draw)} opacity={risky * 0.8} />
        <g opacity={basket}>
          <path d="M196 236 L214 332 Q217 346 231 346 L361 346 Q375 346 378 332 L396 236" fill={p.bg} stroke={p.ink} strokeWidth={2} />
          <line x1={184} x2={408} y1={236} y2={236} stroke={p.ink} strokeWidth={2} strokeLinecap="round" />
          <line x1={396} y1={290} x2={mix(396, 474, link)} y2={290} stroke={p.accent} strokeWidth={2} strokeDasharray="2 7" strokeLinecap="round" />
        </g>
      </svg>
      {coins.map((x, i) => {
        const drop = tween(f, 64 + i * 7, 20, 0, 1, TRAVEL) * (1 - tween(f, END, 12));
        const [sx, sy] = scatter[i];
        const jitter = Math.sin(f / 3 + i * 2) * 5 * (1 - drop);
        return (
          <div key={i} style={{ position: 'absolute', left: mix(sx, x, drop) - 18, top: mix(sy, rest[i], drop) - 18 + jitter, width: 36, height: 36, borderRadius: 18, background: p.panel, border: `2px solid ${p.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, border: `1.5px solid ${p.muted}` }} />
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: 474, top: 276, width: 28, height: 28, borderRadius: 14, background: p.accent, opacity: tween(f, 104, 10) * (1 - tween(f, END, 10)) }} />
      <div style={{ position: 'absolute', left: 408, width: 172, top: 316, textAlign: 'center', whiteSpace: 'nowrap', opacity: span(f, 106, 120, 8), ...mono(look, 16, p.muted) }}>stays with you</div>
      {Array.from({ length: 30 }, (_, k) => (
        <div key={k} style={{ position: 'absolute', left: 168 + (k % 10) * 28, top: 70 + Math.floor(k / 10) * 28, width: 14, height: 14, borderRadius: 7, background: k === 0 ? p.accent : p.ink, opacity: crowd * tween(f, 124 + k * 0.8, 6) * (k === 0 ? 1 : 0.55) }} />
      ))}
      <Beats {...look} beats={['crypto feels risky', 'curated baskets', 'grew past 70,000 users']} />
    </Tile>
  );
};

/* Otagon: stuck, and guides spoil it → press F1 → a hint for exactly here, no spoilers. */
export const TileOtagon: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const guide = opening(f, 54);
  const press = Math.sin(Math.PI * tween(f, 64, 14));
  const lit = span(f, 64, 96, 6);
  const fly = tween(f, 74, 30, 0, 1, TRAVEL);
  const show = (at: number) => tween(f, at, 12) * (1 - tween(f, END, 12));
  const fx = mix(152, 458, fly);
  const fy = mix(206, 105, fly) - Math.sin(Math.PI * fly) * 80;
  const typed = (at: number, w: number) => w * tween(f, at, 14, 0, 1, (x) => x) * (1 - tween(f, END, 12));
  const scroll = (f * 2.2) % 44;

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 96, top: 150 + press * 7, width: 112, height: 112, borderRadius: 22, background: p.bg, border: `1.5px solid ${lit > 0.05 ? p.accent : p.line}`, boxShadow: `0 ${9 - press * 7}px 0 ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 32, p.ink) }}>F1</div>
      <div style={{ position: 'absolute', left: 346, top: 30, width: 176, height: 350, borderRadius: 30, background: p.bg, border: `1.5px solid ${p.line}`, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 18, right: 18, top: 24 - scroll, opacity: guide }}>
          {Array.from({ length: 14 }, (_, i) => (
            <div key={i} style={{ height: 7, width: `${60 + ((i * 37) % 40)}%`, borderRadius: 4, background: i === 6 ? p.accent : p.line, marginBottom: 15 }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: 16, top: 112, padding: '3px 9px', borderRadius: 8, background: p.bg, border: `1.5px solid ${p.accent}`, opacity: guide * span(f, 14, 56, 6), ...mono(look, 14, p.accent) }}>spoiler</div>
      </div>
      {f >= 74 && fly < 1 && <div style={{ position: 'absolute', left: fx - 23, top: fy - 15, width: 46, height: 30, borderRadius: 6, border: `2px solid ${p.accent}`, background: p.panel }} />}
      <div style={{ position: 'absolute', left: 412, top: 66, width: 92, height: 58, borderRadius: 12, border: `1.5px solid ${p.accent}`, background: p.panel, opacity: show(102) }} />
      <div style={{ position: 'absolute', left: 364, top: 140, width: 140, height: 136, borderRadius: 14, background: p.panel, opacity: show(120), padding: 14, boxSizing: 'border-box' }}>
        {[100, 112, 70].map((w, i) => <div key={i} style={{ height: 7, width: typed(122 + i * 9, w), borderRadius: 4, background: p.muted, marginBottom: 9 }} />)}
        <div style={{ height: 7, width: 104, borderRadius: 4, background: p.muted, filter: 'blur(4px)', opacity: show(146) }} />
        <div style={{ marginTop: 10, opacity: show(148), ...mono(look, 15, p.accent) }}>no spoilers</div>
      </div>
      <Beats {...look} beats={['stuck, and guides spoil it', 'press F1', 'a hint for exactly here']} />
    </Tile>
  );
};

/* Law.X: a black box → its reasoning, shown → every line sourced. */
const SOURCES = ['clause 4.2', 'case note', 'statute'];

export const TileLawx: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const lineY = [86, 122, 158, 194, 230, 266];
  const links: [number, number][] = [[1, 0], [3, 1], [5, 2]];
  const srcY = [96, 186, 276];
  const box = opening(f, 54);
  const off = tween(f, 54, 14);
  const done = tween(f, END, 12);

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 60, top: 44, width: 250, height: 284, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}` }} />
      <div style={{ position: 'absolute', left: 80, top: 56, ...mono(look, 15, p.faint) }}>answer</div>
      {lineY.map((y, i) => (
        <div key={y} style={{ position: 'absolute', left: 80, top: y, height: 7, borderRadius: 4, background: links.some(([l]) => l === i) && tween(f, 70 + i * 6, 8) > 0.5 && done < 0.5 ? p.ink : p.muted, width: [180, 150, 196, 132, 170, 120][i] }} />
      ))}
      <div style={{ position: 'absolute', left: 72, top: 78, width: 226, height: 210, borderRadius: 12, background: p.mode === 'dark' ? '#000000' : '#1D1D1F', border: `1.5px solid ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: box, transform: `translateY(${-off * (1 - tween(f, END, 12)) * 24}px)`, ...mono(look, 34, '#F2F2F3') }}>?</div>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {links.map(([l, s]) => {
          const t = tween(f, 70 + l * 6, 16, 0, 1, TRAVEL) * (1 - done);
          const x1 = 290;
          const y1 = lineY[l] + 4;
          const x2 = mix(x1, 386, t);
          const y2 = mix(y1, srcY[s] + 22, t);
          return <path key={l} d={`M ${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`} fill="none" stroke={p.accent} strokeWidth={1.75} opacity={t > 0 ? 1 : 0} />;
        })}
      </svg>
      {SOURCES.map((s, i) => {
        const at = 76 + links[i][0] * 6;
        const ok = tween(f, 124 + i * 8, 10) * (1 - done);
        return (
          <div key={s} style={{ position: 'absolute', left: 386, top: srcY[i], width: 160, height: 44, borderRadius: 12, background: p.bg, border: `1.5px solid ${ok > 0.5 ? p.accent : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', boxSizing: 'border-box', opacity: tween(f, at, 10) * (1 - done) }}>
            <span style={mono(look, 15, p.ink)}>{s}</span>
            <span style={{ ...mono(look, 15, p.accent), opacity: ok }}>✓</span>
          </div>
        );
      })}
      <Beats {...look} beats={['a black box to lawyers', 'its reasoning, shown', 'every line sourced']} />
    </Tile>
  );
};

/* Versus: game night on paper → a live bracket → friends follow live. */
export const TileVersus: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const paper = opening(f, 54);
  const done = tween(f, END, 12);
  const vis = (at: number) => tween(f, at, 10) * (1 - done);
  const slot = (x: number, y: number, w: number, name: string, score: string | null, at: number, win = false, champ = false) => (
    <div style={{ position: 'absolute', left: x, top: y, width: w, height: 40, borderRadius: 10, background: champ ? p.accent : p.bg, border: `1.5px solid ${champ ? p.accent : win ? p.ink : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', boxSizing: 'border-box', opacity: vis(at) }}>
      <span style={mono(look, 15, champ ? p.onAccent : p.ink)}>{name}</span>
      {score !== null && <span style={{ ...mono(look, 15, win ? p.ink : p.muted), fontVariantNumeric: 'tabular-nums' }}>{score}</span>}
    </div>
  );
  const s = (at: number, a: string, b: string) => (f < at ? a : b);
  const wire = (x1: number, y1: number, x2: number, y2: number, at: number) => {
    const t = tween(f, at, 12, 0, 1, TRAVEL) * (1 - done);
    const mx = (x1 + x2) / 2;
    return <path d={`M ${x1} ${y1} H ${mx} V ${y2} H ${mix(mx, x2, t)}`} fill="none" stroke={p.line} strokeWidth={1.5} opacity={t > 0 ? 1 : 0} />;
  };
  const followers = span(f, 122, END, 8);

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 150, top: 54, width: 290, height: 256, borderRadius: 6, background: p.bg, border: `1.5px solid ${p.line}`, transform: 'rotate(-4deg)', opacity: paper }}>
        <svg width={290} height={256} style={{ position: 'absolute', inset: 0 }}>
          {[40, 80, 120, 160, 200].map((y, i) => (
            <path key={y} d={`M 28 ${y} q 30 -10 60 0 t 60 0 t 60 0 t ${40 + i * 8} 0`} fill="none" stroke={p.muted} strokeWidth={2} strokeLinecap="round" />
          ))}
          <line x1={40} y1={70} x2={220} y2={130} stroke={p.muted} strokeWidth={2} />
        </svg>
      </div>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {wire(160, 70, 205, 100, 74)}
        {wire(160, 130, 205, 100, 74)}
        {wire(160, 260, 205, 290, 78)}
        {wire(160, 320, 205, 290, 78)}
        {wire(325, 100, 370, 196, 104)}
        {wire(325, 290, 370, 196, 104)}
      </svg>
      {slot(40, 50, 120, 'p1', s(80, '0', '2'), 60, f >= 80)}
      {slot(40, 110, 120, 'p2', s(72, '0', '1'), 62)}
      {slot(40, 240, 120, 'p3', s(88, '0', '0'), 64)}
      {slot(40, 300, 120, 'p4', s(88, '0', '1'), 66, f >= 88)}
      {slot(205, 80, 120, 'p1', s(96, '0', '1'), 84)}
      {slot(205, 270, 120, 'p4', s(102, '0', '2'), 86, f >= 102)}
      {slot(370, 176, 100, 'p4', null, 110, true, true)}
      {[70, 175, 280].map((y, i) => {
        const ping = Math.sin(Math.PI * tween(f, 126 + i * 8, 14));
        return (
          <div key={y} style={{ position: 'absolute', left: 510, top: y, width: 40, height: 70, borderRadius: 9, background: p.bg, border: `1.5px solid ${ping > 0.1 ? p.accent : p.line}`, opacity: followers, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 16, height: 6, borderRadius: 3, background: p.accent, opacity: tween(f, 130 + i * 8, 6) }} />
          </div>
        );
      })}
      <div style={{ position: 'absolute', right: 40, top: 22, display: 'flex', alignItems: 'center', gap: 8, opacity: vis(66), ...mono(look, 15, p.muted) }}>
        <span style={{ width: 9, height: 9, borderRadius: 5, background: p.accent, opacity: 0.45 + 0.55 * Math.abs(Math.sin((f / 30) * Math.PI)) }} />
        live
      </div>
      <Beats {...look} beats={['game night on paper', 'a live bracket', 'friends follow live']} />
    </Tile>
  );
};

/* ScreenShot: stuck on the PC → press F1 → on your phone a moment later. */
export const TileScreenshot: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const done = tween(f, END, 12);
  const stuck = opening(f, 56);
  const shots = [66, 108, 120];
  const cell = (k: number) => ({ x: 420 + (k % 2) * 64, y: 86 + Math.floor(k / 2) * 52 });

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 40, top: 82, width: 260, height: 168, borderRadius: 10, background: p.bg, border: `1.5px solid ${p.line}` }} />
      <div style={{ position: 'absolute', left: 150, top: 250, width: 40, height: 22, background: p.line }} />
      <div style={{ position: 'absolute', left: 116, top: 272, width: 108, height: 6, borderRadius: 3, background: p.line }} />
      {[0, 1, 2, 3].map((k) => (
        <div key={`pile${k}`} style={{ position: 'absolute', left: 190 - k * 8, top: 150 + k * 10, width: 80, height: 54, borderRadius: 6, background: p.panel, border: `1.5px solid ${p.muted}`, opacity: stuck * tween(f, 6 + k * 9, 8) }} />
      ))}
      {shots.map((at, k) => (
        <div key={`fl${k}`} style={{ position: 'absolute', left: 42, top: 84, width: 256, height: 164, borderRadius: 9, background: p.ink, opacity: span(f, at, at + 6, 3) * 0.18 }} />
      ))}
      <div style={{ position: 'absolute', left: 404, top: 40, width: 156, height: 330, borderRadius: 26, background: p.bg, border: `1.5px solid ${p.line}` }} />
      {Array.from({ length: 6 }, (_, k) => {
        const c = cell(k);
        return <div key={`c${k}`} style={{ position: 'absolute', left: c.x, top: c.y, width: 56, height: 42, borderRadius: 6, border: `1.5px dashed ${p.line}` }} />;
      })}
      {shots.map((at, k) => {
        const t = tween(f, at + 4, 24, 0, 1, TRAVEL);
        const c = cell(k);
        return (
          <div key={`s${k}`} style={{ position: 'absolute', left: mix(140, c.x, t), top: mix(150, c.y, t) - Math.sin(Math.PI * t) * 50, width: mix(80, 56, t), height: mix(54, 42, t), borderRadius: 6, background: p.panel, border: `2px solid ${t < 1 ? p.accent : p.muted}`, opacity: tween(f, at + 4, 4) * (1 - done) }} />
        );
      })}
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {[14, 26, 38].map((r, i) => (
          <path key={r} d={`M ${352 - r} ${190 - r * 0.2} A ${r} ${r} 0 0 1 ${352 + r} ${190 - r * 0.2}`} fill="none" stroke={p.accent} strokeWidth={2} strokeLinecap="round" opacity={span(f, 60, END, 8) * (0.25 + 0.6 * Math.abs(Math.sin((f / 20 - i * 0.5) * Math.PI)))} />
        ))}
      </svg>
      <Beats {...look} beats={['stuck on the PC', 'press F1', 'on your phone, a moment later']} />
    </Tile>
  );
};

/* 404: the person walks the lane, wanders off the map, and comes back. */
export const LOST_FRAMES = 150;

export const TileLost: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const walk = tween(f, 0, 40, 0, 1, TRAVEL);
  const off = tween(f, 40, 50, 0, 1, TRAVEL);
  const back = tween(f, 116, 30, 0, 1, TRAVEL);
  const bez = (t: number, a: number, b: number, c: number, d: number) => (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d;
  let x = f < 40 ? mix(80, 300, walk) : bez(off, 300, 380, 470, 430);
  let y = f < 40 ? 200 : bez(off, 200, 200, 330, 340);
  if (f >= 116) {
    x = mix(430, 80, back);
    y = mix(340, 200, back);
  }
  const trail = Array.from({ length: 18 }, (_, i) => i / 17).filter((t) => t <= off);

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {[200, 260].map((ly) => <line key={ly} x1={60} x2={540} y1={ly} y2={ly} stroke={p.line} strokeWidth={1.25} />)}
        {[150, 260, 370, 480].map((tx) => <circle key={tx} cx={tx} cy={200} r={6} fill={p.panel} stroke={p.ink} strokeWidth={1.5} />)}
        {trail.map((t, i) => <circle key={i} cx={bez(t, 300, 380, 470, 430)} cy={bez(t, 200, 200, 330, 340)} r={2} fill={p.faint} opacity={1 - back} />)}
      </svg>
      <div style={{ position: 'absolute', left: 450, top: 300, ...mono(look, 30, p.muted), opacity: span(f, 86, 116, 10) }}>?</div>
      <div style={{ position: 'absolute', left: x - 8, top: y - 8, width: 16, height: 16, borderRadius: 8, background: p.accent, boxShadow: `0 0 0 4px ${p.panel}` }} />
    </Tile>
  );
};
