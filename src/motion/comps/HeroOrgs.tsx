import { AbsoluteFill, useCurrentFrame, useVideoConfig } from '../core';
import { TRAVEL, fadeUp, mix, tween } from '../helpers';
import { PROJECT_COLORS, readableOn } from '../colors';
import type { LookProps } from '../theme';

// Story 1, "Changed organisations" (8 s). Three research projects, each
// travelling into the organisation that put it to work: Pebble into VISA
// Innovation Centre's roadmap, I.V.I.'s six needs into BCG's workshops, and
// Stampede's matching into WWT × Airbnb working together. Facts only, from the
// case studies. Landscape 1280×720; portrait 600×800 for phones.

export const ORGS_FRAMES = 240;

const ROWS = [
  { route: '/pebble', project: 'Pebble', evidence: '70 surveyed · 18 workshops', org: 'VISA Innovation Centre', outcome: 'the Virtual Café went into its roadmap' },
  { route: '/iviprogram', project: 'I.V.I.', evidence: '79 women · 12 countries', org: 'BCG', outcome: 'used our six needs in internal workshops', badge: 'Core77 Student Notable' },
  { route: '/stampede', project: 'Stampede', evidence: 'matched on Power and Pace', org: 'WWT × Airbnb', outcome: 'started working together in 3 hours' },
];
const START = 20;
const STEP = 58;

export const HeroOrgs: React.FC<LookProps> = ({ palette: p, fonts }) => {
  const f = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const portrait = H > W;
  const display = { fontFamily: fonts.display, fontWeight: fonts.displayWeight, letterSpacing: `${fonts.displayTracking}em` };
  const name = (size: number) => ({ fontFamily: fonts.text, fontWeight: 600, fontSize: size, letterSpacing: '-0.015em', color: p.ink, lineHeight: 1.15 });
  const mono = (size: number, color = p.muted) => ({ fontFamily: fonts.mono, fontSize: size, color, lineHeight: 1.3 });
  const body = (size: number) => ({ fontFamily: fonts.text, fontSize: size, color: p.muted, lineHeight: 1.3 });

  const L = portrait
    ? { left: 40, head: 40, headSize: 34, headW: 520, top: 140, step: 216, nameSize: 30, evSize: 24, outSize: 24 }
    : { left: 96, head: 76, headSize: 44, headW: 1000, top: 212, step: 156, nameSize: 30, evSize: 19, outSize: 22 };

  return (
    <AbsoluteFill style={{ background: p.bg, color: p.ink, fontFamily: fonts.text }}>
      <div style={{ position: 'absolute', left: L.left, top: L.head, width: L.headW, ...display, fontSize: L.headSize, lineHeight: 1.1, ...fadeUp(f, 2, { dur: 18, dist: 12 }) }}>
        Research that organisations {portrait && <br />}put to work
      </div>

      {ROWS.map((r, i) => {
        const at = START + i * STEP;
        const color = readableOn(PROJECT_COLORS[r.route], p.bg, 3);
        const travel = tween(f, at + 14, 18, 0, 1, TRAVEL);
        const arrived = tween(f, at + 30, 14);
        const top = L.top + i * L.step;

        if (portrait) {
          // one card per project: the research above a hairline, the organisation below it
          const lineY = top + 100;
          const x1 = L.left + 8;
          const x2 = 552;
          return (
            <div key={r.project}>
              <div style={{ position: 'absolute', left: 24, top, width: 552, height: 200, borderRadius: 18, background: p.panel, border: `1px solid ${p.line}`, boxSizing: 'border-box', ...fadeUp(f, at, { dur: 14, dist: 10 }) }} />
              <div style={{ position: 'absolute', left: L.left + 8, top: top + 18, display: 'flex', alignItems: 'center', gap: 12, ...fadeUp(f, at, { dur: 14, dist: 10 }) }}>
                <span style={{ width: 12, height: 12, borderRadius: 6, background: color }} />
                <span style={name(L.nameSize)}>{r.project}</span>
              </div>
              <div style={{ position: 'absolute', left: L.left + 8, top: top + 56, ...mono(L.evSize), ...fadeUp(f, at + 4, { dur: 14, dist: 8 }) }}>{r.evidence}</div>
              <svg width={W} height={H} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <line x1={x1} x2={mix(x1, x2, travel)} y1={lineY} y2={lineY} stroke={color} strokeWidth={2} />
                <circle cx={mix(x1, x2, travel)} cy={lineY} r={6} fill={color} opacity={travel > 0 ? 1 - arrived : 0} />
              </svg>
              <div style={{ position: 'absolute', left: L.left + 8, top: top + 114, display: 'flex', alignItems: 'center', gap: 14, ...fadeUp(f, at + 28, { dur: 14, dist: 10 }) }}>
                <span style={name(L.nameSize)}>{r.org}</span>
                {r.badge && <span style={{ ...mono(21, p.ink), border: `1px solid ${p.line}`, borderRadius: 999, padding: '3px 10px', ...fadeUp(f, at + 40, { dur: 12, dist: 6 }) }}>{r.badge}</span>}
              </div>
              <div style={{ position: 'absolute', left: L.left + 8, top: top + 152, width: 504, ...body(L.outSize), ...fadeUp(f, at + 32, { dur: 14, dist: 8 }) }}>{r.outcome}</div>
            </div>
          );
        }

        // landscape: a research card on the left, the organisation on the right
        const cy = top + 56;
        const x1 = 536;
        const x2 = 704;
        return (
          <div key={r.project}>
            <div style={{ position: 'absolute', left: L.left, top, width: 420, height: 112, borderRadius: 16, background: p.panel, border: `1px solid ${p.line}`, boxSizing: 'border-box', padding: '20px 24px', ...fadeUp(f, at, { dur: 14, dist: 10 }) }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 12, height: 12, borderRadius: 6, background: color }} />
                <span style={name(L.nameSize)}>{r.project}</span>
              </div>
              <div style={{ marginTop: 10, ...mono(L.evSize) }}>{r.evidence}</div>
            </div>
            <svg width={W} height={H} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <line x1={x1} x2={mix(x1, x2, travel)} y1={cy} y2={cy} stroke={color} strokeWidth={2} />
              <circle cx={mix(x1, x2, travel)} cy={cy} r={7} fill={color} opacity={travel > 0 ? 1 - arrived : 0} />
              <circle cx={x2} cy={cy} r={mix(7, 22, arrived)} fill="none" stroke={color} strokeWidth={1.5} opacity={arrived > 0 && arrived < 1 ? 1 - arrived : 0} />
            </svg>
            <div style={{ position: 'absolute', left: 728, top: top + 18, display: 'flex', alignItems: 'center', gap: 16, ...fadeUp(f, at + 28, { dur: 14, dist: 10 }) }}>
              <span style={name(L.nameSize)}>{r.org}</span>
              {r.badge && <span style={{ ...mono(18, p.ink), border: `1px solid ${p.line}`, borderRadius: 999, padding: '4px 12px', ...fadeUp(f, at + 40, { dur: 12, dist: 6 }) }}>{r.badge}</span>}
            </div>
            <div style={{ position: 'absolute', left: 728, top: top + 64, width: 456, ...body(L.outSize), ...fadeUp(f, at + 32, { dur: 14, dist: 8 }) }}>{r.outcome}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
