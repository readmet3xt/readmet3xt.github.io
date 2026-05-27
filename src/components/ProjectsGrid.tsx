import { AnimatedProjectCard } from '@/components/AnimatedProjectCard';
import { WelcomeCard } from '@/components/WelcomeCard';
import { useSidebar } from '@/components/SidebarContext';
import { cn } from '@/lib/utils';

export const ProjectsGrid = () => {
  const { isOpen } = useSidebar();

  return (
    <section
      id="work"
      className={cn(
        "grid gap-12 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 auto-rows-fr w-full max-w-full scroll-mt-20",
        isOpen
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      )}
      aria-label="Portfolio projects"
    >
      <WelcomeCard />

      <AnimatedProjectCard
        index={0}
        href="/otagon"
        title="Otagon Gaming Companion"
        description="AI-Powered Gaming Assistant"
        pill="launched"
        images={[
          '/otagon/otagon3.png',
          '/otagon/aiprocessing.png',
          '/otagon/workinprogess.png',
          '/otagon/vision/1.png',
          '/otagon/vision/2.png',
          '/otagon/vision/3.png',
          '/otagon/vision/4.png',
          '/otagon/vision/5.png',
        ]}
        className=""
        summary="An AI gaming companion that sees what you see. Designed and built solo from zero to a live PWA + iOS + Android product with 30+ features, spoiler-aware AI, paid tiers, and PC-to-Mobile sync."
        tags={["Solo Build", "AI UX", "PWA + Mobile", "Live"]}
      />

      <AnimatedProjectCard
        index={1}
        href="/versus"
        title="Versus"
        description="Live Tournament Tracker"
        pill="ongoing"
        images={[
          '/versus/hero.svg',
        ]}
        className=""
        summary="A pro tournament tracker for FIFA/FC nights — leagues, knockouts, groups, live scoring, and a shareable spectator link. Built solo on a static SPA + Supabase + WebRTC stack."
        tags={["Solo Build", "Real-time", "PWA"]}
      />

      <AnimatedProjectCard
        index={2}
        href="/screenshot"
        title="ScreenShot"
        description="PC → Phone Capture Sync"
        pill="ongoing"
        images={[
          '/screenshot/hero.svg',
        ]}
        className=""
        summary="Press F1 on your PC, see it on your phone. A pairing-code screenshot grabber with per-user folders, lightbox, and an installable PWA — shipped in 2 weeks."
        tags={["Solo Build", "PWA", "v0"]}
      />

      <AnimatedProjectCard
        index={3}
        href="/lawx"
        title="Law.X"
        description="Transparent Legal Assistant"
        images={[
          '/jollyai/jollyai6.png',
          '/jollyai/jollyai1.png',
          '/jollyai/jollyai2.png',
          '/jollyai/jollyai3.png',
          '/jollyai/jollyai4.png',
          '/jollyai/jollyai5.png',
          '/jollyai/jollyai7.png',
          '/jollyai/jollyai8.png',
        ]}
        className=""
        summary="Turned a 'black box' legal chatbot into a workspace lawyers actually trust — by showing the AI's reasoning instead of hiding it. One-month design contract."
        tags={["Legal Tech", "AI UX", "Transparency Design"]}
      />

      <AnimatedProjectCard
        index={4}
        href="/koinbasket"
        title="KoinBasket"
        description="Trading Platform & Mobile App"
        images={[
          '/images/casestudies/koinbasket/Main Dashboard - Expanded and Hover.jpg',
          '/images/casestudies/koinbasket/Home.png',
          '/images/casestudies/koinbasket/Coin Details.png',
          '/images/casestudies/koinbasket/Portfolio - Completed - Expanded View.png',
          '/images/casestudies/koinbasket/Manage - My baskets.png',
          '/images/casestudies/koinbasket/Exchange Popup.png',
          '/images/casestudies/koinbasket/homepage (3).png',
          '/images/casestudies/koinbasket/landingpage.png',
        ]}
        className=""
        summary="Joined as founding designer on a one-week MVP contract. Scaled the platform from 0 to 70,000 users, led a full rebrand, and built a two-sided live-trading ecosystem."
        tags={["Fintech", "MVP Design", "Rebranding"]}
      />

      <AnimatedProjectCard
        index={5}
        href="/softwire"
        title="Softwire"
        description="LNER App Clip"
        images={[
          '/images/casestudies/softwire/1.webp',
          '/images/casestudies/softwire/2.webp',
          '/images/casestudies/softwire/4.webp',
          '/images/casestudies/softwire/5.webp',
          '/images/casestudies/softwire/7.webp',
          '/images/casestudies/softwire/12.webp',
          '/images/casestudies/softwire/13.webp',
          '/images/casestudies/softwire/25.webp',
        ]}
        className=""
        summary="Designing for users running to catch trains. Led UX for LNER's sub-10MB instant-launch ticket booking via Apple App Clip during my Softwire internship."
        tags={["App Clip", "Mobile UX", "LNER"]}
      />

      <AnimatedProjectCard
        index={6}
        href="/pebble"
        title="Pebble"
        description="Employee Wellbeing Service"
        images={[
          '/images/casestudies/pebble/Hero Image Pebble 1600.jpeg',
          '/images/casestudies/pebble/2.jpg',
          '/images/casestudies/pebble/3.jpg',
          '/images/casestudies/pebble/4.jpg',
          '/images/casestudies/pebble/10.jpg',
          '/images/casestudies/pebble/13.jpg',
          '/images/casestudies/pebble/24.jpg',
          '/images/casestudies/pebble/36.jpg',
        ]}
        className=""
        summary="A VISA-backed virtual companion that turns isolation into connection. The Virtual Café concept was adopted into VISA's internal collaboration roadmap."
        tags={["Service Design", "VISA Innovation", "Employee Wellbeing"]}
      />

      <AnimatedProjectCard
        index={7}
        href="/iviprogram"
        title="Invisible Value Income Program"
        description="Social Impact Design"
        images={[
          '/images/casestudies/ivi/1 (3).jpg',
          '/images/casestudies/ivi/2 (3).jpg',
          '/images/casestudies/ivi/4.jpg',
          '/images/casestudies/ivi/5.jpg',
          '/images/casestudies/ivi/6.jpg',
          '/images/casestudies/ivi/10 (3).jpg',
          '/images/casestudies/ivi/15 (2).jpg',
          '/images/casestudies/ivi/20.jpg',
        ]}
        className=""
        summary="Core77-awarded speculative service that makes women's invisible domestic labour economically visible. Research framework adopted internally by BCG."
        tags={["Speculative Design", "Core77 Award", "Future of Work"]}
      />

      <AnimatedProjectCard
        index={8}
        href="/stampede"
        title="Stampede"
        description="Conservation Partnerships"
        images={[
          '/images/casestudies/stampede/1.jpg',
          '/images/casestudies/stampede/1.1.jpg',
          '/images/casestudies/stampede/1.2.jpg',
          '/images/casestudies/stampede/2.jpg',
          '/images/casestudies/stampede/3.1.jpg',
          '/images/casestudies/stampede/4.1.jpg',
          '/images/casestudies/stampede/5.1 (1).jpg',
          '/images/casestudies/stampede/8-Stampede.jpg',
        ]}
        className=""
        summary="A facilitation methodology that turns conservation 'happy accidents' into designed partnerships. Initiated the WWT × Airbnb collaboration in a single 3-hour workshop."
        tags={["Service Design", "Conservation", "Facilitation"]}
      />
    </section>
  );
};