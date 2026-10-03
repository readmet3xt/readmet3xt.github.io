import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, tween } from '../helpers';
import type { LookProps } from '../theme';
import { insightCard } from './HeroResearch';

// Story 2, "Design and build" (12 s). It opens on story 1's insight card,
// which shrinks into the key touchpoint of a service blueprint. A person (the
// accent dot) walks the service, the moment that matters is singled out, and
// that touchpoint becomes a working app. Then a test round: one of three testers
// gets through, two get stuck on the same card; the card is fixed; in round two
// all three get through.
// Landscape 1280×720; portrait 600×800 for phones.

export const BLUEPRINT_FRAMES = 372;

const LANE_LABELS = ['customer actions', 'frontstage', 'backstage', 'support'];
const DIVIDER_LABELS = ['line of interaction', 'line of visibility'];
const DEPTH = [1, 2, 3, 2, 1]; // deepest lane each touchpoint reaches
const KEY = 2; // the moment that matters

const layoutFor = (W: number, H: number) =>
  H > W
    ? {
        portrait: true,
        captionX: 40, captionY: 56, captionSize: 40,
        labelX: 40, labelSize: 16,
        XL: 222, X1: 568,
        cols: [250, 324, 398, 472, 546],
        lanes: [260, 360, 460, 560],
        dividers: [310, 410],
        phone: { x: 176, y: 180, w: 248, h: 540, r: 40 },
      }
    : {
        portrait: false,
        captionX: 96, captionY: 92, captionSize: 30,
        labelX: 96, labelSize: 14,
        XL: 262, X1: 830,
        cols: [320, 430, 540, 650, 760],
        lanes: [250, 340, 430, 520],
        dividers: [295, 385],
        phone: { x: 942, y: 96, w: 248, h: 528, r: 40 },
      };

const CAPTIONS: [string, number, number | undefined][] = [
  ['Map the whole service', 12, 98],
  ['Find the moment that matters', 108, 150],
  ['Design it, then build it', 160, 236],
  ['Test it with people', 244, 296],
  ['Fix what they trip on', 304, 330],
  ['Test again until it works', 338, undefined],
];

// Test rounds: when each tester taps, and whether they get through.
const ROUND1: [number, boolean][] = [[256, true], [270, false], [284, false]];
const ROUND2: [number, boolean][] = [[334, true], [342, true], [350, true]];

