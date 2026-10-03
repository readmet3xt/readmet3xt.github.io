import type { ReactNode } from 'react';
import { AbsoluteFill, useCurrentFrame } from '../core';
import { TRAVEL, fadeUp, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';

// Project tiles (600×450, 5 s seamless loops). Each explains its project in one
// gesture; the project's name and context sit beside the tile as page text.

export const TILE_FRAMES = 150;
export const TILE_W = 600;
export const TILE_H = 450;

const Tile: React.FC<LookProps & { children: ReactNode }> = ({ palette: p, children }) => (
  <AbsoluteFill style={{ background: p.panel, overflow: 'hidden' }}>{children}</AbsoluteFill>
);

const mono = (look: LookProps, size: number, color: string) => ({ fontFamily: look.fonts.mono, fontSize: size, color });

/* Otagon: press F1, the screenshot travels to the phone, a hint arrives that stops before spoilers. */
export const TileOtagon: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const press = Math.sin(Math.PI * tween(f, 12, 14));
  const lit = span(f, 12, 40, 6);
  const fly = tween(f, 22, 30, 0, 1, TRAVEL);
  const reset = tween(f, 124, 22);
  const show = (at: number) => tween(f, at, 12) * (1 - reset);
  const fx = mix(152, 458, fly);
  const fy = mix(206, 105, fly) - Math.sin(Math.PI * fly) * 80;
  const typed = (at: number, w: number) => w * tween(f, at, 14, 0, 1, (x) => x) * (1 - reset);

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 96, top: 150 + press * 7, width: 112, height: 112, borderRadius: 22, background: p.bg, border: `1.5px solid ${lit > 0.05 ? p.accent : p.line}`, boxShadow: `0 ${9 - press * 7}px 0 ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 32, p.ink) }}>
        F1
      </div>
      <div style={{ position: 'absolute', left: 346, top: 40, width: 176, height: 370, borderRadius: 30, background: p.bg, border: `1.5px solid ${p.line}` }} />
      {f >= 22 && fly < 1 && <div style={{ position: 'absolute', left: fx - 23, top: fy - 15, width: 46, height: 30, borderRadius: 6, border: `2px solid ${p.accent}`, background: p.panel }} />}
      <div style={{ position: 'absolute', left: 412, top: 76, width: 92, height: 58, borderRadius: 12, border: `1.5px solid ${p.accent}`, background: p.panel, opacity: show(50) }} />
      <div style={{ position: 'absolute', left: 364, top: 150, width: 140, height: 136, borderRadius: 14, background: p.panel, opacity: show(56), padding: 14, boxSizing: 'border-box' }}>
        {[100, 112, 70].map((w, i) => (
          <div key={i} style={{ height: 7, width: typed(62 + i * 12, w), borderRadius: 4, background: p.muted, marginBottom: 9 }} />
        ))}
        <div style={{ height: 7, width: 104, borderRadius: 4, background: p.muted, filter: 'blur(4px)', opacity: show(104) }} />
        <div style={{ marginTop: 10, opacity: show(108), ...mono(look, 15, p.accent) }}>no spoilers</div>
      </div>
    </Tile>
  );
};

/* Stampede: seven archetypes on Power × Pace; complementary profiles pair up. */
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
  const O = { x: 64, y: 372 };
  const ax = (pace: number) => 86 + pace * 420;
  const ay = (power: number) => 352 - power * 280;
  const on = span(f, 16, 112, 18);
  const link = tween(f, 22, 22, 0, 1, TRAVEL) * (1 - tween(f, 112, 22));
  const a = ANIMALS.find(([n]) => n === PAIR[0])!;
  const b = ANIMALS.find(([n]) => n === PAIR[1])!;

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <line x1={O.x} y1={O.y} x2={556} y2={O.y} stroke={p.line} strokeWidth={1.5} />
        <line x1={O.x} y1={O.y} x2={O.x} y2={44} stroke={p.line} strokeWidth={1.5} />
        <line x1={ax(a[1])} y1={ay(a[2])} x2={mix(ax(a[1]), ax(b[1]), link)} y2={mix(ay(a[2]), ay(b[2]), link)} stroke={p.accent} strokeWidth={2} strokeDasharray="1 7" strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', left: 492, top: O.y + 10, ...mono(look, 15, p.faint) }}>pace →</div>
      <div style={{ position: 'absolute', left: O.x + 10, top: 38, ...mono(look, 15, p.faint) }}>power ↑</div>
      {ANIMALS.map(([name, pace, power], i) => {
        const paired = PAIR.includes(name);
        const drift = Math.sin((f / TILE_FRAMES) * Math.PI * 2 + i * 1.7) * 3;
        const lit = paired && on > 0.05;
        return (
          <div key={name} style={{ position: 'absolute', left: ax(pace) - 7, top: ay(power) - 7 + drift, display: 'flex', alignItems: 'center', gap: 9, opacity: paired ? 1 : 1 - on * 0.6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: lit ? p.accent : p.ink }} />
            <div style={mono(look, 17, lit ? p.ink : p.muted)}>{name}</div>
          </div>
        );
      })}
    </Tile>
  );
};

/* Pebble: remote people drift alone, gather round a virtual café, then drift apart. */
const PEOPLE = [[100, 90], [470, 80], [520, 250], [370, 340], [120, 300], [260, 56]];

export const TilePebble: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const gather = tween(f, 30, 34, 0, 1, TRAVEL) * (1 - tween(f, 112, 34, 0, 1, TRAVEL));
  const C = { x: 300, y: 212 };
  const R = 96;

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <circle cx={C.x} cy={C.y} r={R - 32} fill="none" stroke={p.line} strokeWidth={1.5} strokeDasharray={410} strokeDashoffset={410 * (1 - gather)} />
      </svg>
      <div style={{ position: 'absolute', left: C.x - 60, width: 120, top: C.y - 11, textAlign: 'center', opacity: span(f, 56, 104, 12), ...mono(look, 16, p.muted) }}>virtual café</div>
      {PEOPLE.map(([x, y], i) => {
        const angle = (i / PEOPLE.length) * Math.PI * 2 - Math.PI / 2;
        const tx = C.x + Math.cos(angle) * R;
        const ty = C.y + Math.sin(angle) * R;
        const drift = Math.sin((f / TILE_FRAMES) * Math.PI * 2 + i) * 4 * (1 - gather);
        const talk = gather > 0.95 ? Math.sin(Math.PI * tween(f, 66 + i * 6, 10)) : 0;
        const you = i === 0;
        return <div key={i} style={{ position: 'absolute', left: mix(x, tx, gather) - 14, top: mix(y, ty, gather) - 14 + drift, width: 28, height: 28, borderRadius: 14, background: you ? p.accent : p.bg, border: `2px solid ${you ? p.accent : p.ink}`, opacity: mix(0.55, 1, gather), transform: `scale(${1 + talk * 0.18})` }} />;
      })}
    </Tile>
  );
};

/* LNER App Clip: a train passes while the clip shows only five essentials, then one tap to pay. */
const ESSENTIALS = ['time', 'price', 'duration', 'changes', 'delay status'];

export const TileLner: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const reset = tween(f, 124, 22);
  const trainX = mix(-150, 630, f / TILE_FRAMES);
  const pay = Math.sin(Math.PI * tween(f, 92, 10));
  const ready = tween(f, 100, 14) * (1 - reset);

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 160, top: 34, width: 280, height: 262, borderRadius: 22, background: p.bg, border: `1.5px solid ${p.line}`, padding: '20px 24px', boxSizing: 'border-box' }}>
        {ESSENTIALS.map((e, i) => (
          <div key={e} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 30, ...mono(look, 16, p.muted), ...fadeUp(f, 10 + i * 9, { dur: 12, dist: 8 }), opacity: tween(f, 10 + i * 9, 12) * (1 - reset) }}>
            <span>{e}</span>
            <span style={{ width: 56 - i * 4, height: 7, borderRadius: 4, background: i === 4 ? p.accent : p.line }} />
          </div>
        ))}
        <div style={{ marginTop: 16, height: 40, borderRadius: 20, background: p.accent, color: p.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: look.fonts.text, fontSize: 16, fontWeight: 600, opacity: tween(f, 70, 12) * (1 - reset), transform: `scale(${1 - pay * 0.05})` }}>
          {ready > 0.5 ? 'Ticket ready' : 'Pay'}
        </div>
      </div>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <line x1={0} x2={600} y1={362} y2={362} stroke={p.line} strokeWidth={1.5} />
        {Array.from({ length: 26 }, (_, i) => (
          <line key={i} x1={i * 24 + 6} x2={i * 24 + 6} y1={362} y2={369} stroke={p.line} strokeWidth={1.5} />
        ))}
        <rect x={trainX} y={330} width={136} height={28} rx={14} fill={p.bg} stroke={p.ink} strokeWidth={1.5} />
        {[0, 1, 2].map((w) => (
          <rect key={w} x={trainX + 24 + w * 32} y={338} width={22} height={9} rx={3} fill={p.line} />
        ))}
      </svg>
    </Tile>
  );
};

/* KoinBasket: coins drop into a curated basket; the funds stay with the person. */
export const TileKoinBasket: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const reset = tween(f, 124, 22);
  const coins = [240, 280, 320, 360, 300];
  const rest = [318, 318, 318, 318, 284];
  const link = tween(f, 76, 20, 0, 1, TRAVEL) * (1 - reset);

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <path d="M196 236 L214 332 Q217 346 231 346 L361 346 Q375 346 378 332 L396 236" fill={p.bg} stroke={p.ink} strokeWidth={2} />
        <line x1={184} x2={408} y1={236} y2={236} stroke={p.ink} strokeWidth={2} strokeLinecap="round" />
        <line x1={396} y1={290} x2={mix(396, 474, link)} y2={290} stroke={p.accent} strokeWidth={2} strokeDasharray="2 7" strokeLinecap="round" />
      </svg>
      {coins.map((x, i) => {
        const drop = tween(f, 8 + i * 10, 22, 0, 1, TRAVEL);
        const y = mix(-40, rest[i], drop);
        return (
          <div key={i} style={{ position: 'absolute', left: x - 18, top: y - 18, width: 36, height: 36, borderRadius: 18, background: p.panel, border: `2px solid ${p.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: drop > 0 ? 1 - reset : 0, zIndex: y < 240 ? 2 : 0 }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, border: `1.5px solid ${p.muted}` }} />
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: 196, width: 200, top: 360, textAlign: 'center', opacity: span(f, 60, 124, 12), ...mono(look, 16, p.muted) }}>curated basket</div>
      <div style={{ position: 'absolute', left: 474, top: 276, width: 28, height: 28, borderRadius: 14, background: p.accent, opacity: tween(f, 90, 10) * (1 - reset) }} />
      <div style={{ position: 'absolute', left: 408, width: 172, top: 318, textAlign: 'center', whiteSpace: 'nowrap', opacity: span(f, 96, 124, 12), ...mono(look, 16, p.muted) }}>stays with you</div>
    </Tile>
  );
};

