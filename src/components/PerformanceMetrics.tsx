import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Measure Core Web Vitals
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    const measureTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.name === document.location.href) {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
  }, []);

  return metrics;
};

// Development-only performance monitor
export const PerformanceMonitor = () => {
  const metrics = usePerformanceMetrics();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono">
      <div className="space-y-1">
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Waiting...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}</div>
      </div>
    </div>
  );
};