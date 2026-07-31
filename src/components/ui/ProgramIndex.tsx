import { ArrowUpRight } from '@phosphor-icons/react';
import { PROGRAMS } from '../../lib/content';
import { Link } from '../../lib/router';
import { Reveal } from '../layout/Reveal';
import './ProgramIndex.css';

export function ProgramIndex() {
  const lead = PROGRAMS.find((program) => program.scale === 'lead') ?? PROGRAMS[0];
  const standard = PROGRAMS.filter((program) => program !== lead);

  return (
    <div className="program-index">
      <Reveal as="article" className="program-card program-card--lead">
        <ProgramCard program={lead} />
      </Reveal>
      <div className="program-index__stack">
        {standard.map((program, index) => (
          <Reveal as="article" key={program.slug} delay={(index + 1) * 100} className="program-card">
            <ProgramCard program={program} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program }: { program: (typeof PROGRAMS)[number] }) {
  return (
    <Link to={program.slug} className="program-card__link">
      <div className="program-card__photo photo">
        <img src={program.image} alt="" loading="lazy" />
      </div>
      <div className="program-card__body">
        <h3>{program.name}</h3>
        <p>{program.description}</p>
        <span className="program-card__cta">
          Explore program <ArrowUpRight weight="bold" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
