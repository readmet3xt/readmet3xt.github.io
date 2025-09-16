import { AnimatedProjectCard } from '@/components/AnimatedProjectCard';
import { ProjectCard } from '@/components/ProjectCard';
import { WelcomeCard } from '@/components/WelcomeCard';

// Import project images
import koinbasket1 from '/lovable-uploads/02a3c6bb-17dd-4d61-92a0-6ea7b5defb71.png';
import koinbasket2 from '/lovable-uploads/afffb1f8-f97f-43bf-aad0-561e1bd11059.png';
import softwireImage from '/lovable-uploads/52c6231a-18dd-4a9b-8876-aece1c3e8ecc.png';
import pebbleImage from '/lovable-uploads/cb1a1f3c-1847-4464-b0bb-8f75aa61e069.png';
import iviImage from '/lovable-uploads/edac5882-86eb-4c8d-90e2-3ae3b2034954.png';
import stampedeImage from '/lovable-uploads/98dba331-62c7-4ed1-a6ca-8cb63df6ac7d.png';

export const ProjectsGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-6 md:gap-6 mb-20 auto-rows-fr w-full max-w-full" aria-label="Portfolio projects">
      <WelcomeCard />
      
      <AnimatedProjectCard
        href="/koinbasket"
        title="KoinBasket"
        description="Trading Platform & Mobile App"
        images={[koinbasket1, koinbasket2]}
        className="reveal-on-scroll"
        summary="Led design evolution from MVP to market leader, growing from 0 to 70,000 users through strategic UX and live trading platform"
        tags={["Fintech", "MVP Design", "Rebranding"]}
      />

      <ProjectCard
        href="/softwire"
        title="Softwire"
        description="LNER App Clip"
        image={softwireImage}
        className="reveal-on-scroll"
        summary="Designed streamlined ticket booking experience using Apple's App Clip technology for stress-free last-minute train travel"
        tags={["App Clip", "Prototyping", "Usability Testing"]}
      />

      <ProjectCard
        href="/pebble"
        title="Pebble"
        description="Employee Wellbeing Service"
        image={pebbleImage}
        className="reveal-on-scroll"
        summary="Created virtual companion service to combat workplace stress and foster connection in remote work environments"
        tags={["Service Design", "Employee Wellbeing", "Remote Work"]}
      />

      <ProjectCard
        href="/iviprogram"
        title="Invisible Value Income Program"
        description="Social Impact Design"
        image={iviImage}
        className="reveal-on-scroll"
        summary="Designed inclusive financial service addressing systemic economic exclusion through human-centered design approach"
        tags={["Social Impact", "Inclusive Design", "Speculative Design"]}
      />

      <ProjectCard
        href="/stampede"
        title="Stampede"
        description="Conservation Partnerships"
        image={stampedeImage}
        className="reveal-on-scroll"
        summary="Developed platform connecting conservation organizations with local communities for sustainable wildlife protection"
        tags={["Conservation", "Match-making", "Sustainability"]}
      />
    </section>
  );
};