export const HeroBlueprint: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const L = layoutFor(W, H);
  const PHONE = L.phone;
  const keyX = L.cols[KEY];

  const dim = tween(f, 112, 16);
  const morph = tween(f, 148, 36);
  // In portrait the app grows over the blueprint, so the blueprint steps back further.
  const backdrop = L.portrait ? 1 - morph * 0.85 : 1;
  const node = { x: keyX - 8, y: L.lanes[1] - 8, w: 16, h: 16, r: 4 };
  const ph = {
    x: mix(node.x, PHONE.x, morph),
    y: mix(node.y, PHONE.y, morph),
    w: mix(node.w, PHONE.w, morph),
    h: mix(node.h, PHONE.h, morph),
    r: mix(node.r, PHONE.r, morph),
  };

  const walk = tween(f, 58, 54, 0, 1, TRAVEL);
  const enter = tween(f, 206, 22, 0, 1, TRAVEL);
  const button = { x: PHONE.x + PHONE.w / 2, y: PHONE.y + PHONE.h - 66 };
  const dotX = f < 206 ? mix(L.XL - 10, keyX, walk) : mix(keyX, button.x, enter);
  const dotY = f < 206 ? L.lanes[0] : mix(L.lanes[0], button.y, enter);
  const tap = Math.sin(Math.PI * tween(f, 228, 8));
  const pulse = tween(f, 116, 26);
  const ui = (i: number) => fadeUp(f, 184 + i * 5, { dur: 16, dist: 10 });

  // The insight from story 1 shrinks into the key touchpoint.
  const card = insightCard(W, H);
  const settle = tween(f, 2, 22, 0, 1, TRAVEL);
  const seed = {
    x: mix(card.x, node.x, settle),
    y: mix(card.y, node.y, settle),
    w: mix(card.w, node.w, settle),
    h: mix(card.h, node.h, settle),
    r: mix(20, node.r, settle),
  };

  // Usability test: taps land on the screen, a counter sits under the phone.
  const testBack = L.portrait ? 1 : 1 - tween(f, 240, 16) * 0.55;
  const tripCard = { x: PHONE.x + PHONE.w / 2, y: PHONE.y + 132 + 76 }; // the card people trip on
  const fix = tween(f, 304, 16); // the card is redesigned
  const round2 = f >= 326;
  const attempts = round2 ? ROUND2 : ROUND1;
  const passed = attempts.filter(([at, ok]) => ok && f >= at + 6).length;
  const counter = { x: PHONE.x + PHONE.w / 2, y: PHONE.y + PHONE.h + 18 };
  const taps = [...ROUND1, ...ROUND2].map(([at, ok]) => ({ at, ok, t: tween(f, at - 4, 20, 0, 1, (x) => x) }));

  return (
    <AbsoluteFill style={{ background: p.bg, fontFamily: fonts.text, color: p.ink }}>
      {CAPTIONS.map(([text, at, out]) => (
        <div
          key={text}
          style={{ position: 'absolute', left: L.captionX, top: L.captionY, maxWidth: W - L.captionX * 2, fontSize: L.captionSize, lineHeight: 1.15, fontWeight: 500, letterSpacing: '-0.015em', ...fadeUp(f, at, { dur: 16, dist: 10, outAt: out }) }}
        >
          {text}
        </div>
      ))}

      <svg width={W} height={H} style={{ position: 'absolute', inset: 0, opacity: backdrop * testBack }}>
        {L.lanes.map((y, i) => (
          <line key={y} x1={L.XL} x2={mix(L.XL, L.X1, tween(f, 14 + i * 5, 24))} y1={y} y2={y} stroke={p.line} strokeWidth={1.25} />
        ))}
        {L.dividers.map((y) => (
          <line key={y} x1={L.XL} x2={L.X1} y1={y} y2={y} stroke={p.line} strokeWidth={1} strokeDasharray="4 6" opacity={tween(f, 28, 18)} />
        ))}
        {L.cols.map((x, c) => {
          const at = 34 + c * 10;
          const isKey = c === KEY;
          const fade = isKey ? 1 : 1 - dim * 0.5;
          const deepest = L.lanes[DEPTH[c]];
          const stroke = isKey && dim > 0 ? p.accent : p.ink;
          return (
            <g key={x} opacity={fade}>
              <line x1={x} x2={x} y1={L.lanes[0]} y2={mix(L.lanes[0], deepest, tween(f, at + 4, 12))} stroke={isKey && dim > 0 ? p.accent : p.line} strokeWidth={1.25} />
              <circle cx={x} cy={L.lanes[0]} r={8 * tween(f, at, 10)} fill={p.bg} stroke={stroke} strokeWidth={1.75} />
              {L.lanes.slice(1, DEPTH[c] + 1).map((y, k) => {
                const s = 12 * tween(f, at + 8 + k * 3, 8);
                const hide = isKey && k === 0 ? (f < 64 ? 0 : 1 - tween(f, 148, 4)) : 1; // this one arrives as the insight and becomes the phone
                return <rect key={y} x={x - s / 2} y={y - s / 2} width={s} height={s} rx={3} fill={p.bg} stroke={stroke} strokeWidth={1.5} opacity={hide} />;
              })}
            </g>
          );
        })}
        <circle cx={keyX} cy={L.lanes[1]} r={mix(10, 34, pulse)} fill="none" stroke={p.accent} strokeWidth={1.5} opacity={(1 - pulse) * (f > 116 ? 0.9 : 0)} />
      </svg>

      {LANE_LABELS.map((label, i) => (
        <div
          key={label}
          style={{
            position: 'absolute',
            left: L.labelX,
            top: L.lanes[i] - 11,
            fontFamily: fonts.mono,
            fontSize: L.labelSize,
            lineHeight: '20px',
            color: p.muted,
            ...fadeUp(f, 14 + i * 4, { dur: 14, dist: 6 }),
            opacity: tween(f, 14 + i * 4, 14) * backdrop,
          }}
        >
          {label}
        </div>
      ))}
      {!L.portrait &&
        DIVIDER_LABELS.map((label, i) => (
          <div key={label} style={{ position: 'absolute', left: L.labelX, top: L.dividers[i] - 9, fontFamily: fonts.mono, fontSize: 11.5, lineHeight: '18px', color: p.faint, opacity: tween(f, 34, 16) }}>
            {label}
          </div>
        ))}

      {f < 64 && (
        <div style={{ position: 'absolute', left: seed.x, top: seed.y, width: seed.w, height: seed.h, borderRadius: seed.r, background: settle < 0.9 ? p.panel : p.bg, border: `2px solid ${p.accent}`, overflow: 'hidden' }}>
          <div style={{ padding: '22px 26px', opacity: 1 - tween(f, 2, 10) }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 18, color: p.accent }}>insight</div>
            <div style={{ marginTop: 18, width: '78%', height: 12, borderRadius: 6, background: p.ink }} />
            <div style={{ marginTop: 12, width: '54%', height: 10, borderRadius: 5, background: p.muted }} />
          </div>
        </div>
      )}

      {f >= 148 && (
        <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
          <rect x={ph.x} y={ph.y} width={ph.w} height={ph.h} rx={ph.r} fill={p.panel} stroke={morph < 1 ? p.accent : p.line} strokeWidth={1.5} />
        </svg>
      )}

      <div style={{ position: 'absolute', left: PHONE.x + 22, top: PHONE.y + 26, width: PHONE.w - 44, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', ...ui(0) }}>
          <div style={{ width: 34, height: 6, borderRadius: 3, background: p.line }} />
          <div style={{ width: 22, height: 6, borderRadius: 3, background: p.line }} />
        </div>
        <div style={{ marginTop: 14, ...ui(1) }}>
          <div style={{ width: 132, height: 14, borderRadius: 4, background: p.ink }} />
          <div style={{ marginTop: 8, width: 92, height: 8, borderRadius: 4, background: p.faint }} />
        </div>
        {[0, 1, 2].map((i) => {
          const fixed = i === 1 ? fix : 0;
          return (
            <div key={i} style={{ height: 64, borderRadius: 14, background: p.bg, border: `${1 + fixed}px solid ${fixed > 0.5 ? p.accent : p.line}`, display: 'flex', alignItems: 'center', gap: 12, padding: '0 14px', ...ui(2 + i) }}>
              <div style={{ width: 26, height: 26, borderRadius: 13, background: fixed > 0.5 ? p.accent : p.line }} />
              <div>
                <div style={{ width: (96 - i * 14) + 40 * fixed, height: 8 + 2 * fixed, borderRadius: 5, background: fixed > 0.5 ? p.ink : p.muted }} />
                <div style={{ marginTop: 7, width: 60 + i * 8, height: 6, borderRadius: 3, background: p.line }} />
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          left: PHONE.x + 22,
          width: PHONE.w - 44,
          top: button.y - 22,
          height: 44,
          borderRadius: 22,
          background: p.accent,
          color: p.onAccent,
          fontSize: 16,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...ui(5),
          transform: `${ui(5).transform} scale(${1 - tap * 0.04})`,
        }}
      >
        Continue
      </div>

      {/* taps from testers: accent where they get through, grey where they get stuck */}
      {taps.map(({ at, ok, t }) => {
        const at0 = ok ? button : tripCard;
        if (t <= 0 || t >= 1) return null;
        const color = p.ink; // the fingertip shows on the red button and on cards alike
        const ring = ok ? p.accent : p.muted;
        return (
          <div key={at}>
            {/* the fingertip */}
            <div style={{ position: 'absolute', left: at0.x - 14, top: at0.y - 14, width: 28, height: 28, borderRadius: 14, background: color, opacity: 0.55 * (1 - tween(t, 0.45, 0.4)), transform: `scale(${1 - 0.25 * Math.sin(Math.PI * Math.min(1, t * 2))})` }} />
            {/* the ripple */}
            <div style={{ position: 'absolute', left: at0.x - 34, top: at0.y - 34, width: 68, height: 68, borderRadius: 34, border: `2px solid ${ring}`, opacity: 0.9 * (1 - t), transform: `scale(${0.35 + 0.65 * t})` }} />
          </div>
        );
      })}
      {/* where people got stuck */}
      <div style={{ position: 'absolute', left: PHONE.x + PHONE.w - 46, top: tripCard.y - 44, width: 28, height: 28, borderRadius: 14, background: p.bg, border: `1.5px solid ${p.muted}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, color: p.ink, opacity: tween(f, 272, 8) * (1 - tween(f, 300, 8)), transform: `scale(${0.7 + 0.3 * tween(f, 272, 8)})` }}>?</div>

      {/* the round and how many testers got through */}
      <div style={{ position: 'absolute', left: counter.x - 128, top: counter.y, width: 256, height: 40, borderRadius: 20, border: `1px solid ${p.line}`, background: p.panel, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', boxSizing: 'border-box', fontFamily: fonts.mono, fontSize: 15, color: p.muted, ...fadeUp(f, 246, { dur: 12, dist: 8 }) }}>
        <span style={{ color: p.ink }}>{round2 ? 'round 2' : 'round 1'}</span>
        <span style={{ display: 'flex', gap: 6 }}>
          {attempts.map(([at, ok], i) => {
            const done = f >= at + 6;
            return (
              <span key={i} style={{ width: 22, height: 22, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, border: `1.5px solid ${done ? (ok ? p.accent : p.muted) : p.line}`, background: done && ok ? p.accent : 'transparent', color: done && ok ? p.onAccent : p.muted }}>
                {done ? (ok ? '✓' : '?') : ''}
              </span>
            );
          })}
        </span>
        <span style={{ color: passed === 3 ? p.accent : p.ink, fontVariantNumeric: 'tabular-nums' }}>{passed}/3</span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: dotX - 7,
          top: dotY - 7,
          width: 14,
          height: 14,
          borderRadius: 7,
          background: f < 226 ? p.accent : p.onAccent,
          boxShadow: f < 206 ? `0 0 0 4px ${p.bg}` : f < 226 ? `0 0 0 3px ${p.panel}` : 'none',
          opacity: tween(f, 56, 8) * (1 - tween(f, 234, 6)),
        }}
      />
    </AbsoluteFill>
  );
};
