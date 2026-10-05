import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/** The "← All work" link at the top of case studies and the Play page. */
export const BackLink = ({ to, label }: { to: string; label: string }) => (
  <nav className="mb-6">
    {/* a 44px target; the negative margin keeps the row at its 20px line */}
    <Link to={to} className="-my-3 inline-flex min-h-[44px] items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors">
      <ArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  </nav>
);
