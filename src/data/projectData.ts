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
      '/otagon/otagon3.png',
      '/otagon/aiprocessing.png',
      '/otagon/workinprogess.png',
      '/otagon/vision/1.png',
      '/otagon/vision/2.png',
      '/otagon/vision/3.png',
      '/otagon/vision/4.png',
      '/otagon/vision/5.png',
    ],
    summary:
      'An AI gaming companion that sees what you see. Solo-built from zero to a live product on web and PWA — 30+ features, spoiler-aware AI, paid tiers, PC-to-mobile sync.',
    tags: ['Solo Build', 'AI UX', 'Web + PWA', 'Live'],
    brandColor: '#8B5CF6',
  },
  {
    href: '/koinbasket',
    title: 'KoinBasket',
    description: 'Trading Platform & Mobile App',
    images: [
      '/images/casestudies/koinbasket/Main Dashboard - Expanded and Hover.jpg',
      '/images/casestudies/koinbasket/Home.png',
      '/images/casestudies/koinbasket/Coin Details.png',
      '/images/casestudies/koinbasket/Portfolio - Completed - Expanded View.png',
      '/images/casestudies/koinbasket/Manage - My baskets.png',
      '/images/casestudies/koinbasket/Exchange Popup.png',
      '/images/casestudies/koinbasket/homepage (3).png',
      '/images/casestudies/koinbasket/landingpage.png',
    ],
    summary:
      'From a one-week MVP contract to 70,000 users. Founding designer through a full rebrand, a design team, and a two-sided live-trading ecosystem.',
    tags: ['Fintech', '70K Users', 'Founding Designer'],
    brandColor: '#9FE870',
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
      '/images/casestudies/pebble/Hero Image Pebble 1600.jpeg',
      '/images/casestudies/pebble/2.jpg',
      '/images/casestudies/pebble/3.jpg',
      '/images/casestudies/pebble/4.jpg',
      '/images/casestudies/pebble/10.jpg',
      '/images/casestudies/pebble/13.jpg',
      '/images/casestudies/pebble/24.jpg',
      '/images/casestudies/pebble/36.jpg',
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
      '/images/casestudies/ivi/1 (3).jpg',
      '/images/casestudies/ivi/2 (3).jpg',
      '/images/casestudies/ivi/4.jpg',
      '/images/casestudies/ivi/5.jpg',
      '/images/casestudies/ivi/6.jpg',
      '/images/casestudies/ivi/10 (3).jpg',
      '/images/casestudies/ivi/15 (2).jpg',
      '/images/casestudies/ivi/20.jpg',
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
      '/images/casestudies/softwire/1.webp',
      '/images/casestudies/softwire/2.webp',
      '/images/casestudies/softwire/4.webp',
      '/images/casestudies/softwire/5.webp',
      '/images/casestudies/softwire/7.webp',
      '/images/casestudies/softwire/12.webp',
      '/images/casestudies/softwire/13.webp',
      '/images/casestudies/softwire/25.webp',
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
      '/images/casestudies/stampede/1.jpg',
      '/images/casestudies/stampede/1.1.jpg',
      '/images/casestudies/stampede/1.2.jpg',
      '/images/casestudies/stampede/2.jpg',
      '/images/casestudies/stampede/3.1.jpg',
      '/images/casestudies/stampede/4.1.jpg',
      '/images/casestudies/stampede/5.1 (1).jpg',
      '/images/casestudies/stampede/8-Stampede.jpg',
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
    images: ['/versus/hero.svg'],
    summary:
      'A tournament tracker for FIFA nights — leagues, knockouts, groups, live scoring, and a spectator link friends open on their phones. Solo-built on a static SPA + Supabase + WebRTC.',
    tags: ['Solo Build', 'Real-time', 'PWA'],
    brandColor: '#22C55E',
  },
  {
    href: '/screenshot',
    title: 'ScreenShot',
    description: 'PC → Phone Capture Sync',
    pill: 'ongoing',
    images: ['/screenshot/hero.svg'],
    summary:
      'Press F1 on your PC, see it on your phone seconds later. A pairing-code screenshot grabber with folders, lightbox, and an installable PWA — shipped in two weeks.',
    tags: ['Solo Build', 'PWA', 'v0'],
    brandColor: '#F59E0B',
  },
];
