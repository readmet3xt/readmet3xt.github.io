import { imageSize } from '@/lib/imageSize';
// Certificates and awards, shown as plain figures (formerly an auto-advancing carousel).

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

export const CertificatesCarousel = () => (
  <div>
    <h2 className="text-3xl sm:text-4xl mb-8">Certificates and awards</h2>
    <div className="grid gap-8 md:grid-cols-3 items-start">
      {CERTIFICATES.map((c) => (
        <figure key={c.title}>
          <img src={c.image} {...imageSize(c.image)} alt={c.alt} className="w-full h-auto rounded-sm border border-border" loading="lazy" decoding="async" />
          <figcaption className="mt-2 text-sm text-text-secondary">{c.title}</figcaption>
        </figure>
      ))}
    </div>
  </div>
);
