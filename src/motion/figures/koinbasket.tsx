import type { FC } from 'react';
import { assetUrl, useCurrentFrame } from '../core';
import { TRAVEL, mix, span, tween } from '../helpers';
import type { LookProps } from '../theme';
import { Beats, Frame, Window, figure, mono, sans } from './kit';

// KoinBasket, in three figures: the non-custodial model, the rebrand, and
// BitBuddy's two sides.

const IMG = '/images/casestudies/koinbasket';

/** A person: head and shoulders. */
const Person: FC<LookProps & { x: number; y: number; s?: number; lit?: boolean; opacity?: number }> = ({ palette: p, x, y, s = 1, lit = false, opacity = 1 }) => (
  <div style={{ position: 'absolute', left: x - 24 * s, top: y - 30 * s, width: 48 * s, height: 60 * s, opacity }}>
    <div style={{ position: 'absolute', left: 12 * s, top: 0, width: 24 * s, height: 24 * s, borderRadius: 12 * s, background: lit ? p.accent : p.bg, border: `2px solid ${lit ? p.accent : p.ink}` }} />
    <div style={{ position: 'absolute', left: 0, top: 30 * s, width: 48 * s, height: 28 * s, borderRadius: `${24 * s}px ${24 * s}px ${6 * s}px ${6 * s}px`, border: `2px solid ${lit ? p.accent : p.ink}`, borderBottom: 'none' }} />
  </div>
);

