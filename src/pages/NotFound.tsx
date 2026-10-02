import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <SEO title="Page not found" description="This page doesn't exist. The work is all still here." />
      <div className="min-h-[50vh] max-w-[50ch] py-12">
        <p className="text-sm text-text-tertiary mb-3">404</p>
        <h1 className="text-5xl mb-4">This page doesn't exist</h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          It may have moved. The work is all still here.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/" className="btn-ink">Back to the work</Link>
          <Link to="/about" className="link-ink">About me</Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
