import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// After a deploy, an open tab can request chunk files that no longer exist.
// Vite fires this event when a lazy import fails; one reload picks up the new build.
window.addEventListener('vite:preloadError', () => {
  try {
    if (sessionStorage.getItem('portfolio-chunk-reload')) return;
    sessionStorage.setItem('portfolio-chunk-reload', '1');
  } catch {
    return;
  }
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
