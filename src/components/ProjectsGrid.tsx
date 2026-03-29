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
        summary="Built an advanced AI gaming companion with real-time screenshot analysis, intelligent conversation, and personalized gaming insights."
        tags={["React TypeScript", "AI/ML", "PWA", "Supabase"]}
      />

      <AnimatedProjectCard
        index={1}
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
        summary="Designed early concepts for an AI assistant for lawyers that visualizes reasoning processes, providing trust through transparency and precise control over legal tone"
        tags={["Legal Tech", "AI UX", "Transparency Design"]}
      />

      <AnimatedProjectCard
        index={2}
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
        summary="Led design evolution from MVP to market leader, growing from 0 to 70,000 users through strategic UX and live trading platform"
        tags={["Fintech", "MVP Design", "Rebranding"]}
      />

      <AnimatedProjectCard
        index={3}
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
        summary="Designed streamlined ticket booking experience using Apple's App Clip technology for stress-free last-minute train travel"
        tags={["App Clip", "Prototyping", "Usability Testing"]}
      />

      <AnimatedProjectCard
        index={4}
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
        summary="Created virtual companion service to combat workplace stress and foster connection in remote work environments"
        tags={["Service Design", "Employee Wellbeing", "Remote Work"]}
      />

      <AnimatedProjectCard
        index={5}
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
        summary="Designed inclusive financial service addressing systemic economic exclusion through human-centered design approach"
        tags={["Social Impact", "Inclusive Design", "Speculative Design"]}
      />

      <AnimatedProjectCard
        index={6}
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
        summary="Developed platform connecting conservation organizations with local communities for sustainable wildlife protection"
        tags={["Conservation", "Match-making", "Sustainability"]}
      />
    </section>
  );
};