/* Connect your own exchange → orders go to your exchange → your funds never leave it. */
const Custody: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const you = { x: 72, y: 228 };
  const kb = { x: 166, y: 150, w: 224, h: 150 };
  const ex = { x: 430, y: 84, w: 180, h: 290 };
  const own = tween(f, 8, 20, 0, 1, TRAVEL);
  const connect = tween(f, 30, 18, 0, 1, TRAVEL);
  const basket = tween(f, 76, 12);
  const order = tween(f, 96, 26, 0, 1, TRAVEL);
  const split = tween(f, 124, 16, 0, 1, TRAVEL);
  const stays = tween(f, 146, 14);
  const ox = mix(kb.x + kb.w - 70, ex.x + 40, order);
  const coins = [0, 1, 2, 3, 4];

  return (
    <Frame {...look}>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        {/* you own the exchange account */}
        <path d={`M ${you.x} ${you.y - 34} C ${you.x} 40, ${ex.x - 120} 40, ${mix(you.x, ex.x, own)} ${mix(you.y - 34, 110, own)}`} fill="none" stroke={p.ink} strokeWidth={1.75} opacity={own > 0 ? 1 : 0} />
        {/* you use KoinBasket */}
        <line x1={you.x + 28} y1={you.y} x2={kb.x} y2={you.y} stroke={p.ink} strokeWidth={1.75} />
        {/* KoinBasket is connected to it */}
        <line x1={kb.x + kb.w} y1={kb.y + 50} x2={mix(kb.x + kb.w, ex.x, connect)} y2={kb.y + 50} stroke={p.accent} strokeWidth={1.75} strokeDasharray="4 6" />
        {/* funds don't travel back */}
        <line x1={ex.x} y1={kb.y + 110} x2={kb.x + kb.w} y2={kb.y + 110} stroke={p.muted} strokeWidth={1.5} strokeDasharray="2 6" opacity={stays} />
      </svg>
      <div style={{ position: 'absolute', left: 168, width: 220, top: 84, textAlign: 'center', ...mono(look, 20, p.muted), opacity: own }}>your account</div>
      <div style={{ position: 'absolute', left: kb.x + kb.w + 4, width: ex.x - kb.x - kb.w - 8, top: kb.y + 104, display: 'flex', justifyContent: 'center', opacity: stays }}>
        <span style={{ width: 26, height: 26, borderRadius: 13, background: p.panel, border: `1.5px solid ${p.muted}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono(look, 20, p.ink) }}>×</span>
      </div>

      <Person {...look} x={you.x} y={you.y} />
      <div style={{ position: 'absolute', left: you.x - 40, width: 80, top: you.y + 40, textAlign: 'center', ...mono(look, 20, p.muted) }}>you</div>

      {/* KoinBasket */}
      <div style={{ position: 'absolute', left: kb.x, top: kb.y, width: kb.w, height: kb.h, borderRadius: 16, background: p.bg, border: `1.5px solid ${p.line}` }}>
        <div style={{ margin: '16px 0 0 18px', ...sans(look, 22, p.ink, 600) }}>KoinBasket</div>
        <div style={{ margin: '14px 0 0 18px', display: 'inline-flex', height: 36, alignItems: 'center', padding: '0 14px', borderRadius: 18, background: p.accent, ...sans(look, 20, p.onAccent, 600), opacity: basket, transform: `scale(${1 - Math.sin(Math.PI * tween(f, 90, 10)) * 0.06})` }}>G.O.A.T. Basket</div>
        <div style={{ position: 'absolute', left: 18, bottom: 14, ...sans(look, 20, p.muted, 400), opacity: stays }}>holds no funds</div>
      </div>

      {/* the person's own exchange */}
      <div style={{ position: 'absolute', left: ex.x, top: ex.y, width: ex.w, height: ex.h, borderRadius: 16, background: p.bg, border: `1.5px solid ${stays > 0.5 ? p.accent : p.line}` }}>
        <div style={{ margin: '16px 0 0 18px', ...sans(look, 22, p.ink, 600) }}>your exchange</div>
        <div style={{ margin: '4px 0 0 18px', ...sans(look, 20, p.muted, 400), lineHeight: 1.25 }}>Binance or<br />Coinbase</div>
        <div style={{ position: 'absolute', left: 18, bottom: 16, ...mono(look, 20, p.ink) }}>your funds</div>
        {coins.map((i) => {
          const pile = { x: 62 + (i % 2) * 8, y: 176 - i * 10 };
          const spread = { x: 22 + (i % 3) * 50, y: 150 + Math.floor(i / 3) * 52 };
          return (
            <div key={i} style={{ position: 'absolute', left: mix(pile.x, spread.x, split), top: mix(pile.y, spread.y, split), width: 40, height: 40, borderRadius: 20, background: p.panel, border: `2px solid ${split > 0.5 ? p.accent : p.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, border: `1.5px solid ${p.muted}` }} />
            </div>
          );
        })}
      </div>

      {/* the order, on its way */}
      {order > 0 && order < 1 && (
        <div style={{ position: 'absolute', left: ox, top: kb.y + 34, height: 32, borderRadius: 16, padding: '0 12px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent) }}>order</div>
      )}

      <Beats {...look} beats={['connect your own exchange', 'orders go to your exchange', 'your funds never leave it']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* The dark MVP → the same parts redrawn → lighter and green, made to read as trustworthy. */
const Rebrand: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const win = { x: 40, y: 24, w: 560, h: 372 };
  const wipe = tween(f, 72, 40, 0, 1, TRAVEL);
  const edge = win.w * (1 - wipe);
  const trust = tween(f, 150, 14);
  const k = win.w / 960;
  const img = (src: string) => (
    <img src={assetUrl(src)} alt="" decoding="async" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: 'auto' }} />
  );

  return (
    <Frame {...look}>
      <Window {...look} {...win}>
        {img(`${IMG}/2-home-page-960w.webp`)}
        <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 0 0 ${edge}px)` }}>{img(`${IMG}/16-new-homescreen-960w.webp`)}</div>
        {wipe > 0 && wipe < 1 && <div style={{ position: 'absolute', left: edge - 1, top: 0, bottom: 0, width: 3, background: p.accent }} />}
        <div style={{ position: 'absolute', left: 662 * k - 4, top: 327 * k - 4, width: 178 * k + 8, height: 310 * k + 8, borderRadius: 12, border: `3px solid ${p.accent}`, opacity: trust }} />
      </Window>
      <div style={{ position: 'absolute', left: win.x + 14, top: win.y + 36, height: 32, borderRadius: 16, padding: '0 12px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.line}`, ...mono(look, 20, p.ink), opacity: 1 - wipe }}>MVP</div>
      <div style={{ position: 'absolute', right: 640 - win.x - win.w + 14, top: win.y + 36, height: 32, borderRadius: 16, padding: '0 12px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.line}`, ...mono(look, 20, p.ink), opacity: wipe }}>rebrand</div>

      <Beats {...look} beats={['the MVP: dark, bright accents', 'the same parts, redrawn', 'made to read as trustworthy']} starts={[0, 70, 140]} />
    </Frame>
  );
};

