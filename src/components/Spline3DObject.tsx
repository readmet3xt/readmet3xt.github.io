
import { useState, useEffect, useCallback } from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-text-secondary">Loading 3D Scene...</p>
    </div>
  </div>
);

const ErrorFallback = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-6">
    <div className="mb-4">
      <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
        <span className="text-2xl">🎨</span>
      </div>
      <p className="text-text-secondary">3D Scene Unavailable</p>
      <p className="text-xs text-text-secondary/60 mt-1">Interactive content will load here</p>
    </div>
    <button 
      onClick={onRetry}
      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
    >
      Try Again
    </button>
  </div>
);

export const Spline3DObject = ({ mousePosition }: { mousePosition?: { x: number; y: number } }) => {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [key, setKey] = useState(0);
  const [splineInstance, setSplineInstance] = useState<any>(null);

  const loadSpline = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      
      const SplineModule = await import('@splinetool/react-spline');
      setSplineComponent(() => SplineModule.default);
    } catch (error) {
      console.warn('Spline module failed to load:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Update spline rotation based on mouse position
  useEffect(() => {
    if (splineInstance && mousePosition) {
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
      
      if (splineInstance.scene && splineInstance.scene.children[0]) {
        const object = splineInstance.scene.children[0];
        object.rotation.y = x * 0.2;
        object.rotation.x = y * 0.1;
      }
    }
  }, [mousePosition, splineInstance]);

  useEffect(() => {
    loadSpline();
  }, [loadSpline]);

  const handleRetry = useCallback(() => {
    setKey(prev => prev + 1);
    loadSpline();
  }, [loadSpline]);

  const handleSplineError = useCallback(() => {
    setHasError(true);
  }, []);

  const handleSplineLoad = useCallback((spline: any) => {
    setSplineInstance(spline);
    
    // Zoom out the camera much further to show the complete scene
    if (spline.camera) {
      spline.camera.position.set(0, 0, 25); // Move camera much further back
      spline.camera.fov = 45; // Reduce field of view for more zoom out effect
    }
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (hasError || !SplineComponent) {
      return <ErrorFallback onRetry={handleRetry} />;
    }

    return (
      <SplineComponent
        key={key}
        scene="https://prod.spline.design/uJ3Nbv7ycIMoKBoq/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
        onError={handleSplineError}
        onLoad={handleSplineLoad}
      />
    );
  };

  return (
    <div className="reveal-on-scroll rounded-xl overflow-hidden bg-card h-[320px] w-full">
      {renderContent()}
    </div>
  );
};
