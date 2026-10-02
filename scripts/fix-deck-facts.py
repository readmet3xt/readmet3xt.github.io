"""Correct factual claims in the web deck (public/deck/index.html) without touching its images.

The deck is a bundled export: slide markup (and each slide's speaker-notes narration script)
lives in one JSON string inside the 4th <script>. This decodes only that string, applies exact
replacements (each must match the expected number of times), and writes it back with the same
encoding. Re-running is safe: already-fixed text simply isn't found, which fails loudly.

  python scripts/fix-deck-facts.py
"""
import json
import re
import sys
from pathlib import Path

DECK = Path(__file__).resolve().parent.parent / "public" / "deck" / "index.html"
SLASH = "<" + chr(92) + "u002F"  # the bundle writes "</" as </ so the JSON can't close the <script>

REPLACEMENTS = [
    ('">70K</div><div style="font-size:18px;color:rgba(26,25,22,0.55);margin-top:4px;">KoinBasket users, from zero<',
     '">70K+</div><div style="font-size:18px;color:rgba(26,25,22,0.55);margin-top:4px;">KoinBasket users, 2022–2025<'),
    ('>Notable Honor — I.V.I.<', '>Student Notable, I.V.I.<'),
    ('>Core77 Notable Honor</div>', '>Core77 Student Notable</div>'),
    ('margin-top:8px;">Notable Honor</div>', 'margin-top:8px;">Student Notable</div>'),
    ('Core77 gave it a Notable Honor', 'Core77 named it a Student Notable'),
    ('>Core77 Notable Honor — and BCG adopted', '>Core77 Student Notable, and BCG adopted'),
    ('Where I stop handing off and start shipping — solo, in production.',
     'Where I stop handing off and start shipping: solo, and live.'),
    ('PWA over native — 2 weeks, not 2 months', 'PWA over native: one codebase, every device'),
    ('atomic message migration, zero data loss since launch.',
     'atomic message migration so messages never get lost between tabs.'),
    ('Fixed with fullscreen detection and confidence scoring — <span style="color:#F0EBE0;font-weight:600;">80% fewer false tabs.</span>',
     'Fixed by combining detection signals, and <span style="color:#F0EBE0;font-weight:600;">asking the player when confidence is low.</span>'),
    ('I fixed it with fullscreen detection and confidence scoring, eighty percent fewer false tabs.',
     'I fixed it by combining detection signals and asking the player which game they mean when confidence is low.'),
    ("with an atomic migration, and there's been zero data loss since.",
     'with an atomic migration, one transaction for both.'),
    ('>users from zero<', '>users, 2022–2025<'),
    ('the product scaled 0 → 70,000 users. I mentored our first junior hire from zero.',
     'the product grew past 70,000 users. I mentored our first junior designer.'),
    ('>From a one-week MVP to 70,000 users.<', '>From a one-week MVP to 70,000+ users.<'),
    ('a design system from zero, and our first junior hire.</p>',
     'a design system from zero, and mentoring our first junior designer.</p>'),
    ('a design system from scratch, and our first junior hire.',
     'a design system from scratch, and mentoring our first junior designer.'),
    ('and mentoring our first junior hire.', 'and mentoring our first junior designer.'),
    ('>8+ genre-specific AI personas<', '>5 companion personas<'),
    ('The result: thirty-plus features, paid tiers live, and zero data loss or critical incidents since launch.',
     'The result: thirty-plus features and a public launch in July 2026, with every payment path kept server-side.'),
]
REGEX_REPLACEMENTS = [
    (r'(>Live</div><div style="[^"]*">)paid tiers(<)', r'\g<1>since July 2026\g<2>', '>since July 2026<'),
    (r'(>)0(</div><div style="[^"]*">)incidents(</div><div style="[^"]*">)since Aug 2025 launch(<)',
     r'\g<1>1\g<2>builder\g<3>design, code and ops\g<4>', '>design, code and ops<'),
]
MUST_BE_GONE = ['8+ genre', 'Notable Honor', 'users from zero', 'users, from zero', '2 weeks, not 2 months', 'Aug 2025 launch',
                '80% fewer', 'eighty percent', 'zero data loss', 'scaled 0 →', 'junior hire']


def main():
    html = DECK.read_text(encoding="utf-8")
    scripts = list(re.finditer(r"(<script[^>]*>)(.*?)(</script>)", html, flags=re.S))
    raw = scripts[3].group(2)
    core = raw.strip()
    lead, trail = raw[: raw.index(core)], raw[raw.index(core) + len(core):]
    tpl = json.loads(core)
    if json.dumps(tpl, ensure_ascii=False).replace("</", SLASH) != core:
        sys.exit("Cannot reproduce the deck's JSON encoding; refusing to write.")

    applied = 0
    for old, new in REPLACEMENTS:
        n = tpl.count(old)
        if n == 1:
            tpl = tpl.replace(old, new)
            applied += 1
        elif n == 0 and new in tpl:
            continue  # already fixed on an earlier run
        else:
            sys.exit(f"Expected 1 match, found {n}: {old[:70]}")
    for pattern, repl, done_marker in REGEX_REPLACEMENTS:
        tpl, n = re.subn(pattern, repl, tpl)
        if n == 1:
            applied += 1
        elif not (n == 0 and done_marker in tpl):
            sys.exit(f"Expected 1 regex match, found {n}: {pattern[:60]}")
    left = [b for b in MUST_BE_GONE if b in tpl]
    if left:
        sys.exit(f"Still present: {left}")

    new_raw = lead + json.dumps(tpl, ensure_ascii=False).replace("</", SLASH) + trail
    s = scripts[3]
    DECK.write_text(html[: s.start(2)] + new_raw + html[s.end(2):], encoding="utf-8", newline="")
    print(f"Deck fixed: {applied} new replacements ({len(REPLACEMENTS) + len(REGEX_REPLACEMENTS)} rules).")


if __name__ == "__main__":
    main()
