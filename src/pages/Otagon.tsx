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
      title="Otagon AI"
      externalLink="https://otagon.app"
      externalLabel="Visit otagon.app"
    >
      <CaseStudyHero
        title="AI-Powered Gaming Companion Platform"
        subtitle="Full product ownership from conception to launch"
        pills={[
          'Product Management',
          'React',
          'TypeScript',
          'AI/ML',
          'PWA',
          'Supabase',
          'Google Gemini',
        ]}
        intro="Otagon AI is an AI-powered gaming companion that helps gamers get real-time assistance, strategy tips, and game-specific insights while playing. As the Product Manager with full ownership, I led the product from conception to launch over a 6-month development cycle, building a fully functional PWA serving 3 user tiers with 15+ core features and AI integration."
        externalLink="https://otagon.app"
        externalLabel="otagon.app"
        overview={{
          role: [
            'Full product ownership from conception to launch',
            'User research and persona development',
            'Feature specification and prioritization',
            'Go-to-market strategy and pricing',
          ],
          timeline: '6 months development cycle',
          recognition: '15+ features shipped, 95%+ feature completion, <3s response time',
          tools: [
            'React',
            'TypeScript',
            'Vite',
            'Supabase',
            'Google Gemini 2.5',
            'PostgreSQL',
            'Tailwind CSS',
            'PWA',
          ],
        }}
        heroImage="/otagon/workinprogess.png"
        heroImageAlt="Otagon AI Gaming Companion Interface"
      />

      {/* Problem Statement */}
      <CaseStudySection title="Problem Statement">
        <CaseStudyParagraph lead>
          Gamers frequently need help during gameplay—whether it's boss strategies, storyline context, 
          item locations, or build optimization. Current solutions have significant friction that 
          breaks immersion and creates anxiety around spoilers.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Current Solutions & Problems">
            <CaseStudyList items={[
              { title: 'Alt-Tab to browser', description: 'Breaks immersion, risk of spoilers' },
              { title: 'YouTube walkthroughs', description: 'Time-consuming, not contextual' },
              { title: 'Gaming wikis', description: 'Outdated, overwhelming information' },
              { title: 'Discord/Reddit', description: 'Wait time for responses, inconsistent quality' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="User Research Insights">
            <CaseStudyList items={[
              { title: '78%', description: 'of gamers alt-tab during gameplay sessions' },
              { title: '3-5 minutes', description: 'average time spent searching for game help' },
              { title: '45%', description: 'avoid seeking help due to spoiler anxiety' },
              { title: '65%', description: 'prefer mobile companion apps for console/PC gaming' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote author="Opportunity Insight" role="Product Vision">
          Create an AI companion that provides instant, contextual, spoiler-free gaming assistance 
          through screenshot analysis and natural conversation.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Product Vision & Strategy */}
      <CaseStudySection title="Product Vision & Strategy">
        <CaseStudyParagraph lead>
          "Be the ultimate AI gaming companion that understands where you are in any game and 
          provides exactly the help you need, without spoilers."
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🎯 Instant Context Understanding">
            <CaseStudyList items={[
              'Screenshot analysis for automatic game detection',
              'Progress tracking without manual input',
              'Spoiler-aware responses based on player progress',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="📱 Multi-Platform Accessibility">
            <CaseStudyList items={[
              'PWA for mobile-first experience',
              'PC companion app for seamless screenshot capture',
              'Cross-device sync for continuous sessions',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 Personalized Intelligence">
            <CaseStudyList items={[
              'Player profile customization (casual vs. completionist)',
              'Genre-specific assistance (RPG builds vs. FPS tactics)',
              'Learning from conversation history',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="💰 Sustainable Business Model">
            <CaseStudyList items={[
              'Freemium model with clear value differentiation',
              'Query-based limits (not arbitrary restrictions)',
              'Vanguard founding member program for early adopters',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* User Personas */}
      <CaseStudySection title="User Personas & Journeys">
        <CaseStudyParagraph lead>
          Through user research, I identified three primary personas that shaped our tiered 
          product strategy and feature prioritization.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="🎮 The Casual Gamer">
            <CaseStudyParagraph>
              <strong>"Weekend Warrior"</strong><br/>
              25-35, plays 5-10 hours/week<br/><br/>
              <strong>Pain Point:</strong> Gets stuck on bosses, loses momentum<br/>
              <strong>Need:</strong> Quick tips without deep research<br/>
              <strong>Tier:</strong> Free (55 text + 25 image queries/month)
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="⚔️ The Dedicated Player">
            <CaseStudyParagraph>
              <strong>"Story Seeker"</strong><br/>
              20-30, plays 15-25 hours/week<br/><br/>
              <strong>Pain Point:</strong> Wants full story without missing content<br/>
              <strong>Need:</strong> Lore context, hidden secrets, optimal paths<br/>
              <strong>Tier:</strong> Pro ($3.99/month)
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🏆 The Completionist">
            <CaseStudyParagraph>
              <strong>"Achievement Hunter"</strong><br/>
              18-35, plays 30+ hours/week<br/><br/>
              <strong>Pain Point:</strong> Needs comprehensive guides for 100%<br/>
              <strong>Need:</strong> Detailed checklists, missables, build optimization<br/>
              <strong>Tier:</strong> Vanguard Pro ($20/year)
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Feature Specification */}
      <CaseStudySection title="Feature Specification">
        <CaseStudyParagraph lead>
          I designed and shipped 15+ core features with clear tier differentiation, 
          achieving 95%+ feature completion across all planned functionality.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Core Features (All Tiers)">
            <CaseStudyList items={[
              { title: 'Game Detection', description: 'Automatic identification from screenshots' },
              { title: 'Screenshot Analysis', description: 'AI-powered context understanding' },
              { title: 'Game Tabs', description: 'Organized conversations per game' },
              { title: 'PC-to-Mobile Sync', description: 'Seamless cross-device experience' },
              { title: 'Progress Tracking', description: 'Remember where you are in each game' },
              { title: 'Playing/Planning Modes', description: 'Different assistance styles' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Pro Features">
            <CaseStudyList items={[
              { title: 'Insight Subtabs', description: 'Auto-generated game insights panels' },
              { title: 'Google Search Grounding', description: 'Real-time web information' },
              { title: '1,583 text queries/mo', description: 'vs 55 for free tier' },
              { title: '328 image queries/mo', description: 'vs 25 for free tier' },
              { title: 'Ad-Free Experience', description: 'No interruptions' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/otagon/aiprocessing.png"
          alt="Screenshot Analysis Flow"
          caption="The AI processing pipeline that powers real-time screenshot analysis"
        />
      </CaseStudySection>

      {/* Feature Deep Dives */}
      <CaseStudySection title="Feature Deep Dives">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🔍 Screenshot Analysis & Game Detection">
            <CaseStudyParagraph>
              When users upload a screenshot, the AI (Gemini 2.5 Flash) analyzes it to extract 
              game title, location, enemies, and UI elements. It generates structured OTAKON tags 
              including game ID, confidence level, genre, progress estimate, and current objective.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Success Metrics:</strong> 95%+ game detection accuracy, &lt;3 second response time, 
              4.5+ star user satisfaction.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📁 Dynamic Game Tabs & Subtabs">
            <CaseStudyParagraph>
              Pro users get organized tabs for each game with auto-generated insight panels. 
              Subtabs vary by genre—Action RPGs get "Story So Far," "Build Optimization," and 
              "Boss Strategy," while FPS games get "Loadout Analysis" and "Map Strategies."
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Technical:</strong> Dual-write system (JSONB + normalized table) with 
              background AI generation and progressive updates from conversation context.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🎮 Playing vs. Planning Mode">
            <CaseStudyParagraph>
              <strong>Playing Mode:</strong> Concise, actionable tips for immediate tactical help. 
              "How do I beat this boss NOW?"
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Planning Mode:</strong> Detailed strategic advice for session preparation. 
              "What build should I prepare?" Includes auto-generated session summaries when switching modes.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📲 PC-to-Mobile Sync">
            <CaseStudyParagraph>
              PC gamers can use their phone as a second screen for AI assistance without alt-tabbing. 
              PC app generates a 6-digit code, mobile app connects via WebSocket, enabling hands-free 
              screenshot capture and analysis.
            </CaseStudyParagraph>
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

      {/* Technical Architecture */}
      <CaseStudySection title="Technical Architecture">
        <CaseStudyParagraph lead>
          I designed a scalable architecture handling real-time AI processing across frontend, 
          backend, and AI layers—built and deployed entirely by myself.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React + TypeScript',
              'PWA with Service Worker',
              'Tailwind CSS Design System',
              'Offline-first with IndexedDB',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend">
            <CaseStudyList items={[
              'Supabase (Auth, DB, Storage)',
              'Edge Functions for AI proxy',
              'PostgreSQL with RLS',
              'Real-time subscriptions',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="AI Layer">
            <CaseStudyList items={[
              'Google Gemini 2.5 Flash',
              'Image + Text analysis',
              'Web search grounding (Pro)',
              'OTAKON structured output',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Key Technical Decisions">
          <CaseStudyList items={[
            { title: 'PWA over native app', description: 'Faster iteration, cross-platform—2-week launch vs. 2-month' },
            { title: 'Supabase for backend', description: 'Real-time, auth, storage in one—50% reduced complexity' },
            { title: 'Edge Functions for AI', description: 'Security, rate limiting—API keys protected' },
            { title: 'OTAKON tag system', description: 'Structured AI responses—reliable data extraction' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Challenges & Solutions */}
      <CaseStudySection title="Challenges & Solutions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Challenge: AI Response Quality">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Generic responses that don't feel game-specific.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution:</strong> Implemented OTAKON tag system for structured extraction, 
              added Google Search grounding for current game info, created genre-specific prompt 
              templates, and progressive subtab updates to maintain context.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge: Screenshot Misclassification">
            <CaseStudyParagraph>
              <strong>Problem:</strong> AI creating tabs for non-gameplay screenshots (menus, launchers).
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution:</strong> Added IS_FULLSCREEN tag to detect actual gameplay, defined 
              clear rules for in-game vs. main menus, pre-game screens stay in Game Hub. 
              Reduced false tab creation by 80%.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge: Message Migration">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Messages lost during tab creation when background processes competed.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution:</strong> Implemented atomic message migration service, added 
              conversation existence checks, fresh data reads after async operations, and 
              dual-write system for subtabs.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge: Subtab Generation Timing">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Empty subtabs appearing because AI generation is async.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution:</strong> Template subtabs created immediately with "Loading..." state, 
              background AI generation populates content, polling mechanism refreshes UI, 
              fallback content from initial AI response.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Go-to-Market Strategy */}
      <CaseStudySection title="Go-to-Market Strategy">
        <CaseStudyParagraph lead>
          I developed a phased launch strategy with a freemium pricing model designed to 
          convert users through clear value differentiation.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Phase 1: Early Access (Current)">
            <CaseStudyList items={[
              'Invite-only waitlist',
              '7-day Pro trial for all new users',
              'PC companion app launched',
              'Gather feedback and iterate',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 2: Public Beta">
            <CaseStudyList items={[
              'Open registration',
              'Stripe payment integration',
              'Marketing campaigns',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 3: Full Launch">
            <CaseStudyList items={[
              'Mobile app store listings',
              'Influencer partnerships',
              'Expanded game coverage',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Pricing Strategy">
          <CaseStudyList items={[
            { title: 'Free ($0)', description: 'Try the product, limited usage—55 text + 25 image queries/month' },
            { title: 'Pro ($3.99/mo)', description: 'Serious gamers, full features—1,583 text + 328 image queries/month' },
            { title: 'Vanguard ($20/year)', description: 'Early adopters, lifetime price lock—$1.67/month effective (66% cheaper)' },
          ]} />
          <CaseStudyParagraph>
            <strong>Vanguard Psychology:</strong> "Founding member" exclusivity creates urgency, 
            lifetime price lock drives early conversion, significant savings vs. monthly Pro.
          </CaseStudyParagraph>
        </CaseStudyCard>
      </CaseStudySection>

      {/* Metrics & Analytics */}
      <CaseStudySection title="Metrics & Analytics">
        <CaseStudyParagraph lead>
          I established a metrics framework centered on our North Star Metric: 
          Active Gaming Sessions per User per Week.
        </CaseStudyParagraph>

        <CaseStudyCard title="Key Performance Indicators">
          <CaseStudyList items={[
            { title: 'Acquisition', description: '500 weekly new users target' },
            { title: 'Activation', description: '60% first screenshot analysis rate' },
            { title: 'Retention', description: '40% D7 retention target' },
            { title: 'Revenue', description: '5% Pro conversion rate target' },
            { title: 'Engagement', description: '5+ queries per session target' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Results & Impact */}
      <CaseStudySection title="Results & Impact">
        <CaseStudyStatsGrid
          stats={[
            { value: '15+', label: 'Features Shipped', sublabel: 'End-to-end' },
            { value: '3', label: 'User Tiers', sublabel: 'Differentiated value' },
            { value: '95%+', label: 'Feature Completion', sublabel: 'Full delivery' },
            { value: '<3s', label: 'Response Time', sublabel: 'AI processing' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Quantitative Results">
            <CaseStudyList items={[
              'Built fully functional PWA serving 3 user tiers',
              'Implemented 15+ core features with AI integration',
              'Designed end-to-end user journeys with 95%+ completion',
              'Established scalable architecture for real-time AI processing',
              '95%+ uptime maintained',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Technical Achievements">
            <CaseStudyList items={[
              'Idempotent tab creation (no duplicates)',
              'Atomic message migration (no data loss)',
              'Dual-write subtab system (migration-ready)',
              'Comprehensive caching strategy',
              'Zero critical bugs in production',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Lessons Learned */}
      <CaseStudySection title="Lessons Learned">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="What Worked Well">
            <CaseStudyList items={[
              { title: 'Structured AI responses (OTAKON tags)', description: 'Made AI output predictable and parseable' },
              { title: 'Progressive enhancement', description: 'Free users get value, Pro users get more' },
              { title: 'Edge Function proxy', description: 'Kept API keys secure, enabled rate limiting' },
              { title: 'Playing/Planning modes', description: 'Simple UX that maps to user mental models' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="What I'd Do Differently">
            <CaseStudyList items={[
              { title: 'Start with normalized database', description: 'Dual-write was necessary but complex' },
              { title: 'Earlier user testing', description: 'Some features needed iteration post-build' },
              { title: 'Better loading states', description: 'Users need more feedback during async operations' },
              { title: 'Mobile-first from day one', description: 'Some desktop patterns don\'t translate well' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          AI products need structured output formats. Gaming users expect instant responses. 
          Freemium conversion requires clear value gaps. Background processes need robust error handling.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Future Roadmap */}
      <CaseStudySection title="Future Roadmap">
        <CaseStudyParagraph lead>
          The product roadmap focuses on payment integration, platform expansion, and 
          enhanced AI capabilities.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Q1 2025">
            <CaseStudyList items={[
              'Stripe payment integration',
              'Mobile app store deployment',
              'Ad monetization for free tier',
              'Expanded game database',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q2 2025">
            <CaseStudyList items={[
              'Voice input for hands-free queries',
              'Game progress auto-detection',
              'Community features (shared builds)',
              'Achievement tracking integration',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q3 2025">
            <CaseStudyList items={[
              'Multi-language support',
              'Console screenshot capture',
              'Real-time game event detection',
              'Personalized recommendations',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Technology Stack */}
      <CaseStudySection title="Technology Stack">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React, TypeScript, Tailwind CSS, Vite',
              'PWA with Service Worker',
              'IndexedDB for offline support',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend & AI">
            <CaseStudyList items={[
              'Supabase (PostgreSQL, Auth, Storage, Edge Functions)',
              'Google Gemini 2.5 Flash (with Search Grounding)',
              'GitHub Pages (static), Supabase (dynamic)',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
