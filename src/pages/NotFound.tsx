import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-6">
      <div className="text-center max-w-md">
        <p className="font-ibm-plex-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent-primary mb-3">
          Error 404
        </p>
        <h1 className="font-dm-sans font-bold tracking-tight text-6xl sm:text-7xl text-text-primary mb-4">
          Lost the plot
        </h1>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
          This page doesn't exist — or it shipped somewhere else. Either way,
          the work is back on the home page.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white font-semibold hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_hsl(var(--accent-primary)/0.25)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to the work
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
