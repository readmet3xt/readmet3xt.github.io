// The portfolio deck is the interactive HTML export (from Claude's design tool)
// hosted under public/deck/. It keeps the in-slide image carousels working —
// unlike a flat slide-image export. The modal embeds it in an iframe.

export const DECK_URL = '/deck/index.html';
export const DECK_TITLE = 'Amaan Khan — Portfolio Presentation';

// Narrated walk-through: the full-script narration audio, plus the start time
// (seconds) of each of the 33 slides within it. Times were derived by aligning
// the per-slide script to a word-level transcript of the audio; tweak any single
// value if a slide changes a touch early/late.
export const DECK_AUDIO_URL = '/deck/narration.mp3';

export const PRESENTATION_CUES: number[] = [
  0.0, 16.92, 38.22, 56.58, 68.48, 93.26, 102.94, 118.84, 142.72, 154.36,
  184.08, 195.06, 217.44, 241.98, 254.54, 265.1, 279.94, 303.5, 332.82, 357.3,
  368.34, 395.42, 423.22, 446.26, 467.74, 476.1, 496.3, 524.62, 551.32, 577.1,
  600.08, 621.44, 646.16,
];
