import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { fadeUp, mix, tween } from '../helpers';
import { PROJECT_COLORS, readableOn } from '../colors';
import type { LookProps } from '../theme';

// Story 2, "Moved the numbers" (8 s). KoinBasket: from a one-week MVP the user
// count climbs past 70,000, and a jagged line (transaction friction) straightens
// and shortens by 20%. Then the LNER App Clip: the checkout bar from before
// testing, the one after, 40% shorter. Facts only, from the case studies; the
// bars and the line are drawn to those ratios, with no invented times.
// Landscape 1280×720; portrait 600×800 for phones.

export const NUMBERS_FRAMES = 240;

/** A jagged line that straightens (s: 0→1) and shortens by `cut`. */
const frictionPath = (x: number, y: number, width: number, s: number, cut: number, amp: number) => {
  const len = width * (1 - cut * s);
  const a = amp * (1 - s);
  const pts: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    // a zigzag: alternating peaks and troughs
    const zig = i % 2 === 0 ? -1 : 1;
    pts.push(`${(x + t * len).toFixed(1)},${(y + (i === 0 || i === 48 ? 0 : zig * a)).toFixed(1)}`);
  }
  return { d: `M${pts.join(' L')}`, end: x + len };
};

export const HeroNumbers: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;
  const kb = readableOn(PROJECT_COLORS['/koinbasket'], p.bg, 3);
  const lner = readableOn(PROJECT_COLORS['/softwire'], p.bg, 3);
  const display = (size: number, color: string) => ({ fontFamily: fonts.display, fontWeight: fonts.displayWeight, letterSpacing: `${fonts.displayTracking}em`, fontSize: size, lineHeight: 1, color, fontVariantNumeric: 'tabular-nums' as const });
  const mono = (size: number) => ({ fontFamily: fonts.mono, fontSize: size, color: p.muted, lineHeight: 1.3 });
  const body = (size: number, color = p.muted) => ({ fontFamily: fonts.text, fontSize: size, color, lineHeight: 1.3 });
  const kicker = (text: string, color: string, at: number, x: number, y: number, size: number) => (
    <div style={{ position: 'absolute', left: x, top: y, display: 'flex', alignItems: 'center', gap: 10, ...mono(size), ...fadeUp(f, at, { dur: 14, dist: 8 }) }}>
      <span style={{ width: 10, height: 10, borderRadius: 5, background: color }} />
      {text}
    </div>
  );

  // KoinBasket
  const count = tween(f, 18, 62);
  const users = `${Math.round(70000 * count).toLocaleString('en-US')}${count >= 1 ? '+' : ''}`;
  const straighten = tween(f, 92, 28);
  // LNER
  const before = tween(f, 124, 26);
  const after = tween(f, 154, 22);
  const saved = tween(f, 174, 16);

  // Layout: side by side on wide screens, stacked on phones.
  const A = portrait
    ? { x: 40, w: 520, kick: 40, mvp: 82, num: 116, numSize: 88, users: 212, fLabel: 264, fLine: 316, cut: 352, cutSize: 44, cutCap: { x: 170, y: 362 } }
    : { x: 96, w: 480, kick: 96, mvp: 146, num: 186, numSize: 104, users: 300, fLabel: 380, fLine: 438, cut: 482, cutSize: 56, cutCap: { x: 96, y: 548 } };
  const B = portrait
    ? { x: 40, w: 520, kick: 446, cap: 486, l1: 530, b1: 558, l2: 598, b2: 626, num: 670, numSize: 88, notes: { x: 286, y: 680 } }
    : { x: 704, w: 480, kick: 96, cap: 146, l1: 206, b1: 238, l2: 290, b2: 322, num: 386, numSize: 104, notes: { x: 704, y: 506 } };
  const fz = portrait ? { kick: 20, label: 20, cap: 22, note: 21 } : { kick: 19, label: 19, cap: 24, note: 22 };
  const friction = frictionPath(A.x, A.fLine, A.w, straighten, 0.2, portrait ? 14 : 18);
  const barH = portrait ? 24 : 28;

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text }}>
      {/* KoinBasket */}
      {kicker('koinbasket · founding designer', kb, 0, A.x, A.kick, fz.kick)}
      <div style={{ position: 'absolute', left: A.x, top: A.mvp, ...body(fz.cap), ...fadeUp(f, 6, { dur: 14, dist: 8 }) }}>from a one-week MVP</div>
      <div style={{ position: 'absolute', left: A.x - 4, top: A.num, ...display(A.numSize, kb), opacity: tween(f, 14, 8) }}>{users}</div>
      <div style={{ position: 'absolute', left: A.x, top: A.users, ...body(fz.cap + 2), ...fadeUp(f, 24, { dur: 14, dist: 8 }) }}>users</div>

      <div style={{ position: 'absolute', left: A.x, top: A.fLabel, ...mono(fz.label), ...fadeUp(f, 84, { dur: 12, dist: 6 }) }}>transaction friction</div>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <g opacity={tween(f, 84, 10)}>
          <path d={friction.d} fill="none" stroke={kb} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
          <circle cx={friction.end} cy={A.fLine} r={6} fill={kb} />
          {/* the 20% that went: dashed, like the checkout time saved */}
          <line x1={friction.end + 12} x2={A.x + A.w} y1={A.fLine} y2={A.fLine} stroke={kb} strokeWidth={2} strokeDasharray="5 5" opacity={straighten * 0.8} />
        </g>
      </svg>
      <div style={{ position: 'absolute', left: A.x - 2, top: A.cut, ...display(A.cutSize, kb), ...fadeUp(f, 112, { dur: 14, dist: 8 }) }}>−20%</div>
      <div style={{ position: 'absolute', left: A.cutCap.x, top: A.cutCap.y, width: portrait ? 390 : A.w, ...body(fz.note), ...fadeUp(f, 118, { dur: 14, dist: 8 }) }}>simpler onboarding and payments</div>

      {/* between the two */}
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {portrait ? (
          <line x1={40} x2={mix(40, 560, tween(f, 112, 18))} y1={420} y2={420} stroke={p.line} strokeWidth={1} />
        ) : (
          <line x1={640} x2={640} y1={96} y2={mix(96, 600, tween(f, 112, 18))} stroke={p.line} strokeWidth={1} />
        )}
      </svg>

      {/* LNER App Clip */}
      {kicker('lner app clip · softwire', lner, 118, B.x, B.kick, fz.kick)}
      <div style={{ position: 'absolute', left: B.x, top: B.cap, ...body(fz.cap), ...fadeUp(f, 120, { dur: 14, dist: 8 }) }}>checkout time in testing</div>
      <div style={{ position: 'absolute', left: B.x, top: B.l1, ...mono(fz.label), ...fadeUp(f, 124, { dur: 12, dist: 6 }) }}>before</div>
      <div style={{ position: 'absolute', left: B.x, top: B.l2, ...mono(fz.label), ...fadeUp(f, 150, { dur: 12, dist: 6 }) }}>after</div>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <rect x={B.x} y={B.b1} width={B.w * before} height={barH} rx={6} fill={p.faint} opacity={0.55} />
        <rect x={B.x} y={B.b2} width={B.w * 0.6 * after} height={barH} rx={6} fill={lner} />
        {/* the 40% saved */}
        <g opacity={saved}>
          <rect x={B.x + B.w * 0.6 + 4} y={B.b2} width={B.w * 0.4 - 4} height={barH} rx={6} fill="none" stroke={lner} strokeWidth={1.5} strokeDasharray="5 5" />
        </g>
      </svg>
      <div style={{ position: 'absolute', left: B.x - 4, top: B.num, ...display(B.numSize, lner), ...fadeUp(f, 176, { dur: 14, dist: 10 }) }}>−40%</div>
      <div style={{ position: 'absolute', left: B.notes.x, top: B.notes.y, ...body(fz.note), ...fadeUp(f, 186, { dur: 14, dist: 8 }) }}>9 people tested</div>
      <div style={{ position: 'absolute', left: B.notes.x, top: B.notes.y + (portrait ? 32 : 34), ...body(fz.note), ...fadeUp(f, 196, { dur: 14, dist: 8 }) }}>passed National Rail review</div>
    </AbsoluteFill>
  );
};
