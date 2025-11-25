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
          console.log('New version detected, reloading...');
          window.location.reload();
        }
      } catch (error) {
        console.error('Version check failed:', error);
      }
    };

    // Check version every 5 minutes
    const interval = setInterval(checkVersion, 5 * 60 * 1000);
    
    // Initial check
    checkVersion();

    return () => clearInterval(interval);
  }, []);
};