/* I.V.I.: unpaid care work on a day's clock goes from invisible to visible. */
const TASKS: [number, number][] = [
  [6, 8], [9, 10.5], [12.5, 13.5], [17, 19.5], [21, 22],
];
const arc = (cx: number, cy: number, r: number, h1: number, h2: number) => {
  const a1 = (h1 / 24) * Math.PI * 2 - Math.PI / 2;
  const a2 = (h2 / 24) * Math.PI * 2 - Math.PI / 2;
  const large = h2 - h1 > 12 ? 1 : 0;
  return `M ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} A ${r} ${r} 0 ${large} 1 ${cx + r * Math.cos(a2)} ${cy + r * Math.sin(a2)}`;
};

export const TileIvi: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const C = { x: 300, y: 218 };
  const R = 128;
  const reset = tween(f, 126, 20);
  const seen = tween(f, 62, 30);

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
          const appear = tween(f, 10 + i * 6, 14) * (1 - reset);
          const solid = tween(f, 62 + i * 7, 14);
          return (
            <path key={i} d={arc(C.x, C.y, R, h1, h2)} fill="none" stroke={solid > 0.5 ? p.accent : p.muted} strokeWidth={mix(3, 9, solid)} strokeDasharray={solid > 0.5 ? undefined : '3 6'} strokeLinecap="round" opacity={appear} />
          );
        })}
      </svg>
      <div style={{ position: 'absolute', left: C.x - 90, width: 180, top: C.y - 12, textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: tween(f, 8, 12) * (1 - seen), ...mono(look, 18, p.muted) }}>invisible</div>
        <div style={{ position: 'absolute', inset: 0, opacity: seen * (1 - reset), ...mono(look, 18, p.ink) }}>visible</div>
      </div>
    </Tile>
  );
};