/* A Bitpal builds a basket → trades live on video → users buy from the same screen. */
const BitBuddy: FC<LookProps> = (look) => {
  const { palette: p } = look;
  const f = useCurrentFrame();
  const win = { x: 136, y: 52, w: 368, h: 262 };
  const live = tween(f, 76, 14);
  const buyers = tween(f, 140, 12);
  const tap = Math.sin(Math.PI * tween(f, 156, 12));
  const users = [{ x: 572, y: 92 }, { x: 572, y: 184 }, { x: 572, y: 276 }];
  const flow = tween(f, 162, 24, 0, 1, TRAVEL);

  return (
    <Frame {...look}>
      <Person {...look} x={66} y={170} lit={f >= 8} />
      <div style={{ position: 'absolute', left: 16, width: 100, top: 214, textAlign: 'center', ...mono(look, 20, p.muted) }}>Bitpal</div>
      <svg width={640} height={480} style={{ position: 'absolute', inset: 0 }}>
        <line x1={96} y1={170} x2={win.x} y2={170} stroke={p.accent} strokeWidth={1.75} />
        {users.map((u) => (
          <line key={u.y} x1={win.x + win.w} y1={u.y} x2={u.x - 30} y2={u.y} stroke={p.accent} strokeWidth={1.75} opacity={buyers} strokeDasharray="4 6" />
        ))}
      </svg>

      <Window {...look} {...win}>
        <img src={assetUrl(`${IMG}/13-bitbuddy-create-a-basket-influencer-960w.webp`)} alt="" decoding="async" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: 'auto' }} />
        <img src={assetUrl(`${IMG}/17-new-product-live-trading-960w.webp`)} alt="" decoding="async" style={{ position: 'absolute', left: 0, top: 0, width: '200%', height: 'auto', opacity: live }} />
      </Window>
      <div style={{ position: 'absolute', left: win.x + 14, top: win.y + 36, height: 32, borderRadius: 16, padding: '0 12px', display: 'flex', alignItems: 'center', background: p.bg, border: `1.5px solid ${p.line}`, ...mono(look, 20, p.ink), opacity: 1 - live }}>builds a basket</div>
      <div style={{ position: 'absolute', left: win.x + 14, top: win.y + 36, height: 32, borderRadius: 16, padding: '0 12px', display: 'flex', alignItems: 'center', background: p.accent, ...mono(look, 20, p.onAccent), opacity: live }}>LIVE</div>
      <div style={{ position: 'absolute', right: 640 - win.x - win.w + 14, top: win.y + win.h - 50, height: 38, borderRadius: 19, padding: '0 16px', display: 'flex', alignItems: 'center', background: p.accent, ...sans(look, 20, p.onAccent, 600), opacity: buyers, transform: `scale(${1 - tap * 0.08})` }}>Buy</div>

      {users.map((u, i) => (
        <Person key={u.y} {...look} x={u.x} y={u.y} s={0.72} lit={flow > 0.4 + i * 0.15} opacity={tween(f, 132 + i * 4, 10)} />
      ))}
      <div style={{ position: 'absolute', left: 528, width: 90, top: 320, textAlign: 'center', ...mono(look, 20, p.muted), opacity: buyers }}>users</div>

      <Beats {...look} beats={['a Bitpal builds a basket', 'then trades live on video', 'users buy from the same screen']} starts={[0, 70, 140]} />
    </Frame>
  );
};

export const FIGURES = {
  custody: figure(Custody, 210, 'You connect your own Binance or Coinbase account to KoinBasket. When you buy a basket, the order goes to your exchange; your funds stay there and never come to KoinBasket.'),
  rebrand: figure(Rebrand, 210, 'The dark MVP home page is wiped across into the rebranded, lighter design with green accents, which highlights that funds are held securely with your exchange.'),
  bitbuddy: figure(BitBuddy, 210, 'On BitBuddy, a Bitpal builds a basket, then trades live on video, and users watching buy from the same screen.'),
};
