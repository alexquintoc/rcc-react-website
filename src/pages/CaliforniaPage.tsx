import { PhotoHero } from '../components/ui/PhotoHero';
import { Section } from '../components/layout/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MetadataTiles } from '../components/ui/MetadataTiles';
import { PeopleGrid } from '../components/ui/PeopleGrid';
import { ResourceList } from '../components/ui/ResourceList';
import { Reveal } from '../components/layout/Reveal';
import { CALIFORNIA } from '../lib/content';
import './CaliforniaPage.css';

export function CaliforniaPage() {
  return (
    <>
      <PhotoHero
        title={CALIFORNIA.title}
        subtitle={CALIFORNIA.subheading}
        image={CALIFORNIA.heroImage}
        primaryCta={{ label: 'View program resources', to: '#resources' }}
      />

      <Section tone="paper">
        <div className="ca-intro">
          <span className="eyebrow">{CALIFORNIA.eyebrow}</span>
          <p>{CALIFORNIA.intro}</p>
          {CALIFORNIA.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Program snapshot" />
        <MetadataTiles items={CALIFORNIA.metadata} />
      </Section>

      <Section tone="navy" className="ca-challenge">
        <span className="eyebrow ca-challenge__eyebrow">{CALIFORNIA.challenge.title}</span>
        <h2>Fragmented funding is the barrier, not ambition.</h2>
        <p>{CALIFORNIA.challenge.body}</p>
      </Section>

      <Section tone="paper">
        <SectionHeading title="Our approach in California" />
        <div className="ca-approach">
          {CALIFORNIA.approach.map((item, index) => (
            <Reveal as="div" key={item.title} delay={index * 80} className="ca-approach__item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Advisory Board"
          lede="Regional practitioners who guide the Partnership's priorities and hold it accountable to the communities it serves."
        />
        <PeopleGrid people={CALIFORNIA.advisoryBoard} />
      </Section>

      <Section id="resources" tone="paper">
        <SectionHeading title="Resources" />
        <ResourceList resources={CALIFORNIA.resources} ctaLabel="Read the report" />
      </Section>

      <Section tone="surface" className="ca-closing">
        <SectionHeading title="Looking ahead" />
        <p>{CALIFORNIA.lookingAhead}</p>
      </Section>
    </>
  );
}
