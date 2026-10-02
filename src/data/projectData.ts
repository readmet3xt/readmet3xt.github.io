// Single source for every list of case studies: the home grid, the sidebar,
// the "next case study" link and per-route SEO. No `@/` imports, so the
// build config can read it too.

export type ProjectCategory = 'service' | 'product';

export interface ProjectData {
  href: string;
  title: string;
  category: ProjectCategory;
  /** Plain context line shown above the title, e.g. "RCA × VISA Innovation Centre, 2021". */
  context: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt: string;
  seoTitle: string;
  seoDescription: string;
  status?: 'Live';
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  service: 'Service design',
  product: "Products I've designed and built",
};

export const PROJECTS: ProjectData[] = [
  {
    href: '/pebble',
    title: 'Pebble',
    category: 'service',
    context: 'RCA × VISA Innovation Centre, 2021',
    summary:
      "A wellbeing service for remote teams, shaped by 1,200+ survey responses and 24 co-creation workshops. The Virtual Café concept went into VISA Innovation Centre's collaboration roadmap.",
    thumbnail: '/images/casestudies/pebble/1-cover-pic-960w.webp',
    thumbnailAlt: 'Pebble, a wellbeing companion for remote teams',
    seoTitle: 'Pebble',
    seoDescription:
      'A wellbeing service for remote teams, designed with VISA Innovation Centre through 24 co-creation workshops and 1,200+ survey responses.',
  },
  {
    href: '/stampede',
    title: 'Stampede',
    category: 'service',
    context: 'RCA × WWT × Airbnb, 2019',
    summary:
      'A method for matching conservation organisations by Power and Pace. Its first 3-hour workshop started the WWT × Airbnb collaboration.',
    thumbnail: '/images/casestudies/stampede/6-workshop-1.webp',
    thumbnailAlt: 'Stampede co-creation workshop with WWT and Airbnb',
    seoTitle: 'Stampede',
    seoDescription:
      'A partnership matchmaking method for conservation organisations. Its first facilitated workshop started the WWT × Airbnb collaboration.',
  },
  {
    href: '/iviprogram',
    title: 'Invisible Value Income Program',
    category: 'service',
    context: 'RCA × BCG Platinion, 2020',
    summary:
      "A speculative service that makes women's unpaid domestic work economically visible. Core77 Student Notable 2021; BCG adopted the research framework.",
    thumbnail: '/images/casestudies/ivi/1-bad-health-960w.webp',
    thumbnailAlt: 'I.V.I. Program research on the working mother penalty',
    seoTitle: 'Invisible Value Income Program',
    seoDescription:
      "A speculative service that makes women's unpaid domestic work economically visible. Core77 Design Awards 2021, Student Notable.",
  },
  {
    href: '/softwire',
    title: 'LNER App Clip',
    category: 'service',
    context: 'Softwire × LNER, London, 2022',
    summary:
      'Instant train tickets for people running for a train. I co-led UX with another design intern; testing under time pressure cut checkout time 40%.',
    thumbnail: '/images/casestudies/softwire/3-2-workshop-crazy-8.webp',
    thumbnailAlt: 'Crazy 8s ideation workshop for the LNER App Clip',
    seoTitle: 'LNER App Clip',
    seoDescription:
      'An App Clip for instant LNER train tickets, co-led during a Softwire design internship. Usability testing under time pressure cut checkout time 40%.',
  },
  {
    href: '/koinbasket',
    title: 'KoinBasket',
    category: 'product',
    context: 'Founding and senior designer, 2022–2025',
    summary:
      'Founding designer from a one-week MVP, on a crypto investing platform that grew past 70,000 users. I came back later as senior designer for a redesign and rebrand.',
    thumbnail: '/images/casestudies/koinbasket/2-home-page-960w.webp',
    thumbnailAlt: 'KoinBasket home page',
    seoTitle: 'KoinBasket',
    seoDescription:
      'Founding and senior designer at KoinBasket, a non-custodial crypto investing platform that grew past 70,000 users.',
  },
  {
    href: '/otagon',
    title: 'Otagon',
    category: 'product',
    context: 'Otalabs, 2025–present',
    summary:
      'An AI companion that reads a game screenshot and gives a hint that stops before spoilers. I designed and built it: phone app, desktop connector and backend.',
    thumbnail: '/images/casestudies/otagon/1-home-page-landing-960w.webp',
    thumbnailAlt: 'Otagon landing page',
    seoTitle: 'Otagon',
    seoDescription:
      'Otagon, an AI gaming companion that reads a screenshot and gives a spoiler-free hint. Designed and built solo; public launch July 2026.',
    status: 'Live',
  },
  {
    href: '/lawx',
    title: 'Law.X',
    category: 'product',
    context: 'Pixel+Form, 2025',
    summary:
      "Turned a black-box legal chatbot into a workspace lawyers can supervise, by showing the AI's reasoning instead of hiding it. One-month design contract.",
    thumbnail: '/images/casestudies/lawx/lawx-6-960w.webp',
    thumbnailAlt: 'Law.X legal workspace',
    seoTitle: 'Law.X',
    seoDescription:
      "Designing transparency into legal AI: a workspace that shows lawyers the model's reasoning so they can check it.",
  },
  {
    href: '/versus',
    title: 'Versus',
    category: 'product',
    context: 'Side project, 2026',
    summary:
      'A live tournament tracker for game nights: leagues, knockouts, live scores and a spectator link friends open on their phones.',
    thumbnail: '/images/casestudies/versus/1-landing-page-desktop-960w.webp',
    thumbnailAlt: 'Versus landing page',
    seoTitle: 'Versus',
    seoDescription: 'Versus, a live tournament tracker for game nights with live scoring and a spectator link.',
    status: 'Live',
  },
  {
    href: '/screenshot',
    title: 'ScreenShot',
    category: 'product',
    context: 'Side project, 2026',
    summary:
      'Press F1 on your PC and the screenshot appears on your phone a moment later. A Windows app, a relay and a phone gallery.',
    thumbnail: '/images/casestudies/screenshot/1-landing-page-hero-960w.webp',
    thumbnailAlt: 'ScreenShot landing page',
    seoTitle: 'ScreenShot',
    seoDescription: 'ScreenShot: press F1 on a Windows PC and the screenshot appears on your phone.',
  },
];

export const getProject = (href: string) => PROJECTS.find((p) => p.href === href);

export const getNextProject = (href: string) => {
  const i = PROJECTS.findIndex((p) => p.href === href);
  return i < 0 ? null : PROJECTS[(i + 1) % PROJECTS.length];
};

export const projectsByCategory = (category: ProjectCategory) =>
  PROJECTS.filter((p) => p.category === category);
