import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { ProjectModal } from '@/components/ProjectModal';
import { TimelineItem } from '@/components/TimelineItem';
import { AboutProjectCard } from '@/components/AboutProjectCard';
import { CopyToast } from '@/components/CopyToast';
import { useScrollReveal } from '@/components/ScrollReveal';
import { CertificatesCarousel } from '@/components/CertificatesCarousel';
import amaanHero from '/lovable-uploads/22366376-40f2-492f-989a-067de0fdb01f.png';

const projectsData = {
  pebble: {
    title: 'Pebble - Employee Wellbeing Service',
    collab: 'VISA Innovation Centre Collaboration',
    content: `<p>Led a service design project focused on improving employee productivity and well-being. Utilized a human-centered design approach to develop a digital service concept that addressed key user challenges.</p>`
  },
  invisiblevalueprogram: {
    title: 'Invisible Value Income Program',
    collab: 'BCG & RSM Collaboration',
    content: `<p>Co-created a program to address work-life balance disparities, leveraging systems thinking and speculative design. The project's innovative approach was recognized with a Core 77 Design Award.</p>`
  },
  stampede: {
    title: 'Stampede - Conservation Partnerships',
    collab: 'Airbnb & WWT Collaboration',
    content: `<p>Developed an innovative workshop methodology to create impactful conservation partnerships using core design thinking principles and proposed inclusive design solutions.</p>`
  }
};

