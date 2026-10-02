import React, { lazy, Suspense, Component, ErrorInfo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Play = lazy(() => import("./pages/Play").then(m => ({ default: m.Play })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const KoinBasket = lazy(() => import("./pages/KoinBasket").then(m => ({ default: m.KoinBasket })));
const Softwire = lazy(() => import("./pages/Softwire").then(m => ({ default: m.Softwire })));
const Pebble = lazy(() => import("./pages/Pebble").then(m => ({ default: m.Pebble })));
const IviProgram = lazy(() => import("./pages/IviProgram").then(m => ({ default: m.IviProgram })));
const Stampede = lazy(() => import("./pages/Stampede").then(m => ({ default: m.Stampede })));
const Otagon = lazy(() => import("./pages/Otagon").then(m => ({ default: m.Otagon })));
const Versus = lazy(() => import("./pages/Versus").then(m => ({ default: m.Versus })));
const ScreenShot = lazy(() => import("./pages/ScreenShot").then(m => ({ default: m.ScreenShot })));
const LawX = lazy(() => import("./pages/LawX").then(m => ({ default: m.LawX })));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Holds the page height while a route chunk loads, so nothing flashes or jumps. */
const RouteFallback = () => <div className="min-h-screen" aria-hidden="true" />;

const CHUNK_RELOAD_KEY = 'portfolio-chunk-reload';

const isChunkLoadError = (error: Error | null) =>
  !!error && /Failed to fetch dynamically imported module|Importing a module script failed|ChunkLoadError/i.test(`${error.name} ${error.message}`);

/**
 * Catches render crashes. A stale chunk after a deploy reloads once; anything
 * else shows a plain page with a way back (details go to the console only).
 */
class GlobalErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    if (isChunkLoadError(error)) {
      try {
        if (!sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
          sessionStorage.setItem(CHUNK_RELOAD_KEY, '1');
          window.location.reload();
        }
      } catch {
        // Storage unavailable: fall through to the fallback page.
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center px-6">
          <div className="max-w-md">
            <h1 className="text-3xl mb-4">Something went wrong loading this page.</h1>
            <p className="text-text-secondary mb-8">
              Reloading usually fixes it. If it doesn't, you can reach me at{' '}
              <a className="link-ink" href="mailto:mdamkhan.work@gmail.com">mdamkhan.work@gmail.com</a>.
            </p>
            <div className="flex gap-6">
              <button type="button" className="btn-ink" onClick={() => window.location.reload()}>Reload</button>
              <a className="link-ink self-center" href="/">Go to the home page</a>
            </div>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

const App = () => (
  <GlobalErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
            <Route path="/koinbasket" element={<KoinBasket />} />
            <Route path="/softwire" element={<Softwire />} />
            <Route path="/pebble" element={<Pebble />} />
            <Route path="/iviprogram" element={<IviProgram />} />
            <Route path="/stampede" element={<Stampede />} />
            <Route path="/otagon" element={<Otagon />} />
            <Route path="/versus" element={<Versus />} />
            <Route path="/screenshot" element={<ScreenShot />} />
            <Route path="/lawx" element={<LawX />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </GlobalErrorBoundary>
);

export default App;
