import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/use-toast';
import { Briefcase, Gamepad2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const caseStudies = [
  { path: '/otagon', label: 'Otagon', letter: 'O', color: '#8B5CF6' },
  { path: '/versus', label: 'Versus', letter: 'V', color: '#22C55E' },
  { path: '/screenshot', label: 'ScreenShot', letter: 'S', color: '#F59E0B' },
  { path: '/lawx', label: 'Law.X', letter: 'L', color: '#EC4899' },
  { path: '/koinbasket', label: 'KoinBasket', letter: 'K', color: '#06B6D4' },
  { path: '/softwire', label: 'Softwire', letter: 'S', color: '#14B8A6' },
  { path: '/pebble', label: 'Pebble', letter: 'P', color: '#10B981' },
  { path: '/iviprogram', label: 'IVI Program', letter: 'I', color: '#3B82F6' },
  { path: '/stampede', label: 'Stampede', letter: 'S', color: '#F97316' },
];

export const Sidebar = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: SidebarProps) => {
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
    else if (caseStudies.some((cs) => cs.path === path)) setActiveLink('case-studies');
    else setActiveLink('work');
  }, [location.pathname]);

  const isActiveCaseStudy = (path: string) => location.pathname === path;

  return (
    <aside
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`sidebar bg-bg-secondary border-r border-border w-[85vw] max-w-72 sm:max-w-80 sm:w-80 h-[100dvh] fixed inset-y-0 left-0 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 overflow-hidden`}>
      <div className="sidebar-content-wrapper flex-1 flex flex-col px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6 pb-2 overflow-x-hidden min-h-0">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-2 lg:gap-3">
            {/* Bio Section */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center gap-2.5 hover:text-accent-primary transition-colors duration-300 group"
                  onClick={() => handleLinkClick('work')}
                  aria-current={activeLink === 'work' ? 'page' : undefined}
                >
                  <h1 className="font-dm-sans text-lg sm:text-xl lg:text-2xl font-bold tracking-wider text-foreground group-hover:text-accent-primary group-focus:text-accent-primary transition-colors duration-300">
                    amaan
                  </h1>
                </Link>

                {/* Mobile Close Button */}
                <div className="lg:hidden pointer-events-auto">
                  <button
                    onClick={onClose}
                    className="p-2 -mr-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Close sidebar"
                  >
                    <X className="w-4 h-4 text-text-primary" />
                  </button>
                </div>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs lg:text-sm text-text-secondary leading-relaxed pr-8 lg:pr-14">
              Hyderabad-based Product Designer creating impactful, human-centered products.
            </p>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-1" role="navigation" aria-label="Main navigation">
            <Link
              to="/"
              className={`sidebar-link flex items-center gap-2.5 sm:gap-3 min-h-[44px] px-2.5 py-2 sm:p-2.5 rounded-lg ${activeLink === 'work' ? 'active' : ''}`}
              onClick={() => handleLinkClick('work')}
              aria-current={activeLink === 'work' ? 'page' : undefined}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md bg-accent-primary/10 flex items-center justify-center flex-shrink-0" role="img" aria-label="Work portfolio icon">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px] text-accent-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-xs sm:text-sm">Work</h2>
                <p className="text-[10px] sm:text-xs text-text-secondary truncate">Recent projects</p>
              </div>
            </Link>

            <Link
              to="/play"
              className={`sidebar-link flex items-center gap-2.5 sm:gap-3 min-h-[44px] px-2.5 py-2 sm:p-2.5 rounded-lg ${activeLink === 'play' ? 'active' : ''}`}
              onClick={() => handleLinkClick('play')}
              aria-current={activeLink === 'play' ? 'page' : undefined}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md bg-accent-primary/10 flex items-center justify-center flex-shrink-0" role="img" aria-label="Creative projects icon">
                <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px] text-accent-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-xs sm:text-sm">Play</h2>
                <p className="text-[10px] sm:text-xs text-text-secondary truncate">Fun projects</p>
              </div>
            </Link>

            <Link
              to="/about"
              className={`sidebar-link flex items-center gap-2.5 sm:gap-3 min-h-[44px] px-2.5 py-2 sm:p-2.5 rounded-lg ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
              aria-current={activeLink === 'about' ? 'page' : undefined}
            >
              <img
                src="/lovable-uploads/22366376-40f2-492f-989a-067de0fdb01f.png"
                alt="Amaan Khan profile photo"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h2 className="font-ibm-plex-mono font-semibold uppercase text-foreground text-xs sm:text-sm">About</h2>
                <p className="text-[10px] sm:text-xs text-text-secondary truncate">More about me</p>
              </div>
            </Link>
          </nav>

          {/* Case Studies */}
          <section>
            <h3 className="font-ibm-plex-mono text-[10px] sm:text-xs uppercase tracking-widest mb-1.5 sm:mb-2 text-text-tertiary font-semibold">Case Studies</h3>
            <nav className="space-y-0.5" role="navigation" aria-label="Case studies navigation">
              {caseStudies.map(({ path, label, letter, color }) => (
                <Link
                  key={path}
                  to={path}
                  className={`sidebar-link flex items-center gap-2 sm:gap-2.5 min-h-[40px] px-2 py-1.5 sm:p-2 rounded-lg ${isActiveCaseStudy(path) ? 'active' : ''}`}
                  onClick={() => handleLinkClick('case-studies')}
                  aria-current={isActiveCaseStudy(path) ? 'page' : undefined}
                >
                  <span
                    aria-hidden="true"
                    className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-sm flex-shrink-0 flex items-center justify-center font-ibm-plex-mono text-[10px] sm:text-[11px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {letter}
                  </span>
                  <span className="font-ibm-plex-mono font-medium text-foreground text-xs sm:text-sm truncate">{label}</span>
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </div>

      {/* Sidebar Footer */}
      <footer className="flex-shrink-0 border-t border-border pt-2.5 sm:pt-3 lg:pt-4 pb-3 sm:pb-4 lg:pb-6 px-3 sm:px-4 lg:px-6 bg-bg-secondary">
        <nav className="flex flex-wrap justify-start gap-6 sm:gap-12 font-ibm-plex-mono uppercase text-[10px] sm:text-xs tracking-wider -ml-2 sm:-ml-2.5" role="navigation" aria-label="Contact and social links">
          <button
            onClick={() => copyToClipboard('mdamkhan.work@gmail.com')}
            className="footer-link h-fit py-1 px-2 flex items-center justify-start text-text-tertiary hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-md"
            aria-label="Copy email address to clipboard"
          >
            EMAIL
          </button>
          <a
            href="https://www.linkedin.com/in/readmetxt/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link h-fit py-1 px-2 flex items-center justify-start text-text-tertiary hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-md"
            aria-label="Visit Amaan Khan's LinkedIn profile (opens in new tab)"
          >
            LINKEDIN
          </a>
          <a
            href="https://drive.google.com/file/d/15mxM6r_j_RMzgDX5RCTYptMZmlZVBXPS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link h-fit py-1 px-2 flex items-center justify-start text-text-tertiary hover:text-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-md"
            aria-label="View Amaan Khan's resume (opens in new tab)"
          >
            RESUME
          </a>
        </nav>
        <div className="mt-2 sm:mt-2.5 lg:mt-3 flex items-center justify-between" role="group" aria-label="Theme and copyright">
          <p className="text-[10px] sm:text-xs font-ibm-plex-mono text-text-tertiary leading-tight">&copy;2025 Amaan</p>
          <div className="flex items-center justify-end" role="group" aria-label="Theme selection">
            <button
              onClick={() => toggleTheme('dark')}
              className={`theme-toggle-btn px-2 sm:px-2.5 py-1 font-ibm-plex-mono text-[10px] sm:text-xs uppercase focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-md transition-colors ${theme === 'dark' ? 'active text-text-primary' : 'text-text-tertiary hover:text-text-secondary'}`}
              aria-pressed={theme === 'dark'}
              aria-label="Switch to dark theme"
            >
              Dark
            </button>
            <span className="text-text-tertiary text-xs mx-1" aria-hidden="true">/</span>
            <button
              onClick={() => toggleTheme('light')}
              className={`theme-toggle-btn px-2 sm:px-2.5 py-1 font-ibm-plex-mono text-[10px] sm:text-xs uppercase focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-md transition-colors ${theme === 'light' ? 'active text-text-primary' : 'text-text-tertiary hover:text-text-secondary'}`}
              aria-pressed={theme === 'light'}
              aria-label="Switch to light theme"
            >
              Light
            </button>
          </div>
        </div>
      </footer>
    </aside>
  );
};