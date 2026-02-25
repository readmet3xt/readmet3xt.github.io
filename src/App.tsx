import { motion } from "framer-motion";
import React, { memo, lazy, Suspense, useState, Component, ErrorInfo } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useVersionCheck } from "@/hooks/useVersionCheck";

import Index from "./pages/Index";
const Play = lazy(() => import("./pages/Play").then(m => ({ default: m.Play })));

const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const KoinBasket = lazy(() => import("./pages/KoinBasket").then(m => ({ default: m.KoinBasket })));
const Softwire = lazy(() => import("./pages/Softwire").then(m => ({ default: m.Softwire })));
const Pebble = lazy(() => import("./pages/Pebble").then(m => ({ default: m.Pebble })));
const IviProgram = lazy(() => import("./pages/IviProgram").then(m => ({ default: m.IviProgram })));
const Stampede = lazy(() => import("./pages/Stampede").then(m => ({ default: m.Stampede })));
const Otagon = lazy(() => import("./pages/Otagon").then(m => ({ default: m.Otagon })));
const JollyAI = lazy(() => import("./pages/JollyAI").then(m => ({ default: m.JollyAI })));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

// Custom loading fallback for suspended routes
const RouteLoader = () => (
  <div className="fixed inset-0 bg-bg-primary z-50 flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-3 border-accent-primary/20 rounded-full border-t-accent-primary animate-spin" />
  </div>
);

// Animated Routes wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full h-full"
    >
      <Routes location={location}>
        <Route path="/" element={<Index />} />

        <Route path="/play" element={
          <Suspense fallback={<RouteLoader />}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-full">
              <Play />
            </motion.div>
          </Suspense>
        } />

        <Route path="/about" element={
          <Suspense fallback={<RouteLoader />}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-full">
              <About />
            </motion.div>
          </Suspense>
        } />

        {/* Case Studies (Have their own internal motion.div logic) */}
        <Route path="/koinbasket" element={<Suspense fallback={<RouteLoader />}><KoinBasket /></Suspense>} />
        <Route path="/softwire" element={<Suspense fallback={<RouteLoader />}><Softwire /></Suspense>} />
        <Route path="/pebble" element={<Suspense fallback={<RouteLoader />}><Pebble /></Suspense>} />
        <Route path="/iviprogram" element={<Suspense fallback={<RouteLoader />}><IviProgram /></Suspense>} />
        <Route path="/stampede" element={<Suspense fallback={<RouteLoader />}><Stampede /></Suspense>} />
        <Route path="/otagon" element={<Suspense fallback={<RouteLoader />}><Otagon /></Suspense>} />
        <Route path="/jollyai" element={<Suspense fallback={<RouteLoader />}><JollyAI /></Suspense>} />

        <Route path="*" element={
          <Suspense fallback={<RouteLoader />}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-full">
              <NotFound />
            </motion.div>
          </Suspense>
        } />
      </Routes>
    </motion.div>
  );
};

// Global Error Boundary to catch unmount/mount crashes
class GlobalErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null, errorInfo: ErrorInfo | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 bg-red-900 text-white min-h-screen">
          <h1 className="text-3xl font-bold mb-4">React Error Boundary Caught a Crash!</h1>
          <pre className="bg-black p-4 rounded text-sm overflow-auto mb-4">{this.state.error?.toString()}</pre>
          <pre className="bg-black p-4 rounded text-xs overflow-auto">{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Check for version updates periodically
  useVersionCheck();

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <div className="animate-fade-in">
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />

              <BrowserRouter>
                <ScrollToTop />
                <AnimatedRoutes />
              </BrowserRouter>

            </TooltipProvider>
          </QueryClientProvider>
        </div>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
