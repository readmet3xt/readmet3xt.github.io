// Site-wide SEO facts and the route list. Read by <SEO> at runtime and by the
// build (vite.config.ts) to write one static HTML file per route. Relative
// imports only, so Node can load it during the build.
import { PROJECTS } from './projectData';

export const SITE_ORIGIN = 'https://readmet3xt.github.io';
export const SITE_NAME = 'Amaan Khan';

export const DEFAULT_META = {
  title: 'Amaan Khan, Service & Product Designer',
  description:
    'Service and product designer trained at the Royal College of Art. I design end-to-end services and build them: research with VISA, BCG and WWT × Airbnb, founding designer at KoinBasket, and products I designed and built myself.',
  image: `${SITE_ORIGIN}/social-card.png`,
  jobTitle: 'Service & Product Designer',
  award: 'Core77 Design Awards 2021, Student Notable, Speculative Design',
};

export interface RouteMeta {
  path: string;
  /** Page title without the " | Amaan Khan" suffix; undefined = site default. */
  title?: string;
  description: string;
  /** Kept out of the sitemap and search results. */
  noindex?: boolean;
}

export const ROUTES: RouteMeta[] = [
  { path: '/', description: DEFAULT_META.description },
  {
    path: '/about',
    title: 'About',
    description:
      'About Amaan Khan: service and product designer trained at the Royal College of Art, based in Hyderabad. Experience, education and recommendations.',
  },
  {
    path: '/play',
    title: 'Play',
    description: 'Side projects, interface studies and drawings by Amaan Khan.',
  },
  ...PROJECTS.map((p) => ({ path: p.href, title: p.seoTitle, description: p.seoDescription, noindex: p.hidden })),
];

export const pageTitle = (title?: string) => (title ? `${title} | ${SITE_NAME}` : DEFAULT_META.title);
