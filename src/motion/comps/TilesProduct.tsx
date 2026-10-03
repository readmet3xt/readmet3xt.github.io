import type { ReactNode } from 'react';
import { AbsoluteFill, useCurrentFrame } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';

// Product tiles (600×450, 5 s seamless loops): one gesture per product.
// These are the versions he chose to keep; the service tiles (Tiles.tsx) tell
// their case in three captioned beats instead.

export const PRODUCT_TILE_FRAMES = 150;
const TILE_FRAMES = PRODUCT_TILE_FRAMES;

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

/* Law.X: the question goes in, the Thinking Panel shows each step (reframe,
   clarify, review the statutes), and the answer cites the section it rests on. */
const STEPS = ['reframe query', 'clarify', 'review statutes'];

export const TileLawx: React.FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const reset = tween(f, 124, 22);
  const vis = (at: number) => tween(f, at, 10) * (1 - reset);
  const thinking = f < 88;
  const cite = tween(f, 96, 18, 0, 1, TRAVEL) * (1 - reset);

  return (
    <Tile {...look}>
      {/* the chat: question, the Thinking pill, then the answer */}
      <div style={{ position: 'absolute', left: 48, top: 48, width: 250, height: 318, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}` }} />
      <div style={{ position: 'absolute', left: 126, top: 66, width: 152, height: 58, borderRadius: 12, background: p.panel, border: `1.5px solid ${p.line}`, opacity: vis(4) }}>
        <div style={{ margin: '16px 0 0 14px', width: 116, height: 7, borderRadius: 4, background: p.muted }} />
        <div style={{ margin: '10px 0 0 14px', width: 82, height: 7, borderRadius: 4, background: p.muted }} />
      </div>
      <div style={{ position: 'absolute', left: 66, top: 142, height: 30, borderRadius: 15, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.accent, color: p.onAccent, ...mono(look, 14, p.onAccent), opacity: vis(14) }}>
        {thinking ? 'thinking…' : 'thought for 42.2 secs'}
      </div>
      {[150, 186, 128, 170].map((w, i) => (
        <div key={i} style={{ position: 'absolute', left: 66, top: 196 + i * 26, height: 7, borderRadius: 4, background: p.ink, opacity: 0.85, width: w * tween(f, 90 + i * 6, 10, 0, 1, (x) => x) * (1 - reset) }} />
      ))}
      <div style={{ position: 'absolute', left: 66, top: 310, height: 28, borderRadius: 8, padding: '0 10px', display: 'flex', alignItems: 'center', border: `1.5px solid ${p.accent}`, ...mono(look, 14, p.ink), opacity: tween(f, 108, 8) * (1 - reset) }}>
        Sec 56(2)(x)
      </div>

      {/* the Thinking Panel */}
      <div style={{ position: 'absolute', left: 320, top: 48, width: 232, height: 318, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}`, opacity: vis(18) }} />
      <div style={{ position: 'absolute', left: 340, top: 64, opacity: vis(18), ...mono(look, 15, p.faint) }}>thinking panel</div>
      {STEPS.map((step, i) => {
        const at = 26 + i * 18;
        const done = tween(f, at + 14, 8) * (1 - reset);
        return (
          <div key={step} style={{ position: 'absolute', left: 340, top: 104 + i * 48, width: 192, height: 36, borderRadius: 10, border: `1.5px solid ${done > 0.5 ? p.ink : p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', boxSizing: 'border-box', opacity: vis(at) }}>
            <span style={mono(look, 14, p.ink)}>{`${i + 1} ${step}`}</span>
            <span style={{ ...mono(look, 14, p.accent), opacity: done }}>✓</span>
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: 340, top: 260, height: 28, borderRadius: 8, padding: '0 10px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 14, p.onAccent), opacity: vis(70) }}>
        Sec 56(2)(x)
      </div>
      <div style={{ position: 'absolute', left: 340, top: 300, opacity: vis(74), ...mono(look, 13, p.muted) }}>Income Tax Act, 1961</div>
      <svg width={600} height={450} style={{ position: 'absolute', inset: 0 }}>
        <path d={`M 340 274 C 300 274, ${mix(330, 240, cite)} 324, ${mix(330, 196, cite)} 324`} fill="none" stroke={p.accent} strokeWidth={1.75} strokeDasharray="3 5" opacity={cite > 0 ? 1 : 0} />
      </svg>
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
