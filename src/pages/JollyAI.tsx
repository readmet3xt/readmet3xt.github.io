import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ProjectOverviewCard } from '@/components/ProjectOverviewCard';

// Import case study images
import thinkingPanel from '/JollyAI/jollyai1.png';
import instructionModal from '/JollyAI/jollyai2.png';
import stateOnboarding from '/JollyAI/jollyai3.png';
import promptGallery from '/JollyAI/jollyai5.png';
import sidePanelNav from '/JollyAI/jollyai6.png';
import visualIdentity from '/JollyAI/jollyai7.png';
import fullInterface from '/JollyAI/jollyai8.png';

export const JollyAI = () => {
  useScrollReveal();

  return (
    <PageLayout className="px-3 sm:px-4 md:px-6 lg:px-12 pt-24 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 case-study-section">
        
        <div className="reveal-on-scroll">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Designing Jolly AI – A Transparent Legal Assistant</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="case-study-pill">Legal Tech</span>
            <span className="case-study-pill">AI UX</span>
            <span className="case-study-pill">Transparency Design</span>
            <span className="case-study-pill">Web Application</span>
            <span className="case-study-pill">Freelance</span>
          </div>

          <p className="text-base sm:text-lg leading-relaxed">
            As a freelance product designer, I designed Jolly AI, an AI assistant specifically for lawyers in India, that prioritized trust, accuracy, and customization. Moving away from a "black box" chatbot, I created a workspace that feels like a reliable junior associate by visualizing the AI's reasoning process and providing precise control over legal tone and context.
          </p>
        </div>

        <ProjectOverviewCard
          role={[
            "Freelance Product Designer",
            "UX Strategy & Information Architecture",
            "Interface Design & Visual Identity",
            "User Flow & Interaction Design"
          ]}
          timeline="Freelance project"
          tools={[
            "Figma",
            "User Research",
            "Interaction Design",
            "Visual Design",
            "Design Systems"
          ]}
        />

        {/* Hero Image */}
        <section className="reveal-on-scroll">
          <img 
            src={fullInterface} 
            alt="Jolly AI full interface showing the transparent legal assistant workspace"
            className="case-study-image w-full h-auto object-contain rounded-lg"
          />
        </section>

        {/* The Challenge */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">1. The Challenge</h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Legal professionals are often skeptical of AI due to "hallucinations" and a lack of transparency. My client needed a design for Jolly AI, an AI assistant specifically for lawyers in India, that prioritized trust, accuracy, and customization. The goal was to move away from a "black box" chatbot and create a workspace that felt like a reliable junior associate.
          </p>
          <div className="bg-card p-6 rounded-lg border mt-6">
            <h3 className="text-lg font-semibold mb-4">Key Design Requirements</h3>
            <ul className="space-y-3 text-sm">
              <li>• <strong>Build Trust:</strong> Visualize AI reasoning to allow lawyers to verify accuracy before trusting outputs</li>
              <li>• <strong>Ensure Precision:</strong> Provide control over legal tone and terminology for different use cases</li>
              <li>• <strong>Jurisdictional Accuracy:</strong> Account for India's state-specific legal variations from the start</li>
              <li>• <strong>Streamline Workflow:</strong> Reduce friction in accessing common legal tasks and managing multiple cases</li>
            </ul>
          </div>
        </section>

        {/* Design Strategy & Solutions */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">2. Design Strategy & Solutions</h2>
          
          {/* A. Glass Box UX */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">A. Building Trust through "Glass Box" UX</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              The most critical design decision was to visualize the AI's reasoning process. In standard chatbots, the user only sees the final answer. For Jolly AI, I designed a split-pane interface visible in the "Thinking" phase.
            </p>
            
            <div className="my-6">
              <img 
                src={thinkingPanel} 
                alt="The Thinking Panel showing AI's internal workflow with Query Reframing, Clarification, and Legal Index Framework Review"
                className="case-study-image w-full h-auto object-contain rounded-lg"
              />
              <p className="text-sm text-text-tertiary mt-2 italic">The "Thinking" Panel displaying the AI's reasoning process</p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-3">The "Thinking" Panel</h4>
              <p className="text-sm text-text-secondary mb-4">
                Before generating an answer, the UI displays the AI's internal workflow: Query Reframing, Clarification, and Legal Index Framework Review.
              </p>
              <p className="text-sm">
                <strong className="text-accent-primary">Why this works:</strong> It allows lawyers to verify how the AI understands the law (e.g., referencing Section 56(2) of the Income Tax Act) before they trust the output.
              </p>
            </div>
          </div>

          {/* B. Context & Customization */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">B. Context & Customization</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Law requires precise tone control. A generic "helpful" tone isn't always appropriate for legal notices or client emails.
            </p>
            
            <div className="space-y-6 my-6">
              <div>
                <img 
                  src={instructionModal} 
                  alt="Add Instructions modal allowing users to set global parameters and tone control"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-sm text-text-tertiary mt-2 italic">Instruction Modal for customizing AI behavior</p>
              </div>
              <div>
                <img 
                  src={stateOnboarding} 
                  alt="State-specific onboarding flow with mandatory state selection for jurisdictional accuracy"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-sm text-text-tertiary mt-2 italic">State-specific onboarding for jurisdictional accuracy</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3">Instruction Modal</h4>
                <p className="text-sm text-text-secondary">
                  I designed an "Add Instructions" feature directly in the chat input. Users can set global parameters (e.g., "Keep it concise," "Use formal legal terminology") that the AI remembers for future interactions.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3">State-Specific Onboarding</h4>
                <p className="text-sm text-text-secondary">
                  Recognizing that laws in India vary by state, the onboarding flow includes a mandatory state selection (e.g., Telangana) to ensure jurisdictional accuracy from the start.
                </p>
              </div>
            </div>
          </div>

          {/* C. Streamlined Workflow */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">C. Streamlined Workflow</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              To solve common friction points in legal work, I designed features that make starting and managing work effortless.
            </p>
            
            <div className="space-y-6 my-6">
              <div>
                <img 
                  src={promptGallery} 
                  alt="Prompt Gallery showing curated legal-specific prompts like Draft IT notice response and Outline M&A due diligence"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-sm text-text-tertiary mt-2 italic">Prompt Gallery solving the "blank page problem"</p>
              </div>
              <div>
                <img 
                  src={sidePanelNav} 
                  alt="Clean collapsible sidebar allowing quick navigation between cases and chat threads"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-sm text-text-tertiary mt-2 italic">Side Panel Navigation for managing multiple cases</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3">Prompt Gallery</h4>
                <p className="text-sm text-text-secondary">
                  To solve the "blank page problem," the home screen features a curated gallery of legal-specific prompts (e.g., "Draft IT notice response," "Outline M&A due diligence").
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3">Side Panel Navigation</h4>
                <p className="text-sm text-text-secondary">
                  A clean, collapsible sidebar allows lawyers to jump between different cases and chat threads quickly, essential for professionals juggling multiple clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Identity */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">3. Visual Identity</h2>
          
          <div className="my-6">
            <img 
              src={visualIdentity} 
              alt="Visual identity showcasing minimalist, high-contrast design with professional palette"
              className="case-study-image w-full h-auto object-contain rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Minimalist & Professional</h3>
              <p className="text-sm text-text-secondary">
                I used a stark, high-contrast palette (Black, White, Grays) to convey professionalism and authority, essential for legal practitioners.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Functional Typography</h3>
              <p className="text-sm text-text-secondary">
                High readability was paramount. Typography choices prioritized clarity and legibility for long-form legal content.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Status Indicators</h3>
              <p className="text-sm text-text-secondary">
                Subtle color cues (like the Yellow "Thinking..." pill) provide immediate system status feedback without cluttering the interface.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">4. Outcome</h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            The final Figma prototypes delivered a cohesive user experience that addresses the specific pain points of legal practitioners: the need for verifiable accuracy and stylistic control. The design successfully transforms a standard chat interface into a robust legal workspace.
          </p>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Key Design Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-accent-primary">Transparency First</h4>
                <p className="text-sm text-text-secondary">
                  Created a "glass box" experience where lawyers can verify AI reasoning before trusting outputs, addressing the core trust issue in legal AI.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent-primary">Precise Control</h4>
                <p className="text-sm text-text-secondary">
                  Designed customization features that give lawyers exact control over tone, terminology, and context for different legal scenarios.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent-primary">Jurisdictional Accuracy</h4>
                <p className="text-sm text-text-secondary">
                  Implemented state-specific onboarding to ensure legal advice is accurate for India's varied regional legal frameworks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent-primary">Workflow Optimization</h4>
                <p className="text-sm text-text-secondary">
                  Streamlined common legal tasks with prompt galleries and efficient case management navigation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Impact */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-12 sm:mt-14 md:mt-16">Design Impact</h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            This project demonstrates how thoughtful UX design can address domain-specific challenges in AI applications. By prioritizing transparency, customization, and workflow efficiency, Jolly AI transforms a generic chatbot into a specialized legal tool that legal professionals can trust.
          </p>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Skills Demonstrated</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Design Strategy</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• User Research</li>
                  <li>• Information Architecture</li>
                  <li>• UX Strategy</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interaction Design</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• User Flows</li>
                  <li>• Micro-interactions</li>
                  <li>• State Management</li>
                  <li>• Error Handling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Visual Design</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Visual Identity</li>
                  <li>• Typography</li>
                  <li>• Color Systems</li>
                  <li>• UI Components</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Domain Expertise</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Legal Tech</li>
                  <li>• AI/ML UX</li>
                  <li>• Trust Design</li>
                  <li>• Professional Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};
