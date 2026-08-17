import { PhotoHero } from '../components/ui/PhotoHero';
import { Section } from '../components/layout/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatBar } from '../components/ui/StatBar';
import { ApproachSplit } from '../components/ui/ApproachSplit';
import { ProgramIndex } from '../components/ui/ProgramIndex';
import { ImpactStoryGrid } from '../components/ui/ImpactStoryGrid';
import { NewsList } from '../components/ui/NewsList';
import { APPROACH, IMPACT_STATS, ORG } from '../lib/content';
import { photoUrl } from '../lib/images';

export function HomePage() {
  return (
    <>
      <PhotoHero
        title={ORG.tagline}
        subtitle={ORG.mission}
        image={photoUrl('rcc-community-resilience-hero', 1800, 1350)}
        primaryCta={{ label: 'View our programs', to: '/programs/' }}
        secondaryCta={{ label: 'See our impact', to: '/impact/' }}
      />

      <Section tone="paper">
        <SectionHeading
          title="Six years, measured"
          lede="Real outcomes from six years of partnering with cities and communities on climate resilience."
        />
        <StatBar stats={IMPACT_STATS} />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Our Approach"
          lede={
            <>
              {APPROACH.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          }
        />
        <ApproachSplit />
      </Section>

      <Section tone="paper">
        <SectionHeading title="Our Work" action={{ label: 'View the Work Hub', to: '/programs/' }} />
        <ProgramIndex />
      </Section>

      <Section tone="surface">
        <SectionHeading title="Featured Impact Stories" action={{ label: 'More impact stories', to: '/impact-stories/' }} />
        <ImpactStoryGrid />
      </Section>

      <Section tone="paper">
        <SectionHeading title="Featured News" action={{ label: 'More news', to: '/news/' }} />
        <NewsList />
      </Section>
    </>
  );
}
