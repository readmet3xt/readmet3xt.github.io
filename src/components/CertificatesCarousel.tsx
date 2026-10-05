import type { CSSProperties } from 'react';
import { Expand } from 'lucide-react';
import { imageSize } from '@/lib/imageSize';
import { openLightbox } from '@/components/case-study/CaseStudySection';
// Certificates and awards, shown as figures; each opens full size in the image viewer
// (the page mounts <ImageLightbox />), where the visitor can step through all three.

const CERTIFICATES = [
  {
    title: 'Core77 Design Awards 2021, Student Notable',
    image: '/media/656f68a3-f2e8-46d8-b948-1d4067ef6177.webp',
    alt: 'Core77 Design Awards 2021 Student Notable for the Invisible Value Income Program',
  },
  {
    title: 'Brand Management elective, London Business School',
    image: '/media/2a61f154-ffd9-4cf1-94c4-485003fa7bf7.webp',
    alt: 'London Business School certificate of attendance for Brand Management',
  },
  {
    title: 'Design research internship, Think Design',
    image: '/media/5db3cc76-4297-4638-857d-e6c393a2301f.webp',
    alt: 'Think Design certificate of internship for design research',
  },
];

// Column widths follow each certificate's aspect ratio, so all three share one height.
const ROW_COLS = CERTIFICATES.map(({ image }) => {
  const { width, height } = imageSize(image);
  return `minmax(0, ${width && height ? ((width / height) * 1000).toFixed(1) : 1000}fr)`;
}).join(' ');

export const CertificatesCarousel = () => (
  <div>
    <h2 className="text-3xl sm:text-4xl mb-8">Certificates and awards</h2>
    <div className="grid gap-8 md:[grid-template-columns:var(--row-cols)] items-start" style={{ '--row-cols': ROW_COLS } as CSSProperties}>
      {CERTIFICATES.map((c) => (
        <figure key={c.title}>
          <button
            type="button"
            onClick={() => openLightbox(c.image)}
            aria-label={`View full size: ${c.title}`}
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm"
          >
            <img
              src={c.image}
              {...imageSize(c.image)}
              alt={c.alt}
              data-lightbox-caption={c.title}
              className="lightbox-image w-full h-auto rounded-sm border border-border transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.015] group-hover:border-text-tertiary"
              loading="lazy"
              decoding="async"
            />
            <span aria-hidden="true" className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-bg-primary/85 text-text-primary backdrop-blur transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
              <Expand className="h-4 w-4" />
            </span>
          </button>
          <figcaption className="mt-2 text-sm text-text-secondary">{c.title}</figcaption>
        </figure>
      ))}
    </div>
  </div>
);
