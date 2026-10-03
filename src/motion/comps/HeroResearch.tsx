import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, seeded, tween } from '../helpers';
import type { LookProps } from '../theme';

// Story 1, "Understand people" (7 s). People talk; what they say becomes
// notes; the notes cluster into patterns; one pattern becomes the insight.
// The insight card ends where story 2 ("Design and build") picks it up.
// Landscape 1280×720; portrait 600×800 for phones.

export const RESEARCH_FRAMES = 210;

const N = 20; // four notes from each of five people
const KEY_NOTE = 10; // the note that becomes the insight (middle cluster)
const YOU = 2; // the person followed through the stories
const SLOTS = [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [1, 2]];

export const insightCard = (W: number, H: number) =>
  H > W ? { x: 300 - 230, y: 400 - 80, w: 460, h: 160 } : { x: 640 - 210, y: 360 - 75, w: 420, h: 150 };

const layoutFor = (W: number, H: number) =>
  H > W
    ? { note: 32, sp: 38, clusters: [112, 300, 488], lineY: 380, people: [90, 195, 300, 405, 510], peopleY: 700, area: { x: 40, y: 190, w: 500, h: 380 }, captionX: 40, captionY: 56, captionSize: 40 }
    : { note: 44, sp: 50, clusters: [330, 640, 950], lineY: 330, people: [256, 448, 640, 832, 1024], peopleY: 600, area: { x: 150, y: 170, w: 980, h: 300 }, captionX: 96, captionY: 92, captionSize: 30 };

const CAPTIONS: [string, number, number | undefined][] = [
  ['Listen to people', 6, 56],
  ['Find the patterns', 64, 116],
  ['One insight that matters', 124, undefined],
];

const rand = seeded(11);
const SEEDS = Array.from({ length: N }, (_, i) => ({ rx: rand(), ry: rand(), rot: (rand() - 0.5) * 14, tone: i % 3, person: Math.floor(i / 4), cluster: Math.min(2, Math.floor(i / 7)), slot: i % 7 }));

