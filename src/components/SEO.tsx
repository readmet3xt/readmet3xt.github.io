import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_META, SITE_ORIGIN, pageTitle } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export const SEO = ({
  title,
  description = DEFAULT_META.description,
  image = DEFAULT_META.image,
  url,
  type = 'website',
  noindex,
}: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = pageTitle(title);
  // Every page is self-canonical.
  const canonicalUrl = url ?? (pathname === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${pathname}`);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amaan Khan",
    "url": `${SITE_ORIGIN}/`,
    "image": DEFAULT_META.image,
    "jobTitle": DEFAULT_META.jobTitle,
    "description": DEFAULT_META.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Royal College of Art", "sameAs": "https://www.rca.ac.uk/" },
      { "@type": "CollegeOrUniversity", "name": "Osmania University" }
    ],
    "award": DEFAULT_META.award,
    "knowsAbout": [
      "Service Design",
      "User Research",
      "Product Design",
      "User Experience Design",
      "Prototyping",
      "Design Systems",
      "React",
      "TypeScript"
    ],
    "sameAs": ["https://www.linkedin.com/in/readmetxt/"]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Amaan Khan" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
