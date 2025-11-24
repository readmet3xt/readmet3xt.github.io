import { PageLayout } from '@/components/PageLayout';
import { useScrollReveal } from '@/components/ScrollReveal';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { ProjectOverviewCard } from '@/components/ProjectOverviewCard';

export const Softwire = () => {
  useScrollReveal();

  return (
    <PageLayout className="p-6 lg:p-12 pt-24 lg:pt-12">
      <div className="max-w-4xl mx-auto space-y-12 case-study-section">
        
        <div className="reveal-on-scroll">
          <h1 className="text-5xl font-bold mb-4">Designing for Speed: The Journey of LNER's App Clip Ticket Booking at Softwire</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="case-study-pill">User-Centered Design</span>
            <span className="case-study-pill">App Clip</span>
            <span className="case-study-pill">Mobile Design</span>
            <span className="case-study-pill">Usability Testing</span>
            <span className="case-study-pill">LNER</span>
          </div>

          <p className="text-lg leading-relaxed">
            How do you design for users running to catch a train? As the sole designer leading 7 developers during my Softwire internship, I architected LNER's App Clip ticket booking experience—eliminating app store friction for last-minute travelers. In 8 intense weeks, I designed, tested with 9 users, and delivered a streamlined flow that meets National Rail standards while proposing strategic innovations like Seat Finder A/B concepts that demonstrate product vision beyond project scope.
          </p>
        </div>

        <ProjectOverviewCard
          role={[
            "Solo UX/UI Designer",
            "Led end-to-end design (ideation, wireframing, prototyping, testing)",
            "Facilitated ideation workshop with 13 stakeholders",
            "Conducted usability testing with 9 participants"
          ]}
          team="Collaborated with 7 developers (Sofia, Neelu, Thomas, Joshua, Jeff, Harry), LNER stakeholders, Softwire project managers"
          timeline="8-week summer internship at Softwire"
          recognition="Core booking flow validated and developed; Seat Finder A/B concept designed for future roadmap"
          tools={[
            "Figma",
            "User Research",
            "Usability Testing",
            "Wireframing",
            "Apple App Clip",
            "National Rail Guidelines",
            "A/B Testing Design"
          ]}
        />

        {/* Hero Image */}
        <section className="reveal-on-scroll">
          <ImagePlaceholder
            label="LNER App Clip in Action"
            aspectRatio="16/9"
            dimensions="1200x675"
            className="case-study-image"
          />
        </section>

        {/* Introduction */}
        <section className="reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-4 mt-16">Introduction</h2>
          <p>You're sprinting through the station, dodging crowds, watching platform boards nervously. You reach the ticket kiosk—there's a queue. You try downloading the app—it's 200MB. The departure countdown ticks. This is the last-minute ticket buyer's nightmare that LNER needed to solve.</p>
          
          <p className="mt-4">Enter Apple's App Clip technology: sub-10MB, instant-launch, single-purpose apps that require no installation. Perfect for time-pressured contexts. But <em>how do you design for users literally running to catch trains?</em> What information is essential versus overwhelming? How do you build trust for payment in 30 seconds?</p>
          
          <p className="mt-4">During my Softwire summer internship, I led design for LNER's App Clip—from initial workshops with 13 stakeholders through usability testing and National Rail compliance. This case study explores designing for extreme time pressure, leveraging constraints for focus, and proposing strategic features (like Seat Finder A/B tests) that demonstrate product vision beyond the brief.</p>
        </section>

              {/* The Challenge & Context */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Challenge & Context</h2>
                <p>Our core problem statement was clear: "How can we enable users to purchase train tickets using LNER App Clip at the station?".</p>
                
                <p className="mt-4">An App Clip is a small, lightweight part of an app (under 10MB) that launches instantly, focused on a specific task — like booking a ticket — without needing a full app download. This seemed perfect for the time-sensitive station environment. But what did users actually need in that moment? Our initial research revealed some key insights:</p>
                
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Information Overload:</strong> While travellers generally found ticket purchasing easy (82% positive rating), they craved information that was 'demonstrably live'. Station environments often bombard users with data they don't need when running late.</li>
                  <li><strong>Key Information Needs:</strong> Through an ideation workshop with 13 participants (including LNER stakeholders, designers, developers, and project managers), we identified critical information passengers prioritize before buying: live departure/arrival times, delays, platform details, ticket prices and flexibility, and journey duration/stops. They also highlighted the need for accessibility info and help points.</li>
                  <li><strong>Station Pain Points:</strong> Observing passengers "fly-on-the-wall" style at St. Pancras station confirmed the stress points: long queues, uncertainty about platform announcements (often late, causing panic), and the anxiety of navigating the station itself. Losing physical tickets was also a concern.</li>
                </ul>
                
                <p className="mt-4">This research painted a picture of a user needing speed, clarity, and reassurance. Our App Clip needed to cut through the noise and provide a direct path to purchasing a ticket.</p>
              </section>

              {/* Our Approach */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Our Approach: Research-Driven Iteration</h2>
                <p>We adopted an iterative design process, constantly feeding research insights back into our designs and collaborating closely with the development team.</p>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">Understanding & Ideation (Week 1–2)</h3>
                <p>We started with the ideation workshop, affinity mapping, and sketching exercises. A key idea emerged: a simple interface showing essential journey info with a quick buy option. Station observations and creating a user journey map helped us pinpoint exactly where the App Clip could intervene in the existing stressful flow.</p>
                
                <div className="my-6">
                  <ImagePlaceholder
                    label="Ideation Workshop & Affinity Mapping"
                    aspectRatio="16/9"
                    dimensions="1200x675"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">Defining the Flow & Wireframing</h3>
                <p>We mapped out task flows for both the core booking experience and potential onboarding elements. We then moved from low-fidelity wireframes, focusing on layout and information hierarchy, to higher-fidelity screens incorporating LNER's visual language.</p>
                
                <div className="my-6">
                  <ImagePlaceholder
                    label="User Flow & Wireframe Progression"
                    aspectRatio="21/9"
                    dimensions="1400x600"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">Prototyping & Testing (Week 3–4)</h3>
                <p>We built interactive prototypes in Figma and conducted usability testing with 9 participants (friends, family, Softwire employees). We gave them a specific task: book a return ticket to Birmingham for 1 adult, 1 child with a railcard. This revealed crucial insights and pain points in our initial designs.</p>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">Iteration & Co-Creation</h3>
                <p>Based on testing feedback, we iterated heavily, particularly on two key areas:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Ticket Confirmation Screen:</strong> Users found the initial screen overwhelming. They needed clearer platform information and simpler ticket-saving options. We refined the hierarchy and streamlined the calls to action, balancing information density with the App Clip's need for quick, essential functions.</li>
                  <li><strong>'Plan Your Journey' Screens:</strong> The initial multi-step flow felt too long and cumbersome for an App Clip. Users also couldn't easily edit their journey details. We redesigned this flow to be quicker and more accessible, allowing edits more easily within a single overview screen.</li>
                </ul>
                <p className="mt-4">Throughout this, we held co-creation sessions with the development team to ensure our design decisions were feasible within the project scope and technical constraints.</p>
              </section>

              {/* The Solution */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Solution: A Streamlined App Clip Experience</h2>
                <p>The result was a focused LNER App Clip booking flow, designed for speed and clarity at the station:</p>
                
                <div className="my-8">
                  <ImagePlaceholder
                    label="Journey Planning Interface"
                    aspectRatio="9/16"
                    dimensions="400x711"
                  />
                </div>
                
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Instant Access:</strong> Users could launch the App Clip via methods like NFC tags or QR codes at the station (or potentially location-based suggestions).</li>
                  <li><strong>Quick Journey Planning:</strong> A simplified interface allows users to quickly input or confirm their destination (potentially pre-filled based on location), select dates, passengers, and railcards.</li>
                  <li><strong>Clear Options:</strong> Users are presented with upcoming train options, highlighting key info like time, price, duration, and changes. Filters for 'Cheapest', 'Fastest', etc., are available.</li>
                  <li><strong>Effortless Payment:</strong> Integration with Apple Pay allows for rapid checkout.</li>
                  <li><strong>Accessible Ticket:</strong> The final screen displays the ticket with a prominent QR code for barriers, essential journey details (platform number!), and options for saving the ticket (e.g., Add to Apple Wallet) or getting notifications.</li>
                </ul>
                
                <p className="mt-4">We ensured the design complied with National Rail guidelines and prioritized clarity on essential information.</p>
                
                <div className="case-study-grid-image my-8">
                  <ImagePlaceholder
                    label="Train Options Screen"
                    aspectRatio="9/16"
                    dimensions="400x711"
                  />
                  <ImagePlaceholder
                    label="Ticket Confirmation & Wallet"
                    aspectRatio="9/16"
                    dimensions="400x711"
                  />
                </div>
              </section>

              {/* Beyond Booking */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Beyond Booking: Exploring the Onboarding Opportunity</h2>
                <p>While the core focus was booking, we also explored how the App Clip could assist passengers after purchase — an "Onboarding Experience". A key concept here was the Seat Finder.</p>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">The Problem</h3>
                <p>Last-minute ticket buyers often don't have reserved seats. Finding an available seat on a busy train adds another layer of stress.</p>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">Our Idea</h3>
                <p>A feature within the App Clip to help users find available seats. It could:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>Show carriage layouts and indicate capacity based on unreserved seats.</li>
                  <li>Direct users with reserved seats to the correct carriage.</li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">An Insightful Design Challenge</h3>
                <p>How should we visually represent the train? We explored two options:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Option A (Side Profile):</strong> Mimics the user's view standing on the platform, potentially making orientation easier. Navigation: Scroll horizontally across the train.</li>
                  <li><strong>Option B (Plan View):</strong> A common industry standard showing internal layout, potentially allowing more info on screen at once. Navigation: Scroll vertically through carriages.</li>
                </ul>
                
                <p className="mt-4">This presented a perfect opportunity for A/B testing to see which graphical representation users could interpret more quickly and easily in a real-world context. We also designed an integrated feedback form to gather insights on new features like the Seat Finder post-launch.</p>
                
                <div className="case-study-grid-image my-8">
                  <ImagePlaceholder
                    label="Seat Finder Option A - Side Profile"
                    aspectRatio="9/16"
                    dimensions="400x711"
                  />
                  <ImagePlaceholder
                    label="Seat Finder Option B - Plan View"
                    aspectRatio="9/16"
                    dimensions="400x711"
                  />
                </div>
              </section>

              {/* Results and Learnings */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Results and Learnings</h2>
                <p>The core booking flow of the LNER App Clip was successfully developed and met National Rail guidelines. However, due to the time constraints of the summer internship, the full vision wasn't implemented in the initial build. Features like multiple payment methods, editing journey details during review, and the onboarding experiences (Seat Finder, Notifications) were parked for future development.</p>
                
                <h3 className="text-2xl font-bold mb-2 mt-8">Key Learnings & Bold Insights:</h3>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Context is King:</strong> Designing for a user likely rushing and stressed at a train station requires extreme simplification and prioritization of information. What works in a relaxed setting might fail under pressure.</li>
                  <li><strong>App Clips Demand Focus:</strong> The &lt;10MB limit and ephemeral nature of App Clips force ruthless prioritization. Every screen, every interaction must serve the core task efficiently.</li>
                  <li><strong>Visual Representation Matters:</strong> The Seat Finder exploration highlighted how seemingly small visual choices (side vs. plan view) can significantly impact usability and require testing in context. Assumptions about "logical" UX aren't always right, especially for diverse user groups.</li>
                  <li><strong>Iteration Isn't Optional:</strong> Direct user feedback through usability testing was invaluable in identifying flaws (like the confusing confirmation screen and lengthy journey planning) and validating improvements.</li>
                  <li><strong>Co-Creation Accelerates:</strong> Working closely with developers ensured technical feasibility and helped us make informed design trade-offs.</li>
                </ul>
              </section>

              {/* The Future */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">The Future</h2>
                <p>This project laid a strong foundation. The next steps involve:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li><strong>Further User Testing:</strong> Test the refined booking flow iterations and the proposed onboarding concepts (Seat Finder A/B test!) with real users at stations.</li>
                  <li><strong>Onboarding Implementation:</strong> Build out the Seat Finder and notification features to create a more complete end-to-end App Clip experience.</li>
                  <li><strong>Seat Finder Evolution:</strong> Explore basing the Seat Finder on live capacity data (not just reservations) and investigate potential benefits of a landscape mode (while being mindful of usability concerns like users having occupied hands).</li>
                </ul>
              </section>

              {/* Conclusion */}
              <section className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4 mt-16">Conclusion</h2>
                <p>Integrating App Clip technology provided a tangible solution to the friction of last-minute train ticket purchases. By grounding our design process in user research—from understanding initial pain points in workshops and station observations to iterating based on direct usability testing—we developed a streamlined booking flow tailored to the stressful station environment.</p>
                
                <p className="mt-4">While time constraints meant parking some exciting features like the Seat Finder for now, the project successfully demonstrated the potential of App Clips for LNER and provided valuable learnings about designing for context-specific needs. It was a fantastic experience collaborating with a cross-functional team to take an idea from research through to a functional prototype, hopefully making future journeys a little less stressful for LNER passengers.</p>
              </section>

        <div className="text-center mt-12">
          <a 
            href="/" 
            className="inline-block px-8 py-3 rounded-lg border border-border bg-card text-foreground hover:border-accent-primary hover:shadow-lg transition-all duration-300"
          >
            Back to Work
          </a>
        </div>
      </div>
    </PageLayout>
  );
};