export const HeroResearch: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const L = layoutFor(W, H);
  const NOTE = L.note;
  const ringHalf = L.sp * 1.5 + 22;
  const card = insightCard(W, H);

  const gather = tween(f, 60, 36, 0, 1, TRAVEL);
  const ring = tween(f, 92, 18);
  const focus = tween(f, 122, 26, 0, 1, TRAVEL); // middle cluster becomes the insight
  const crowdFade = 1 - tween(f, 124, 30) * 0.65;
  const tones = p.mode === 'dark' ? [0.24, 0.38, 0.56] : [0.17, 0.27, 0.4];
  const keyCenter = { x: L.clusters[1], y: L.lineY };

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text }}>
      {CAPTIONS.map(([text, at, out]) => (
        <div key={text} style={{ position: 'absolute', left: L.captionX, top: L.captionY, maxWidth: W - L.captionX * 2, fontSize: L.captionSize, lineHeight: 1.15, fontWeight: 500, letterSpacing: '-0.015em', ...fadeUp(f, at, { dur: 16, dist: 10, outAt: out }) }}>
          {text}
        </div>
      ))}

      {/* the people, each with a speech bubble while they talk */}
      {L.people.map((x, k) => {
        const talk = tween(f, 6 + k * 4, 10) * (1 - tween(f, 52 + k * 2, 10));
        const you = k === YOU;
        return (
          <div key={x} style={{ opacity: crowdFade }}>
            <div style={{ position: 'absolute', left: x - 24, top: L.peopleY - 76, width: 48, height: 30, borderRadius: 12, border: `1.5px solid ${p.muted}`, opacity: talk, transform: `translateY(${(1 - talk) * 8}px)` }}>
              <div style={{ position: 'absolute', left: 10, top: 12, width: 28, height: 4, borderRadius: 2, background: p.muted }} />
            </div>
            <div style={{ position: 'absolute', left: x - 13, top: L.peopleY - 34, width: 26, height: 26, borderRadius: 13, background: you ? p.accent : p.bg, border: `2px solid ${you ? p.accent : p.ink}`, ...fadeUp(f, k * 3, { dur: 12, dist: 8 }) }} />
            <div style={{ position: 'absolute', left: x - 24, top: L.peopleY - 4, width: 48, height: 22, borderRadius: '24px 24px 6px 6px', border: `2px solid ${you ? p.accent : p.ink}`, borderBottom: 'none', ...fadeUp(f, k * 3, { dur: 12, dist: 8 }) }} />
          </div>
        );
      })}

      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {L.clusters.map((cx) => (
          <rect key={cx} x={cx - ringHalf} y={L.lineY - ringHalf} width={ringHalf * 2} height={ringHalf * 2} rx={20} fill="none" stroke={p.line} strokeWidth={1.25} strokeDasharray={ringHalf * 8} strokeDashoffset={ringHalf * 8 * (1 - ring)} opacity={1 - focus} />
        ))}
      </svg>

      {/* notes: out of people's words, into patterns, into one insight */}
      {SEEDS.map((n, i) => {
        const startX = L.people[n.person];
        const startY = L.peopleY - 60;
        const emit = tween(f, 10 + i * 2.2, 24, 0, 1, TRAVEL);
        const sx = L.area.x + n.rx * (L.area.w - NOTE);
        const sy = L.area.y + n.ry * (L.area.h - NOTE);
        const [col, row] = SLOTS[n.slot];
        const tx = L.clusters[n.cluster] + (col - 1) * L.sp - NOTE / 2;
        const ty = L.lineY + (row - 1) * L.sp - NOTE / 2;
        let x = mix(mix(startX - NOTE / 2, sx, emit), tx, gather);
        let y = mix(mix(startY - NOTE / 2, sy, emit), ty, gather);
        const isKey = i === KEY_NOTE;
        const inMiddle = n.cluster === 1;
        if (inMiddle && !isKey) {
          x = mix(x, keyCenter.x - NOTE / 2, focus);
          y = mix(y, keyCenter.y - NOTE / 2, focus);
        }
        const fade = isKey ? 1 - tween(f, 128, 8) : inMiddle ? 1 - focus : 1 - focus * 0.8;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: NOTE,
              height: NOTE,
              borderRadius: 7,
              background: isKey && gather > 0.5 ? p.accent : p.ink,
              opacity: (isKey && gather > 0.5 ? 1 : tones[n.tone]) * tween(f, 10 + i * 2.2, 6) * fade,
              transform: `rotate(${mix(n.rot, n.rot * 0.15, gather)}deg) scale(${0.5 + 0.5 * emit})`,
            }}
          />
        );
      })}

      {/* the insight card grows out of the key note */}
      {(() => {
        const g = tween(f, 128, 30, 0, 1, TRAVEL);
        const from = { x: keyCenter.x - NOTE / 2 + L.sp * 0, y: keyCenter.y - NOTE / 2, w: NOTE, h: NOTE };
        const box = { x: mix(from.x, card.x, g), y: mix(from.y, card.y, g), w: mix(from.w, card.w, g), h: mix(from.h, card.h, g) };
        return (
          <div style={{ position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, borderRadius: mix(7, 20, g), background: p.panel, border: `2px solid ${p.accent}`, opacity: tween(f, 126, 6), overflow: 'hidden' }}>
            <div style={{ padding: '22px 26px', opacity: tween(f, 150, 14) }}>
              <div style={{ fontFamily: fonts.mono, fontSize: 18, color: p.accent }}>insight</div>
              <div style={{ marginTop: 18, width: '78%', height: 12, borderRadius: 6, background: p.ink }} />
              <div style={{ marginTop: 12, width: '54%', height: 10, borderRadius: 5, background: p.muted }} />
            </div>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
