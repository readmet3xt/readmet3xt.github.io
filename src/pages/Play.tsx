import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ImageModal } from '@/components/ImageModal';
import { ImageGridItem } from '@/components/ImageGridItem';
import { OptimizedImage } from '@/components/OptimizedImage';

// Import your images
import image1 from '/lovable-uploads/cbc6c741-57a8-4b3e-be19-fce8a11350a8.png';
import image2 from '/lovable-uploads/6cf04e87-7fbf-42b6-a3e1-d4ece5d92936.png';
import image3 from '/lovable-uploads/65bad7d1-8b06-4cb4-be16-272191a6ca5e.png';
import image4 from '/lovable-uploads/01629ecc-44e7-4071-9ee4-a06eb02513e6.png';
import image5 from '/lovable-uploads/cdea7fd2-c477-4821-966c-da2e1bfc4eeb.png';
import image6 from '/lovable-uploads/5eac971a-d6da-497c-802d-9a8fe988101d.png';
import image7 from '/lovable-uploads/0736d768-e432-4e8f-9f40-63d5ed1184d9.png';
import image8 from '/lovable-uploads/6480d52d-bda6-4ccd-822f-09f8ccb52719.png';
import image9 from '/lovable-uploads/985a3494-cd3e-4ecc-b5cb-9cd85f42ae41.png';
import image10 from '/lovable-uploads/e5ad6e9a-2b39-4b00-9f73-938cf345b02d.png';
import image11 from '/lovable-uploads/5725b438-c77c-4083-8262-28762f4edd6b.png';

const doodleImages = [
  { src: image1, alt: 'Mobile app interface design' },
  { src: image2, alt: 'Petals app design concept' },
  { src: image3, alt: 'Financial app interface screens' },
  { src: image4, alt: 'Banking app interface design' },
  { src: image5, alt: 'Task management mobile app' },
  { src: image6, alt: 'Minimalist workspace illustration' },
  { src: image7, alt: 'Location-based booking interface' },
  { src: image8, alt: 'Apple Watch interface design' },
  { src: image9, alt: 'Creative tropical illustration' },
  { src: image11, alt: 'Night sky observatory landscape' },
];

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
    setCurrentImageIndex((prev) => (prev + 1) % doodleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + doodleImages.length) % doodleImages.length);
  };

  return (
    <PageLayout className="min-h-screen">
            <h2 className="text-3xl font-dm-sans font-bold mb-2 text-foreground">Playground</h2>
            <p className="text-lg font-mono mb-12 text-text-secondary">
              A collection of art, doodles, & other things I've made for fun.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {doodleImages.map((image, index) => (
                <ImageGridItem
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(index)}
                />
              ))}
            </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        images={doodleImages.map(img => img.src)}
        currentIndex={currentImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </PageLayout>
  );
};