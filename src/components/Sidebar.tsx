import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/use-toast';
import { Briefcase, Gamepad2 } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [activeLink, setActiveLink] = useState('work');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Email copied to clipboard!",
        description: "You can now paste it anywhere.",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  useEffect(() => {
    // Set active link based on current page
    const path = window.location.pathname;
    if (path.includes('play')) setActiveLink('play');
    else if (path.includes('about')) setActiveLink('about');
    else if (path.includes('koinbasket') || path.includes('softwire') || path.includes('pebble') || path.includes('iviprogram') || path.includes('stampede') || path.includes('otagon') || path.includes('jollyai')) setActiveLink('case-studies');
    else setActiveLink('work');
  }, []);

  return (
    <aside className={`sidebar bg-bg-secondary border-r border-border w-96 h-screen fixed inset-y-0 left-0 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
      <div className="sidebar-content-wrapper flex-grow flex flex-col min-h-0 px-4 sm:px-5 lg:px-8 pt-4 sm:pt-5 lg:pt-8">
        <div className="space-y-3 sm:space-y-4 lg:space-y-4 flex-shrink-0">
          {/* Bio Section (Desktop) */}
          <div className="hidden lg:block">
            <Link to="/" className="hover:text-accent-primary transition-colors duration-300 group">
              <h1 className="font-dm-sans text-3xl lg:text-4xl font-bold tracking-wider text-foreground group-hover:text-accent-primary group-focus:text-accent-primary transition-colors duration-300">Amaan</h1>
            </Link>
            <p className="mt-2 lg:mt-3 text-sm lg:text-base text-text-secondary leading-relaxed">
              Hyderabad-based Product Designer creating impactful, human-centered products for a more thoughtful digital landscape.
            </p>
          </div>
          
          {/* Bio Section (Mobile) */}
          <div className="block lg:hidden">
            <Link to="/" className="hover:text-accent-primary transition-colors duration-300 group">
              <h1 className="font-dm-sans text-xl sm:text-2xl font-bold tracking-wider mb-2 text-foreground group-hover:text-accent-primary group-focus:text-accent-primary transition-colors duration-300">Amaan</h1>
            </Link>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Hyderabad-based Product Designer creating impactful, human-centered products for a more thoughtful digital landscape.
            </p>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-3 sm:space-y-4 lg:space-y-4" role="navigation" aria-label="Main navigation">
            <Link 
              to="/" 
              className={`sidebar-link flex items-center gap-2 sm:gap-3 lg:gap-4 p-2.5 sm:p-3 lg:p-4 rounded-lg ${activeLink === 'work' ? 'active' : ''}`}
              onClick={() => handleLinkClick('work')}
              aria-current={activeLink === 'work' ? 'page' : undefined}
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-accent-primary/10 flex items-center justify-center flex-shrink-0" role="img" aria-label="Work portfolio icon">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-accent-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-sm sm:text-base lg:text-lg">Work</h2>
                <p className="text-xs sm:text-sm lg:text-base text-text-secondary truncate">A selection of recent work</p>
              </div>
            </Link>
            
            <Link 
              to="/play" 
              className={`sidebar-link flex items-center gap-2 sm:gap-3 lg:gap-4 p-2.5 sm:p-3 lg:p-4 rounded-lg ${activeLink === 'play' ? 'active' : ''}`}
              onClick={() => handleLinkClick('play')}
              aria-current={activeLink === 'play' ? 'page' : undefined}
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-accent-primary/10 flex items-center justify-center flex-shrink-0" role="img" aria-label="Creative projects icon">
                <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-accent-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-sm sm:text-base lg:text-lg">Play</h2>
                <p className="text-xs sm:text-sm lg:text-base text-text-secondary truncate">Making things for fun</p>
              </div>
            </Link>
            
            <Link 
              to="/about" 
              className={`sidebar-link flex items-center gap-2 sm:gap-3 lg:gap-4 p-2.5 sm:p-3 lg:p-4 rounded-lg ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
              aria-current={activeLink === 'about' ? 'page' : undefined}
            >
              <img 
                src="/lovable-uploads/22366376-40f2-492f-989a-067de0fdb01f.png"
                alt="Amaan Khan profile photo" 
                className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-sm sm:text-base lg:text-lg">About</h2>
                <p className="text-xs sm:text-sm lg:text-base text-text-secondary truncate">More about me</p>
              </div>
            </Link>
          </nav>

          {/* Case Studies */}
          <section className="flex-grow min-h-0">
            <h3 className="font-ibm-plex-mono text-xs sm:text-sm lg:text-base uppercase tracking-widest mb-3 sm:mb-4 lg:mb-5 text-text-tertiary font-semibold">Case Studies</h3>
            <nav className="space-y-1.5 sm:space-y-2 lg:space-y-2.5" role="navigation" aria-label="Case studies navigation">
              <Link to="/otagon" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/otagon' ? 'active' : ''}`} aria-current={window.location.pathname === '/otagon' ? 'page' : undefined}>
                <img src="/Otagon/workinprogess.png" alt="Otagon project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0 object-cover" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">Otagon</span>
              </Link>
              <Link to="/jollyai" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/jollyai' ? 'active' : ''}`} aria-current={window.location.pathname === '/jollyai' ? 'page' : undefined}>
                <img src="/JollyAI/jollyai6.png" alt="JollyAI project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0 object-cover" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">JollyAI</span>
              </Link>
              <Link to="/koinbasket" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/koinbasket' ? 'active' : ''}`} aria-current={window.location.pathname === '/koinbasket' ? 'page' : undefined}>
                <img src="/Koinbasket/Home.png" alt="KoinBasket project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0 object-cover" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">KoinBasket</span>
              </Link>
              <Link to="/softwire" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/softwire' ? 'active' : ''}`} aria-current={window.location.pathname === '/softwire' ? 'page' : undefined}>
                <img src="/Softwire/heroimage.webp" alt="Softwire project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0 object-cover" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">Softwire</span>
              </Link>
              <Link to="/pebble" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/pebble' ? 'active' : ''}`} aria-current={window.location.pathname === '/pebble' ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/10B981/FFFFFF?text=P" alt="Pebble project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">Pebble</span>
              </Link>
              <Link to="/iviprogram" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/iviprogram' ? 'active' : ''}`} aria-current={window.location.pathname === '/iviprogram' ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/3B82F6/FFFFFF?text=I" alt="IVI Program project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">IVI Program</span>
              </Link>
              <Link to="/stampede" className={`sidebar-link flex items-center gap-2 sm:gap-2.5 lg:gap-3 p-2 sm:p-2.5 lg:p-3 rounded-lg text-sm sm:text-base lg:text-base ${window.location.pathname === '/stampede' ? 'active' : ''}`} aria-current={window.location.pathname === '/stampede' ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/F97316/FFFFFF?text=S" alt="Stampede project logo" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-sm sm:text-base lg:text-base truncate">Stampede</span>
              </Link>
            </nav>
          </section>
        </div>
      </div>

      {/* Sidebar Footer */}
      <footer className="pt-3 sm:pt-4 lg:pt-6 flex-shrink-0 pb-20 sm:pb-24 lg:pb-8 px-4 sm:px-5 lg:px-8">
        <nav className="flex justify-start gap-2 sm:gap-3 lg:gap-5 font-ibm-plex-mono uppercase text-xs sm:text-sm lg:text-sm tracking-wider" role="navigation" aria-label="Contact and social links">
          <button 
            onClick={() => copyToClipboard('mdamkhan.work@gmail.com')} 
            className="footer-link text-text-tertiary hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
            aria-label="Copy email address to clipboard"
          >
            EMAIL
          </button>
          <a 
            href="https://www.linkedin.com/in/readmetxt/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link text-text-tertiary hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
            aria-label="Visit Amaan Khan's LinkedIn profile (opens in new tab)"
          >
            LINKEDIN
          </a>
          <a 
            href="https://docs.google.com/document/d/1sIOiJfJ6X0viz2CpZGxcRESEiGaztwLoCKm8TOmZ8Fw/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link text-text-tertiary hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
            aria-label="View Amaan Khan's resume (opens in new tab)"
          >
            RESUME
          </a>
        </nav>
        <div className="mt-3 sm:mt-4 lg:mt-6 flex justify-start items-center gap-1.5 sm:gap-2" role="group" aria-label="Theme selection">
          <button 
            onClick={() => toggleTheme('dark')}
            className={`theme-toggle-btn font-ibm-plex-mono text-xs sm:text-xs lg:text-sm uppercase focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px] lg:min-h-[44px] lg:min-w-[44px] ${theme === 'dark' ? 'active text-text-primary' : 'text-text-tertiary'}`}
            aria-pressed={theme === 'dark'}
            aria-label="Switch to dark theme"
          >
            Dark
          </button>
          <span className="text-text-tertiary" aria-hidden="true">/</span>
          <button 
            onClick={() => toggleTheme('light')}
            className={`theme-toggle-btn font-ibm-plex-mono text-xs sm:text-xs lg:text-sm uppercase focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px] lg:min-h-[44px] lg:min-w-[44px] ${theme === 'light' ? 'active text-text-primary' : 'text-text-tertiary'}`}
            aria-pressed={theme === 'light'}
            aria-label="Switch to light theme"
          >
            Light
          </button>
        </div>
        <p className="mt-3 sm:mt-4 lg:mt-6 text-xs lg:text-sm font-ibm-plex-mono text-text-tertiary">&copy;2025 Amaan</p>
      </footer>
    </aside>
  );
};