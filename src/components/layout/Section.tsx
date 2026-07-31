import type { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  id?: string;
  tone?: 'paper' | 'surface' | 'navy';
  narrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function Section({ id, tone = 'paper', narrow = false, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone} ${className}`.trim()}>
      <div className={`container ${narrow ? 'container--narrow' : ''}`}>{children}</div>
    </section>
  );
}
