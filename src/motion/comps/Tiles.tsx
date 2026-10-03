import type { ReactNode } from 'react';
import { AbsoluteFill, useCurrentFrame } from '../core';
import { TRAVEL, fadeUp, mix, seeded, span, tween } from '../helpers';
import type { LookProps } from '../theme';

// Service design tiles (600×450, 6 s seamless loops). Each tells its case in
// three short beats: the problem, what was made, and the outcome, with a few
// words of caption per beat. Facts come from the case studies. Product tiles
// live in TilesProduct.tsx.

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
      <div style={{ position: 'absolute', left: C.x - 60, width: 120, top: C.y - 7, textAlign: 'center', opacity: span(f, 86, 160, 10), ...mono(look, 13, p.muted) }}>virtual café</div>
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

/* I.V.I.: unpaid care, unseen → counted hour by hour → valued as income. */
const TASKS: [number, number][] = [[6, 8], [9, 10.5], [12.5, 13.5], [17, 19.5], [21, 22]];
const arc = (cx: number, cy: number, r: number, h1: number, h2: number) => {
  const a1 = (h1 / 24) * Math.PI * 2 - Math.PI / 2;
  const a2 = (h2 / 24) * Math.PI * 2 - Math.PI / 2;
  return `M ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} A ${r} ${r} 0 ${h2 - h1 > 12 ? 1 : 0} 1 ${cx + r * Math.cos(a2)} ${cy + r * Math.sin(a2)}`;
};
const midAngle = (h1: number, h2: number) => (((h1 + h2) / 2) / 24) * Math.PI * 2 - Math.PI / 2;

export const TileIvi: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const C = { x: 300, y: 196 };
  const R = 124;
  const reset = tween(f, END - 4, 14);
  const paid = span(f, 136, 162, 10); // the hours arrive as income

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
        {/* each counted task sends its value to the centre */}
        {TASKS.map(([h1, h2], i) => {
          const a = midAngle(h1, h2);
          const t = tween(f, 122 + i * 3, 18, 0, 1, TRAVEL);
          const show = t > 0 && t < 1 ? 1 : 0;
          return <circle key={`v${i}`} cx={mix(C.x + R * Math.cos(a), C.x, t)} cy={mix(C.y + R * Math.sin(a), C.y, t)} r={6} fill={p.accent} opacity={show} />;
        })}
        <circle cx={C.x} cy={C.y} r={34 * (0.7 + 0.3 * paid)} fill={p.accent} fillOpacity={0.16} stroke={p.accent} strokeWidth={2.5} opacity={paid} />
        <circle cx={C.x} cy={C.y} r={22 * (0.7 + 0.3 * paid)} fill="none" stroke={p.accent} strokeWidth={1.5} opacity={paid} />
      </svg>
      <div style={{ position: 'absolute', left: C.x - 90, width: 180, top: C.y - 12, textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: span(f, 6, 58, 10), ...mono(look, 18, p.muted) }}>unseen</div>
        <div style={{ position: 'absolute', inset: 0, opacity: span(f, 64, 126, 10), ...mono(look, 18, p.ink) }}>counted</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 50, opacity: paid, ...mono(look, 17, p.ink) }}>income</div>
      </div>
      <Beats {...look} beats={['unpaid care, unseen', 'counted, hour by hour', 'valued as income']} />
    </Tile>
  );
};

/* LNER App Clip: scan the QR at the station → the clip opens, no download → booked in one tap.
   Once the code is read, the sign leaves and the phone moves to the centre; a train runs along the platform. */
const ESSENTIALS = ['time', 'price', 'duration', 'changes', 'delay'];
const qrRand = seeded(23);
const QR_CELLS = Array.from({ length: 81 }, () => qrRand() > 0.5);
const FINDERS = [[0, 0], [6, 0], [0, 6]];

