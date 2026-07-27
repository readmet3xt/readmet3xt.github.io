import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { ImageModal } from '@/components/ImageModal';
import { ImageGridItem } from '@/components/ImageGridItem';

import image1 from '/media/cbc6c741-57a8-4b3e-be19-fce8a11350a8.png';
import image2 from '/media/6cf04e87-7fbf-42b6-a3e1-d4ece5d92936.png';
import image3 from '/media/65bad7d1-8b06-4cb4-be16-272191a6ca5e.png';
import image4 from '/media/01629ecc-44e7-4071-9ee4-a06eb02513e6.png';
import image5 from '/media/cdea7fd2-c477-4821-966c-da2e1bfc4eeb.png';
import image6 from '/media/5eac971a-d6da-497c-802d-9a8fe988101d.png';
import image7 from '/media/0736d768-e432-4e8f-9f40-63d5ed1184d9.png';
import image8 from '/media/6480d52d-bda6-4ccd-822f-09f8ccb52719.png';
import image9 from '/media/985a3494-cd3e-4ecc-b5cb-9cd85f42ae41.png';
import image11 from '/media/5725b438-c77c-4083-8262-28762f4edd6b.png';

const interfaceStudies = [
  { src: image1, alt: 'Mobile app interface study' },
  { src: image2, alt: 'Petals app concept — self-initiated interface study' },
  { src: image3, alt: 'Financial app interface screens — unbriefed concept' },
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

const allImages = [...interfaceStudies, ...drawings];

export const Play = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <PageLayout>
      <SEO
        title="Playground"
        description="Self-initiated interface studies, unbriefed product concepts, and the drawing Amaan Khan does when he's not designing."
      />
      <header className="mb-10">
        <p className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent-primary mb-2">
          Off the Clock
        </p>
        <h2 className="font-dm-sans font-bold text-2xl sm:text-3xl text-foreground tracking-tight mb-2">
          Playground
        </h2>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl">
          Self-initiated interface studies, unbriefed concepts, and the drawing I do when
          I'm not designing. No clients, no constraints — this is where the visual muscle stays warm.
        </p>
      </header>

      <section aria-label="Interface studies" className="mb-14">
        <h3 className="font-ibm-plex-mono text-xs uppercase tracking-widest text-text-tertiary font-semibold mb-4">
          Interface studies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {interfaceStudies.map((image, index) => (
            <ImageGridItem
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </section>

      <section aria-label="Drawing and illustration">
        <h3 className="font-ibm-plex-mono text-xs uppercase tracking-widest text-text-tertiary font-semibold mb-4">
          Drawing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {drawings.map((image, index) => (
            <ImageGridItem
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(interfaceStudies.length + index)}
            />
          ))}
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        images={allImages.map(img => img.src)}
        alts={allImages.map(img => img.alt)}
        currentIndex={currentImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </PageLayout>
  );
};
