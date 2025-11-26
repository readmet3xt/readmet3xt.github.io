import { Award, Users, Clock, Wrench } from 'lucide-react';

interface ProjectOverviewCardProps {
  role: string[];
  team?: string;
  timeline: string;
  recognition?: string;
  tools: string[];
}

export const ProjectOverviewCard = ({
  role,
  team,
  timeline,
  recognition,
  tools,
}: ProjectOverviewCardProps) => {
  return (
    <div className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-accent-primary" />
              </div>
              <h3 className="font-semibold text-foreground">My Role</h3>
            </div>
            <ul className="space-y-1.5 ml-10">
              {role.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {team && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-accent-secondary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Team & Collaboration</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-10">{team}</p>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-accent-tertiary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-accent-tertiary" />
              </div>
              <h3 className="font-semibold text-foreground">Timeline</h3>
            </div>
            <p className="text-sm text-muted-foreground ml-10">{timeline}</p>
          </div>

          {recognition && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-foreground">Recognition & Impact</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-10">{recognition}</p>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground">Tools & Methods</h3>
            </div>
            <div className="flex flex-wrap gap-2 ml-10">
              {tools.map((tool, index) => (
                <span key={index} className="case-study-pill text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