/* Law.X: each line of the AI's answer links to the source that backs it. */
const SOURCES = ['clause 4.2', 'case note', 'statute'];

export const TileLawx: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const reset = tween(f, 124, 22);
  const lineY = [96, 132, 168, 204, 240, 276];
  const links: [number, number][] = [[1, 0], [3, 1], [5, 2]];
  const srcY = [104, 196, 288];

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 60, top: 54, width: 250, height: 284, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}` }} />
      <div style={{ position: 'absolute', left: 80, top: 66, opacity: 1 - reset, ...mono(look, 15, p.faint) }}>answer</div>
      {lineY.map((y, i) => (
        <div key={y} style={{ position: 'absolute', left: 80, top: y, height: 7, borderRadius: 4, background: links.some(([l]) => l === i) && tween(f, 40 + i * 9, 10) > 0.5 ? p.ink : p.muted, width: [180, 150, 196, 132, 170, 120][i] * tween(f, 8 + i * 8, 12, 0, 1, (x) => x) * (1 - reset) }} />
      ))}
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {links.map(([l, s]) => {
          const t = tween(f, 40 + l * 9, 16, 0, 1, TRAVEL) * (1 - reset);
          const x1 = 290;
          const y1 = lineY[l] + 4;
          const x2 = mix(x1, 386, t);
          const y2 = mix(y1, srcY[s] + 22, t);
          return <path key={l} d={`M ${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`} fill="none" stroke={p.accent} strokeWidth={1.75} opacity={t > 0 ? 1 : 0} />;
        })}
      </svg>
      {SOURCES.map((s, i) => {
        const at = 48 + links[i][0] * 9;
        const ok = tween(f, at + 12, 10) * (1 - reset);
        return (
          <div key={s} style={{ position: 'absolute', left: 386, top: srcY[i], width: 160, height: 44, borderRadius: 12, background: p.bg, border: `1.5px solid ${ok > 0.5 ? p.accent : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', boxSizing: 'border-box', opacity: tween(f, at - 10, 12) * (1 - reset) }}>
            <span style={mono(look, 15, p.ink)}>{s}</span>
            <span style={{ ...mono(look, 15, p.accent), opacity: ok }}>✓</span>
          </div>
        );
      })}
    </Tile>
  );
};

