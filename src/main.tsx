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

// A reload starts at the top of the page: the browser doesn't restore the old
// scroll position, and a #section left in the URL (from "See the work") is dropped.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
if (navigation?.type === 'reload' && location.hash) history.replaceState(history.state, '', location.pathname + location.search);

createRoot(document.getElementById("root")!).render(<App />);
