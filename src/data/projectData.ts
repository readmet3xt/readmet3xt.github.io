export interface ProjectData {
  href: string;
  title: string;
  description: string;
  images: string[];
  summary: string;
  tags: string[];
  pill?: 'ongoing' | 'launched';
  brandColor: string;
}

export const PROJECTS: ProjectData[] = [
  {
    href: '/otagon',
    title: 'Otagon Gaming Companion',
    description: 'AI-Powered Gaming Assistant',
    pill: 'launched',
    images: [
      '/otagon/1-home-page-landing.png',
      '/otagon/17-subtabs-in-desktop.png',
      '/otagon/8-pc-connector.png',
      '/otagon/2-login.png',
    ],
    summary:
      'An AI gaming companion that sees what you see. Solo-built from zero to a live product on web and PWA — 30+ features, spoiler-aware AI, paid tiers, PC-to-mobile sync.',
    tags: ['Solo Build', 'AI UX', 'Web + PWA', 'Live'],
    brandColor: '#FF8C00',
  },
  {
    href: '/koinbasket',
    title: 'KoinBasket',
    description: 'Trading Platform & Mobile App',
    images: [
      '/images/casestudies/koinbasket/12-new-product-dashboard-live-trading.png',
      '/images/casestudies/koinbasket/2-home-page.jpg',
      '/images/casestudies/koinbasket/17-new-product-live-trading.png',
      '/images/casestudies/koinbasket/9-fantasy-league-team-creator.png',
    ],
    summary:
      'From a one-week MVP contract to 70,000 users. Founding designer through a full rebrand, a design team, and a two-sided live-trading ecosystem.',
    tags: ['Fintech', '70K Users', 'Founding Designer'],
    brandColor: '#8B5CF6',
  },
  {
    href: '/lawx',
    title: 'Law.X',
    description: 'Transparent Legal Assistant',
    images: [
      '/jollyai/jollyai6.png',
      '/jollyai/jollyai1.png',
      '/jollyai/jollyai2.png',
      '/jollyai/jollyai3.png',
      '/jollyai/jollyai4.png',
      '/jollyai/jollyai5.png',
      '/jollyai/jollyai7.png',
      '/jollyai/jollyai8.png',
    ],
    summary:
      "Turned a black-box legal chatbot into a workspace lawyers can supervise — by showing the AI's reasoning instead of hiding it. One-month design contract.",
    tags: ['Legal Tech', 'AI UX', 'Transparency Design'],
    brandColor: '#EAB308',
  },
  {
    href: '/pebble',
    title: 'Pebble',
    description: 'Employee Wellbeing Service',
    images: [
      '/images/casestudies/pebble/1-cover-pic.jpg',
      '/images/casestudies/pebble/9-cafe.jpg',
      '/images/casestudies/pebble/8-how-deep-work-works.jpg',
      '/images/casestudies/pebble/10-how-it-works.jpg',
    ],
    summary:
      "A wellbeing companion for remote teams, built on 1,200+ survey responses and 24 workshops. The Virtual Café concept was adopted into VISA's collaboration roadmap.",
    tags: ['Service Design', 'VISA Innovation', 'Employee Wellbeing'],
    brandColor: '#26A69A',
  },
  {
    href: '/iviprogram',
    title: 'Invisible Value Income Program',
    description: 'Social Impact Design',
    images: [
      '/images/casestudies/ivi/1-bad-health.jpg',
      '/images/casestudies/ivi/7-sensei.jpeg',
      '/images/casestudies/ivi/5-research-findings.jpeg',
      '/images/casestudies/ivi/2-good-mental-health.jpg',
    ],
    summary:
      "Core77-awarded speculative service that makes women's invisible domestic labour economically visible. The research framework was adopted internally by BCG.",
    tags: ['Speculative Design', 'Core77 Award', 'Future of Work'],
    brandColor: '#7A8EB1',
  },
  {
    href: '/softwire',
    title: 'Softwire',
    description: 'LNER App Clip',
    images: [
      '/images/casestudies/softwire/1-problem.webp',
      '/images/casestudies/softwire/11-app-clip-flow-chart.webp',
      '/images/casestudies/softwire/13-usability-testing.webp',
      '/images/casestudies/softwire/10-opportunity.webp',
    ],
    summary:
      "Designing for people running to catch trains. Co-led UX for LNER's sub-10MB instant-launch ticket booking App Clip — validated with users and handed to engineering in 8 weeks.",
    tags: ['App Clip', 'Mobile UX', 'LNER'],
    brandColor: '#E3000F',
  },
  {
    href: '/stampede',
    title: 'Stampede',
    description: 'Conservation Partnerships',
    images: [
      '/images/casestudies/stampede/1-problem-statement.jpg',
      '/images/casestudies/stampede/2-how-the-service-works.jpg',
      '/images/casestudies/stampede/3-all-animals.jpg',
      '/images/casestudies/stampede/11-results.jpg',
    ],
    summary:
      "A facilitation methodology that turns conservation 'happy accidents' into designed partnerships. One 3-hour workshop initiated the WWT × Airbnb collaboration.",
    tags: ['Service Design', 'Conservation', 'Facilitation'],
    brandColor: '#A8A9A1',
  },
  {
    href: '/versus',
    title: 'Versus',
    description: 'Live Tournament Tracker',
    pill: 'ongoing',
    images: ['/versus/1-landing-page-desktop.png', '/versus/7-tournament-home-page-admin.png'],
    summary:
      'A tournament tracker for FIFA nights — leagues, knockouts, groups, live scoring, and a spectator link friends open on their phones. Solo-built on a static SPA + Supabase + WebRTC.',
    tags: ['Solo Build', 'Real-time', 'PWA'],
    brandColor: '#ADFF2F',
  },
  {
    href: '/screenshot',
    title: 'ScreenShot',
    description: 'PC → Phone Capture Sync',
    pill: 'ongoing',
    images: [
      '/screenshot/1-landing-page-hero.png',
      '/screenshot/2-after-login-gallery.png',
      '/screenshot/3-connector-wifi.png',
      '/screenshot/4-gallery-websocket.png',
    ],
    summary:
      'Press F1 on your PC, see it on your phone seconds later. A pairing-code screenshot grabber with folders, lightbox, and an installable PWA — shipped in two weeks.',
    tags: ['Solo Build', 'PWA', 'v0'],
    brandColor: '#F59E0B',
  },
];
