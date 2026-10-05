import { PageLayout } from '@/components/PageLayout';
import { BackLink } from '@/components/BackLink';
import { SEO } from '@/components/SEO';
import { ImageGridItem } from '@/components/ImageGridItem';
import { ImageLightbox } from '@/components/case-study/ImageLightbox';
import { openLightbox } from '@/components/case-study/CaseStudySection';
import { ProjectTiles } from '@/components/ProjectsGrid';
import { projectsByCategory } from '@/data/projectData';

const image1 = '/media/cbc6c741-57a8-4b3e-be19-fce8a11350a8.webp';
const image2 = '/media/6cf04e87-7fbf-42b6-a3e1-d4ece5d92936.webp';
const image3 = '/media/65bad7d1-8b06-4cb4-be16-272191a6ca5e.webp';
const image4 = '/media/01629ecc-44e7-4071-9ee4-a06eb02513e6.webp';
const image5 = '/media/cdea7fd2-c477-4821-966c-da2e1bfc4eeb.webp';
const image6 = '/media/5eac971a-d6da-497c-802d-9a8fe988101d.webp';
const image7 = '/media/0736d768-e432-4e8f-9f40-63d5ed1184d9.webp';
const image8 = '/media/6480d52d-bda6-4ccd-822f-09f8ccb52719.webp';
const image9 = '/media/985a3494-cd3e-4ecc-b5cb-9cd85f42ae41.webp';
const image11 = '/media/5725b438-c77c-4083-8262-28762f4edd6b.webp';

const interfaceStudies = [
  { src: image1, alt: 'Mobile app interface study' },
  { src: image2, alt: 'Petals app concept, a self-initiated interface study' },
  { src: image3, alt: 'Financial app interface screens, an unbriefed concept' },
  { src: image4, alt: 'Banking app interface study' },
  { src: image5, alt: 'Task management mobile app concept' },
  { src: image7, alt: 'Location-based booking interface study' },
  { src: image8, alt: 'Apple Watch interface study' },
];

const drawings = [
  { src: image6, alt: 'Minimalist workspace illustration' },
  { src: image9, alt: 'Creative tropical illustration' },
  { src: image11, alt: 'Night sky observatory landscape' },
];

export const Play = () => {
  return (
    <PageLayout>
      <SEO
        title="Play"
        description="Side projects, interface studies and drawings by Amaan Khan."
      />
      <BackLink to="/#work" label="All work" />
      <header className="mb-12 max-w-[60ch]">
        <h1 className="text-5xl mb-4">Play</h1>
        <p className="text-lg text-text-secondary">
          What I make with no client and no brief: side projects I design and build, interface studies,
          and the drawing I do when I'm not designing.
        </p>
      </header>

      <section aria-labelledby="side-projects" className="mb-14">
        <h2 id="side-projects" className="text-3xl mb-3">Side projects</h2>
        <p className="mb-8 max-w-[60ch] text-text-secondary">
          Two small tools I designed and built on my own in 2026: one for game nights, one for PC screenshots.
        </p>
        <ProjectTiles projects={projectsByCategory('side')} />
      </section>

      <section aria-label="Interface studies" className="mb-14">
        <h2 className="text-3xl mb-6">Interface studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {interfaceStudies.map((image, index) => (
            <ImageGridItem
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => openLightbox(image.src)}
            />
          ))}
        </div>
      </section>

      <section aria-label="Drawing and illustration">
        <h2 className="text-3xl mb-6">Drawing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {drawings.map((image, index) => (
            <ImageGridItem
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => openLightbox(image.src)}
            />
          ))}
        </div>
      </section>

      <ImageLightbox />
    </PageLayout>
  );
};
