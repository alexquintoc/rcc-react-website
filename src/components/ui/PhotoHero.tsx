import { Button } from './Button';
import './PhotoHero.css';

interface Cta {
  label: string;
  to: string;
}

interface PhotoHeroProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  compact?: boolean;
}

export function PhotoHero({ title, subtitle, image, primaryCta, secondaryCta, compact = false }: PhotoHeroProps) {
  return (
    <section className={`photo-hero photo ${compact ? 'photo-hero--compact' : ''}`}>
      <img src={image} alt="" loading="eager" fetchPriority="high" />
      <div className="photo-hero__content container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="photo-hero__ctas">
            {primaryCta && (
              <Button to={primaryCta.to} variant="primary">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button to={secondaryCta.to} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
