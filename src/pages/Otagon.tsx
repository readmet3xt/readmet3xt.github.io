import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyParagraph,
  CaseStudyQuote,
  CaseStudyList,
  CaseStudyImage,
  CaseStudyImageGrid,
  CaseStudyCard,
  CaseStudyCardGrid,
  CaseStudyStatsGrid,
} from '@/components/case-study';

export const Otagon = () => {
  return (
    <CaseStudyLayout
      title="Otagon"
      externalLink="https://otagon.app"
      externalLabel="Visit otagon.app"
    >
      <CaseStudyHero
        title="Building an AI Gaming Companion from Scratch"
        subtitle="A designer's journey into full-stack development"
        pills={[
          'React 19',
          'TypeScript',
          'AI/ML',
          'PWA',
          'Supabase',
          'Google Gemini',
          'Full-Stack',
        ]}
        intro="What happens when a product designer decides to build production-grade software? Otagon is my answer—an AI gaming companion that analyzes screenshots in real-time, providing context-aware hints without spoilers. Along the way, I learned that over-engineering 97 microservices is just as dangerous as under-engineering, and that design thinking applies to code architecture as much as UI design."
        externalLink="https://otagon.app"
        externalLabel="otagon.app"
        overview={{
          role: [
            'Full-stack development (Frontend + Backend + AI)',
            'UX/UI design and design system architecture',
            'Database schema design and optimization',
            'Performance optimization strategy',
          ],
          timeline: '3 months (Personal Project)',
          recognition: '100x performance improvement, 85% cost reduction',
          tools: [
            'React 19',
            'TypeScript',
            'Vite',
            'Supabase',
            'Google Gemini AI',
            'PostgreSQL',
            'Tailwind CSS',
            'PWA',
          ],
        }}
        heroImage="/otagon/workinprogess.png"
        heroImageAlt="Otagon AI Gaming Companion Interface"
      />

      {/* The Story */}
      <CaseStudySection title="The Story Behind Otagon">
        <CaseStudyParagraph lead>
          It started as a personal challenge: could I, a designer who codes, ship production-grade 
          full-stack software? Not a prototype or a "designer's version"—but a real application 
          handling authentication, databases, AI integration, and real-time processing.
        </CaseStudyParagraph>
        
        <CaseStudyParagraph>
          The gaming industry had a gap I couldn't ignore. Gamers get stuck—on puzzles, boss fights, 
          obscure mechanics. They turn to walkthroughs, but those are riddled with spoilers. I wanted 
          something smarter: an AI that could look at your screen, understand exactly where you are 
          in a game, and give you just enough help without ruining the experience.
        </CaseStudyParagraph>

        <CaseStudyQuote author="Personal reflection" role="3 AM debugging session">
          The technical journey was humbling. I over-engineered catastrophically, fought OAuth 
          authentication demons, and debugged conflicting database schemas at 3am. But through 
          systematic refactoring, I achieved 100x performance gains and slashed API costs by 85%.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* The Challenge */}
      <CaseStudySection title="The Challenge">
        <CaseStudyParagraph lead>
          Building Otagon meant solving two fundamentally different problems simultaneously: 
          the user experience challenge of making AI helpful without spoiling games, and the 
          technical challenge of making it all work at scale without burning through API costs.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="User Experience Challenges">
            <CaseStudyList items={[
              { title: 'Spoiler Prevention', description: 'How do you give hints without revealing too much?' },
              { title: 'Context Awareness', description: 'The AI needs to understand where you are in the game' },
              { title: 'Instant Response', description: 'Gamers won\'t wait—help must feel immediate' },
              { title: 'Cross-Platform', description: 'Works on any device, even while gaming on another' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Technical Challenges">
            <CaseStudyList items={[
              { title: 'Real-time Image Processing', description: 'Analyzing screenshots with AI quickly enough' },
              { title: 'Cost Optimization', description: 'AI APIs are expensive—every query costs money' },
              { title: 'Offline Support', description: 'PWA that works without constant connectivity' },
              { title: 'Scale Architecture', description: 'Built for growth, not just a demo' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyParagraph>
          The biggest lesson? I initially created 97+ microservices thinking "that's what real 
          engineers do." It was a maintenance nightmare. Learning to ruthlessly simplify—consolidating 
          down to 8 core services—was more valuable than any technical skill.
        </CaseStudyParagraph>
      </CaseStudySection>

      {/* Solution & Architecture */}
      <CaseStudySection title="Solution & Architecture">
        <CaseStudyParagraph lead>
          I built a full-stack solution where design thinking informed every technical decision. 
          My UX background drove architecture choices that engineers might not prioritize—and 
          that made all the difference.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/otagon/aiprocessing.png"
          alt="Otagon Architecture Diagram"
          caption="The AI processing pipeline that powers real-time screenshot analysis"
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React 19.1 with TypeScript',
              'Vite 6.2 for build optimization',
              'Tailwind CSS design system',
              'PWA with service worker',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend & Database">
            <CaseStudyList items={[
              'Supabase for auth & real-time DB',
              'Express.js API server',
              'PostgreSQL with 12 tables',
              'Row-Level Security (RLS)',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="AI Integration">
            <CaseStudyList items={[
              'Google Gemini 2.5 (Flash + Pro)',
              'Image processing (10 images/context)',
              'Context management (20 messages)',
              'Intelligent response caching',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Key Features">
            <CaseStudyList items={[
              'Real-time screenshot analysis',
              'Cross-device synchronization',
              'Offline-first architecture',
              'Tier-based user management',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Key Features */}
      <CaseStudySection title="Key Features I Built">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🤖 Intelligent Screenshot Analysis">
            Real-time game identification from screenshots, progress estimation, and spoiler-free 
            assistance. The AI creates context-aware hints based on exactly where you are in the game.
          </CaseStudyCard>
          
          <CaseStudyCard title="💬 Three AI Personas">
            Screenshot Analyst for image-based help, Game Companion for ongoing guidance, and 
            General Assistant for everything else. Each has distinct personality and capabilities.
          </CaseStudyCard>
          
          <CaseStudyCard title="👥 Tiered User System">
            Free tier with 55 text queries and 25 images monthly. Pro tier scales to 1,583 text 
            queries and 328 images. Built a sustainable freemium model from day one.
          </CaseStudyCard>
          
          <CaseStudyCard title="📱 Progressive Web App">
            Offline-first with IndexedDB fallback, background sync, installable with app shortcuts, 
            and cross-device synchronization. Works like a native app, deploys like a website.
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          images={[
            { src: '/otagon/chatinput.png', alt: 'Chat Interface', caption: 'AI Conversation' },
            { src: '/otagon/insightstabs.png', alt: 'Analysis View', caption: 'Screenshot Analysis' },
            { src: '/otagon/playerprofile.png', alt: 'Player Profile', caption: 'User Dashboard' },
            { src: '/otagon/sidebarsorting.png', alt: 'Navigation', caption: 'Game Library' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* Design-Driven Development */}
      <CaseStudySection title="Bridging Design & Development">
        <CaseStudyParagraph lead>
          As a designer who codes, I made architecture decisions driven by UX principles rather 
          than pure engineering patterns. This "design-thinking-meets-code" approach resulted in 
          a system that's both performant and maintainable.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { 
            title: 'React 19 Concurrent Rendering', 
            description: 'Chose for smooth AI response streaming—users see typing indicators instead of loading spinners, maintaining conversational flow.' 
          },
          { 
            title: 'Component Composition', 
            description: 'Built 40+ reusable components that map directly to Figma designs—developers and designers speak the same language.' 
          },
          { 
            title: 'Bundle Optimization', 
            description: 'Aggressively optimized to 1.84MB because gamers need instant access on mobile. User experience drove technical constraints.' 
          },
          { 
            title: 'Behavior-Based Caching', 
            description: 'Designed caching rules based on how users actually interact (frequent screenshot re-analysis), not generic TTL rules.' 
          },
          { 
            title: 'Error States as Design Moments', 
            description: 'Every error condition has a designed fallback with actionable next steps—failures are part of the journey, not edge cases.' 
          },
        ]} />
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results & Impact">
        <CaseStudyStatsGrid
          stats={[
            { value: '100x', label: 'Faster Loading', sublabel: '5-10s → 0.1s' },
            { value: '85%', label: 'Cost Reduction', sublabel: 'API Optimization' },
            { value: '97→8', label: 'Services Consolidated', sublabel: 'Architecture Cleanup' },
            { value: '1.84MB', label: 'Bundle Size', sublabel: 'Mobile Optimized' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Performance Wins">
            <CaseStudyList items={[
              '100x faster insight loading (5-10s → 0.1s)',
              '85% reduction in API costs via intelligent caching',
              '50-80% faster responses through parallel operations',
              '60-70% reduction in memory usage',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Code Quality">
            <CaseStudyList items={[
              '97 services consolidated into 8 core services',
              'Zero TypeScript errors with full type safety',
              'Comprehensive error handling with fallbacks',
              '95+ Lighthouse performance score',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="What I Learned">
        <CaseStudyParagraph lead>
          This project fundamentally changed how I think about the designer-developer relationship. 
          The biggest insight: design thinking (simplicity, user-centricity, iterative refinement) 
          applies to code architecture as much as UI design.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Technical Insights">
            <CaseStudyList items={[
              { title: 'Less is More', description: 'Architectural simplicity beats theoretical scalability' },
              { title: 'Performance Psychology', description: 'Users perceive 0.1s as instant, 1s as delayed' },
              { title: 'Type Safety Saves Nights', description: 'TypeScript prevents 3am debugging sessions' },
              { title: 'Caching is King', description: '85% savings came from understanding user patterns' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="What I'd Do Differently">
            <CaseStudyList items={[
              { title: 'Start Simple', description: 'Begin with monolith, extract services only when needed' },
              { title: 'Test Earlier', description: 'AI response quality testing should happen week 1' },
              { title: 'Document Decisions', description: 'Decision logs explaining WHY save refactoring time' },
              { title: 'Monitor from Day 1', description: 'Analytics validate assumptions about behavior' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          The revelation: I over-engineered because I thought "that's what real engineers do." 
          The best engineers I've since worked with prioritize simplicity above all else. 
          Consolidating 97 services into 8 wasn't just optimization—it was learning to think clearly.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* What's Next */}
      <CaseStudySection title="What's Next">
        <CaseStudyParagraph lead>
          Otagon is live and growing. The next chapter focuses on user acquisition and 
          feature refinement based on real usage data.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          'User acquisition through gaming Discord communities',
          'A/B testing different AI response tones and personalities',
          'Analytics dashboards to validate which features drive retention',
          'Partnerships with gaming content creators for co-marketing',
        ]} />

        <CaseStudyParagraph>
          This project proved that designers can ship production-grade code—and that the 
          design thinking we bring to UI problems is equally valuable for technical architecture. 
          The lines between "design" and "development" are more blurred than ever, and that's 
          exactly where the interesting work happens.
        </CaseStudyParagraph>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
