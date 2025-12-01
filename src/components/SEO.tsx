import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultMeta = {
  title: 'Amaan Khan - Product Designer Portfolio',
  description: 'Hyderabad-based Product Designer creating impactful, human-centered products for a more thoughtful digital landscape.',
  image: 'https://storage.googleapis.com/gpt-engineer-file-uploads/3DwcQ4iImQTnMy6jZLwBSnPzKM32/social-images/social-1758010556926-IMG_7524 1.png',
  url: 'https://readmet3xt.github.io/',
  type: 'website',
};

export const SEO = ({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Amaan Khan` : defaultMeta.title;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
