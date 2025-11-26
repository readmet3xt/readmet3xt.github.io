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
  const location = useLocation();
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

  // Update active link when location changes
  useEffect(() => {
    const path = location.pathname;
    if (path === '/play') setActiveLink('play');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/koinbasket' || path === '/softwire' || path === '/pebble' || path === '/iviprogram' || path === '/stampede' || path === '/otagon' || path === '/jollyai') setActiveLink('case-studies');
    else setActiveLink('work');
  }, [location.pathname]);

  const isActiveCaseStudy = (path: string) => location.pathname === path;

  return (
    <aside className={`sidebar bg-bg-secondary border-r border-border w-72 sm:w-80 h-screen fixed inset-y-0 left-0 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 overflow-y-auto overflow-x-hidden`}>
      <div className="sidebar-content-wrapper flex-1 flex flex-col px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6">
        <div className="space-y-2 sm:space-y-3 lg:space-y-3 flex-shrink-0">
          {/* Bio Section (Desktop) */}
          <div className="hidden lg:block">
            <Link to="/" className="hover:text-accent-primary transition-colors duration-300 group" onClick={() => handleLinkClick('work')} aria-current={activeLink === 'work' ? 'page' : undefined}>
              <h1 className="font-dm-sans text-2xl lg:text-3xl font-bold tracking-wider text-foreground group-hover:text-accent-primary group-focus:text-accent-primary transition-colors duration-300">Amaan</h1>
            </Link>
            <p className="mt-1.5 lg:mt-2 text-xs lg:text-sm text-text-secondary leading-relaxed">
              Hyderabad-based Product Designer creating impactful, human-centered products.
            </p>
          </div>
          
          {/* Bio Section (Mobile) */}
          <div className="block lg:hidden">
            <Link to="/" className="hover:text-accent-primary transition-colors duration-300 group" onClick={() => handleLinkClick('work')} aria-current={activeLink === 'work' ? 'page' : undefined}>
              <h1 className="font-dm-sans text-lg sm:text-xl font-bold tracking-wider text-foreground group-hover:text-accent-primary group-focus:text-accent-primary transition-colors duration-300">Amaan</h1>
            </Link>
            <p className="mt-1 text-xs sm:text-sm text-text-secondary leading-relaxed">
              Hyderabad-based Product Designer.
            </p>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-1.5 sm:space-y-2" role="navigation" aria-label="Main navigation">
            <Link 
              to="/" 
              className={`sidebar-link flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg ${activeLink === 'work' ? 'active' : ''}`}
              onClick={() => handleLinkClick('work')}
              aria-current={activeLink === 'work' ? 'page' : undefined}
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md bg-accent-primary/10 flex items-center justify-center flex-shrink-0" role="img" aria-label="Work portfolio icon">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-xs sm:text-sm">Work</h2>
                <p className="text-[10px] sm:text-xs text-text-secondary truncate">A selection of recent work</p>
              </div>
            </Link>
            
            <Link 
              to="/play" 
              className={`sidebar-link flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg ${activeLink === 'play' ? 'active' : ''}`}
              onClick={() => handleLinkClick('play')}
              aria-current={activeLink === 'play' ? 'page' : undefined}
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md bg-accent-primary/10 flex items-center justify-center flex-shrink-0" role="img" aria-label="Creative projects icon">
                <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-xs sm:text-sm">Play</h2>
                <p className="text-[10px] sm:text-xs text-text-secondary truncate">Making things for fun</p>
              </div>
            </Link>
            
            <Link 
              to="/about" 
              className={`sidebar-link flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
              aria-current={activeLink === 'about' ? 'page' : undefined}
            >
              <img 
                src="/lovable-uploads/22366376-40f2-492f-989a-067de0fdb01f.png"
                alt="Amaan Khan profile photo" 
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-md object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-xs sm:text-sm">About</h2>
                <p className="text-[10px] sm:text-xs text-text-secondary truncate">More about me</p>
              </div>
            </Link>
          </nav>

          {/* Case Studies */}
          <section className="flex-1 min-h-0">
            <h3 className="font-ibm-plex-mono text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-2.5 text-text-tertiary font-semibold">Case Studies</h3>
            <nav className="space-y-1 sm:space-y-1.5" role="navigation" aria-label="Case studies navigation">
              <Link to="/otagon" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/otagon') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/otagon') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/8B5CF6/FFFFFF?text=O" alt="Otagon project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">Otagon</span>
              </Link>
              <Link to="/jollyai" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/jollyai') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/jollyai') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/EC4899/FFFFFF?text=J" alt="JollyAI project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">JollyAI</span>
              </Link>
              <Link to="/koinbasket" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/koinbasket') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/koinbasket') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/06B6D4/FFFFFF?text=K" alt="KoinBasket project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">KoinBasket</span>
              </Link>
              <Link to="/softwire" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/softwire') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/softwire') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/14B8A6/FFFFFF?text=S" alt="Softwire project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">Softwire</span>
              </Link>
              <Link to="/pebble" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/pebble') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/pebble') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/10B981/FFFFFF?text=P" alt="Pebble project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">Pebble</span>
              </Link>
              <Link to="/iviprogram" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/iviprogram') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/iviprogram') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/3B82F6/FFFFFF?text=I" alt="IVI Program project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">IVI Program</span>
              </Link>
              <Link to="/stampede" className={`sidebar-link flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy('/stampede') ? 'active' : ''}`} onClick={() => handleLinkClick('case-studies')} aria-current={isActiveCaseStudy('/stampede') ? 'page' : undefined}>
                <img src="https://placehold.co/40x40/F97316/FFFFFF?text=S" alt="Stampede project logo" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">Stampede</span>
              </Link>
            </nav>
          </section>
        </div>
      </div>

      {/* Sidebar Footer */}
      <footer className="flex-shrink-0 pt-4 sm:pt-6 pb-4 sm:pb-6 lg:pb-6 px-3 sm:px-4 lg:px-6 mt-auto">
        <nav className="flex flex-wrap justify-start gap-2 sm:gap-3 font-ibm-plex-mono uppercase text-[10px] sm:text-xs tracking-wider" role="navigation" aria-label="Contact and social links">
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
        <div className="mt-2 sm:mt-3 flex justify-start items-center gap-1.5" role="group" aria-label="Theme selection">
          <button 
            onClick={() => toggleTheme('dark')}
            className={`theme-toggle-btn font-ibm-plex-mono text-[10px] sm:text-xs uppercase focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 px-2 py-1 ${theme === 'dark' ? 'active text-text-primary' : 'text-text-tertiary'}`}
            aria-pressed={theme === 'dark'}
            aria-label="Switch to dark theme"
          >
            Dark
          </button>
          <span className="text-text-tertiary text-xs" aria-hidden="true">/</span>
          <button 
            onClick={() => toggleTheme('light')}
            className={`theme-toggle-btn font-ibm-plex-mono text-[10px] sm:text-xs uppercase focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 px-2 py-1 ${theme === 'light' ? 'active text-text-primary' : 'text-text-tertiary'}`}
            aria-pressed={theme === 'light'}
            aria-label="Switch to light theme"
          >
            Light
          </button>
        </div>
        <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-ibm-plex-mono text-text-tertiary">&copy;2025 Amaan</p>
      </footer>
    </aside>
  );
};