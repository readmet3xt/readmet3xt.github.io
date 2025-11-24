import { useState } from 'react';
import { useToast } from './use-toast';

type CopyState = 'idle' | 'copying' | 'success' | 'error';

export const useCopyToClipboard = () => {
  const { toast } = useToast();
  const [copyState, setCopyState] = useState<CopyState>('idle');

  const copyToClipboard = async (
    text: string, 
    options?: {
      successMessage?: string;
      errorMessage?: string;
      duration?: number;
    }
  ): Promise<boolean> => {
    const {
      successMessage = 'Copied to clipboard!',
      errorMessage = 'Failed to copy',
      duration = 2000
    } = options || {};

    setCopyState('copying');

    try {
      await navigator.clipboard.writeText(text);
      setCopyState('success');
      
      toast({
        title: successMessage,
        duration: 2000,
      });

      // Reset state after duration
      setTimeout(() => {
        setCopyState('idle');
      }, duration);

      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      setCopyState('error');
      
      toast({
        title: errorMessage,
        variant: 'destructive',
        duration: 2000,
      });

      setTimeout(() => {
        setCopyState('idle');
      }, duration);

      return false;
    }
  };

  return {
    copyToClipboard,
    copyState,
    isIdle: copyState === 'idle',
    isCopying: copyState === 'copying',
    isSuccess: copyState === 'success',
    isError: copyState === 'error',
  };
};
