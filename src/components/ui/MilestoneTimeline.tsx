import { Reveal } from '../layout/Reveal';
import './MilestoneTimeline.css';

interface Milestone {
  year: string;
  label: string;
}

export function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="timeline">
      {milestones.map((milestone, index) => (
        <Reveal as="li" key={milestone.year} delay={index * 90} className="timeline__item">
          <p className="timeline__year">{milestone.year}</p>
          <p className="timeline__label">{milestone.label}</p>
        </Reveal>
      ))}
    </ol>
  );
}
