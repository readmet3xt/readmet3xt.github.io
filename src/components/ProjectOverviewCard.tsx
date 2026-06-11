import { Award, Users, Clock, Wrench, Trophy } from 'lucide-react';
import { ReactNode } from 'react';

interface ProjectOverviewCardProps {
  role: string[];
  team?: string;
  timeline: string;
  recognition?: string;
  tools: string[];
}

const OverviewBlock = ({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-ibm-plex-mono text-[11px] uppercase tracking-widest text-text-tertiary font-semibold">
        {label}
      </h3>
    </div>
    <div className="ml-10">{children}</div>
  </div>
);

export const ProjectOverviewCard = ({
  role,
  team,
  timeline,
  recognition,
  tools,
}: ProjectOverviewCardProps) => {
  return (
    <div className="p-4 sm:p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Left Column */}
        <div className="space-y-4">
          <OverviewBlock icon={<Award className="w-4 h-4 text-accent-primary" />} label="My Role">
            <ul className="space-y-1.5">
              {role.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </OverviewBlock>

          {team && (
            <OverviewBlock icon={<Users className="w-4 h-4 text-accent-primary" />} label="Team & Collaboration">
              <p className="text-sm text-muted-foreground leading-relaxed">{team}</p>
            </OverviewBlock>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <OverviewBlock icon={<Clock className="w-4 h-4 text-accent-primary" />} label="Timeline">
            <p className="text-sm text-muted-foreground leading-relaxed">{timeline}</p>
          </OverviewBlock>

          {recognition && (
            <OverviewBlock icon={<Trophy className="w-4 h-4 text-accent-primary" />} label="Recognition & Impact">
              <p className="text-sm text-muted-foreground leading-relaxed">{recognition}</p>
            </OverviewBlock>
          )}

          <OverviewBlock icon={<Wrench className="w-4 h-4 text-accent-primary" />} label="Tools & Methods">
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span key={index} className="case-study-pill text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </OverviewBlock>
        </div>
      </div>
    </div>
  );
};
