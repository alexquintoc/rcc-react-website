import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from '../../lib/router';
import { Reveal } from '../layout/Reveal';
import './ResourceList.css';

interface Resource {
  title: string;
  summary?: string;
  slug: string;
}

export function ResourceList({ resources, ctaLabel = 'Read the report' }: { resources: Resource[]; ctaLabel?: string }) {
  return (
    <div className="resource-list">
      {resources.map((resource, index) => (
        <Reveal as="article" key={resource.slug} delay={(index % 3) * 90} className="resource-card">
          <Link to={resource.slug} className="resource-card__link">
            <h3>{resource.title}</h3>
            {resource.summary && <p>{resource.summary}</p>}
            <span className="resource-card__cta">
              {ctaLabel} <ArrowUpRight weight="bold" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
