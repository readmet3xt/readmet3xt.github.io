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
  0.0, 16.98, 38.36, 54.82, 68.74, 93.52, 103.2, 119.1, 142.98, 154.56,
  184.32, 195.32, 217.66, 242.24, 254.76, 265.34, 280.2, 303.74, 333.06, 357.54,
  368.58, 395.66, 423.34, 446.5, 467.96, 476.34, 496.6, 524.86, 551.56, 576.76,
  599.66, 621.22, 646.38,
];
