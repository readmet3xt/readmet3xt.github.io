interface TimelineItemProps {
  title: string;
  company?: string;
  period?: string;
  children?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export const TimelineItem = ({ title, company, period, children, actionLabel, onAction }: TimelineItemProps) => {
  return (
    <div className="timeline-item mb-10 last:mb-0">
      <h3 className="font-ibm-plex-mono text-xl md:text-2xl font-bold text-text-primary mb-2">{title}</h3>
      {company && period && (
        <p className="text-base md:text-lg text-text-secondary font-medium mb-4">
          {company} | <span className="text-accent-primary">{period}</span>
        </p>
      )}
      {company && !period && (
        <p className="text-base md:text-lg text-text-secondary font-medium mb-4">{company}</p>
      )}
      {children && (
        <div className="text-base md:text-lg text-text-secondary leading-loose">
          {children}
        </div>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-4 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};