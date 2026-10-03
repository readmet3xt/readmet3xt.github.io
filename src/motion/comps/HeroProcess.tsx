import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, seeded, tween } from '../helpers';
import type { LookProps } from '../theme';

// Story 3, "People to product" (8 s). Research notes land, cluster into
// patterns, collapse into the steps of a journey, and the journey line folds up
// into the app that serves it.

export const PROCESS_FRAMES = 240;

const N = 21;
const KEY_NOTE = 10; // the note that holds the insight, in the middle cluster
const SLOTS = [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [1, 2]];

const layoutFor = (W: number, H: number) =>
  H > W
    ? { portrait: true, note: 34, sp: 40, clusters: [112, 300, 488], lineY: 440, stops: [64, 182, 300, 418, 536], phone: { x: 176, y: 180, w: 248, h: 540, r: 40 }, area: { x: 40, y: 190, w: 500, h: 470 }, captionX: 40, captionY: 56, captionSize: 40 }
    : { portrait: false, note: 46, sp: 52, clusters: [330, 640, 950], lineY: 392, stops: [200, 420, 640, 860, 1080], phone: { x: 516, y: 104, w: 248, h: 520, r: 40 }, area: { x: 150, y: 190, w: 960, h: 360 }, captionX: 96, captionY: 92, captionSize: 30 };

const CAPTIONS: [string, number, number | undefined][] = [
  ['Listen to people', 6, 54],
  ['Find the patterns', 62, 118],
  ['Shape the service', 126, 172],
  ['Then build it', 180, undefined],
];

const rand = seeded(7);
const SEEDS = Array.from({ length: N }, (_, i) => ({ rx: rand(), ry: rand(), rot: (rand() - 0.5) * 14, tone: i % 3, cluster: Math.floor(i / 7), slot: i % 7 }));

export const HeroProcess: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const L = layoutFor(W, H);
  const PHONE = L.phone;
  const NOTE = L.note;
  const ringHalf = L.sp * 1.5 + 22;

  const gather = tween(f, 58, 40, 0, 1, TRAVEL);
  const ring = tween(f, 96, 20);
  const collapse = tween(f, 122, 22);
  const line = tween(f, 140, 26);
  const fold = tween(f, 176, 36, 0, 1, TRAVEL);
  const rows = tween(f, 200, 24);
  const tones = p.mode === 'dark' ? [0.24, 0.38, 0.56] : [0.17, 0.27, 0.4];
  const span = L.stops[4] - L.stops[0];
  const rect = {
    x: mix(L.stops[0], PHONE.x, fold),
    y: mix(L.lineY - 1, PHONE.y, fold),
    w: mix(span, PHONE.w, fold),
    h: mix(2, PHONE.h, fold),
    r: mix(1, PHONE.r, fold),
  };

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text }}>
      {CAPTIONS.map(([text, at, out]) => (
        <div key={text} style={{ position: 'absolute', left: L.captionX, top: L.captionY, fontSize: L.captionSize, fontWeight: 500, letterSpacing: '-0.015em', ...fadeUp(f, at, { dur: 16, dist: 10, outAt: out }) }}>
          {text}
        </div>
      ))}

      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {L.clusters.map((cx) => (
          <rect key={cx} x={cx - ringHalf} y={L.lineY - ringHalf} width={ringHalf * 2} height={ringHalf * 2} rx={20} fill="none" stroke={p.line} strokeWidth={1.25} strokeDasharray={ringHalf * 8} strokeDashoffset={ringHalf * 8 * (1 - ring)} opacity={1 - collapse} />
        ))}
        {f >= 140 && (
          <rect
            x={fold > 0 ? rect.x : L.stops[0]}
            y={rect.y}
            width={fold > 0 ? rect.w : span * line}
            height={rect.h}
            rx={rect.r}
            fill={fold > 0.02 ? p.panel : p.line}
            stroke={fold > 0.02 ? p.line : 'none'}
            strokeWidth={1.5}
          />
        )}
      </svg>

      {SEEDS.map((n, i) => {
        const land = tween(f, 4 + i * 1.6, 14);
        const [col, row] = SLOTS[n.slot];
        const tx = L.clusters[n.cluster] + (col - 1) * L.sp - NOTE / 2;
        const ty = L.lineY + (row - 1) * L.sp - NOTE / 2;
        const x = mix(L.area.x + n.rx * (L.area.w - NOTE), tx, gather);
        const y = mix(L.area.y + n.ry * (L.area.h - NOTE), ty, gather);
        const fx = mix(x, L.clusters[n.cluster] - NOTE / 2, collapse);
        const fy = mix(y, L.lineY - NOTE / 2, collapse);
        const isKey = i === KEY_NOTE && gather > 0.5;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: fx,
              top: fy,
              width: NOTE,
              height: NOTE,
              borderRadius: 7,
              background: isKey ? p.accent : p.ink,
              opacity: (isKey ? 1 : tones[n.tone]) * land * (1 - collapse),
              transform: `rotate(${mix(n.rot, n.rot * 0.15, gather)}deg) scale(${(0.5 + 0.5 * land) * (1 - collapse * 0.7)})`,
            }}
          />
        );
      })}

      {L.stops.map((x, i) => {
        const fromCluster = i >= 1 && i <= 3;
        const appear = fromCluster ? tween(f, 134, 10) : tween(f, 150 + (i === 0 ? 0 : 6), 10);
        const startX = fromCluster ? L.clusters[i - 1] : x;
        const sx = mix(startX, x, tween(f, 140, 22, 0, 1, TRAVEL));
        const rowY = PHONE.y + 120 + i * 70;
        const cx = mix(sx, PHONE.x + 44, fold);
        const cy = mix(L.lineY, rowY, fold);
        const isKey = i === 2;
        return (
          <div key={x}>
            <div style={{ position: 'absolute', left: cx - 13, top: cy - 13, width: 26, height: 26, borderRadius: 13, background: isKey ? p.accent : p.bg, border: `2px solid ${isKey ? p.accent : p.ink}`, opacity: appear, transform: `scale(${0.6 + 0.4 * appear})` }} />
            <div style={{ position: 'absolute', left: PHONE.x + 70, top: rowY - 9, height: 8, width: (isKey ? 140 : 110 - i * 6) * rows, borderRadius: 4, background: isKey ? p.ink : p.muted, opacity: rows }} />
            <div style={{ position: 'absolute', left: PHONE.x + 70, top: rowY + 5, height: 6, width: 70 * rows, borderRadius: 3, background: p.line, opacity: rows }} />
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: PHONE.x + 24, top: PHONE.y + 40, ...fadeUp(f, 204, { dur: 16, dist: 8 }) }}>
        <div style={{ width: 120, height: 14, borderRadius: 4, background: p.ink }} />
        <div style={{ marginTop: 8, width: 80, height: 8, borderRadius: 4, background: p.faint }} />
      </div>
    </AbsoluteFill>
  );
};
