import { useEffect, useState } from 'react';

interface CopyToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export const CopyToast = ({ message, isVisible, onHide }: CopyToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <div className={`copy-toast ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};