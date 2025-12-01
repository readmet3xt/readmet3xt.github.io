interface TimelineItemProps {
  title: string;
  company?: string;
  period?: string;
  children: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export const TimelineItem = ({ title, company, period, children, actionLabel, onAction }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{title}</h3>
      {company && period && (
        <p className="text-base md:text-lg text-text-secondary font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {company} | <span className="text-accent-primary">{period}</span>
        </p>
      )}
      {company && !period && (
        <p className="text-base md:text-lg text-text-secondary font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>{company}</p>
      )}
      <div className="text-base md:text-lg text-text-secondary leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
        {children}
      </div>
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