/** A small QR code: three finder squares around a seeded pattern. */
const Qr: React.FC<{ size: number; ink: string; ground: string }> = ({ size, ink, ground }) => {
  const c = size / 9;
  const inFinder = (x: number, y: number) => FINDERS.some(([fx, fy]) => x >= fx && x < fx + 3 && y >= fy && y < fy + 3);
  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      <rect width={size} height={size} fill={ground} />
      {QR_CELLS.map((on, k) => {
        const x = k % 9;
        const y = Math.floor(k / 9);
        return on && !inFinder(x, y) ? <rect key={k} x={x * c} y={y * c} width={c} height={c} fill={ink} /> : null;
      })}
      {FINDERS.map(([x, y]) => (
        <g key={`${x}${y}`}>
          <rect x={x * c} y={y * c} width={c * 3} height={c * 3} fill={ink} />
          <rect x={x * c + c * 0.5} y={y * c + c * 0.5} width={c * 2} height={c * 2} fill={ground} />
          <rect x={x * c + c} y={y * c + c} width={c} height={c} fill={ink} />
        </g>
      ))}
    </svg>
  );
};

export const TileLner: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  // the phone moves from beside the sign to the centre once the code is read, and back for the next loop
  const centre = tween(f, 54, 22, 0, 1, TRAVEL) * (1 - tween(f, END, 12, 0, 1, TRAVEL));
  const S = { x: mix(362, 227, centre), y: 40, w: 146, h: 270 }; // the phone's screen
  const sign = { x: 60, y: 53, w: 172, h: 244 };
  const signOut = tween(f, 48, 14) * (1 - tween(f, END, 12));
  const trainX = mix(-150, 630, f / TILE_FRAMES);
  const camera = opening(f, 56);
  const lock = tween(f, 20, 16, 0, 1, TRAVEL); // the frame snaps onto the code
  const found = span(f, 38, 58, 6);
  const clip = span(f, 62, 118, 8);
  const slide = tween(f, 62, 16, 0, 1, TRAVEL);
  const pay = Math.sin(Math.PI * tween(f, 108, 8));
  const ticket = span(f, 118, END, 10);
  const scanY = (f % 24) / 24;
  const qr = { x: S.w / 2 - 34, y: 84, s: 68 };
  const spread = mix(22, 5, lock);
  const screenGround = p.mode === 'dark' ? '#000000' : '#26262A';

  return (
    <Tile {...look}>
      {/* the sign at the station; it leaves once the code is read */}
      <div style={{ position: 'absolute', left: sign.x, top: sign.y, width: sign.w, height: sign.h, borderRadius: 14, background: p.bg, border: `1.5px solid ${p.line}`, opacity: 1 - signOut, transform: `translateX(${-signOut * 36}px)` }}>
        <div style={{ margin: '18px 0 0 18px', width: 64, height: 8, borderRadius: 4, background: p.accent }} />
        <div style={{ margin: '18px auto 0', width: 116 }}>
          <Qr size={116} ink={p.ink} ground={p.bg} />
        </div>
        <div style={{ marginTop: 14, textAlign: 'center', ...mono(look, 14, p.muted) }}>scan for tickets</div>
      </div>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        {[sign.y + 50, sign.y + 156].map((y, i) => (
          <line key={y} x1={sign.x + sign.w} y1={y} x2={S.x + qr.x} y2={S.y + qr.y + (i ? qr.s : 0)} stroke={p.accent} strokeWidth={1.25} strokeDasharray="3 6" opacity={camera * span(f, 10, 46, 8) * 0.8} />
        ))}
        {/* the platform: track, sleepers and a train passing through the whole loop */}
        <line x1={0} x2={600} y1={372} y2={372} stroke={p.line} strokeWidth={1.5} />
        {Array.from({ length: 26 }, (_, i) => (
          <line key={i} x1={i * 24 + 6} x2={i * 24 + 6} y1={372} y2={379} stroke={p.line} strokeWidth={1.5} />
        ))}
        <rect x={trainX} y={342} width={136} height={26} rx={13} fill={p.bg} stroke={p.ink} strokeWidth={1.5} />
        {[0, 1, 2].map((w) => (
          <rect key={w} x={trainX + 24 + w * 32} y={350} width={22} height={8} rx={3} fill={p.line} />
        ))}
      </svg>

      {/* the phone */}
      <div style={{ position: 'absolute', left: S.x - 12, top: S.y - 20, width: S.w + 24, height: S.h + 40, borderRadius: 30, background: p.bg, border: `1.5px solid ${p.line}` }} />
      <div style={{ position: 'absolute', left: S.x, top: S.y, width: S.w, height: S.h, borderRadius: 18, overflow: 'hidden', background: screenGround }}>
        {/* camera view: the code, the frame snapping onto it, the scan line, then "Open App Clip" */}
        <div style={{ position: 'absolute', inset: 0, opacity: camera }}>
          <div style={{ position: 'absolute', left: qr.x, top: qr.y, opacity: 0.85 }}>
            <Qr size={qr.s} ink="#F2F2F3" ground={screenGround} />
          </div>
          {[[0, 0], [1, 0], [0, 1], [1, 1]].map(([cx, cy]) => (
            <div
              key={`${cx}${cy}`}
              style={{
                position: 'absolute',
                left: qr.x + (cx ? qr.s + spread - 14 : -spread),
                top: qr.y + (cy ? qr.s + spread - 14 : -spread),
                width: 14,
                height: 14,
                borderStyle: 'solid',
                borderColor: found > 0.3 ? p.accent : '#F2F2F3',
                borderWidth: `${cy ? 0 : 2.5}px ${cx ? 2.5 : 0}px ${cy ? 2.5 : 0}px ${cx ? 0 : 2.5}px`,
              }}
            />
          ))}
          <div style={{ position: 'absolute', left: qr.x - 6, width: qr.s + 12, top: qr.y + scanY * qr.s, height: 2, background: p.accent, opacity: (1 - lock) * 0.9 }} />
          <div style={{ position: 'absolute', left: 8, right: 8, top: 200, height: 34, borderRadius: 10, background: 'rgba(242, 242, 243, 0.94)', display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', whiteSpace: 'nowrap', opacity: found, transform: `translateY(${(1 - found) * 8}px)` }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: p.accent }} />
            <span style={{ fontFamily: look.fonts.text, fontSize: 12, fontWeight: 600, color: '#1D1D1F' }}>Open App Clip</span>
          </div>
        </div>
        {/* the App Clip: five essentials and one button */}
        <div style={{ position: 'absolute', inset: 0, background: p.panel, padding: '20px 14px', boxSizing: 'border-box', opacity: clip, transform: `translateY(${(1 - slide) * 60}px)` }}>
          {ESSENTIALS.map((e, i) => (
            <div key={e} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 32, ...mono(look, 13, p.muted), opacity: tween(f, 70 + i * 5, 8) }}>
              <span>{e}</span>
              <span style={{ width: 40 - i * 3, height: 6, borderRadius: 3, background: i === 4 ? p.accent : p.line }} />
            </div>
          ))}
          <div style={{ marginTop: 18, height: 36, borderRadius: 18, background: p.accent, color: p.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: look.fonts.text, fontSize: 14, fontWeight: 600, opacity: tween(f, 94, 8), transform: `scale(${1 - pay * 0.06})` }}>
            Pay
          </div>
        </div>
        {/* the ticket */}
        <div style={{ position: 'absolute', inset: 0, background: p.panel, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 28, boxSizing: 'border-box', opacity: ticket }}>
          <div style={mono(look, 13, p.accent)}>ticket ready</div>
          <div style={{ marginTop: 14, padding: 8, borderRadius: 10, background: '#F2F2F3' }}>
            <Qr size={96} ink="#0B0B0C" ground="#F2F2F3" />
          </div>
          <div style={{ marginTop: 16, ...mono(look, 15, p.ink) }}>platform 2</div>
        </div>
      </div>
      <Beats {...look} beats={['scan the QR at the station', 'opens instantly, no download', 'booked in one tap']} />
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
