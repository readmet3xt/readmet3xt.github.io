import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { CATEGORY_LABELS, projectsByCategory, type ProjectCategory } from '@/data/projectData';
import { useSitePrefs } from '@/lib/sitePrefs';
import { PrefSwitch } from '@/components/PrefSwitch';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAIN_LINKS = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/play', label: 'Play' },
];

const CATEGORIES: ProjectCategory[] = ['product', 'service'];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { pathname } = useLocation();
  const { theme, setTheme } = useSitePrefs();

  const closeOnMobile = () => {
    if (window.innerWidth < 1024) onClose();
  };

  const linkClass = (active: boolean) =>
    `sidebar-link block px-3 py-2 min-h-[40px] text-sm ${active ? 'active font-medium text-text-primary' : 'text-text-secondary'}`;

  // visibility (not aria-hidden) takes a closed sidebar's links out of the tab
  // order; it transitions with transform, so the slide-out still plays.
  return (
    <aside
      className={`sidebar w-[85vw] max-w-72 sm:w-80 sm:max-w-80 fixed inset-y-0 right-0 z-40 flex flex-col transform ${isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'} transition-[transform,visibility] duration-200 ease-out`}
    >
      <div className="flex-1 overflow-y-auto px-4 lg:px-6 pt-5 pb-4">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <Link to="/" onClick={closeOnMobile} className="text-xl font-semibold tracking-tight text-text-primary hover:text-accent-primary transition-colors">
              Amaan Khan
            </Link>
            <p className="mt-1 text-sm text-text-secondary">Service &amp; Product Designer</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 flex items-center justify-center min-h-[44px] min-w-[44px] rounded text-text-primary hover:bg-bg-secondary"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav aria-label="Main navigation" className="space-y-0.5 mb-8">
          {MAIN_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} onClick={closeOnMobile} className={linkClass(pathname === to)} aria-current={pathname === to ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        {CATEGORIES.map((category) => (
          <section key={category} className="mb-6">
            <p className="px-3 mb-1 font-mono text-xs text-text-tertiary">{CATEGORY_LABELS[category]}</p>
            <nav aria-label={CATEGORY_LABELS[category]} className="space-y-0.5">
              {projectsByCategory(category).map(({ href, title }) => (
                <Link key={href} to={href} onClick={closeOnMobile} className={linkClass(pathname === href)} aria-current={pathname === href ? 'page' : undefined}>
                  {title}
                </Link>
              ))}
            </nav>
          </section>
        ))}
      </div>

      <footer className="flex-shrink-0 border-t border-border px-4 lg:px-6 py-4 text-sm">
        <div className="mb-3">
          <PrefSwitch label="Dark mode" checked={theme === 'dark'} onChange={(on) => setTheme(on ? 'dark' : 'light')} />
        </div>
        <nav aria-label="Contact links" className="flex flex-wrap gap-x-5 gap-y-1">
          <a className="link-ink" href="mailto:mdamkhan.work@gmail.com">Email</a>
          <a className="link-ink" href="https://www.linkedin.com/in/readmetxt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link-ink" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
        </nav>
      </footer>
    </aside>
  );
};
