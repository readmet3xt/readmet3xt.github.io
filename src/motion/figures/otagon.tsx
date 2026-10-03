import type { FC } from 'react';
import { assetUrl, useCurrentFrame } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Phone, Window, figure, mono } from './kit';

// Otagon, in three figures: how the three parts work together, why the app
// reads tags instead of prose, and how long chats stopped breaking.

const IMG = '/images/casestudies/otagon';

/* F1 on the PC → the relay → the phone; Gemini reads where you are. */
const ThreeParts: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const win = { x: 24, y: 64, w: 280, h: 186 };
  const relay = { x: 372, y: 157 };
  const gem = { x: 372, y: 292 };
  const phone = { x: 470, y: 56, w: 146, h: 270 };
  const press = Math.sin(Math.PI * tween(f, 26, 14));
  const lit = span(f, 26, 64, 6);
  const toRelay = tween(f, 74, 24, 0, 1, TRAVEL);
  const toPhone = tween(f, 100, 24, 0, 1, TRAVEL);
  const from = { x: win.x + win.w - 40, y: win.y + 80 };
  const to = { x: phone.x + 30, y: phone.y + 70 };
  const sx = toRelay < 1 ? mix(from.x, relay.x, toRelay) : mix(relay.x, to.x, toPhone);
  const sy = toRelay < 1 ? mix(from.y, relay.y, toRelay) - Math.sin(Math.PI * toRelay) * 24 : mix(relay.y, to.y, toPhone) - Math.sin(Math.PI * toPhone) * 24;
  const shot = tween(f, 44, 10) * (1 - tween(f, 122, 6));
  const relayHit = span(f, 94, 110, 6);
  const gemOn = tween(f, 140, 12);
  const answer = tween(f, 152, 14);
  const read = tween(f, 170, 12);
  const inner = phone.w - 14;
  const k = inner / 545; // the real screen's scale inside the phone

  return (
    <Frame {...look}>
      <div style={{ position: 'absolute', left: win.x, top: win.y - 34, ...mono(look, 20, p.muted) }}>PC connector</div>
      <Window {...look} {...win} src={`${IMG}/8-pc-connector.webp`} position="left top" />
      <div style={{ position: 'absolute', left: win.x, top: 276 + press * 6, width: 64, height: 64, borderRadius: 14, background: p.bg, border: `1.5px solid ${lit > 0.05 ? p.accent : p.line}`, boxShadow: `0 ${8 - press * 6}px 0 ${p.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 24, p.ink) }}>
        F1
      </div>

      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={win.x + win.w} y1={relay.y} x2={relay.x - 30} y2={relay.y} stroke={p.line} strokeWidth={1.5} />
        <line x1={relay.x + 30} y1={relay.y} x2={phone.x} y2={relay.y} stroke={p.line} strokeWidth={1.5} />
        <line x1={relay.x} y1={relay.y + 30} x2={gem.x} y2={gem.y - 30} stroke={p.accent} strokeWidth={1.5} strokeDasharray="3 6" opacity={gemOn} />
        <line x1={gem.x + 30} y1={gem.y} x2={phone.x} y2={gem.y - 20} stroke={p.accent} strokeWidth={1.5} strokeDasharray="3 6" opacity={gemOn} />
      </svg>

      <div style={{ position: 'absolute', left: relay.x - 60, width: 120, top: relay.y - 70, textAlign: 'center', ...mono(look, 20, p.muted) }}>relay</div>
      <div style={{ position: 'absolute', left: relay.x - 30, top: relay.y - 30, width: 60, height: 60, borderRadius: 30, background: p.bg, border: `1.5px solid ${relayHit > 0.3 ? p.accent : p.line}`, transform: `scale(${1 + relayHit * 0.08})` }} />

      <div style={{ position: 'absolute', left: gem.x - 30, top: gem.y - 30, width: 60, height: 60, borderRadius: 30, background: p.bg, border: `1.5px solid ${p.accent}`, opacity: gemOn, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={26} height={26} viewBox="-13 -13 26 26">
          <path d="M0 -12 C 1.5 -3, 3 -1.5, 12 0 C 3 1.5, 1.5 3, 0 12 C -1.5 3, -3 1.5, -12 0 C -3 -1.5, -1.5 -3, 0 -12 Z" fill={p.accent} />
        </svg>
      </div>
      <div style={{ position: 'absolute', left: gem.x - 132, width: 92, top: gem.y - 13, textAlign: 'right', opacity: gemOn, ...mono(look, 20, p.muted) }}>Gemini</div>

      <div style={{ position: 'absolute', left: phone.x, top: phone.y - 34, ...mono(look, 20, p.muted) }}>phone app</div>
      <Phone {...look} {...phone} src={`${IMG}/7-connected-to-pc.webp`}>
        <img src={assetUrl(`${IMG}/11-ai-response.webp`)} alt="" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: answer }} />
        <div style={{ position: 'absolute', left: 4 * k * 2, top: 86 * k, width: 470 * k, height: 76 * k, borderRadius: 6, border: `2px solid ${p.accent}`, opacity: read }} />
      </Phone>

      {/* the screenshot, on its way */}
      <div style={{ position: 'absolute', left: sx - 22, top: sy - 15, width: 44, height: 30, borderRadius: 6, border: `2px solid ${p.accent}`, background: p.panel, opacity: shot }} />

      <div style={{ position: 'absolute', right: 640 - (phone.x + phone.w), top: phone.y + phone.h + 14, height: 34, borderRadius: 17, padding: '0 14px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: read, transform: `translateY(${(1 - read) * 8}px)` }}>
        Elden Ring · 30%
      </div>

      <Beats {...look} beats={['press F1 on the PC', 'relayed to your phone', 'Gemini reads where you are']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* A free-form answer → the OTAGON tags → the app fills in from the tags. */
const TAGS: [string, string | null][] = [
  ['game', 'Elden Ring'],
  ['location', 'Raya Lucarian Academy'],
  ['progress', '30%'],
  ['spoiler risk', null],
  ['confidence', null],
];

const Tags: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const card = { x: 32, y: 36, w: 248, h: 330 };
  const panel = { x: 304, y: 36, w: 304, h: 330 };
  const rowY = (i: number) => panel.y + 52 + i * 54;
  const ui = tween(f, 142, 18, 0, 1, TRAVEL);
  const fill = tween(f, 166, 26);
  // words in the answer that become tags: [row, line, x]
  const words: [number, number, number][] = [[1, 1, 0], [0, 3, 46]];

  return (
    <Frame {...look}>
      {/* the answer, as prose */}
      <div style={{ position: 'absolute', left: card.x, top: card.y, width: card.w, height: card.h, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}`, opacity: 1 - ui }}>
        <div style={{ margin: '20px 0 0 20px', ...mono(look, 20, p.muted) }}>answer</div>
        {[190, 150, 200, 120, 196, 170, 140].map((w, i) => (
          <div key={i} style={{ position: 'absolute', left: 20, top: 70 + i * 34, width: w * tween(f, 4 + i * 4, 10, 0, 1, (x) => x), height: 8, borderRadius: 4, background: p.muted, opacity: 0.55 }} />
        ))}
        {words.map(([row, line, x]) => {
          const on = tween(f, 30 + row * 10, 10);
          return <div key={row} style={{ position: 'absolute', left: 16 + x, top: 62 + line * 34, width: row === 1 ? 172 : 104, height: 24, borderRadius: 6, border: `2px solid ${p.accent}`, opacity: on }} />;
        })}
      </div>

      {/* the same moment as the app sees it: a game tab with progress */}
      <div style={{ position: 'absolute', left: card.x, top: card.y, width: card.w, height: card.h, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}`, opacity: ui, transform: `translateY(${(1 - ui) * 14}px)` }}>
        <div style={{ margin: '24px 20px 0', ...mono(look, 22, p.ink), letterSpacing: '0.06em' }}>ELDEN RING</div>
        <div style={{ margin: '16px 20px 0', height: 10, borderRadius: 5, background: p.line, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${30 * fill}%`, borderRadius: 5, background: p.accent }} />
        </div>
        <div style={{ margin: '10px 20px 0', textAlign: 'right', ...mono(look, 20, p.ink), opacity: fill }}>30%</div>
        <div style={{ margin: '26px 20px 0', ...mono(look, 20, p.muted), opacity: tween(f, 180, 12) }}>Raya Lucarian Academy</div>
      </div>

      {/* the tags */}
      <div style={{ position: 'absolute', left: panel.x, top: panel.y, width: panel.w, height: panel.h, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}`, opacity: tween(f, 60, 12) }} />
      <div style={{ position: 'absolute', left: panel.x + 20, top: panel.y + 18, opacity: tween(f, 60, 12), ...mono(look, 20, p.muted) }}>OTAGON tags</div>
      {TAGS.map(([name, value], i) => {
        const at = 70 + i * 9;
        const used = i < 3 && ui > 0.5;
        return (
          <div key={name} style={{ position: 'absolute', left: panel.x + 14, top: rowY(i) + 8, width: panel.w - 34, paddingLeft: 8, borderLeft: `3px solid ${used ? p.accent : 'transparent'}`, opacity: tween(f, at, 10) }}>
            <div style={mono(look, 20, p.muted)}>{name}</div>
            {value ? (
              <div style={{ ...mono(look, 20, p.ink), whiteSpace: 'nowrap', marginTop: 2 }}>{value}</div>
            ) : (
              <div style={{ marginTop: 10, width: 110, height: 8, borderRadius: 4, background: p.line }} />
            )}
          </div>
        );
      })}

      <Beats {...look} beats={['a free-form answer', 'tags pulled out of it', 'the app reads the tags']} starts={[0, 60, 140]} />
    </Frame>
  );
};

/* Long chats: older history condensed to 300 words, the last 8 kept as they are. */
const Summariser: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const col = { x: 32, w: 260 };
  const limitY = 92; // the model's context limit
  const bottom = 370;
  const H = 26;
  const GAP = 6;
  // messages arrive one by one; beat 1 overflows, beat 3 keeps adding
  const arrivals = Array.from({ length: 22 }, (_, i) => (i < 14 ? 4 + i * 4.5 : 150 + (i - 14) * 6));
  const count = arrivals.filter((a) => f >= a).length;
  const fold = tween(f, 76, 22, 0, 1, TRAVEL); // older messages fold into the summary
  const summaryOn = tween(f, 84, 14);
  // after the fold, only the last 8 stay below the summary
  const kept = fold > 0.5 ? Math.min(8, count) : count;
  const chart = { x: 330, y: 70, w: 278, h: 290 };
  // cost climbs with the chat, then stays flat once summarised
  const costAt = (t: number) => (t < 80 ? (t / 80) * 0.7 : 0.7 + Math.min(0.06, (t - 80) / 1400));
  const points = Array.from({ length: 41 }, (_, i) => (i / 40) * Math.min(f, 209));
  const path = points.map((t, i) => `${i ? 'L' : 'M'} ${chart.x + (t / 209) * chart.w} ${chart.y + chart.h - costAt(t) * chart.h}`).join(' ');

  return (
    <Frame {...look}>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={col.x - 8} x2={col.x + col.w + 8} y1={limitY} y2={limitY} stroke={p.accent} strokeWidth={1.5} strokeDasharray="4 6" opacity={1 - summaryOn * 0.6} />
        <line x1={chart.x} x2={chart.x} y1={chart.y} y2={chart.y + chart.h} stroke={p.line} strokeWidth={1.5} />
        <line x1={chart.x} x2={chart.x + chart.w} y1={chart.y + chart.h} y2={chart.y + chart.h} stroke={p.line} strokeWidth={1.5} />
        <path d={path} fill="none" stroke={p.accent} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ position: 'absolute', left: chart.x, top: chart.y - 36, ...mono(look, 20, p.muted) }}>cost</div>
      <div style={{ position: 'absolute', left: chart.x + chart.w - 160, width: 160, textAlign: 'right', top: chart.y + chart.h + 8, ...mono(look, 20, p.muted) }}>session →</div>

      {/* the chat, newest at the bottom */}
      {Array.from({ length: kept }, (_, k) => {
        const i = count - kept + k; // message index
        const fromBottom = kept - 1 - k;
        const y = bottom - H - fromBottom * (H + GAP);
        const mine = i % 2 === 0;
        const w = [150, 196, 120, 176, 140, 206, 132][i % 7];
        const appear = tween(f, arrivals[i], 6);
        const over = y < limitY + 4 && fold < 0.5;
        return (
          <div key={i} style={{ position: 'absolute', left: mine ? col.x + col.w - w : col.x, top: y, width: w, height: H, borderRadius: 9, background: mine ? p.line : p.bg, border: `1.5px solid ${over ? p.accent : p.line}`, opacity: appear * (over ? 0.6 : 1) }} />
        );
      })}

      <div style={{ position: 'absolute', left: col.x, top: limitY - 38, padding: '2px 8px 2px 0', background: p.panel, ...mono(look, 20, p.ink), opacity: 1 - summaryOn }}>context limit</div>

      {/* the summary that replaces older history */}
      <div style={{ position: 'absolute', left: col.x, top: limitY + 10, width: col.w, height: 40, borderRadius: 10, background: p.bg, border: `1.5px solid ${p.accent}`, display: 'flex', alignItems: 'center', padding: '0 14px', boxSizing: 'border-box', opacity: summaryOn, transform: `scaleY(${mix(0.6, 1, summaryOn)})` }}>
        <span style={mono(look, 20, p.ink)}>summary · 300 words</span>
      </div>
      <div style={{ position: 'absolute', left: col.x, top: bottom + 8, ...mono(look, 20, p.muted), opacity: tween(f, 150, 12) }}>last 8 kept</div>

      <Beats {...look} beats={['long chats hit the limit', 'older history → 300 words', 'last 8 kept, cost stays flat']} starts={[0, 70, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  threeParts: figure(ThreeParts, 210, 'Pressing F1 on the PC connector sends a screenshot through the relay to the phone app; Gemini reads it and recognises Elden Ring at 30% progress.'),
  tags: figure(Tags, 210, 'A free-form answer; the OTAGON tags pulled out of it (game Elden Ring, location Raya Lucarian Academy, progress 30%, spoiler risk, confidence); the app fills its game tab and progress bar from the tags.'),
  summariser: figure(Summariser, 210, 'A long chat runs past the context limit and cost climbs; older history is condensed into a 300-word summary, the last 8 messages are kept, and cost stays flat.'),
};