/* Versus: a live bracket fills in during a game night. */
export const TileVersus: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const reset = tween(f, 128, 18);
  const vis = (at: number) => tween(f, at, 10) * (1 - reset);
  const slot = (x: number, y: number, w: number, name: string, score: string | null, at: number, win = false, champ = false) => (
    <div style={{ position: 'absolute', left: x, top: y, width: w, height: 42, borderRadius: 10, background: champ ? p.accent : p.bg, border: `1.5px solid ${champ ? p.accent : win ? p.ink : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', boxSizing: 'border-box', opacity: vis(at) }}>
      <span style={mono(look, 16, champ ? p.onAccent : p.ink)}>{name}</span>
      {score !== null && <span style={{ ...mono(look, 16, win ? p.ink : p.muted), fontVariantNumeric: 'tabular-nums' }}>{score}</span>}
    </div>
  );
  const s = (at: number, a: string, b: string) => (f < at ? a : b);
  const wire = (x1: number, y1: number, x2: number, y2: number, at: number) => {
    const t = tween(f, at, 14, 0, 1, TRAVEL) * (1 - reset);
    const mx = (x1 + x2) / 2;
    return <path d={`M ${x1} ${y1} H ${mx} V ${y2} H ${mix(mx, x2, t)}`} fill="none" stroke={p.line} strokeWidth={1.5} opacity={t > 0 ? 1 : 0} />;
  };

  return (
    <Tile {...look}>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {wire(190, 81, 250, 111, 62)}
        {wire(190, 141, 250, 111, 62)}
        {wire(190, 291, 250, 321, 66)}
        {wire(190, 351, 250, 321, 66)}
        {wire(390, 111, 450, 216, 100)}
        {wire(390, 321, 450, 216, 100)}
      </svg>
      {slot(50, 60, 140, 'p1', s(34, '0', '2'), 6, f >= 34)}
      {slot(50, 120, 140, 'p2', s(24, '0', '1'), 10)}
      {slot(50, 270, 140, 'p3', s(44, '0', '0'), 14)}
      {slot(50, 330, 140, 'p4', s(44, '0', '1'), 18, f >= 44)}
      {slot(250, 90, 140, 'p1', s(88, '0', '1'), 74)}
      {slot(250, 300, 140, 'p4', s(96, '0', '2'), 78, f >= 96)}
      {slot(450, 195, 110, 'p4', null, 110, true, true)}
      <div style={{ position: 'absolute', right: 40, top: 30, display: 'flex', alignItems: 'center', gap: 8, ...mono(look, 15, p.muted) }}>
        <span style={{ width: 9, height: 9, borderRadius: 5, background: p.accent, opacity: 0.45 + 0.55 * Math.abs(Math.sin((f / 30) * Math.PI)) }} />
        live
      </div>
    </Tile>
  );
};

/* ScreenShot: captures fly from the PC to the phone's gallery. */
export const TileScreenshot: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const reset = tween(f, 126, 20);
  const shots = [10, 46, 82];
  const cell = (k: number) => ({ x: 420 + (k % 2) * 64, y: 96 + Math.floor(k / 2) * 52 });

  return (
    <Tile {...look}>
      <div style={{ position: 'absolute', left: 40, top: 92, width: 260, height: 168, borderRadius: 10, background: p.bg, border: `1.5px solid ${p.line}` }} />
      <div style={{ position: 'absolute', left: 150, top: 260, width: 40, height: 22, background: p.line }} />
      <div style={{ position: 'absolute', left: 116, top: 282, width: 108, height: 6, borderRadius: 3, background: p.line }} />
      {shots.map((at, k) => {
        const flash = span(f, at, at + 6, 3);
        return <div key={`fl${k}`} style={{ position: 'absolute', left: 42, top: 94, width: 256, height: 164, borderRadius: 9, background: p.ink, opacity: flash * 0.18 }} />;
      })}
      <div style={{ position: 'absolute', left: 404, top: 50, width: 156, height: 330, borderRadius: 26, background: p.bg, border: `1.5px solid ${p.line}` }} />
      {Array.from({ length: 6 }, (_, k) => {
        const c = cell(k);
        return <div key={`c${k}`} style={{ position: 'absolute', left: c.x, top: c.y, width: 56, height: 42, borderRadius: 6, border: `1.5px dashed ${p.line}` }} />;
      })}
      {shots.map((at, k) => {
        const t = tween(f, at + 4, 26, 0, 1, TRAVEL);
        const c = cell(k);
        const x = mix(140, c.x, t);
        const y = mix(150, c.y, t) - Math.sin(Math.PI * t) * 50;
        const w = mix(80, 56, t);
        const h = mix(54, 42, t);
        return (
          <div key={`s${k}`} style={{ position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: 6, background: p.panel, border: `2px solid ${t < 1 ? p.accent : p.muted}`, opacity: tween(f, at + 4, 4) * (1 - reset) }} />
        );
      })}
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {[14, 26, 38].map((r, i) => (
          <path key={r} d={`M ${352 - r} ${200 - r * 0.2} A ${r} ${r} 0 0 1 ${352 + r} ${200 - r * 0.2}`} fill="none" stroke={p.accent} strokeWidth={2} strokeLinecap="round" opacity={0.25 + 0.6 * Math.abs(Math.sin((f / 20 - i * 0.5) * Math.PI)) * (1 - reset * 0.7)} />
        ))}
      </svg>
    </Tile>
  );
};

/* 404: the person walks the lane, wanders off the map, and comes back. */
export const TileLost: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const walk = tween(f, 0, 40, 0, 1, TRAVEL);
  const off = tween(f, 40, 50, 0, 1, TRAVEL);
  const back = tween(f, 116, 30, 0, 1, TRAVEL);
  const bez = (t: number, a: number, b: number, c: number, d: number) => (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d;
  const ox = bez(off, 300, 380, 470, 430);
  const oy = bez(off, 200, 200, 330, 340);
  let x = f < 40 ? mix(80, 300, walk) : ox;
  let y = f < 40 ? 200 : oy;
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
