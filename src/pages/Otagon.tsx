import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';
import { ProjectOverviewCard } from '@/components/ProjectOverviewCard';

export const Otagon = () => {
  useScrollReveal();

  return (
    <PageLayout className="px-3 sm:px-4 md:px-6 lg:px-12 pt-24 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 case-study-section">
        
        <div className="reveal-on-scroll">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">Otagon AI Gaming Companion</h1>
            <a 
              href="https://otagon.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              otagon.app
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="case-study-pill">React TypeScript</span>
            <span className="case-study-pill">AI/ML</span>
            <span className="case-study-pill">PWA</span>
            <span className="case-study-pill">Supabase</span>
            <span className="case-study-pill">Google Gemini</span>
            <span className="case-study-pill">Real-time Gaming</span>
          </div>

          <p className="text-lg leading-relaxed">
            I built a full-stack AI gaming companion that proves designers can ship production-grade code—achieving 100x faster response times and 85% cost reduction by consolidating 97 microservices into 8 maintainable systems. Leveraging React 19, TypeScript, Supabase, and Google Gemini AI, Otagon delivers real-time screenshot analysis and context-aware gaming assistance through intelligent caching and parallel processing architectures that prioritize both user experience and technical sustainability.
          </p>
        </div>

        <ProjectOverviewCard
          role={[
            "Full-stack development (Frontend + Backend + AI integration)",
            "UX/UI design and design system architecture",
            "Database schema design and optimization",
            "Performance optimization and cost reduction strategy"
          ]}
          timeline="Personal project - 3 months development"
          recognition="100x performance improvement, 85% API cost reduction, 1.84MB production bundle size"
          tools={[
            "React 19.1",
            "TypeScript",
            "Vite",
            "Supabase",
            "Google Gemini AI",
            "PostgreSQL",
            "Express.js",
            "Tailwind CSS",
            "PWA"
          ]}
        />

        {/* Hero Image */}
        <section className="reveal-on-scroll">
          <img 
            src="/Otagon/workinprogess.png" 
            alt="Hero Image - Main App Interface"
            className="case-study-image w-full h-auto object-contain rounded-lg"
          />
        </section>

        {/* Introduction */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p className="text-lg leading-relaxed mb-4">
            Otagon began as a personal moonshot: could a designer with coding skills ship production-grade full-stack software? Not a prototype, not a "designer's version"—but a real application handling authentication, databases, AI integration, and real-time processing at scale. The result: an AI gaming companion that analyzes screenshots in real-time, providing context-aware hints without spoilers—a genuinely novel solution in the gaming assistance space.
          </p>
          <p className="text-lg leading-relaxed">
            The technical journey was humbling. I over-engineered catastrophically (97 microservices!), fought OAuth authentication demons, and debugged conflicting database schemas at 3am. But through systematic refactoring—applying design thinking to code architecture—I consolidated systems, achieved 100x performance gains, and slashed API costs 85%. The revelation: user-centric design principles (simplicity, clarity, iteration) translate directly to sustainable code architecture.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Primary Gaming Challenges:</strong> Gamers often get stuck on difficult levels, puzzles, or boss fights. Traditional walkthroughs contain spoilers and aren't context-aware, creating a need for instant, personalized help without breaking immersion.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Technical Architecture Requirements:</strong> The solution required real-time image processing, AI analysis, cross-device synchronization, offline support, and scalable user management with tier-based features while optimizing costs for AI API usage.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            <strong>Major Technical Challenges I Overcame:</strong>
          </p>
          <ul className="space-y-2 mb-6">
            <li>• <strong>Service Architecture Over-Engineering:</strong> I initially created 97+ services causing maintenance nightmares - learned to ruthlessly simplify</li>
            <li>• <strong>Authentication State Management:</strong> Fought complex OAuth flows with multiple providers before landing on Supabase's unified approach</li>
            <li>• <strong>Database Schema Conflicts:</strong> Debugged multiple conflicting SQL schemas causing data inconsistencies - redesigned from scratch</li>
            <li>• <strong>Performance Bottlenecks:</strong> Refactored sequential operations that caused 5-10 second response times into concurrent parallel processing</li>
            <li>• <strong>Memory Management:</strong> Solved chat persistence and cross-device synchronization through intelligent caching strategies</li>
          </ul>
          <blockquote className="case-study-section blockquote">
            "The biggest challenge was consolidating 97+ microservices into a maintainable architecture while achieving 100x performance improvements and 85% cost reduction. I learned that over-engineering is just as dangerous as under-engineering."
          </blockquote>
        </section>

        {/* Process */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Solution & Architecture</h2>
          <p className="text-lg leading-relaxed mb-6">
            I built a comprehensive full-stack solution where design thinking informed every technical decision. My UX background drove architecture choices: React 19's concurrent rendering for smooth AI interactions, component composition for maintainability, aggressive bundle optimization for mobile performance (1.84MB production build), and intelligent caching to reduce costs by 85% while maintaining instant response times.
          </p>
          
          <img 
            src="/Otagon/aiprocessing.png" 
            alt="Architecture Diagram & System Flow"
            className="case-study-image w-full h-auto object-contain rounded-lg"
          />
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="space-y-1 text-sm">
                  <li>• React 19.1.1 with TypeScript</li>
                  <li>• Vite 6.2.0 for build optimization</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• PWA with service worker</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend & Database</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Supabase for auth & real-time DB</li>
                  <li>• Express.js with TypeScript</li>
                  <li>• PostgreSQL with 12 tables</li>
                  <li>• Row-Level Security (RLS)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI & ML</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Google Gemini 2.5 (Flash + Pro)</li>
                  <li>• Image processing (10 images/context)</li>
                  <li>• Context management (20 messages)</li>
                  <li>• Intelligent caching (85% cost reduction)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Real-time screenshot analysis</li>
                  <li>• Cross-device synchronization</li>
                  <li>• Offline-first architecture</li>
                  <li>• Tier-based user management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Key Features Implemented</h2>
          <p className="text-lg leading-relaxed mb-6">
            The solution delivers a comprehensive AI gaming companion with advanced features that address all identified challenges while maintaining exceptional performance and user experience.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">🤖 Intelligent Screenshot Analysis</h3>
              <p className="text-sm text-text-secondary">Real-time game identification from screenshots, progress estimation, spoiler-free assistance, and automatic game pill creation for specific titles with context-aware hint generation.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">💬 Advanced AI Conversation System</h3>
              <p className="text-sm text-text-secondary">Three distinct AI personas (Screenshot Analyst, Game Companion, General Assistant), strict spoiler-gating based on player progress, mandatory follow-up suggestions, and long-term memory integration across sessions.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">👥 Comprehensive User Management</h3>
              <p className="text-sm text-text-secondary">Free Tier (55 text queries, 25 images/month), Pro Tier (1,583 text queries, 328 images/month), Vanguard Tier with annual subscription, and Developer Mode for testing without subscription requirements.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">📱 Progressive Web App Features</h3>
              <p className="text-sm text-text-secondary">Offline-first architecture with IndexedDB fallback, background sync for chat and voice data, PWA installation with app shortcuts, and cross-device synchronization via Supabase.</p>
            </div>
          </div>
          
          <div className="case-study-grid-image">
            <img 
              src="/Otagon/chatinput.png" 
              alt="AI Conversation Interface"
              className="w-full h-auto object-contain rounded-lg"
            />
            <img 
              src="/Otagon/insightstabs.png" 
              alt="Screenshot Analysis Demo"
              className="w-full h-auto object-contain rounded-lg"
            />
            <img 
              src="/Otagon/playerprofile.png" 
              alt="Mobile App View"
              className="w-full h-auto object-contain rounded-lg"
            />
            <img 
              src="/Otagon/sidebarsorting.png" 
              alt="User Dashboard & Stats"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </section>

        {/* Bridging Design & Development */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Bridging Design & Development</h2>
          <p className="text-lg leading-relaxed mb-6">
            As a designer who codes, I made architecture decisions driven by UX principles rather than pure engineering patterns. This "vibe coding" approach - where design thinking informs technical implementation - resulted in a system that's both performant and maintainable.
          </p>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Design-Driven Technical Decisions</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-accent-primary">React 19 Concurrent Rendering:</strong>
                  <span className="text-muted-foreground ml-2">Chose React 19's concurrent features specifically for smooth AI response streaming - users see typing indicators and partial responses instead of loading spinners, maintaining conversational flow.</span>
                </li>
                <li>
                  <strong className="text-accent-primary">Component Composition Architecture:</strong>
                  <span className="text-muted-foreground ml-2">Built a design system-first component library (40+ reusable components) that maps directly to Figma designs - developers and designers speak the same language.</span>
                </li>
                <li>
                  <strong className="text-accent-primary">Bundle Optimization for Mobile Performance:</strong>
                  <span className="text-muted-foreground ml-2">Aggressively optimized to 1.84MB production bundle because gamers need instant access on mobile devices with limited bandwidth - user experience drove technical constraints.</span>
                </li>
                <li>
                  <strong className="text-accent-primary">Intelligent Caching Strategy:</strong>
                  <span className="text-muted-foreground ml-2">Designed caching rules based on user behavior patterns (frequent screenshot re-analysis) rather than generic TTL - reduced API costs 85% while maintaining perceived instant responses.</span>
                </li>
                <li>
                  <strong className="text-accent-primary">Error States as Design Moments:</strong>
                  <span className="text-muted-foreground ml-2">Every error condition has a designed fallback with actionable next steps and illustrations - treating failures as part of the user journey, not edge cases.</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Quantified Design-Dev Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-accent-primary mb-1">40+</div>
                  <div className="text-muted-foreground">Reusable components in design system</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-primary mb-1">12</div>
                  <div className="text-muted-foreground">Database tables designed with user flows in mind</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-primary mb-1">95+</div>
                  <div className="text-muted-foreground">Lighthouse performance score through UX-driven optimization</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <p className="text-lg leading-relaxed mb-6">
            Through systematic refactoring and design-driven technical decisions, I achieved measurable improvements across performance, cost, and code maintainability metrics:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-3xl font-bold text-accent-primary mb-2">100x</div>
              <div className="text-sm text-text-secondary">Faster Loading</div>
              <div className="text-xs text-text-tertiary mt-1">5-10s → 0.1s</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-3xl font-bold text-accent-primary mb-2">85%</div>
              <div className="text-sm text-text-secondary">Cost Reduction</div>
              <div className="text-xs text-text-tertiary mt-1">API Optimization</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-3xl font-bold text-accent-primary mb-2">97→8</div>
              <div className="text-sm text-text-secondary">Services Consolidated</div>
              <div className="text-xs text-text-tertiary mt-1">Architecture Cleanup</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-3xl font-bold text-accent-primary mb-2">1.84MB</div>
              <div className="text-sm text-text-secondary">Bundle Size</div>
              <div className="text-xs text-text-tertiary mt-1">Optimized Build</div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Performance Improvements</h4>
                  <ul className="text-sm space-y-1 text-text-secondary">
                    <li>• 100x faster insight loading (5-10s → 0.1s)</li>
                    <li>• 85% reduction in API costs through intelligent caching</li>
                    <li>• 50-80% faster response times through parallel operations</li>
                    <li>• 60-70% reduction in memory usage</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Code Quality</h4>
                  <ul className="text-sm space-y-1 text-text-secondary">
                    <li>• 97 services consolidated into 8 core services</li>
                    <li>• Zero TypeScript errors with full type safety</li>
                    <li>• Comprehensive error handling with graceful fallbacks</li>
                    <li>• Production-ready with optimized bundle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          <p className="text-lg leading-relaxed mb-4">
            This project fundamentally changed how I think about the designer-developer relationship. The biggest insight: over-engineering is just as dangerous as under-engineering, and design thinking (simplicity, user-centricity, iterative refinement) applies to code architecture as much as UI design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Technical Insights</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• <strong>Less is More:</strong> I consolidated 97 microservices into 8 maintainable services - learned that architectural simplicity beats theoretical scalability</li>
                <li>• <strong>Performance Psychology:</strong> Users perceive 0.1s as instant, 1s as delayed - achieving 100x improvements changed the product experience fundamentally</li>
                <li>• <strong>Type Safety Saves Nights:</strong> TypeScript prevented countless 3am debugging sessions - upfront type investment pays off exponentially</li>
                <li>• <strong>Caching is King:</strong> 85% cost reduction came from understanding user behavior patterns, not just implementing generic caching</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">What I'd Do Differently</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• <strong>Start Simple:</strong> I'd begin with monolith architecture and extract services only when needed - premature optimization cost weeks</li>
                <li>• <strong>User Test Earlier:</strong> Waited too long to test AI response quality with real gamers - could've avoided wrong optimization paths</li>
                <li>• <strong>Document Architecture Decisions:</strong> Wish I'd kept a decision log explaining WHY I chose certain patterns - would've saved refactoring time</li>
                <li>• <strong>Monitor from Day 1:</strong> Added analytics late - missed opportunities to validate assumptions about user behavior</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">What's Next</h2>
          <p className="text-lg leading-relaxed mb-4">
            Otagon is live at <a href="https://otagon.app" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">otagon.app</a>. Next priorities: user acquisition (targeting gaming Discord communities), A/B testing AI response tones, and building analytics dashboards to validate which features drive retention. I'm also exploring partnerships with gaming content creators for co-marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Technical Insights</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• <strong>Service Consolidation:</strong> 97+ microservices can be consolidated into 8 maintainable services</li>
                <li>• <strong>Performance First:</strong> Parallel operations and intelligent caching can achieve 100x improvements</li>
                <li>• <strong>Type Safety:</strong> TypeScript prevents countless runtime errors and improves code quality</li>
                <li>• <strong>AI Integration:</strong> Proper context management and caching are crucial for cost optimization</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Development Process</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• <strong>Architecture Planning:</strong> Proper initial design prevents major refactoring later</li>
                <li>• <strong>Incremental Development:</strong> Building features progressively while maintaining functionality</li>
                <li>• <strong>User-Centric Design:</strong> Understanding user needs drives better technical decisions</li>
                <li>• <strong>Performance Monitoring:</strong> Continuous optimization throughout development cycle</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
          <p className="text-lg leading-relaxed mb-6">
            This project demonstrates expertise in modern full-stack development and positions me for advanced technical roles. The comprehensive solution showcases ability to handle complex technical challenges while delivering exceptional user experience.
          </p>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Skills Demonstrated</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• React 19 + TypeScript</li>
                  <li>• PWA Development</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vite Optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Supabase + PostgreSQL</li>
                  <li>• Express.js APIs</li>
                  <li>• Authentication Systems</li>
                  <li>• Real-time Features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI/ML</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Google Gemini Integration</li>
                  <li>• Image Processing</li>
                  <li>• Context Management</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Architecture</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• System Design</li>
                  <li>• Performance Optimization</li>
                  <li>• Error Handling</li>
                  <li>• Scalable Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};
