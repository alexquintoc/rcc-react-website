import type { ReactNode } from 'react';
import { useReveal } from '../../lib/useReveal';

interface RevealProps {
  as?: 'div' | 'section' | 'li' | 'article' | 'figure';
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children }: RevealProps) {
  const ref = useReveal<HTMLElement>({ delay });
  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
