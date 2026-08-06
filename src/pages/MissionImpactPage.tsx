import { Section } from '../components/layout/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatBar } from '../components/ui/StatBar';
import { MilestoneTimeline } from '../components/ui/MilestoneTimeline';
import { ImpactStoryGrid } from '../components/ui/ImpactStoryGrid';
import { ResourceList } from '../components/ui/ResourceList';
import { Reveal } from '../components/layout/Reveal';
import { IMPACT_STATS, IMPACT_STORIES, MISSION_IMPACT, PUBLICATIONS } from '../lib/content';
import './MissionImpactPage.css';

const missionImpactStories = IMPACT_STORIES.map((story, index) => ({
  ...story,
  image: index === 0
    ? 'https://6years.rcc.city/wp-content/uploads/2026/06/brownsville-2026-04-10155235.webp'
    : 'https://6years.rcc.city/wp-content/uploads/2026/06/Screenshot2026-04-29at11.39.48-AM.webp',
}));

export function MissionImpactPage() {
  return (
    <>
      <Section tone="paper">
        <div className="mi-intro">
          <Reveal as="div" className="mi-intro__text">
            <h1>Mission &amp; Impact</h1>
            <p>{MISSION_IMPACT.founding}</p>
          </Reveal>
          <Reveal as="div" delay={100} className="mi-intro__photo photo">
            <img
              src="https://6years.rcc.city/wp-content/uploads/2026/06/craig-melville-NDIegxhmeWw-unsplash-scaled.jpg"
              alt="Coastal landscape representing regional climate resilience"
              loading="eager"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <div className="mi-vision-mission">
          <div className="mi-vision-mission__block">
            <h3>Vision</h3>
            <p>{MISSION_IMPACT.vision}</p>
          </div>
          <div className="mi-vision-mission__block">
            <h3>Mission</h3>
            <p>{MISSION_IMPACT.missionLong}</p>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title={MISSION_IMPACT.anniversaryLabel} lede={MISSION_IMPACT.anniversaryBody} />
        <MilestoneTimeline milestones={MISSION_IMPACT.milestones} />
      </Section>

      <Section tone="surface" className="mi-numbers">
        <SectionHeading title="The numbers behind six years" />
        <StatBar stats={IMPACT_STATS} />
      </Section>

      <Section tone="paper">
        <SectionHeading title="Impact Stories" action={{ label: 'More impact stories', to: '/impact-stories/' }} />
        <ImpactStoryGrid stories={missionImpactStories} />
      </Section>

      <Section tone="surface">
        <SectionHeading title="Publications" action={{ label: 'More publications', to: '/publications/' }} />
        <ResourceList resources={PUBLICATIONS} ctaLabel="Read the report" />
      </Section>
    </>
  );
}
