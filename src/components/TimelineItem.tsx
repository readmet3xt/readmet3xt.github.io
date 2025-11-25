interface TimelineItemProps {
  title: string;
  company?: string;
  period?: string;
  children: React.ReactNode;
}

export const TimelineItem = ({ title, company, period, children }: TimelineItemProps) => {
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
    </div>
  );
};