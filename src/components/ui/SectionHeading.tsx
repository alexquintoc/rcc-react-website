import type { ReactNode } from 'react';
import { Link } from '../../lib/router';
import './SectionHeading.css';

interface SectionHeadingProps {
  title: string;
  lede?: ReactNode;
  action?: { label: string; to: string };
}

export function SectionHeading({ title, lede, action }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__row">
        <h2>{title}</h2>
        {action && (
          <Link to={action.to} className="section-heading__action">
            {action.label}
          </Link>
        )}
      </div>
      {lede && <div className="section-heading__lede">{lede}</div>}
    </div>
  );
}
