import { useEffect } from 'react';

let initialVersion: string | null = null;

export const useVersionCheck = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        // Add timestamp to prevent caching
        const response = await fetch(`/version.json?t=${Date.now()}`);
        const data = await response.json();
        
        if (!initialVersion) {
          initialVersion = data.version;
          return;
        }
        
        // If version changed, reload the page
        if (initialVersion !== data.version) {
          window.location.reload();
        }
      } catch {
        // Network blip or offline — try again on next interval
      }
    };

    // Check version every 5 minutes
    const interval = setInterval(checkVersion, 5 * 60 * 1000);
    
    // Initial check
    checkVersion();

    return () => clearInterval(interval);
  }, []);
};
