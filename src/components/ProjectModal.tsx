import { useEffect } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    collab: string;
    content: string;
  } | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className={`project-modal fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content-box rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-text-secondary">{project.collab}</p>
            </div>
            <button 
              onClick={onClose}
              className="close-modal text-4xl leading-none hover:text-accent-primary transition-colors"
            >
              ×
            </button>
          </div>
          <div 
            className="space-y-4 text-text-secondary"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </div>
    </div>
  );
};