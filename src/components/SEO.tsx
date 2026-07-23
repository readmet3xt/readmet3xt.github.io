import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://readmet3xt.github.io';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

const defaultMeta = {
  title: 'Amaan Khan — Product Designer & Engineer',
  description: 'Product Designer who ships code. RCA-trained (Royal College of Art), full-stack engineer. Solo-built Otagon, a production AI SaaS, in 6 months. Open to roles in Bangalore, Mumbai, or Remote.',
  image: `${SITE_ORIGIN}/social-card.png`,
  url: `${SITE_ORIGIN}/`,
  type: 'website',
  keywords: 'Product Designer, Design Engineer, UX Designer, AI Product Designer, React Developer, TypeScript, Supabase, Full-Stack Designer, RCA, Royal College of Art, Service Design, Portfolio, Hyderabad, Bangalore, Remote, Otagon, KoinBasket',
};

export const SEO = ({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url,
  type = defaultMeta.type,
  keywords = defaultMeta.keywords,
}: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | Amaan Khan` : defaultMeta.title;
  // Canonical follows the current route unless a caller overrides it, so every
  // page is self-canonical instead of all pointing at the homepage.
  const canonicalUrl = url ?? (pathname === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${pathname}`);

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amaan Khan",
    "url": defaultMeta.url,
    "image": defaultMeta.image,
    "jobTitle": "Product Designer & Engineer",
    "description": defaultMeta.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Royal College of Art",
        "sameAs": "https://www.rca.ac.uk/"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "London Business School",
        "sameAs": "https://www.london.edu/"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Osmania University"
      }
    ],
    "award": "Core77 Design Awards 2021 — Notable Honor in Speculative Design",
    "knowsAbout": [
      "Product Design",
      "User Experience Design",
      "Service Design",
      "Design Systems",
      "AI UX",
      "Prototyping",
      "React",
      "TypeScript",
      "Full-Stack Development",
      "AI Integration",
      "PWA Development",
      "Supabase"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/readmetxt/"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Amaan Khan Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
