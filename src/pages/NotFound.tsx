import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "404: attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <SEO title="Page not found" description="This page doesn't exist — the work is all still here." />
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent-primary mb-3">
            Error 404
          </p>
          <h1 className="font-dm-sans font-bold tracking-tight text-6xl sm:text-7xl text-text-primary mb-4">
            Lost the plot
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
            This page doesn't exist — or it shipped somewhere else. The work is
            all still here.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white font-semibold hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_hsl(var(--accent-primary)/0.25)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the work
            </Link>
            <Link
              to="/otagon"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Read a case study
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              About Amaan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
