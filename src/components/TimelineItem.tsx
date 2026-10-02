import { Link } from 'react-router-dom';

interface TimelineItemProps {
  title: string;
  company?: string;
  period?: string;
  children?: React.ReactNode;
  /** Case study to link to, e.g. "/otagon". */
  href?: string;
  actionLabel?: string;
}

export const TimelineItem = ({ title, company, period, children, href, actionLabel = 'Read the case study' }: TimelineItemProps) => (
  <div className="timeline-item">
    <h3 className="text-2xl">{title}</h3>
    {(company || period) && (
      <p className="mt-1 text-text-secondary">
        {company}
        {company && period && <span className="text-text-tertiary"> · </span>}
        {period && <span className="text-text-tertiary">{period}</span>}
      </p>
    )}
    {children && <div className="mt-3 max-w-[68ch] text-text-secondary leading-relaxed">{children}</div>}
    {href && (
      <p className="mt-3 text-sm">
        <Link to={href} className="link-ink">{actionLabel} →</Link>
      </p>
    )}
  </div>
);
