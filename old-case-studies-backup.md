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
      description="AI-Powered Gaming Companion Platform - Full product ownership from conception to launch. Built with React, TypeScript, and Google Gemini AI."
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
        intro="Otagon is an AI-powered gaming companion that helps gamers get real-time assistance, strategy tips, and game-specific insights through screenshot analysis and natural conversation. As the Product Manager & Solo Developer with full ownership, I led the product from conception to launch over 6+ months of continuous development and iteration, building a production-ready PWA serving 3 user tiers with 25+ core features and advanced AI integration with Google Gemini 2.5 Flash."
        externalLink="https://otagon.app"
        externalLabel="otagon.app"
        overview={{
          role: [
            'Product Manager & Solo Developer',
            'Full product ownership from conception to launch',
            'User research and persona development',
            'Feature specification and prioritization',
            'Go-to-market strategy and pricing',
          ],
          timeline: '6+ months of continuous development (Started August 2025)',
          recognition: '25+ features shipped, <3s AI response time, 99%+ uptime',
          tools: [
            'React 18',
            'TypeScript',
            'Vite',
            'Supabase',
            'Google Gemini 2.5 Flash',
            'PostgreSQL',
            'Tailwind CSS',
            'PWA',
            'Web Speech API',
          ],
        }}
        heroImage="/otagon/workinprogess.png"
        heroImageAlt="Otagon Gaming Companion Interface"
      />

      {/* Problem Statement */}
      <CaseStudySection title="Problem Statement">
        <CaseStudyParagraph lead>
          Gamers frequently need help during gameplay—whether it's boss strategies, storyline context, 
          item locations, or build optimization. Current solutions create significant friction that 
          breaks immersion and creates anxiety around spoilers.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Current Solutions & Problems">
            <CaseStudyList items={[
              { title: 'Alt-Tab to Browser', description: 'Breaks immersion, risk of spoilers, requires context explanation' },
              { title: 'YouTube Walkthroughs', description: 'Time-consuming, linear format, often contains spoilers' },
              { title: 'Gaming Wikis', description: 'Outdated information, overwhelming detail, spoiler-heavy structure' },
              { title: 'Discord/Reddit', description: 'Wait time for responses, inconsistent quality, requires asking repeatedly' },
              { title: 'ChatGPT/Claude', description: 'No game context, generic responses, no image understanding for games' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="User Research Insights">
            <CaseStudyList items={[
              { title: '78%', description: 'of gamers alt-tab during gameplay sessions' },
              { title: '3-5 minutes', description: 'average time spent searching for game help per query' },
              { title: '45%', description: 'avoid seeking help due to spoiler anxiety' },
              { title: '65%', description: 'prefer mobile companion apps for console/PC gaming' },
              { title: 'Key insight', description: 'Gamers want contextual help that understands WHERE they are in the game' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="The Otagon Advantage">
          <CaseStudyList items={[
            { title: 'Context Understanding', description: 'Screenshot analysis knows exactly where you are' },
            { title: 'Spoiler Protection', description: 'Progress-aware responses with configurable tolerance' },
            { title: 'Speed', description: '<3 second responses, no waiting for humans' },
            { title: 'Accessibility', description: 'Mobile companion for console/PC, hands-free mode with TTS' },
            { title: 'Continuity', description: 'Conversation history, session summaries, subtab insights' },
          ]} />
        </CaseStudyCard>

        <CaseStudyQuote author="Product Vision" role="The Spark">
          Create an AI companion that sees what you see and knows where you are—no spoilers, no context switching, just instant help.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Product Development Journey */}
      <CaseStudySection title="Product Development Journey">
        <CaseStudyParagraph lead>
          As an avid gamer, I experienced the frustration firsthand—constantly alt-tabbing to search for 
          boss strategies, missing story elements, and accidentally encountering spoilers. The existing 
          solutions were either too slow, too spoiler-heavy, or required too much context switching.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Phase 1: Ideation & Research (Weeks 1-3)">
            <CaseStudyList items={[
              'Conducted user research with gamers across different play styles',
              'Identified key pain points: alt-tabbing, spoilers, context switching',
              'Defined initial vision for contextual AI gaming assistance',
              'Mapped competitive landscape and gaps in existing solutions',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 2: MVP Development (Weeks 4-12)">
            <CaseStudyList items={[
              'Core technical decisions: PWA over Native (2-week vs 2-month launch)',
              'Chose Supabase for real-time subscriptions, auth, storage, Edge Functions',
              'Integrated Google Gemini 2.5 Flash for multimodal AI with web search grounding',
              'Shipped MVP: Screenshot analysis, chat, Game Hub, progress tracking, PC-to-Mobile sync',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 3: Pro Features & Monetization (Weeks 13-20)">
            <CaseStudyList items={[
              'Developed query-based pricing model from usage pattern analysis',
              'Built Lore & Insights Subtabs with auto-generated, context-aware panels',
              'Implemented Google Search Grounding for real-time game news and meta strategies',
              'Created Playing/Planning Modes with session summaries',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 4: Polish & Advanced Features (Weeks 21-28)">
            <CaseStudyList items={[
              'AI Behavior Training System: Users can teach AI correct responses',
              'Hands-Free Mode with TTS, wake lock, and background audio',
              'Smart Caching Architecture: 40% reduction in API costs',
              'Player Profile System: Hint style, focus, tone, spoiler tolerance',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Early Challenges & Pivots">
          <CaseStudyList items={[
            { title: 'AI responses too generic', description: 'Pivoted to genre-specific personas with immersion context → 40% improvement in relevance' },
            { title: 'Screenshot misclassification', description: 'Added OTAGON tag system with IS_FULLSCREEN detection → 80% reduction in false tabs' },
            { title: 'Context loss in long conversations', description: 'Implemented context summarization service (300-word limit) → Consistent token costs' },
            { title: 'Subtabs appearing empty', description: 'Template-first approach with async AI population → Eliminated empty subtab complaints' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Product Vision & Strategy */}
      <CaseStudySection title="Product Vision & Strategy">
        <CaseStudyQuote>
          Be the ultimate AI gaming companion that understands where you are in any game and 
          provides exactly the help you need, without spoilers.
        </CaseStudyQuote>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🎯 Instant Context Understanding">
            <CaseStudyList items={[
              { title: 'Screenshot Analysis', description: 'Automatic game detection, location identification, UI element recognition' },
              { title: 'Progress Tracking', description: 'AI estimates completion percentage, tracks current objectives' },
              { title: 'Spoiler-Aware Responses', description: 'Responses calibrated to player\'s progress and spoiler tolerance' },
              { title: 'OTAGON Tag System', description: 'Structured AI output for reliable data extraction' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="📱 Multi-Platform Accessibility">
            <CaseStudyList items={[
              { title: 'PWA Architecture', description: 'Install on any device, offline-capable with service workers' },
              { title: 'PC Companion App', description: 'Native Electron app for seamless screenshot capture' },
              { title: 'WebSocket Sync', description: 'Real-time PC-to-Mobile screenshot transfer' },
              { title: '6-Digit Pairing', description: 'Simple connection flow with code-based authentication' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 Personalized Intelligence">
            <CaseStudyList items={[
              { title: 'Player Profiles', description: 'Customizable hint style, focus, tone, and spoiler preferences' },
              { title: 'Genre-Specific Personas', description: 'Character immersion service adapts AI personality' },
              { title: 'Conversation Memory', description: 'Context summarization maintains continuity' },
              { title: 'Teachable AI', description: 'User corrections improve future responses' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="💰 Sustainable Business Model">
            <CaseStudyList items={[
              { title: 'Query-Based Limits', description: 'Fair, predictable pricing (not arbitrary feature gates)' },
              { title: 'Clear Value Differentiation', description: 'Pro features genuinely enhance experience' },
              { title: 'Vanguard Program', description: 'Founding member incentives for early adopters' },
              { title: 'Freemium Funnel', description: '7-day trial converts users through demonstrated value' },
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
              <strong>Pain Point:</strong> Gets stuck on bosses, loses momentum between sessions<br/>
              <strong>Need:</strong> Quick tips without deep research, session continuity<br/>
              <strong>Tier:</strong> Free (55 text + 25 image queries/month)<br/>
              <strong>Key Features:</strong> Screenshot help, quick tips, Game Hub
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="⚔️ The Dedicated Player">
            <CaseStudyParagraph>
              <strong>"Story Seeker"</strong><br/>
              20-30, plays 15-25 hours/week<br/><br/>
              <strong>Pain Point:</strong> Wants to experience full story without missing content<br/>
              <strong>Need:</strong> Lore context, hidden secrets, optimal narrative paths<br/>
              <strong>Tier:</strong> Pro ($3.99/month)<br/>
              <strong>Key Features:</strong> Story So Far subtab, character insights, spoiler-strict mode
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🏆 The Completionist">
            <CaseStudyParagraph>
              <strong>"Achievement Hunter"</strong><br/>
              18-35, plays 30+ hours/week<br/><br/>
              <strong>Pain Point:</strong> Needs comprehensive guides for 100% completion<br/>
              <strong>Need:</strong> Detailed checklists, missable items, build optimization<br/>
              <strong>Tier:</strong> Vanguard Pro ($20/year)<br/>
              <strong>Key Features:</strong> All subtabs, Google Search grounding, multiple game tabs
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Feature Specification */}
      <CaseStudySection title="Complete Feature Set (25+ Features)">
        <CaseStudyParagraph lead>
          I designed and shipped 25+ core features with clear tier differentiation, 
          implementing advanced AI systems and comprehensive user experience enhancements.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Core Features (All Tiers)">
            <CaseStudyList items={[
              { title: 'Screenshot Analysis', description: 'AI-powered game detection and context extraction with Gemini 2.5 Flash' },
              { title: 'Game Detection', description: 'Automatic identification with 20+ genre classifications' },
              { title: 'Game Tabs', description: 'Organized conversations per game with atomic tab creation' },
              { title: 'Game Hub', description: 'Central hub for cross-game conversations with different prompt system' },
              { title: 'PC-to-Mobile Sync', description: 'WebSocket relay with 6-digit pairing codes' },
              { title: 'Progress Tracking', description: 'AI-estimated 0-100% completion with objective tracking' },
              { title: 'Playing/Planning Modes', description: 'Mode-specific prompts with session summaries' },
              { title: 'Player Profiles', description: '4-dimension profile (hint style, focus, tone, spoiler tolerance)' },
              { title: 'Hands-Free Mode', description: 'TTS with wake lock and background audio playback' },
              { title: 'Offline Support', description: 'Service worker with IndexedDB caching' },
              { title: 'Gaming Focus Guardrails', description: 'Polite redirection for non-gaming queries' },
              { title: 'Suggested Prompts', description: 'AI-generated with usage tracking and daily reset' },
              { title: 'Markdown Rendering', description: 'Custom renderer with code blocks, lists, formatting' },
              { title: 'Image Expansion', description: 'Modal viewer with download option' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Pro Features">
            <CaseStudyList items={[
              { title: 'Lore & Insights Subtabs', description: 'Genre-specific tabs (Story So Far, Characters, Boss Strategy, Tips)' },
              { title: 'Google Search Grounding', description: 'Real-time web info: patch notes, meta strategies, news' },
              { title: '28x More Text Queries', description: '1,583 vs 55 per month—unlimited-feeling experience' },
              { title: '13x More Image Queries', description: '328 vs 25 per month—analyze every screenshot' },
              { title: 'Ad-Free Experience', description: 'Clean, immersive interface with no interruptions' },
              { title: 'Session Summaries', description: 'AI-generated highlights and objectives on mode switch' },
              { title: 'Subtab Management', description: '@command system for direct control over insight content' },
              { title: 'AI Behavior Training', description: 'Teach correct responses with validated corrections (3/day limit)' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Advanced Systems">
          <CaseStudyList items={[
            { title: 'Context Summarization', description: 'AI summarizes history to 300 words when exceeding 900, preserving last 8 messages' },
            { title: 'Character Immersion', description: '8+ genre-specific tone profiles adapting AI personality' },
            { title: 'Daily News Cache', description: '24-hour cache with tier-based refresh, reducing API costs' },
            { title: 'IGDB Integration', description: 'Rich game metadata: cover art, ratings, platforms via Edge Function' },
            { title: 'Error Recovery', description: 'Exponential backoff with graceful degradation and fallback responses' },
            { title: 'Rate Limiting', description: 'Per-user query tracking with monthly reset' },
          ]} />
        </CaseStudyCard>

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
              When users upload a screenshot, the AI (Gemini 2.5 Flash multimodal) analyzes it to extract 
              game title, location, enemies, and UI elements. It generates structured OTAGON tags 
              including game ID, confidence level (high/medium/low), genre classification (20+ genres), 
              progress estimate, and current objective.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Key Innovation:</strong> IS_FULLSCREEN detection distinguishes actual gameplay 
              from menus/launchers, and GAME_STATUS prevents tabs for unreleased games.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📁 Dynamic Game Tabs & Insight Subtabs">
            <CaseStudyParagraph>
              Pro users get organized tabs for each game with auto-generated insight panels. 
              Subtabs vary by genre—Action RPGs get "Story So Far," "Characters," "Build Optimization," and 
              "Boss Strategy," while FPS games get "Loadout Analysis" and "Map Strategies."
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Technical:</strong> Dual-write system (JSONB + normalized table) with 
              template-first approach—subtabs created immediately with "Loading..." state, 
              then populated via background AI generation.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🎮 Playing vs. Planning Mode">
            <CaseStudyParagraph>
              <strong>Playing Mode:</strong> Concise, actionable tips for immediate tactical help. 
              "How do I beat this boss NOW?" Quick responses optimized for in-session use.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Planning Mode:</strong> Detailed strategic advice for session preparation. 
              "What build should I prepare?" Auto-generates session summary cards with gradient 
              theming when switching modes.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 AI Behavior Training System">
            <CaseStudyParagraph>
              Users can "teach" the AI correct responses when it makes mistakes. Corrections are 
              validated by AI before applying to prevent abuse. Supports both game-specific and 
              global corrections, rate-limited to 3 corrections/day.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Impact:</strong> Creates a continuously improving AI experience personalized 
              to each user's preferences and gaming knowledge.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📲 PC-to-Mobile Sync">
            <CaseStudyParagraph>
              PC gamers can use their phone as a second screen for AI assistance without alt-tabbing. 
              PC app generates a 6-digit code, mobile app connects via WebSocket relay server, 
              enabling real-time screenshot transfer with code-based authentication.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🔊 Hands-Free Mode with TTS">
            <CaseStudyParagraph>
              Full text-to-speech for AI responses using Web Speech API. Features voice selection 
              and speed controls, wake lock to prevent screen sleep during TTS, and background 
              audio session for uninterrupted playback while gaming.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImageGrid
          images={[
            { src: '/otagon/chatinput.png', alt: 'Chat Interface', caption: 'AI Conversation' },
            { src: '/otagon/insightstabs.png', alt: 'Analysis View', caption: 'Insight Subtabs' },
            { src: '/otagon/playerprofile.png', alt: 'Player Profile', caption: 'Profile System' },
            { src: '/otagon/sidebarsorting.png', alt: 'Navigation', caption: 'Game Library' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* Technical Architecture */}
      <CaseStudySection title="Technical Architecture">
        <CaseStudyParagraph lead>
          I designed a scalable architecture handling real-time AI processing across frontend, 
          backend, and AI layers—built and deployed entirely by myself with comprehensive 
          caching and security measures.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React 18 + TypeScript',
              'Vite with 8-chunk code splitting',
              'Tailwind CSS Design System',
              'PWA with Service Worker',
              'IndexedDB for offline storage',
              'Web Speech API for TTS',
              'Embla Carousel for UI',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend">
            <CaseStudyList items={[
              'Supabase PostgreSQL with JSONB',
              'Row Level Security (RLS)',
              'Edge Functions for AI proxy',
              'Real-time subscriptions',
              'Cloudflare R2 for assets',
              'Google, Discord, Email auth',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="AI Layer">
            <CaseStudyList items={[
              'Google Gemini 2.5 Flash',
              'Multimodal (text + image)',
              'Web search grounding (Pro)',
              'OTAGON structured output',
              '3 prompt personas',
              'Custom tag parser',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Key Technical Decisions">
          <CaseStudyList items={[
            { title: 'PWA over native app', description: '2-week launch vs 2-month for native—faster iteration, cross-platform from day one' },
            { title: 'Supabase for backend', description: 'All-in-one platform: real-time, auth, storage, Edge Functions—50% reduced complexity' },
            { title: 'Edge Functions for AI', description: 'API keys protected, sophisticated rate limiting, secure proxy layer' },
            { title: 'OTAGON tag system', description: 'Structured AI output format ensures reliable, predictable data extraction' },
            { title: 'Dual-write subtabs', description: 'Migration-ready design with JSONB + normalized tables for flexibility' },
            { title: 'Context summarization', description: 'AI summarizes to 300 words—consistent token costs regardless of conversation length' },
          ]} />
        </CaseStudyCard>

        <CaseStudyCard title="Infrastructure">
          <CaseStudyList items={[
            { title: 'GitHub Pages', description: 'Static hosting for PWA frontend' },
            { title: 'Supabase', description: 'Dynamic backend with PostgreSQL and Edge Functions' },
            { title: 'Render', description: 'WebSocket relay server for PC-to-Mobile sync' },
            { title: 'Cloudflare', description: 'CDN and R2 storage for assets and screenshots' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Challenges & Solutions */}
      <CaseStudySection title="Challenges & Solutions">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Challenge 1: AI Response Quality">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Generic responses that don't feel game-specific or immersive.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> OTAGON tag system for structured extraction, 
              genre-specific personas (8+ tone profiles), player profile injection, 
              Google Search grounding for current info, and user behavior training.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Qualitative improvement in response relevance and user satisfaction.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 2: Screenshot Misclassification">
            <CaseStudyParagraph>
              <strong>Problem:</strong> AI creating new game tabs for non-gameplay screenshots (menus, launchers, desktop).
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> IS_FULLSCREEN tag to detect actual gameplay, 
              confidence scoring (high/medium/low), pre-game routing to Game Hub, 
              GAME_STATUS tag for unreleased game detection.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> 80% reduction in false tab creation.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 3: Message Migration Race Conditions">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Messages lost when background tab creation competed with message saving.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> Atomic migration service with single transaction for 
              tab creation + message move, conversation existence checks, fresh data reads after 
              async operations, dual-write subtab system.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Zero data loss in message migration.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 4: Context Management at Scale">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Long conversations caused token overflow and increased costs.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> Context summarization service (AI summarizes to 300 words), 
              last 8 messages preserved unsummarized, trigger at 3x target (900 words), 
              incremental summary updates.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Consistent token costs regardless of conversation length.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Challenge 5: Subtab Generation Timing">
            <CaseStudyParagraph>
              <strong>Problem:</strong> Empty subtabs appearing because AI generation is async.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Solution Stack:</strong> Template-first approach with "Loading..." state immediately, 
              background AI population, auto-expand on content update, content signature tracking.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> Eliminated "empty subtab" user complaints.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Smart Caching Architecture">
            <CaseStudyParagraph>
              <strong>Implementation:</strong> Daily news cache (24-hour TTL) for gaming news queries, 
              IGDB game data cache with localStorage persistence, AI response deduplication.
            </CaseStudyParagraph>
            <CaseStudyParagraph>
              <strong>Result:</strong> ~40% reduction in API costs.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Go-to-Market Strategy */}
      <CaseStudySection title="Go-to-Market Strategy">
        <CaseStudyParagraph lead>
          I developed a phased launch strategy with a freemium pricing model designed to 
          convert users through clear value differentiation and demonstrated value during trial.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="Phase 1: Early Access (Current)">
            <CaseStudyList items={[
              'Invite-only waitlist',
              '7-day Pro trial for all new users',
              'PC companion app launched',
              'Gather feedback and iterate rapidly',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 2: Public Beta">
            <CaseStudyList items={[
              'Open registration',
              'Stripe payment integration',
              'Limited marketing push',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Phase 3: Full Launch">
            <CaseStudyList items={[
              'Mobile app store listings (iOS/Android PWA wrapper)',
              'Influencer partnerships (gaming YouTubers, Twitch)',
              'Expanded game database and genre coverage',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Pricing Strategy & Psychology">
          <CaseStudyList items={[
            { title: 'Free ($0)', description: 'Low barrier to try, demonstrate value—55 text + 25 image queries/month' },
            { title: 'Pro ($3.99/mo)', description: 'Less than one Starbucks drink—1,583 text + 328 image queries/month' },
            { title: 'Vanguard ($20/year)', description: '"Founding member" exclusivity, lifetime price lock—$1.67/month effective (66% savings)' },
          ]} />
          <CaseStudyParagraph>
            <strong>Vanguard Psychology:</strong> "Founding member" exclusivity creates urgency, 
            lifetime price lock (never increases) drives early conversion, early access to new features, 
            significant savings vs. monthly Pro.
          </CaseStudyParagraph>
        </CaseStudyCard>
      </CaseStudySection>

      {/* Metrics & Analytics */}
      <CaseStudySection title="Metrics & Analytics">
        <CaseStudyParagraph lead>
          I established a metrics framework centered on our North Star Metric: 
          Active Gaming Sessions per User per Week.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Key Performance Indicators">
            <CaseStudyList items={[
              { title: 'Acquisition', description: '500 weekly new users target' },
              { title: 'Activation', description: '60% first screenshot analysis rate' },
              { title: 'Retention', description: '40% D7 retention target' },
              { title: 'Revenue', description: '5% Pro conversion rate target' },
              { title: 'Engagement', description: '5+ queries per session target' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Technical Metrics">
            <CaseStudyList items={[
              { title: 'AI Response Time', description: 'Target <3s ✅ Achieved' },
              { title: 'Game Detection Accuracy', description: 'Target 95%+ ✅ Achieved' },
              { title: 'Uptime', description: 'Target 99%+ ✅ Maintained' },
              { title: 'Critical Bugs in Prod', description: 'Target 0 ✅ Zero' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Results & Impact */}
      <CaseStudySection title="Results & Impact">
        <CaseStudyStatsGrid
          stats={[
            { value: '25+', label: 'Features Shipped', sublabel: 'End-to-end' },
            { value: '3', label: 'User Tiers', sublabel: 'Differentiated value' },
            { value: '<3s', label: 'Response Time', sublabel: 'AI processing' },
            { value: '99%+', label: 'Uptime', sublabel: 'Maintained' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Quantitative Results">
            <CaseStudyList items={[
              'Built production-ready PWA serving 3 user tiers',
              'Implemented 25+ core features with advanced AI integration',
              'Integrated Google Gemini 2.5 Flash with web search grounding',
              'Designed scalable PostgreSQL schema with Row Level Security (RLS)',
              'Achieved <3 second AI response times with comprehensive caching',
              '~40% reduction in API costs through smart caching architecture',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Technical Achievements">
            <CaseStudyList items={[
              'Idempotent tab creation (no duplicates regardless of race conditions)',
              'Atomic message migration (zero data loss in tab transitions)',
              'Dual-write subtab system (migration-ready normalized + JSONB)',
              'Code splitting with 8 optimized chunks for fast loading',
              'Row Level Security for multi-tenant data isolation',
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
              { title: 'Structured AI output (OTAGON tags)', description: 'Made AI responses predictable and parseable' },
              { title: 'Progressive enhancement', description: 'Free users get value, Pro gets more—not feature gates' },
              { title: 'Edge Function proxy', description: 'Kept API keys secure, enabled sophisticated rate limiting' },
              { title: 'Playing/Planning modes', description: 'Simple mental model that maps to user behavior' },
              { title: 'Genre-specific personas', description: 'Immersion that feels natural for each game type' },
              { title: 'Player profile system', description: 'Personalization without overwhelming setup' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="What I'd Do Differently">
            <CaseStudyList items={[
              { title: 'Database design', description: 'Start with normalized tables; dual-write was necessary but complex' },
              { title: 'User testing', description: 'Earlier testing would have caught UX issues before build' },
              { title: 'Loading states', description: 'Users need more feedback during async operations' },
              { title: 'Mobile-first', description: 'Some desktop patterns don\'t translate well to mobile' },
              { title: 'Error messages', description: 'More user-friendly error explanations earlier' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          AI products need structured output formats—free-form text is unpredictable. Gaming users 
          expect instant responses—even 5 seconds feels slow. Freemium conversion requires clear 
          value gaps, not arbitrary limits. Context is everything in gaming—generic AI help isn't enough.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Future Roadmap */}
      <CaseStudySection title="Future Roadmap">
        <CaseStudyParagraph lead>
          The product roadmap focuses on payment integration, platform expansion, 
          enhanced AI capabilities, and community features.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Q1 2026">
            <CaseStudyList items={[
              'Stripe payment integration',
              'Mobile app store deployment (iOS/Android)',
              'Ad monetization for free tier',
              'Expanded IGDB integration',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q2 2026">
            <CaseStudyList items={[
              'Voice input for hands-free queries',
              'Automatic game progress detection',
              'Community features (shared builds, strategies)',
              'Achievement tracking integration',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q3 2026">
            <CaseStudyList items={[
              'Multi-language support',
              'Console screenshot capture solutions',
              'Real-time game event detection',
              'Personalized game recommendations',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Q4 2026">
            <CaseStudyList items={[
              'Social features (friends, sharing)',
              'Streaming integration (Twitch, YouTube)',
              'Advanced analytics dashboard',
              'API for third-party integrations',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyCard title="Active Development">
          <CaseStudyList items={[
            'Payment integration (Stripe)',
            'Mobile app store deployment',
            'Ad monetization for free tier',
            'Community features roadmap',
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* Technology Stack */}
      <CaseStudySection title="Technology Stack">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Frontend">
            <CaseStudyList items={[
              'React 18, TypeScript, Tailwind CSS, Vite',
              'PWA with Service Worker',
              'IndexedDB for offline support',
              'Web Speech API for TTS',
              'Embla Carousel for UI components',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Backend & Infrastructure">
            <CaseStudyList items={[
              'Supabase (PostgreSQL, Auth, Storage, Edge Functions)',
              'Row Level Security for multi-tenancy',
              'Real-time subscriptions',
              'GitHub Pages (static hosting)',
              'Render (WebSocket relay)',
              'Cloudflare (CDN, R2 storage)',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="AI & Integrations">
            <CaseStudyList items={[
              'Google Gemini 2.5 Flash (multimodal + web grounding)',
              'IGDB API for game metadata',
              'WebSocket relay server for PC sync',
              'Custom OTAGON tag parser',
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Authentication">
            <CaseStudyList items={[
              'Google OAuth',
              'Discord OAuth',
              'Email (Magic Link)',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyParagraph>
          <strong>Key Takeaways:</strong> The OTAGON tag system was crucial for reliability. 
          Understanding game progress is essential—generic AI isn't enough. Progressive enhancement 
          works: free tier demonstrates value, Pro enhances it. Technical debt is real: early 
          shortcuts required later refactoring. Persistence pays off: many features required 2-3 
          iterations to get right.
        </CaseStudyParagraph>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
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
} from '@/components/case-study';

export const LawX = () => {
    return (
        <CaseStudyLayout
            title="Law.X"
            description="Designing Transparency into Legal AI - How I transformed a 'black box' chatbot into a trusted legal workspace through transparency design."
        >
            <CaseStudyHero
                title="Designing Transparency into Legal AI"
                subtitle="How I transformed a 'black box' chatbot into a trusted legal workspace"
                pills={[
                    'Legal Tech',
                    'AI UX',
                    'Transparency Design',
                    '1-Month Contract',
                    'Figma',
                ]}
                intro="Legal professionals don't trust AI—and for good reason. When I took on this 1-month contract for early concept design, my challenge was clear: design an AI assistant that lawyers would actually use. The answer wasn't better AI; it was better transparency. By visualizing the AI's reasoning process, I turned skepticism into trust."
                overview={{
                    role: [
                        'Concept Designer (Contract)',
                        'UX Strategy & Information Architecture',
                        'Interface Design & Visual Identity',
                        'User Flow & Interaction Design',
                    ],
                    timeline: '1-Month Contract',
                    tools: [
                        'Figma',
                        'User Research',
                        'Interaction Design',
                        'Design Systems',
                    ],
                }}
                heroImage="/jollyai/jollyai8.png"
                heroImageAlt="Law.X transparent legal assistant workspace"
            />

            {/* The Challenge */}
            <CaseStudySection title="The Challenge">
                <CaseStudyParagraph lead>
                    Legal professionals are deeply skeptical of AI. "Hallucinations"—confidently stated
                    falsehoods—could end careers. My client needed a design that prioritized trust,
                    accuracy, and customization for lawyers practicing in India's complex legal system.
                </CaseStudyParagraph>

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="Trust Problem">
                        <CaseStudyParagraph>
                            Standard AI chatbots are "black boxes"—you get an answer but have no idea how it
                            arrived there. For lawyers, citing a non-existent case or misinterpreting a statute
                            isn't just embarrassing; it's malpractice.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="Design Requirements">
                        <CaseStudyList items={[
                            { title: 'Build Trust', description: 'Visualize AI reasoning so lawyers can verify accuracy' },
                            { title: 'Ensure Precision', description: 'Control legal tone for different contexts' },
                            { title: 'Handle Jurisdiction', description: 'Account for India\'s state-specific laws' },
                            { title: 'Streamline Workflow', description: 'Reduce friction in common legal tasks' },
                        ]} />
                    </CaseStudyCard>
                </CaseStudyCardGrid>
            </CaseStudySection>

            {/* The Key Insight */}
            <CaseStudySection title="The Key Insight: Glass Box UX">
                <CaseStudyParagraph lead>
                    The breakthrough came when I realized the problem wasn't AI accuracy—it was AI
                    opacity. Lawyers don't need AI to be perfect; they need to verify it themselves.
                    I designed a "Glass Box" experience that shows its work.
                </CaseStudyParagraph>

                <CaseStudyImage
                    src="/jollyai/jollyai1.png"
                    alt="The Thinking Panel showing AI's internal workflow"
                    caption="The 'Thinking' Panel displays the AI's reasoning process in real-time"
                />

                <CaseStudyCard title="The 'Thinking' Panel">
                    <CaseStudyParagraph>
                        Before generating an answer, the UI displays the AI's internal workflow: Query
                        Reframing, Clarification, and Legal Index Framework Review. Lawyers can see
                        exactly which statutes the AI is referencing (e.g., Section 56(2) of the Income
                        Tax Act) before trusting the output.
                    </CaseStudyParagraph>
                </CaseStudyCard>

                <CaseStudyQuote>
                    The moment I showed lawyers they could watch the AI "think"—and catch mistakes
                    before they happened—their skepticism transformed into genuine interest.
                </CaseStudyQuote>
            </CaseStudySection>

            {/* Context & Customization */}
            <CaseStudySection title="Context & Customization">
                <CaseStudyParagraph lead>
                    Law requires precise tone control. A generic "helpful" response won't work for a
                    stern legal notice, a client email, or a court filing. I designed systems that
                    give lawyers complete control.
                </CaseStudyParagraph>

                <CaseStudyImageGrid
                    images={[
                        { src: '/jollyai/jollyai2.png', alt: 'Instruction Modal', caption: 'Custom tone and context settings' },
                        { src: '/jollyai/jollyai3.png', alt: 'State Onboarding', caption: 'Jurisdictional accuracy from day one' },
                    ]}
                    columns={2}
                />

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="Instruction Modal">
                        <CaseStudyParagraph>
                            I designed an "Add Instructions" feature directly in the chat input. Users can
                            set global parameters like "Keep it concise" or "Use formal legal terminology"
                            that the AI remembers across sessions.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="State-Specific Onboarding">
                        <CaseStudyParagraph>
                            Laws in India vary significantly by state. The onboarding flow includes mandatory
                            state selection (e.g., Telangana) to ensure jurisdictional accuracy from the
                            very first query.
                        </CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>
            </CaseStudySection>

            {/* Streamlined Workflow */}
            <CaseStudySection title="Streamlined Workflow">
                <CaseStudyParagraph lead>
                    Legal professionals juggle dozens of cases simultaneously. I designed features
                    that eliminate the "blank page problem" and make case management effortless.
                </CaseStudyParagraph>

                <CaseStudyImageGrid
                    images={[
                        { src: '/jollyai/jollyai5.png', alt: 'Prompt Gallery', caption: 'Curated legal-specific prompts' },
                        { src: '/jollyai/jollyai6.png', alt: 'Side Panel Navigation', caption: 'Quick case switching' },
                    ]}
                    columns={2}
                />

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="Prompt Gallery">
                        <CaseStudyParagraph>
                            The home screen features curated legal-specific prompts: "Draft IT notice
                            response," "Outline M&A due diligence," "Summarize contract risks." No
                            more staring at an empty chat wondering where to start.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="Side Panel Navigation">
                        <CaseStudyParagraph>
                            A clean, collapsible sidebar allows lawyers to jump between different cases
                            and chat threads instantly. Essential for professionals managing multiple
                            clients with overlapping deadlines.
                        </CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>
            </CaseStudySection>

            {/* Visual Identity */}
            <CaseStudySection title="Visual Identity">
                <CaseStudyImage
                    src="/jollyai/jollyai7.png"
                    alt="Law.X Visual Identity"
                    caption="Minimalist, high-contrast design conveying professionalism and authority"
                />

                <CaseStudyCardGrid columns={3}>
                    <CaseStudyCard title="Minimalist & Professional">
                        <CaseStudyParagraph>
                            Stark black, white, and gray palette conveys the seriousness legal
                            professionals expect. No playful colors or casual aesthetics.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="Functional Typography">
                        <CaseStudyParagraph>
                            High readability for long-form legal content. Typography prioritizes
                            clarity over personality—lawyers read thousands of words daily.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="Status Indicators">
                        <CaseStudyParagraph>
                            Subtle color cues (the yellow "Thinking..." pill) provide immediate
                            system feedback without cluttering the clean interface.
                        </CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>
            </CaseStudySection>

            {/* Outcome */}
            <CaseStudySection title="The Outcome">
                <CaseStudyParagraph lead>
                    The final Figma prototypes delivered a cohesive experience that addresses
                    the specific pain points of legal practitioners: verifiable accuracy and
                    stylistic control. A generic chatbot became a specialized legal workspace.
                </CaseStudyParagraph>

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="🔍 Transparency First">
                        <CaseStudyParagraph>
                            Created a "glass box" experience where lawyers verify AI reasoning before
                            trusting outputs—addressing the core trust issue in legal AI.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="🎯 Precise Control">
                        <CaseStudyParagraph>
                            Customization features give exact control over tone, terminology, and
                            context for different legal scenarios.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="📍 Jurisdictional Accuracy">
                        <CaseStudyParagraph>
                            State-specific onboarding ensures legal advice is accurate for India's
                            varied regional legal frameworks from the first interaction.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="⚡ Workflow Optimization">
                        <CaseStudyParagraph>
                            Prompt galleries and efficient navigation streamline common tasks
                            and multi-case management.
                        </CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection title="Reflection">
                <CaseStudyQuote>
                    This project taught me that designing for trust is fundamentally different from
                    designing for usability. Sometimes the best UX isn't hiding complexity—it's
                    revealing it in a way that empowers users to make informed decisions.
                </CaseStudyQuote>

                <CaseStudyParagraph>
                    The legal tech space is growing rapidly, but adoption hinges on trust. By
                    prioritizing transparency over polish, Law.X demonstrates how thoughtful
                    UX design can bridge the gap between AI capability and professional confidence.
                </CaseStudyParagraph>
            </CaseStudySection>
        </CaseStudyLayout>
    );
};
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

export const KoinBasket = () => {
  return (
    <CaseStudyLayout
      title="KoinBasket"
      description="From One-Week MVP to 70,000 Users - How I built a crypto investing platform that democratized portfolio diversification as the founding designer."
      externalLink="https://otagon2.github.io/Koinbasket/"
      externalLabel="KoinBasket"
    >
      <CaseStudyHero
        title="From One-Week MVP to 70,000 Users"
        subtitle="How I built a crypto investing platform that democratized portfolio diversification"
        pills={[
          'Fintech',
          'Founding Designer',
          'MVP Design',
          'Design Leadership',
          'Rebranding',
        ]}
        intro="When I joined as KoinBasket's founding designer, cryptocurrency felt like an exclusive club for tech-savvy investors. My mission: make diversified crypto investing so intuitive that first-time investors could participate confidently within minutes, not months. One week, one intense sprint, and soon—70,000 users."
        externalLink="https://otagon2.github.io/Koinbasket/"
        externalLabel="KoinBasket"
        overview={{
          role: [
            'Founding Designer (MVP phase)',
            'Senior UX Designer & Design Lead (Scale phase)',
            'Hired and mentored Junior UX Designer',
            'Led complete platform rebrand',
          ],
          timeline: 'Founding Designer → Senior Design Lead',
          recognition: '0 → 70,000 users; Complete rebrand; Live trading launch',
          tools: [
            'Figma',
            'Balsamiq',
            'Design Systems',
            'iOS/Android Design',
            'Brand Design',
          ],
        }}
        heroImage="/koinbasket/placeholder-hero.png"
        heroImageAlt="KoinBasket platform interface"
      />

      {/* The Story */}
      <CaseStudySection title="The Origin Story">
        <CaseStudyParagraph lead>
          Cryptocurrency in 2020 was a labyrinth—complex terminology, overwhelming choices,
          and legitimate security fears. New investors faced a steep learning curve just to
          make their first purchase, let alone build a diversified portfolio.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          Our breakthrough insight was radical simplification: curated crypto "baskets."
          Instead of forcing users to research hundreds of individual coins, we offered
          thematic portfolios—the "G.O.A.T. Basket" (top 5 coins), "NFT Basket," "DeFi
          Basket"—that users could invest in with one click.
        </CaseStudyParagraph>

        <CaseStudyQuote author="Core Design Principle">
          Trust is the ultimate currency in fintech. We adopted a non-custodial model—users
          traded through their own Binance or Coinbase accounts, never surrendering control
          of funds to us. This trust-first architecture became our competitive moat.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Phase 1: MVP */}
      <CaseStudySection title="Phase 1: The One-Week MVP">
        <CaseStudyParagraph lead>
          As the solo founding designer, I had one week to design a fully functional MVP.
          No time for perfection—just relentless focus on what would validate our hypothesis:
          Can we make crypto investing accessible?
        </CaseStudyParagraph>

        <CaseStudyStatsGrid
          stats={[
            { value: '1', label: 'Week', sublabel: 'Design sprint' },
            { value: '1', label: 'Designer', sublabel: 'Solo founding' },
            { value: '0→70K', label: 'Users', sublabel: 'Growth achieved' },
          ]}
        />

        <CaseStudyList items={[
          {
            title: 'Rapid Iteration',
            description: 'Balsamiq wireframes → high-fidelity UI in days. Dark theme with vibrant accents established the visual language.'
          },
          {
            title: 'Comprehensive Ownership',
            description: 'Beyond UI/UX: custom basket icons, email templates, marketing content, onboarding checklists.'
          },
          {
            title: 'Cross-Platform from Day 1',
            description: 'Responsive web app plus foundational iOS/Android designs optimized for mobile discovery.'
          },
          {
            title: 'User-Centric Strategy',
            description: 'Mapped critical user journeys, designed demo experiences, conducted internal usability sessions.'
          },
        ]} />

        <CaseStudyImageGrid
          images={[
            { src: '/koinbasket/mvp-dashboard.png', alt: 'MVP Dashboard', caption: 'Dark theme dashboard' },
            { src: '/koinbasket/mvp-mobile.png', alt: 'Mobile UI', caption: 'Mobile basket discovery' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* MVP Features */}
      <CaseStudySection title="MVP: Core Features I Designed">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🧺 Curated Baskets & SIP">
            <CaseStudyParagraph>
              Thematic portfolios like "G.O.A.T. Basket" and "NFT Basket" with one-click
              investing. Designed Systematic Investment Plans for recurring investments.
              Transparent coin breakdown in simple pop-ups.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="🔐 Non-Custodial Integration">
            <CaseStudyParagraph>
              Clear, simple flows for connecting Coinbase and Binance accounts. Users
              never surrendered fund control. Dedicated connection management page for
              full account authority.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="📊 Portfolio Tracking">
            <CaseStudyParagraph>
              Comprehensive holdings breakdown, performance tracking, and complete
              transaction history. Users could see their entire investment picture at a glance.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="🎮 Gamification">
            <CaseStudyParagraph>
              Crypto Fantasy League: users competed by creating their own baskets.
              Multi-tiered rewards and referral system to drive engagement and education.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Phase 2: Scale */}
      <CaseStudySection title="Phase 2: Scaling to Market Leadership">
        <CaseStudyParagraph lead>
          MVP success created new challenges. 70,000 users validated the concept, but now
          we needed to evolve from promising startup to mature, trusted platform. My role
          evolved too—from solo designer to design leader.
        </CaseStudyParagraph>

        <CaseStudyCard title="Strategic Imperatives">
          <CaseStudyList items={[
            { title: 'Elevate Brand Perception', description: 'Major rebranding to project professional, trustworthy image' },
            { title: 'Launch Live Trading', description: 'Real-money trading experience that was robust and engaging' },
            { title: 'Build Community', description: 'Create ecosystem around expert insights with "BitBuddy" influencer platform' },
          ]} />
        </CaseStudyCard>
      </CaseStudySection>

      {/* The Rebrand */}
      <CaseStudySection title="The Complete Rebrand">
        <CaseStudyParagraph lead>
          I led the complete visual overhaul across web and mobile. We transitioned from
          the initial dark theme to a cleaner, lighter aesthetic with green accents—more
          professional, more inviting, more trustworthy.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/koinbasket/rebrand-web.png', alt: 'Rebranded Web', caption: 'Light theme with green accents' },
            { src: '/koinbasket/rebrand-mobile.png', alt: 'Rebranded Mobile', caption: 'Refined mobile experience' },
          ]}
          columns={2}
        />
      </CaseStudySection>

      {/* BitBuddy */}
      <CaseStudySection title="BitBuddy: The Influencer Ecosystem">
        <CaseStudyParagraph lead>
          Our major strategic move: building a community. I designed BitBuddy as a
          two-sided platform—influencers ("Bitpals") create content, users discover
          and invest alongside them.
        </CaseStudyParagraph>

        <CaseStudyImage
          src="/koinbasket/bitbuddy-live.png"
          alt="BitBuddy Live Trading"
          caption="Live video streams integrated with real-time trading"
        />

        <CaseStudyCard title="🎬 Live Trading Experience">
          <CaseStudyParagraph>
            The flagship feature: users watch live video streams hosted by influencers
            and purchase cryptocurrencies directly from the same page. Live video,
            real-time market data, and seamless trade execution—all in one dashboard.
          </CaseStudyParagraph>
        </CaseStudyCard>
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection title="Results & Impact">
        <CaseStudyStatsGrid
          stats={[
            { value: '70K+', label: 'Users', sublabel: 'From zero' },
            { value: '1→2', label: 'Team Size', sublabel: 'Design growth' },
            { value: '2', label: 'Platforms', sublabel: 'Web + Mobile' },
            { value: 'Live', label: 'Trading', sublabel: 'Ecosystem launched' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Platform Achievements">
            <CaseStudyList items={[
              'MVP to 70,000 users',
              'Complete platform rebrand',
              'Live trading ecosystem launch',
              'BitBuddy influencer platform',
            ]} />
          </CaseStudyCard>

          <CaseStudyCard title="Personal Growth">
            <CaseStudyList items={[
              'Founding designer → Senior Lead',
              'Hired and mentored junior designer',
              'Built design system from scratch',
              'Led cross-functional design decisions',
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="Key Learnings">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Speed vs. Structure">
            <CaseStudyParagraph>
              One-week design sprint was perfect for MVP validation. Scaling required
              structured process, robust design system, and team delegation. Know when
              each approach is appropriate.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Trust is Currency">
            <CaseStudyParagraph>
              From non-custodial model to professional rebrand—every major decision
              anchored in building user trust. In fintech, trust isn't a feature;
              it's the foundation.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Ecosystems > Features">
            <CaseStudyParagraph>
              BitBuddy combined content, community, and commerce. Transformed KoinBasket
              from a tool into a dynamic ecosystem with competitive advantage.
            </CaseStudyParagraph>
          </CaseStudyCard>

          <CaseStudyCard title="Leadership Evolves">
            <CaseStudyParagraph>
              My journey from solo designer to hiring and managing a team reflects how
              design leadership must adapt to company growth. Building people, not just products.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          By grounding our evolution in deep understanding of user needs and business goals,
          we transformed KoinBasket from a simple MVP into a sophisticated, trusted,
          community-driven platform poised for market leadership.
        </CaseStudyQuote>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};import {
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

export const Softwire = () => {
  return (
    <CaseStudyLayout 
      title="LNER App Clip"
      description="Designing for Users Running to Catch Trains - How I led UX design for LNER's instant ticket booking experience during my Softwire internship."
    >
      <CaseStudyHero
        title="Designing for Users Running to Catch Trains"
        subtitle="How I led UX design for LNER's instant ticket booking experience"
        pills={[
          'App Clip',
          'Mobile Design',
          'Usability Testing',
          'LNER',
          'Internship',
        ]}
        intro="You're sprinting through the station, dodging crowds, watching platform boards nervously. You reach the ticket kiosk—there's a queue. You try downloading the app—it's 200MB. The departure countdown ticks. During my Softwire internship, I led design for LNER's App Clip—a sub-10MB, instant-launch solution for this exact nightmare."
        overview={{
          role: [
            'Solo UX/UI Designer',
            'Led 7 developers through design process',
            'Facilitated workshop with 13 stakeholders',
            'Conducted usability testing with 9 participants',
          ],
          timeline: '8-week Summer Internship',
          recognition: 'Core booking flow validated and developed',
          tools: [
            'Figma',
            'Usability Testing',
            'Apple App Clip',
            'National Rail Guidelines',
          ],
        }}
        heroImage="/softwire/heroimage.webp"
        heroImageAlt="LNER App Clip interface"
      />

      {/* The Context */}
      <CaseStudySection title="The Challenge">
        <CaseStudyParagraph lead>
          App Clips are Apple's answer to instant-launch experiences: sub-10MB, focused 
          on single tasks, requiring no installation. Perfect for time-pressured contexts. 
          But how do you design for users literally running to catch trains?
        </CaseStudyParagraph>

        <CaseStudyQuote>
          What information is essential versus overwhelming? How do you build trust for 
          payment in 30 seconds? These became the core design questions that shaped every decision.
        </CaseStudyQuote>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="User Research Insights">
            <CaseStudyList items={[
              { title: 'Information Overload', description: 'Travelers craved "demonstrably live" data, not generic info' },
              { title: 'Key Priorities', description: 'Live times, delays, platform details, prices, duration' },
              { title: 'Station Stress', description: 'Queues, late platform announcements, navigation anxiety' },
            ]} />
          </CaseStudyCard>
          
          <CaseStudyCard title="Design Constraints">
            <CaseStudyList items={[
              { title: 'Sub-10MB Size', description: 'Ruthless prioritization required' },
              { title: 'Instant Launch', description: 'No onboarding, no learning curve' },
              { title: 'National Rail Compliance', description: 'Industry guidelines to follow' },
            ]} />
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Research */}
      <CaseStudySection title="Research & Discovery">
        <CaseStudyParagraph lead>
          I started with an ideation workshop involving 13 participants—LNER stakeholders, 
          designers, developers, and project managers. Then took research to the field.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/softwire/fieldresearch1.webp', alt: 'Field Research', caption: 'Station observation at St. Pancras' },
            { src: '/softwire/fieldresearch2.webp', alt: 'Research Notes', caption: 'User journey mapping' },
          ]}
          columns={2}
        />

        <CaseStudyParagraph>
          "Fly-on-the-wall" observations at St. Pancras confirmed the stress points: users 
          checking platform boards repeatedly, anxiety spiking when platforms weren't 
          announced until the last minute, fumbling with paper tickets or slow apps.
        </CaseStudyParagraph>
      </CaseStudySection>

      {/* Design Process */}
      <CaseStudySection title="Design Process">
        <CaseStudyStatsGrid
          stats={[
            { value: '8', label: 'Weeks', sublabel: 'Total timeline' },
            { value: '13', label: 'Stakeholders', sublabel: 'In workshop' },
            { value: '9', label: 'Users', sublabel: 'Tested with' },
            { value: '7', label: 'Developers', sublabel: 'Collaborated' },
          ]}
        />

        <CaseStudyImage
          src="/softwire/ideationworkshop1.webp"
          alt="Ideation Workshop"
          caption="Workshop affinity mapping with cross-functional team"
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Week 1-2: Understanding">
            <CaseStudyParagraph>
              Ideation workshop, affinity mapping, sketching exercises. A key idea emerged: 
              simple interface showing essential journey info with quick buy option.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Week 3-4: Prototyping">
            <CaseStudyParagraph>
              Interactive Figma prototypes tested with 9 participants. Task: book a return 
              ticket to Birmingham for 1 adult, 1 child with railcard. Revealed crucial pain points.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyImage
          src="/softwire/appflow.webp"
          alt="User Flow"
          caption="Task flow evolution from low-fidelity to high-fidelity screens"
        />
      </CaseStudySection>

      {/* Key Iterations */}
      <CaseStudySection title="Key Iterations">
        <CaseStudyParagraph lead>
          Usability testing revealed critical issues. Two areas required major rethinking:
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Ticket Confirmation Screen">
            <CaseStudyParagraph>
              Users found the initial screen overwhelming. They needed clearer platform 
              information and simpler ticket-saving options. I refined the hierarchy and 
              streamlined calls to action.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Journey Planning Flow">
            <CaseStudyParagraph>
              The initial multi-step flow felt too long for an App Clip. Users couldn't 
              easily edit journey details. Redesigned to a quicker, single-overview approach 
              with inline editing.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution">
        <CaseStudyImage
          src="/softwire/earlyconcept.webp"
          alt="Final App Clip Design"
          caption="Streamlined booking flow designed for speed"
        />

        <CaseStudyList items={[
          { title: 'Instant Access', description: 'Launch via NFC tags or QR codes at station—no download required' },
          { title: 'Quick Journey Planning', description: 'Simplified interface with pre-filled location data where possible' },
          { title: 'Clear Options', description: 'Upcoming trains with key info: time, price, duration, changes. Filters for cheapest/fastest' },
          { title: 'Effortless Payment', description: 'Apple Pay integration for rapid checkout' },
          { title: 'Accessible Ticket', description: 'Prominent QR code, platform number, Apple Wallet integration' },
        ]} />
      </CaseStudySection>

      {/* Seat Finder Concept */}
      <CaseStudySection title="Beyond Booking: Seat Finder Concept">
        <CaseStudyParagraph lead>
          Last-minute buyers often don't have reserved seats. Finding an available seat 
          on a busy train adds stress. I explored a Seat Finder feature as part of the 
          onboarding experience.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Option A: Side Profile">
            <CaseStudyParagraph>
              Mimics user's view standing on the platform. Horizontal scrolling across 
              the train. Potentially easier orientation for matching real-world view.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Option B: Plan View">
            <CaseStudyParagraph>
              Industry-standard layout showing internal structure. Vertical scrolling 
              through carriages. More information on screen at once.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          This presented a perfect A/B testing opportunity—which graphical representation 
          would users interpret more quickly in real-world stress conditions?
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="Key Learnings">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Context is King">
            <CaseStudyParagraph>
              Designing for stressed, rushing users requires extreme simplification. 
              What works in relaxed settings fails under pressure.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="App Clips Demand Focus">
            <CaseStudyParagraph>
              The sub-10MB limit forces ruthless prioritization. Every screen, every 
              interaction must serve the core task efficiently.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Visual Choices Matter">
            <CaseStudyParagraph>
              The Seat Finder exploration showed how "small" visual choices (side vs. 
              plan view) significantly impact usability. Test assumptions in context.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Iteration Isn't Optional">
            <CaseStudyParagraph>
              Direct user feedback identified flaws I couldn't see. The confusing 
              confirmation screen and lengthy journey planning only surfaced through testing.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Reflection */}
      <CaseStudySection title="Reflection">
        <CaseStudyParagraph lead>
          This internship taught me that designing for context-specific needs—especially 
          under time pressure—requires fundamentally different thinking than standard 
          app design.
        </CaseStudyParagraph>

        <CaseStudyParagraph>
          The core booking flow was successfully developed and met National Rail guidelines. 
          Some features like Seat Finder were parked for future development, but the 
          foundation was solid. Collaborating with a cross-functional team to take an 
          idea from research through functional prototype was an invaluable experience.
        </CaseStudyParagraph>

        <CaseStudyQuote>
          Grounding design in user research—from workshop insights to station observations 
          to usability testing—we created a streamlined experience tailored to the stressful 
          station environment. Hopefully making future journeys a little less stressful.
        </CaseStudyQuote>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};import {
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

export const Pebble = () => {
  return (
    <CaseStudyLayout 
      title="Pebble"
      description="What If Workplace Happiness Was Designed, Not Hoped For? A VISA-backed virtual companion that transforms how remote teams combat isolation."
    >
      <CaseStudyHero
        title="What If Workplace Happiness Was Designed, Not Hoped For?"
        subtitle="A VISA-backed virtual companion that transforms how remote teams combat isolation"
        pills={[
          'Service Design',
          'Employee Wellbeing',
          'VISA Innovation',
          'RCA Group Project',
          'Virtual Companion',
        ]}
        intro="Remote work promised freedom. It delivered isolation. As project lead at the Royal College of Art, I created Pebble—a virtual wellbeing companion born from 1,200+ worker interviews and 24 co-creation workshops. Our 'Virtual Café' concept influenced VISA's internal collaboration roadmap, proving that proactive wellbeing design drives measurable business impact."
        overview={{
          role: [
            'Project Lead & UX Researcher',
            'Designed 24 co-creation workshops',
            'Led research synthesis (1,200+ responses)',
            'UI/UX design for Pebble companion',
          ],
          timeline: 'RCA + VISA Innovation Centre (3 months)',
          recognition: 'Virtual Café influenced VISA product roadmap',
          tools: [
            'Service Design',
            'Co-creation Workshops',
            'Figma',
            'User Testing',
          ],
        }}
        heroImage="/pebble/placeholder-hero.png"
        heroImageAlt="Pebble virtual wellbeing companion"
      />

      {/* Context */}
      <CaseStudySection title="The Crisis We're Designing For">
        <CaseStudyParagraph lead>
          The numbers told a troubling story. Our research revealed that 43% of employees 
          rated their mental health between "very bad" and "fair." The percentage feeling 
          "completely happy" at work had nosedived from 26% to just 13% since February 2020.
        </CaseStudyParagraph>

        <CaseStudyStatsGrid
          stats={[
            { value: '43%', label: 'Poor Mental Health', sublabel: 'Employees surveyed' },
            { value: '13%', label: 'Completely Happy', sublabel: 'Down from 26%' },
            { value: '12%', label: 'Productivity Gain', sublabel: 'With happy employees' },
            { value: '147%', label: 'Profit Increase', sublabel: 'With engaged teams' },
          ]}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="The Emotional Toll">
            <CaseStudyParagraph>
              Employees reported significant stress, isolation, distraction, and feeling 
              overwhelmed. The lack of casual, in-person interactions and intensity of 
              remote work were taking a heavy toll.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="The Business Impact">
            <CaseStudyParagraph>
              Happier employees are up to 12% more productive and demonstrate 3x more 
              creativity. Engaged, happy employees enhance business profitability by up 
              to 147%.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          Our challenge: How might we proactively design for workplace happiness rather 
          than reactively treating burnout? Wellbeing isn't an HR checklist—it's a 
          competitive advantage when designed systemically.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Research */}
      <CaseStudySection title="Research & Co-Creation">
        <CaseStudyParagraph lead>
          As project lead, I guided our team through an intensive, research-driven design 
          process. We believed that truly impactful solutions require deep understanding 
          and continuous co-creation with users and stakeholders.
        </CaseStudyParagraph>

        <CaseStudyList items={[
          { title: 'Surveys & Interviews', description: '1,200+ individual responses capturing emotional journeys and core needs' },
          { title: '24 Workshops', description: 'Public and VISA Innovation Centre employees exploring happiness together' },
          { title: 'Emotional Journey Mapping', description: '"How was your week?" tools to understand the ebbs and flows' },
          { title: 'Persona Development', description: 'Data-backed personas to guide design decisions' },
        ]} />

        <CaseStudyImage
          src="/pebble/workshop.png"
          alt="Co-creation Workshop"
          caption="Co-creation session at VISA Innovation Centre"
        />
      </CaseStudySection>

      {/* The Explorer Persona */}
      <CaseStudySection title="The Explorer Persona">
        <CaseStudyParagraph lead>
          A key decision from our validation workshop: focus on the "Explorer" persona—
          someone aware of their mental status but unsure how to improve it. We found 
          other user groups often pass through an Explorer phase.
        </CaseStudyParagraph>

        <CaseStudyCard title="Meet James">
          <CaseStudyParagraph>
            James is a 28-year-old remote product designer who embodies the Explorer's 
            challenges: frustration, lack of focus, and social isolation. He knows 
            something's off but doesn't know what to do about it.
          </CaseStudyParagraph>
        </CaseStudyCard>

        <CaseStudyQuote author="Workshop Insight">
          How might we help the Explorer build a foundation of high wellbeing? This 
          question led to the core concept of different "Pebble types"—virtual companions 
          with distinct personalities.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="Pebble: A Tailored Happiness Assistant">
        <CaseStudyParagraph lead>
          Pebble is a virtual assistant promoting happiness and productivity through 
          personalization, focus enhancement, and social connection. Four distinct 
          Pebble personalities match different user needs.
        </CaseStudyParagraph>

        <CaseStudyImageGrid
          images={[
            { src: '/pebble/onboarding.png', alt: 'Onboarding', caption: 'Personality matching quiz' },
            { src: '/pebble/focus.png', alt: 'Focus Mode', caption: 'Deep work features' },
            { src: '/pebble/cafe.png', alt: 'Virtual Café', caption: 'Social connection' },
          ]}
          columns={3}
        />

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="🎯 Personalized Matchmaking">
            <CaseStudyParagraph>
              Users find their unique Pebble companion via quiz-based matchmaking. 
              The Pebble learns and adapts through daily check-ins, building emotional 
              engagement over time.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🧠 Deep Work & Flow">
            <CaseStudyParagraph>
              Pebble helps users enter "flow" state with 1-minute cognitive exercises 
              and distraction-reducing tools, linking focused work to lasting happiness.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="☕ Virtual Café">
            <CaseStudyParagraph>
              Combats isolation by allowing employees to join or create informal coffee 
              chat rooms, recreating spontaneous office interactions. This concept 
              influenced VISA's internal roadmap.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="⏰ Healthy Boundaries">
            <CaseStudyParagraph>
              Acts as a "Happiness Assistant," gently prompting users to set work-life 
              boundaries with reminders to take breaks, log off, and reflect.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Testing Insights */}
      <CaseStudySection title="What We Learned from Testing">
        <CaseStudyParagraph lead>
          We tested our prototype with 5 participants. Their feedback shaped our 
          understanding of what remote workers actually need versus what we assumed.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={3}>
          <CaseStudyCard title="❤️ Connection Craved">
            <CaseStudyParagraph>
              Focus and coffee catch-up features resonated strongly. Employees crave 
              belonging—digital tools must actively facilitate it.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="📊 Deeper Personalization">
            <CaseStudyParagraph>
              Users wanted daily emotion checks and data tracking. They seek continuous, 
              adaptive support—not a one-off tool.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="🔗 Seamless Integration">
            <CaseStudyParagraph>
              Concerns about platform fatigue. A wellbeing tool must integrate into 
              existing workflows—Teams, Slack, calendars.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Impact */}
      <CaseStudySection title="Impact & Recognition">
        <CaseStudyParagraph lead>
          Our Virtual Café concept directly influenced VISA's internal collaboration 
          feature development. Senior designers praised our research-driven approach 
          and the quality of our co-creation methodology.
        </CaseStudyParagraph>

        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="VISA Adoption">
            <CaseStudyParagraph>
              The Virtual Café concept was adopted into VISA Innovation Centre's 
              roadmap for team chat feature development, validating our approach.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Future Vision">
            <CaseStudyParagraph>
              Seamless integrations with Microsoft Teams and Slack. Enhanced features: 
              daily mood tracking, team-generated personalization, social games.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>
      </CaseStudySection>

      {/* Learnings */}
      <CaseStudySection title="Key Learnings">
        <CaseStudyCardGrid columns={2}>
          <CaseStudyCard title="Wellbeing is Personal">
            <CaseStudyParagraph>
              Solutions must be adaptable and personalizable. One-size-fits-all 
              approaches fail because everyone experiences stress differently.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Co-creation is Essential">
            <CaseStudyParagraph>
              Involving users and stakeholders throughout was critical for relevance. 
              Our 24 workshops weren't just research—they were design sessions.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="Small Nudges, Big Shifts">
            <CaseStudyParagraph>
              Gentle, well-timed prompts can significantly influence work culture. 
              We don't need grand interventions—just thoughtful micro-moments.
            </CaseStudyParagraph>
          </CaseStudyCard>
          
          <CaseStudyCard title="The ROI of Happiness">
            <CaseStudyParagraph>
              Investing in wellbeing isn't soft—it's strategic. The data proves 
              that happy employees drive measurable business outcomes.
            </CaseStudyParagraph>
          </CaseStudyCard>
        </CaseStudyCardGrid>

        <CaseStudyQuote>
          Pebble represents more than a concept—it's a testament to design's power 
          to address complex human challenges. By starting with empathy and grounding 
          our process in research, we developed a vision for genuine workplace happiness.
        </CaseStudyQuote>
      </CaseStudySection>

      {/* Team */}
      <CaseStudySection title="Team & Acknowledgements">
        <CaseStudyParagraph>
          This project was a collaboration with Jing Qian and Zhiyuan Zheng at the 
          Royal College of Art. Special thanks to our tutor David, project partners 
          Elin and Annie, LBS student Yurika, wellbeing specialists Hugo Alistair 
          and Keyun Ruan, Mental Health Studio, and the entire VISA Innovation Team.
        </CaseStudyParagraph>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};
import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  Paragraph,
  Quote,
  List,
  Image,
  ImageGrid,
  Card,
  CardGrid,
  StatsGrid,
} from '@/components/case-study';

export const IviProgram = () => {
  return (
    <CaseStudyLayout
      title="Invisible Value Income Program"
      description="The Hidden Workload: Reimagining Women's Work-Life Balance for 2040 - A Core77 Award-winning speculative service design project with BCG & RSM."
    >
      <CaseStudyHero
        title="The Hidden Workload: Reimagining Women's Work-Life Balance for 2040"
        pills={[
          'Speculative Design',
          'Women\'s Wellbeing',
          'Invisible Labor',
          'Future of Work',
          'Systemic Design',
          'Core77 Award Winner',
        ]}
        intro="What if the invisible labor women perform at home could be economically valued and compensated? As project lead at the Royal College of Art, I designed a Core77-award-winning speculative service that reimagines work-life balance by 2040. Through research with 79 working women and co-creation workshops with BCG, we developed the Invisible Value Income (I.V.I.) Program—a future-facing system that makes unpaid domestic work visible, measurable, and compensated."
        overview={{
          role: [
            'Project Lead & Design Strategist',
            'Led research design and synthesis (79 participant interviews)',
            'Facilitated co-creation workshops with BCG stakeholders',
            'Designed speculative service system and Sensei platform UI',
          ],
          team: 'Collaborated with 4 RCA classmates (Guoxing Song, Jing Qian, Kotoko Kimura, Zhiyuan Zheng), Fuzzy Design Studio, Royal Society of Medicine, and BCG',
          timeline: 'Royal College of Art collaborative project • 4 months',
          recognition: 'Core77 Design Awards 2021 — Notable Honor in Speculative Design',
          tools: [
            'Speculative Design',
            'Service Design',
            'Systems Thinking',
            'Ethnographic Research',
            'Co-creation Workshops',
            'Figma',
            'Journey Mapping',
            'Future Visioning',
          ],
        }}
      />

      {/* Hero Image */}
      <CaseStudySection>
        <Image
          src="/lovable-uploads/ivi-hero.jpg"
          alt="I.V.I. Program Overview"
          aspectRatio="16/9"
          priority
        />
      </CaseStudySection>

      {/* Introduction */}
      <CaseStudySection title="Introduction" delay={0.1}>
        <Paragraph>
          The modern working woman navigates a punishing intersection: professional ambitions clash with societal expectations, personal wellbeing competes with invisible domestic labor. As project lead for "A Soul at Work" at the Royal College of Art, I guided our team through an ambitious speculative design challenge: <em>How might we fundamentally reimagine our relationship with work for women by 2040?</em>
        </Paragraph>
        <Paragraph>
          I led the end-to-end research strategy, interviewing 79 working women across diverse sectors and countries to map systemic pressures. Through intensive co-creation workshops with BCG stakeholders and synthesis with wellbeing specialists, we developed the Invisible Value Income (I.V.I.) Program—a speculative government service that makes women's unpaid domestic contributions economically visible and compensated. The work earned a Core77 Design Awards Notable Honor (2021) and directly influenced BCG's internal equity research framework.
        </Paragraph>
      </CaseStudySection>

      {/* Impact Stats */}
      <CaseStudySection delay={0.15}>
        <StatsGrid
          stats={[
            { value: '79', label: 'Working Women Interviewed' },
            { value: '4', label: 'Wellbeing Specialists Consulted' },
            { value: 'Core77', label: 'Design Award Notable Honor' },
            { value: 'BCG', label: 'Framework Adopted Internally' },
          ]}
        />
      </CaseStudySection>

      {/* The Challenge */}
      <CaseStudySection title="The Challenge: The Weight of Invisible Burdens" delay={0.2}>
        <Paragraph>
          Our initial exploration focused on understanding the multifaceted pressures affecting working women's mental health. The "spark" for our project wasn't a single incident but an amalgamation of research highlighting systemic issues:
        </Paragraph>

        <CardGrid columns={2}>
          <Card title="The Mental Health Crisis">
            Globally, and particularly for women, workplace stress, anxiety, and depression are significant. Women juggling multiple roles face immense pressure, often without adequate support or recognition.
          </Card>
          <Card title="The Unpaid Work Pandemic">
            The disproportionate burden of unpaid domestic work and childcare falling on women is economically undervalued yet crucial for societal function—directly impacting women's time, energy, and career progression.
          </Card>
          <Card title="Blurred Boundaries & Role Conflict">
            The lines between private life and work domains lead to stress. Women frequently navigate conflicting expectations, leading to cognitive overload and a diminished sense of control.
          </Card>
          <Card title="The 'Working Mom' Penalty">
            The invisible sacrifice of career development for family, the devaluation of contributions in the workplace, and inequality in household responsibilities create systemic barriers.
          </Card>
        </CardGrid>

        <Paragraph>
          These challenges are not just personal—they are systemic, rooted in societal norms, workplace cultures, and economic structures that often fail to recognize and support the full spectrum of women's contributions.
        </Paragraph>

        <Image
          src="/lovable-uploads/ivi-stats.jpg"
          alt="Unpaid Work Statistics Visualization"
          aspectRatio="4/3"
        />
      </CaseStudySection>

      {/* Our Approach */}
      <CaseStudySection title="Our Approach: Deep Empathy and Future-Focused Speculation" delay={0.25}>
        <Paragraph>
          Our design process was rooted in deep empathy, extensive research, and a speculative approach to envision a more equitable future.
        </Paragraph>

        <Card title="Phase 1: Understanding the User (Discover)">
          <Paragraph>
            We conducted comprehensive research including interviews and surveys with 79 participants (working women across diverse sectors and countries) and 4 wellbeing specialists.
          </Paragraph>
          <List
            items={[
              'Stress arises from both external (workload, societal pressure) and internal (self-doubt, fear of skill obsolescence) stressors',
              'A sense of control significantly decreases stress',
              'Prevention of mental health issues is more effective than cure, yet often underfunded',
              'Working mothers lack time for self-reflection',
              'Key aspirations: Flexibility, Independence, Inclusion, Control, Support, and Self-Progress',
            ]}
          />
        </Card>

        <Image
          src="/lovable-uploads/ivi-research.jpg"
          alt="Research Process"
          aspectRatio="16/9"
        />

        <Card title="Phase 2: Defining the Persona & Problem Space">
          <Paragraph>
            To make these challenges tangible, we developed the persona of "Johanna," a 36-year-old mother juggling remote work, childcare, and household responsibilities with little personal time and a blurred work-life boundary.
          </Paragraph>
          <Paragraph>
            Johanna's pain points—no time for herself, loss of control, constant adjustment to surroundings, and lack of deep communication—encapsulated the core issues we aimed to address. The root cause circled back to the devaluation of her work at home.
          </Paragraph>
        </Card>

        <Image
          src="/lovable-uploads/ivi-persona.jpg"
          alt="Johanna Persona"
          aspectRatio="3/2"
        />

        <Card title="Phase 3: Speculating on the Future (2040)">
          <Paragraph>
            We projected these needs and challenges into a 2040 scenario, considering technological advancements (AI, IoT), evolving family structures, and changing work styles. This led to the central question:
          </Paragraph>
        </Card>

        <Quote author="Our Design Challenge">
          What if invisible value could be evaluated economically?
        </Quote>

        <Paragraph>
          This question became the cornerstone of our proposed solution. Our design principles focused on: throwing light on invisible value, encouraging equal family participation, empowering working mothers, and fostering an inclusive perspective.
        </Paragraph>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution: The Invisible Value Income (I.V.I.) Program" delay={0.3}>
        <Paragraph>
          The "Invisible Value Income (I.V.I.) Program" is a speculative governmental public program for 2040. It aims to recognize, measure, and compensate for the "invisible value" created by individuals, particularly women, outside of their formal employment—primarily in housework and childcare.
        </Paragraph>

        <CardGrid columns={3}>
          <Card title="Makes Invisible Value Visible">
            By quantifying and assigning economic worth to domestic contributions, the program seeks to shift societal perceptions and empower individuals.
          </Card>
          <Card title="Enhances Sense of Control">
            Provides individuals with data and insights into their overall life-work landscape, enabling better planning and decision-making.
          </Card>
          <Card title="Promotes Clear Self-Cognition">
            Encourages reflection on personal wellbeing, workload distribution, and life goals.
          </Card>
        </CardGrid>

        <Card title="Key Touchpoints: The 'Sensei' Platform">
          <Paragraph>
            The I.V.I. Program would be facilitated through several touchpoints, with a central digital platform called "Sensei":
          </Paragraph>
          <List
            items={[
              'Collect Invisible Value (IoT & Sensei): Work value at home is collected via IoT devices and visualized on the Sensei platform, translating into potential "invisible value income"',
              'Self-Check (Sensei, GP, I.V.I. Specialist): Users monitor their physical and mental health via Sensei, with pathways to professional support',
              'Life & Work Plan (Sensei, Manager, HR, Family): The platform facilitates conversations and planning around work-life expectations and career development',
              'Receive Invisible Value Income (I.V.I. Department): Financial compensation for the recognized invisible value',
            ]}
          />
        </Card>

        <Image
          src="/lovable-uploads/ivi-platform.jpg"
          alt="Sensei Platform Interface"
          aspectRatio="16/9"
        />

        <Image
          src="/lovable-uploads/ivi-blueprint.jpg"
          alt="I.V.I. Service Blueprint"
          aspectRatio="21/9"
        />
      </CaseStudySection>

      {/* Prototyping & Validation */}
      <CaseStudySection title="Prototyping & Validation with Stakeholders" delay={0.35}>
        <Paragraph>
          We prototyped the I.V.I. Program concept and the Sensei platform, then validated it through interviews and workshops with 9 diverse stakeholders, including working mothers, working fathers, managers, and HR specialists from different countries.
        </Paragraph>

        <Image
          src="/lovable-uploads/ivi-workshop.jpg"
          alt="Stakeholder Workshop"
          aspectRatio="3/2"
        />

        <Quote author="Miao, Working Mother, China">
          The invisible value should be paid for by the government/institutions, and that women are discriminated against more if the company pays for it.
        </Quote>

        <Quote author="Saanya, Manager, India">
          This will help us plan and manage our employees workload and timings to ensure lack of productivity at work.
        </Quote>

        <Quote author="Miriam, Germany">
          It would need to be very easy to access, otherwise it would only be the very educated women that get access to these money…
        </Quote>

        <Card title="Design Recommendations from Validation">
          <List
            items={[
              'Ensure government funding to avoid workplace discrimination',
              'Allow partial data access for employers (with user consent only)',
              'Emphasize trust-based service design with minimal data tracking',
              'Consider potential side effects: domestic work becoming transactional, privacy concerns',
            ]}
          />
        </Card>
      </CaseStudySection>

      {/* Key Learnings */}
      <CaseStudySection title="Key Learnings & Bold Insights" delay={0.4}>
        <CardGrid columns={2}>
          <Card title="The Power of Making the Invisible, Visible">
            Quantifying and acknowledging unpaid domestic labor has the potential to fundamentally shift societal valuations, individual self-worth, and power dynamics within families and workplaces.
          </Card>
          <Card title="Speculative Design as a Catalyst for Dialogue">
            Envisioning a future scenario like the I.V.I. Program, even if ambitious, opens up critical conversations about current inequalities and desired societal changes.
          </Card>
          <Card title="Wellbeing is Systemic">
            Individual mental health is deeply intertwined with broader social, cultural, and economic systems. Addressing it effectively requires systemic interventions, not just individual coping mechanisms.
          </Card>
          <Card title="Technology as an Enabler">
            While platforms like Sensei can facilitate awareness and planning, the true impact comes from the policy changes and cultural shifts they support.
          </Card>
        </CardGrid>

        <Paragraph>
          My personal key learning from this project was the transformative potential of service design to not only solve existing problems but also to provoke thought and inspire visions for a more equitable and human-centered future. The process of deeply understanding user narratives and then projecting them into a speculative future to challenge current norms was incredibly powerful.
        </Paragraph>
      </CaseStudySection>

      {/* Future Vision & Impact */}
      <CaseStudySection title="The Future Vision & Impact" delay={0.45}>
        <Paragraph>
          The I.V.I. Program, as a concept for 2040, aims to create a society where:
        </Paragraph>

        <Image
          src="/lovable-uploads/ivi-future.jpg"
          alt="2040 Vision Scenario"
          aspectRatio="16/9"
        />

        <List
          items={[
            'Working parents, especially mothers, have a greater sense of control and recognition',
            'Conversations about domestic labor and work-life balance are more open and equitable',
            'Companies foster more inclusive and genuinely supportive environments',
            'Reduced strain on mental healthcare systems and a boost in overall happiness index',
          ]}
        />

        <Quote author="Project Impact">
          The foundational research and the "6 dimensions of workplace wellbeing" framework developed during this project were utilized by B.C.G. for their internal employee affiliation workshops, demonstrating the immediate relevance and applicability of our insights.
        </Quote>
      </CaseStudySection>

      {/* Conclusion */}
      <CaseStudySection title="Conclusion" delay={0.5}>
        <Paragraph>
          "A Soul at Work" and the conceptual Invisible Value Income Program challenged us to look beyond current paradigms of work and value. By focusing on the lived experiences of working women, particularly mothers like our persona Johanna, and by speculating on a future where their "invisible" contributions are recognized and compensated, we aimed to design not just a service, but a catalyst for profound societal and personal wellbeing.
        </Paragraph>
        <Paragraph>
          The journey underscored the vital role of design in questioning norms, envisioning preferable futures, and striving for a world where everyone's work, in all its forms, is truly valued. The significance of this exploration was recognized with a Notable Honor in the Speculative Design category at the Core77 Design Awards in 2021.
        </Paragraph>
      </CaseStudySection>

      {/* The Team */}
      <CaseStudySection title="The Team & Partners" delay={0.55}>
        <CardGrid columns={3}>
          <Card title="RCA Group 5">
            Amaan Khan, Guoxing Song, Jing Qian, Kotoko Kimura, Zhiyuan Zheng
          </Card>
          <Card title="Project Partners">
            Fuzzy Design Studio, The Royal Society of Medicine (R.S.M.)
          </Card>
          <Card title="Co-creation Partner">
            B.C.G. (Boston Consulting Group)
          </Card>
        </CardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};import {
  CaseStudyLayout,
  CaseStudyHero,
  CaseStudySection,
  Paragraph,
  Quote,
  List,
  Image,
  ImageGrid,
  Card,
  CardGrid,
  StatsGrid,
} from '@/components/case-study';

export const Stampede = () => {
  return (
    <CaseStudyLayout
      title="Stampede"
      description="Designing Strategic Partnerships for Conservation Impact - A methodology that transforms random conservation partnerships into designed collaborations with Airbnb & WWT."
    >
      <CaseStudyHero
        title="Stampede: Designing Strategic Partnerships for Conservation Impact"
        pills={[
          'Conservation',
          'Strategic Partnerships',
          'Design Thinking',
          'Workshop Facilitation',
          'Systems Design',
          'Royal College of Art',
        ]}
        intro={`"This was 100 times more productive than any partnership meeting I've had." That's how WWT's Senior Partnerships Manager described my facilitation framework. As project lead at the Royal College of Art, I designed Stampede—a strategic matchmaking methodology that transforms random conservation partnerships into designed collaborations. Using Power/Pace matrices and animal archetypes, I facilitated the WWT × Airbnb partnership that stakeholders called revolutionary for conservation collaboration.`}
        overview={{
          role: [
            'Project Lead & Service Designer',
            'Led research with WWF, WWT, Imperial College stakeholders',
            'Designed Stampede methodology (Power/Pace matrix, animal archetypes)',
            'Facilitated 3-hour WWT × Airbnb co-creation workshop',
          ],
          team: 'Collaborated with Anahita Pradhan, Andrew Seetoh, Constance Cheung (RCA)',
          timeline: 'Royal College of Art collaborative project • 4 months',
          recognition: 'WWT × Airbnb partnership created; stakeholders reported "100x more productive" meetings using framework',
          tools: [
            'Service Design',
            'Systems Thinking',
            'Workshop Facilitation',
            'Stakeholder Research',
            'Framework Design',
            'Co-creation Methods',
            'Service Blueprinting',
          ],
        }}
      />

      {/* Hero Image */}
      <CaseStudySection>
        <Image
          src="/lovable-uploads/stampede-hero.jpg"
          alt="Stampede Conservation Partnership Workshop"
          aspectRatio="16/9"
          priority
        />
      </CaseStudySection>

      {/* Introduction */}
      <CaseStudySection title="Introduction" delay={0.1}>
        <Paragraph>
          Wildlife conservation has a hidden crisis: billions in unspent funding, game-changing partnerships formed by "happy accidents," and corporate advocates who disappear when they change jobs. The sector is passionate and driven, yet systematically inefficient at connecting resources to impact. As project lead for a Royal College of Art team, I saw this as a design challenge: <em>What if strategic partnerships could be designed, not left to luck?</em>
        </Paragraph>
        <Paragraph>
          I led the creation of "Stampede"—a matchmaking methodology that transforms how conservation organizations find and forge partnerships. Through research with WWF, WWT, and Imperial College, plus facilitation of a landmark WWT × Airbnb collaboration workshop, we developed a framework using Power/Pace matrices and animal archetypes to strategically connect unlikely partners. The result: stakeholders reporting "100x more productive" meetings and a methodology adopted for ongoing partnership development.
        </Paragraph>
      </CaseStudySection>

      {/* Impact Stats */}
      <CaseStudySection delay={0.15}>
        <StatsGrid
          stats={[
            { value: '100x', label: 'More Productive Meetings' },
            { value: 'WWT × Airbnb', label: 'Partnership Facilitated' },
            { value: '7', label: 'Animal Archetypes Created' },
            { value: '3hrs', label: 'Workshop Sprint Format' },
          ]}
        />
      </CaseStudySection>

      {/* The Challenge */}
      <CaseStudySection title="The Challenge: Unlocking Latent Potential in Conservation" delay={0.2}>
        <Paragraph>
          Our investigation into the conservation sector, which included interviews with leaders from organizations like WWF, Wildfowl Wetlands Trust (WWT), and academics from Imperial College, revealed a landscape ripe with opportunity but also fraught with systemic friction. This became the "spark" for our project.
        </Paragraph>

        <Card title="Untapped Financial Resources">
          <Paragraph>
            A significant insight was that "a lot of money [is] lying around which isn't being spent." Large organizations often struggle with the effective allocation of funds to the most pressing causes or the most capable parties.
          </Paragraph>
          <Quote author="WWF, Head of Strategic Communications and Partnerships">
            A lot of big organisations like the WWF or DEFRA struggle with allocating funds… The money is left unspent.
          </Quote>
        </Card>

        <Card title="Collaboration is Standard, but Ad Hoc">
          <Paragraph>
            While partnerships are the norm and crucial for success, many "form out of luck" or "happy accidents" rather than through a structured, strategic approach.
          </Paragraph>
          <Quote author="Visitor Centre Development, Wildfowl Wetlands Trust">
            Happy accidents lead to partnerships e.g. with HSBC.
          </Quote>
        </Card>

        <Card title="The Matchmaking Dilemma">
          <Paragraph>
            Finding the right people and organizations to team up with is a significant hurdle in the sector.
          </Paragraph>
          <Quote author="Wildlife Biologist, Founder of Key Conservation">
            There are so many people out there who have similar interests, but connecting them is tough.
          </Quote>
        </Card>

        <Card title="The Fragility of Advocacy">
          <Paragraph>
            Corporate support often depends heavily on individual champions within those companies. If an advocate leaves, the partnership and funding can dissolve.
          </Paragraph>
          <Quote author="Ecosystem Researcher, Wildfowl Wetlands Trust">
            We had a great relationship with a corporate, but when that person left the organisation, we lost the advocate and support.
          </Quote>
        </Card>

        <Paragraph>
          Our problem statement therefore became: How can Stampede spur innovative action by catalysing partnerships within the conservation industry? And in doing so, how could it link previously disconnected organizations, utilize restricted income, and create long-term advocates?
        </Paragraph>
      </CaseStudySection>

      {/* Stakeholder Research */}
      <CaseStudySection delay={0.25}>
        <Image
          src="/lovable-uploads/stampede-research.jpg"
          alt="Stakeholder Research & Interviews"
          aspectRatio="16/9"
        />
      </CaseStudySection>

      {/* Our Approach */}
      <CaseStudySection title="Our Approach: A Design-Led Framework for Catalysing Partnerships" delay={0.3}>
        <Paragraph>
          Inspired by the way Stampede (the client) had teamed up with the RCA for innovative solutions, we proposed that Stampede could play a similar facilitation and match-making role within the conservation sector itself. Our approach was to develop a service that could intelligently connect and facilitate meaningful collaborations between curated parties for targeted conservation causes.
        </Paragraph>

        <Card title="1. Conceptualizing the 'Stampede' Methodology">
          <Paragraph>
            We envisioned "Stampede" not just as a one-off event, but as a holistic process. This involved a "People, Experience, Outcome, Follow-up" framework:
          </Paragraph>
          <List
            items={[
              'People: Connecting organizations and inspiring individuals',
              'Experience: Curating impactful engagements like expeditions, hackathons, and workshops',
              'Outcome: Enabling tangible results like new solutions, action plans, and proposals',
              'Follow-up: Ensuring momentum through continued engagement',
            ]}
          />
        </Card>

        <Card title="2. Creative Match-Making: The Power/Pace Matrix & Animal Archetypes">
          <Paragraph>
            A core part of our strategy was "Creative Match-Making." We recognized that different organizations operate with varying levels of Power (influence, resources) and Pace (speed of decision-making and execution). To make these characteristics more tangible and relatable, we developed a set of animal archetypes:
          </Paragraph>
        </Card>

        <ImageGrid
          images={[
            { src: '/lovable-uploads/stampede-matrix.jpg', alt: 'Power/Pace Matrix Visualization', aspectRatio: '1/1' },
            { src: '/lovable-uploads/stampede-archetypes.jpg', alt: 'Animal Archetype Icons', aspectRatio: '1/1' },
          ]}
        />

        <CardGrid columns={2}>
          <Card title="🦭 Walrus (e.g., WWF)">
            Global charitable organization; large, careful of brand, sometimes slow due to layers.
          </Card>
          <Card title="🐅 Tiger (e.g., Apple)">
            Large tech company; fast-moving, innovative, resource-rich.
          </Card>
          <Card title="🐑 Sheep (e.g., Thames Water)">
            Large traditional corporate; often follows others, slower decision-making.
          </Card>
          <Card title="🐝 Bumblebee (e.g., Giki)">
            Small conservation startup; innovative, agile, but limited reach/cash flow.
          </Card>
          <Card title="🪱 Worm (e.g., WWT)">
            Grassroots conservation organization; local reach, cash-strapped, vital on-the-ground impact.
          </Card>
          <Card title="🐙 Octopus (e.g., EY)">
            Large multinational corporate; analytical, many arms, can move quickly on projects.
          </Card>
        </CardGrid>

        <Paragraph>
          The insight here was that Stampede should target partnerships that complement the Power and Pace of different organizations, often connecting those who wouldn't typically collaborate (e.g., a high-power, low-pace "Walrus" with a low-power, high-pace "Bumblebee").
        </Paragraph>

        <Card title="3. Tailoring the Service: Partnership Stages">
          <Paragraph>
            We understood that organizations need help at various stages of the partnership journey. Stampede's service was designed to be flexible, offering support in:
          </Paragraph>
          <List
            items={[
              'Purpose Finding',
              'Match-Making',
              'Connecting',
              'Kicking-Off (Running a Stampede workshop)',
              'Project Execution',
              'Measuring Outcome',
            ]}
          />
        </Card>

        <Image
          src="/lovable-uploads/stampede-framework.jpg"
          alt="Service Framework & Partnership Stages"
          aspectRatio="21/9"
        />
      </CaseStudySection>

      {/* Prototyping in Action */}
      <CaseStudySection title="Prototyping in Action: The WWT × Airbnb Workshop" delay={0.35}>
        <Paragraph>
          To test and refine our methodology, we prototyped a "Stampede" kick-off workshop. WWT had expressed that Airbnb was a "dream partner." We facilitated a 3-hour session with key representatives: Holly Bland (Social Impact Experience Manager, Airbnb) and Nick Appleby (Senior Partnerships Manager, WWT).
        </Paragraph>

        <CardGrid columns={3}>
          <Card title="Unpacking (40 mins)">
            Introductions, building trust, goal setting, reflecting on organizational strengths.
          </Card>
          <Card title="Sketching (60 mins)">
            Idea generation using Crazy 8's on "How might Airbnb and WWT create an authentic wetlands experience?"
          </Card>
          <Card title="Solutioning (70 mins)">
            Developing an action plan, discussing practical considerations, and identifying challenges.
          </Card>
        </CardGrid>

        <ImageGrid
          images={[
            { src: '/lovable-uploads/stampede-workshop1.jpg', alt: 'Workshop in Progress', aspectRatio: '16/9' },
            { src: '/lovable-uploads/stampede-workshop2.jpg', alt: 'Workshop Outputs & Ideation', aspectRatio: '16/9' },
          ]}
        />

        <Quote author="Nick Appleby, Senior Partnerships Manager, WWT">
          This was 100 times more productive than any partnership meeting I have had.
        </Quote>

        <Quote author="Holly Bland, Social Impact Experience Manager, Airbnb">
          This has been an opportunity for me to think of the different things we do and could do. We will be following up — I have your details.
        </Quote>

        <Card title="Design Recommendations from the Prototype">
          <List
            items={[
              'Acknowledge and Address Monetary Value: Don\'t shy away from discussing revenue, even with non-profits',
              'Flexibility in Approach: Go in with a "hook" idea, but allow partnerships to evolve organically',
              'The Power of Third-Party Facilitation: A neutral facilitator helps level the playing field',
              'Invite the Right Decision-Makers: Ensure those who can make decisions are present',
              'Adapt to Time Constraints: Develop shorter "power hour" versions of Stampede workshops',
            ]}
          />
        </Card>
      </CaseStudySection>

      {/* The Solution */}
      <CaseStudySection title="The Solution: Stampede — A Service for Strategic Conservation Impact" delay={0.4}>
        <Paragraph>
          Based on our research and prototyping, Stampede is proposed as a service that strategically connects conservation organizations with unlikely but high-potential partners.
        </Paragraph>

        <CardGrid columns={2}>
          <Card title="Identifies Opportunities">
            Uses industry knowledge and networking to find pressing causes and untapped partnership opportunities.
          </Card>
          <Card title="Creative Match-Making">
            Applies the Power/Pace matrix to connect unlikely but high-potential partners (e.g., NASA × WWF for real-time "Red List" animal tracking).
          </Card>
          <Card title="Bespoke Experiences">
            Designs and facilitates everything from immersive expeditions for influential individuals to joint design sprints for co-created solutions.
          </Card>
          <Card title="Actionable Outcomes">
            Drives concrete plans, proposals, and ensures continued momentum beyond ideation.
          </Card>
        </CardGrid>

        <ImageGrid
          images={[
            { src: '/lovable-uploads/stampede-blueprint.jpg', alt: 'Service Blueprint', aspectRatio: '21/9' },
            { src: '/lovable-uploads/stampede-nasa.jpg', alt: 'NASA × WWF Concept - Real-time Red List Tracking', aspectRatio: '16/9' },
          ]}
        />
      </CaseStudySection>

      {/* Key Learnings */}
      <CaseStudySection title="Key Learnings & Insights" delay={0.45}>
        <CardGrid columns={2}>
          <Card title="Collaboration Can Be Designed">
            A structured approach can significantly increase the likelihood of successful collaborations by strategically matching complementary strengths.
          </Card>
          <Card title="Unlocking 'Stuck' Resources">
            A neutral catalyst can help identify siloed resources and co-create viable pathways for their use.
          </Card>
          <Card title="Speed & Agility as Currencies">
            The contrast in operational speeds (e.g., WWT vs. Airbnb) highlights the need for processes that can accelerate decision-making.
          </Card>
          <Card title="Person-to-Person Connection">
            The enthusiasm and trust built between key individuals during facilitated sessions are critical drivers of success.
          </Card>
        </CardGrid>

        <Paragraph>
          My personal key learning from leading the Stampede project was the immense potential that lies at the intersection of design thinking and complex systemic challenges. Applying a structured yet creative facilitation process can unlock novel solutions and foster genuine buy-in from diverse stakeholders, even in sectors as established as conservation.
        </Paragraph>
      </CaseStudySection>

      {/* The Future */}
      <CaseStudySection title="The Future of Stampede" delay={0.5}>
        <Paragraph>
          The immediate next steps for developing Stampede would involve:
        </Paragraph>
        <List
          items={[
            'Refining Brand Strategy & Collaterals: Creating pitch decks and toolkits',
            'Developing a Sustainable Business Model & Financing Plan',
            'Defining Organizational Structure & Roles',
            'Running More Prototype Workshops: To further test and iterate the collaboration process',
          ]}
        />
      </CaseStudySection>

      {/* Conclusion */}
      <CaseStudySection title="Conclusion" delay={0.55}>
        <Paragraph>
          The Stampede project demonstrated a clear need and a viable, design-led approach to accelerating conservation efforts by fostering innovative and strategic partnerships. By understanding the unique challenges and operational styles of different organizations within the sector, and by applying a facilitated, co-creative methodology, Stampede offers a pathway to unlock unspent resources, connect disparate expertise, and ultimately drive more impactful conservation outcomes.
        </Paragraph>
        <Quote>
          It's about moving from "happy accidents" to "designed impact."
        </Quote>
      </CaseStudySection>

      {/* The Team */}
      <CaseStudySection title="The Team" delay={0.6}>
        <CardGrid columns={4}>
          <Card title="Amaan Khan">Project Lead & Service Designer</Card>
          <Card title="Anahita Pradhan">RCA Collaborator</Card>
          <Card title="Andrew Seetoh">RCA Collaborator</Card>
          <Card title="Constance Cheung">RCA Collaborator</Card>
        </CardGrid>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};