export const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<keyof typeof projectsData | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();
  
  useScrollReveal();

  const navigateToProject = (projectPath: string) => {
    navigate(projectPath);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mdamkhan.work@gmail.com');
      setToastVisible(true);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <PageLayout className="p-6 pt-24 pb-24 md:p-12 lg:pt-12 lg:pb-12">
        {/* Overview Section */}
        <section id="overview" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <h2 className="heading-2 mb-8">About Me</h2>
              
              {/* Introduction */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Digital Product Designer</h3>
                <p className="body-large mb-4">
                  Currently based in <span className="font-medium">Hyderabad</span>, with a Master's in Service Design from the <span className="font-medium">Royal College of Art (RCA)</span> in London.
                </p>
                <p className="body-base text-text-secondary" style={{ lineHeight: '1.7' }}>
                  I work with collaborative, cross-functional teams to create impactful and delightful experiences, specializing in human-centered design approaches that bridge digital innovation with real-world impact.
                </p>
              </div>

              {/* Philosophy & Recognition */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Design Philosophy & Recognition</h3>
                <p className="body-base text-text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                  I'm passionate about building products that encourage people to lead more creative, curious, and thoughtful lives.
                </p>
                <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-lg p-4 mb-4">
                  <p className="body-base text-text-secondary" style={{ lineHeight: '1.7' }}>
                    <span className="text-accent-primary font-semibold">🏆 Core77 Design Awards 2021</span> - Notable Honor in Speculative Design category for my IVI (Invisible Value Income) project—a forward-thinking exploration of how we might better value and support women's work-life balance in the future.
                  </p>
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Experience Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="body-base text-text-secondary" style={{ lineHeight: '1.7' }}>
                      <span className="font-semibold text-text-primary">4+ years</span> of experience designing products for clients including KoinBasket and Softwire
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="body-base text-text-secondary" style={{ lineHeight: '1.7' }}>
                      Scaled design teams and led <span className="font-semibold text-text-primary">strategic rebrands</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="body-base text-text-secondary" style={{ lineHeight: '1.7' }}>
                      Innovative academic collaborations with <span className="font-semibold text-text-primary">VISA Innovation Centre, BCG × RSM × Fuzzy Studio, and Airbnb × WWT</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={copyEmail}
                  className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Email
                </button>
                <a 
                  href="https://linkedin.com/in/mdamkhan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <img 
                src={amaanHero}
                alt="Amaan Khan - Product Designer" 
                className="w-full h-auto rounded-lg object-cover max-w-sm mx-auto md:mx-0"
              />
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Professional Experience</h2>
          <div className="timeline-container relative">
            <TimelineItem 
              title="User Experience Consultant (Contract)" 
              company="Stealth AI Startup · Freelance" 
              period="Mar 2025 - Apr 2025"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>NDA - Independently drove the UX design process, from initial concepts to interactive prototypes, for a generative AI tool</li>
              </ul>
            </TimelineItem>
            
            <br />
            
            <TimelineItem 
              title="Senior UX Designer" 
              company="KoinBasket | Remote, India" 
              period="June 2024 - Mar 2025"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Led the strategic rebrand and UI rework for web and mobile, transitioning to a cleaner, more professional aesthetic to enhance user trust.</li>
                <li>Hired and managed the company's first Junior UX Designer, scaling the design process for more complex initiatives.</li>
                <li>Designed the "BitBuddy" influencer ecosystem, a two-sided platform for experts to curate content and users to follow their insights.</li>
                <li>Architected the immersive Live Trading Experience, a flagship dashboard integrating live video streams with real-time market data and trade execution.</li>
              </ul>
            </TimelineItem>
            
            <br />
            
            <TimelineItem 
              title="Founding Designer" 
              company="KoinBasket | Remote, India" 
              period="October 2022 - June 2023"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>As the solo designer, led the strategy and design of the MVP in a one-week sprint, growing the user base from 0 to 70,000.</li>
                <li>Owned the end-to-end design process, from wireframes to high-fidelity responsive UI for web and mobile apps.</li>
                <li>Established the core user-centric value proposition: simplified crypto investing through curated "baskets" and a secure, non-custodial model.</li>
                <li>Designed key engagement features, including a Crypto Fantasy League and a multi-tiered rewards system, to drive user adoption and education.</li>
              </ul>
            </TimelineItem>
            
            <br />
            
            <TimelineItem 
              title="Design Intern" 
              company="Softwire | London, UK" 
              period="July 2022 - August 2022"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Conducted foundational user research and usability testing for an LNER App Clip, uncovering key insights that directly informed the final UI design.</li>
              </ul>
            </TimelineItem>
            
            <br />
            
            <TimelineItem 
              title="Design Research Intern" 
              company="Think Design | Remote, India" 
              period="April 2020 - May 2020"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Conducted in-depth design research utilizing various qualitative methods to understand the shift in communication norms during the COVID-19 pandemic.</li>
                <li>Analyzed research findings to inform strategic insights on the "new normal" of user interaction, providing valuable data for future design strategies.</li>
              </ul>
            </TimelineItem>
          </div>
        </section>
        
        {/* Academic Experience */}
        <section id="academic-experience" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Academic Experience</h2>
          <div className="timeline-container relative">
            <TimelineItem 
              title="Pebble (VISA Innovation Centre Project)" 
              company="RCA | London, U.K" 
              period="January 2021 – June 2021"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Led a service design project focused on enhancing employee well-being and productivity through innovative digital solutions within the VISA Innovation Centre.</li>
                <li>Employed user research, workshops, and iterative design processes to develop a solution that addressed key employee challenges.</li>
                <li>Developed a well-received digital service concept focused on improving focus, communication, and overall support within the workplace.</li>
              </ul>
            </TimelineItem>
            
            <br />
            
            <TimelineItem 
              title="Invisible Value Income Program (Fuzzy Design x BCG x RSM Collaboration)" 
              company="RCA | London, U.K" 
              period="October 2020 – December 2020"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Co-created a program aimed at addressing work-life balance disparities for women, utilizing design thinking methodologies.</li>
                <li>Designed speculative service solutions that challenged existing societal norms and proposed innovative approaches to work-life balance.</li>
                <li>Recognized with a Core 77 Design Award 2021 Student Notable for the innovative and impactful nature of the project.</li>
                <li>Project research and findings were utilized by BCG for further analysis and implementation strategies.</li>
              </ul>
            </TimelineItem>
            
            <br />
            
            <TimelineItem 
              title="Stampede" 
              company="RCA | London, U.K" 
              period="January 2019 – March 2019"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Developed the 'Stampede' workshop methodology, aimed at creating impactful conservation partnerships using core design principles.</li>
                <li>Created inclusive design solutions for an Airbnb-WWT collaboration, driving tangible environmental impact through strategic partnerships.</li>
              </ul>
            </TimelineItem>
          </div>
        </section>
        
        {/* Education */}
        <section id="education" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Education</h2>
          <div className="timeline-container relative">
            <TimelineItem title="M.A in Service Design" company="Royal College of Art | London, U.K">
              <p></p>
            </TimelineItem>
            <TimelineItem title="Brand Management" company="London Business School | London, U.K">
              <p></p>
            </TimelineItem>
            <TimelineItem title="B.E, Mechanical Engineering" company="Osmania University | Hyderabad, India">
              <p></p>
            </TimelineItem>
          </div>
        </section>

        {/* Academic Projects */}
        <section id="projects" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-2">Academic Projects</h2>
          <p className="body-base mb-8 max-w-2xl">
            These academic projects demonstrate my ability to apply design thinking to complex, real-world challenges. Click to learn more.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AboutProjectCard
              title="Pebble - Employee Wellbeing"
              description="VISA Innovation Centre Collaboration"
              onClick={() => navigateToProject('/pebble')}
            />
            <AboutProjectCard
              title="Invisible Value Income Program"
              description="BCG & RSM Collaboration"
              onClick={() => navigateToProject('/iviprogram')}
            />
            <AboutProjectCard
              title="Stampede"
              description="Airbnb & WWT Collaboration"
              onClick={() => navigateToProject('/stampede')}
            />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Skills</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="heading-4 mb-4">Design Skills</h3>
              <ul className="space-y-2 body-base">
                <li>Service Design</li>
                <li>User Experience Design</li>
                <li>User Research</li>
                <li>Interaction Design</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
                <li>Usability Testing</li>
                <li>Design Thinking</li>
                <li>Design Systems</li>
                <li>Information Architecture</li>
                <li>Customer Journey Mapping</li>
                <li>End-to-End Product Design</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-4 mb-4">Soft Skills</h3>
              <ul className="space-y-2 body-base">
                <li>Facilitation</li>
                <li>Project Management</li>
                <li>Stakeholder Communication</li>
                <li>Creative Problem-Solving</li>
                <li>Team Collaboration</li>
                <li>Leadership</li>
                <li>Presentation Skills</li>
                <li>Time Management</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-4 mb-4">Tools</h3>
              <ul className="space-y-2 body-base">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>Webflow</li>
                <li>Framer</li>
                <li>Miro</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>Adobe Illustrator</li>
                <li>After Effects</li>
                <li>LottieFiles</li>
                <li>Canva</li>
                <li>Spline</li>
                <li>Relume</li>
                <li>ChatGPT</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certificates & Awards */}
        <section id="certificates" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <CertificatesCarousel />
        </section>

        {/* Interests */}
        <section id="interests" className="mb-24 scroll-mt-24 reveal-on-scroll">
          <h2 className="heading-2 mb-8">Interests</h2>
          <div className="flex flex-wrap gap-4">
            {['Football', 'Travelling', 'Stargazing', 'Indie Music', 'Casual Gaming', 'Photography'].map((interest) => (
              <span key={interest} className="bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-lg font-medium">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </PageLayout>

      {/* Project Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={closeProjectModal}
        project={selectedProject ? projectsData[selectedProject] : null}
      />

      {/* Copy Toast */}
      <CopyToast
        message="Email Copied!"
        isVisible={toastVisible}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
};
