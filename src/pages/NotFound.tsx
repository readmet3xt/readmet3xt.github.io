import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import { MotionStage } from "@/motion/MotionStage";
import { LOST_TILE, TILE_SIZE } from "@/motion/registry";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <SEO title="Page not found" description="This page doesn't exist. The work is all still here." />
      <div className="min-h-[50vh] grid gap-10 pb-12 lg:pt-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-[50ch] lg:order-2">
        <p className="font-mono text-xs text-text-tertiary mb-3">404 · not on the map</p>
        <h1 className="text-5xl mb-4">This page doesn't exist</h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          It may have moved. The work is all still here.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/" className="btn-ink">Back to the work</Link>
          <Link to="/about" className="link-ink">About me</Link>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-bg-secondary lg:order-1">
          <MotionStage
            component={LOST_TILE.component}
            width={TILE_SIZE.width}
            height={TILE_SIZE.height}
            durationInFrames={LOST_TILE.durationInFrames}
            poster={LOST_TILE.poster}
            endAt={LOST_TILE.poster}
            initialFrame={0}
            label={LOST_TILE.label}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
