// Portfolio deck — slides live in public/presentation/ as slide-01.webp … slide-NN.webp
// (converted from the source .pptx via LibreOffice + PyMuPDF). To refresh the deck,
// re-export the slides with the same naming and update PRESENTATION_SLIDE_COUNT.

export const PRESENTATION_SLIDE_COUNT = 33;
export const PRESENTATION_TITLE = 'Amaan Khan — Portfolio Presentation';

export const PRESENTATION_SLIDES: string[] = Array.from(
  { length: PRESENTATION_SLIDE_COUNT },
  (_, i) => `/presentation/slide-${String(i + 1).padStart(2, '0')}.webp`,
);
