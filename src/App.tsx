import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollToTop } from "@/components/ScrollToTop";

import Index from "./pages/Index";

// Lazy load case study pages for better performance
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

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="animate-fade-in">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={
              <div className="fixed inset-0 bg-bg-primary z-50 flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-accent-primary/20 rounded-full border-t-accent-primary animate-spin" />
              </div>
            }>
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
                <Route path="/jollyai" element={<JollyAI />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
