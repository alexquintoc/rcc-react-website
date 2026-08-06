import {
  ArrowDown,
  Blueprint,
  Bridge,
  Buildings,
  CaretDown,
  Compass,
  Fire,
  GlobeHemisphereWest,
  Handshake,
  Lifebuoy,
  RocketLaunch,
  Sun,
  Tree,
  UsersThree,
  Waves,
} from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { Link } from '../lib/router';
import { MetadataTiles } from '../components/ui/MetadataTiles';
import './CaliforniaAltPage.css';

const snapshot = [
  { label: 'Status', value: 'Active' },
  { label: 'Location', value: 'California, United States' },
  { label: 'Focus Areas', value: 'Climate Resilience, Coastal Adaptation, Wildfire Recovery, Project Preparation, Resilience Finance' },
  { label: 'Partners', value: 'Local and regional governments, community organizations, philanthropy, state agencies, and RCC' },
  { label: 'Program Context', value: 'Implementation support for climate-vulnerable communities and regions across California' },
  { label: 'Project Type', value: 'Regional Resilience Partnership, Project Development, Implementation Accelerator' },
  { label: 'Signature Initiatives', value: 'California Resilience Implementation Accelerator, Coastal Accelerator, Goleta Slough, Wildfire Recovery' },
];

const approaches = [
  {
    icon: Handshake,
    title: 'Build Regional Partnerships',
    description: 'Connect local leaders, community organizations, funders, and technical experts around shared regional resilience priorities.',
  },
  {
    icon: RocketLaunch,
    title: 'Accelerate Implementation',
    description: 'Help promising resilience projects overcome funding, coordination, and delivery barriers so they can move into action.',
  },
  {
    icon: Waves,
    title: 'Advance Coastal Resilience',
    description: 'Support coastal communities as they develop practical, locally grounded responses to erosion, sea-level rise, and changing shorelines.',
  },
  {
    icon: Lifebuoy,
    title: 'Support Equitable Recovery',
    description: 'Center communities and long-term resilience in recovery efforts following climate-driven disasters such as wildfires.',
  },
];

const programs = [
  { icon: UsersThree, title: 'California Resilience Partnership' },
  { icon: RocketLaunch, title: 'California Resilience Implementation Accelerator' },
  { icon: Waves, title: 'California Coastal Accelerator' },
  { icon: Tree, title: 'Goleta Slough' },
  { icon: Fire, title: 'Los Angeles Wildfire Recovery' },
  { icon: Sun, title: 'Re:Beach Oceanside', to: '/ca-oceanside-rebeach' },
  { icon: Buildings, title: 'Resilience Districts Incubator' },
  { icon: Blueprint, title: 'California Project Preparation Initiative' },
  { icon: Bridge, title: 'Binational Resilience' },
  { icon: GlobeHemisphereWest, title: 'Mediterranean Climate Action Partnership' },
];

const advisors = [
  { name: 'Bernadette Austin', title: 'CEO, CivicWell', image: 'https://6years.rcc.city/wp-content/uploads/2026/03/headshot-bernadette-austin-2.webp' },
  { name: 'Darbi Berry', title: 'CRP Board Chair & Director, The San Diego Regional Climate Collaborative', image: 'https://6years.rcc.city/wp-content/uploads/2026/03/adv-darbi-berry-2.webp' },
  { name: 'Louise Bedsworth', title: 'Executive Director, Center for Law, Energy, & the Environment, Berkeley Law', image: 'https://6years.rcc.city/wp-content/uploads/2026/03/Headshot-LouiseBedsworth.webp' },
  { name: 'Erin Coutts', title: 'Los Angeles Regional Collaborative for Climate Action and Sustainability', image: 'https://6years.rcc.city/wp-content/uploads/2026/03/Headshot-ErinCoutts.webp' },
  { name: 'Abby Edwards', title: "Senior Deputy Director, Governor's Office of Land Use and Climate Innovation", image: 'https://6years.rcc.city/wp-content/uploads/2026/06/Headshot-AbbyEdwards.webp' },
  { name: 'Jessica Hitt', title: 'Associate Director, ClimateWorks Foundation', image: 'https://6years.rcc.city/wp-content/uploads/2026/06/Headshot-JessicaHitt.webp' },
  { name: 'Nuin-Tara Key', title: 'Executive Director of Programs, California Forward', image: 'https://6years.rcc.city/wp-content/uploads/2026/06/Headshot-Nuin-TaraKey.webp' },
  { name: 'Jonathan Parfrey', title: 'Executive Director, Climate Resolve', image: 'https://6years.rcc.city/wp-content/uploads/2026/06/Headshot-JonathanParfrey.webp' },
  { name: 'Robert Miyashiro', title: 'Ex-Officio, Program Officer, International Programs, the Conrad N. Hilton Foundation', image: 'https://6years.rcc.city/wp-content/uploads/2026/06/Headshot-RobertMiyashiro.webp' },
  { name: 'Kiara Reed', title: 'Executive Director, Civic Thread', image: 'https://6years.rcc.city/wp-content/uploads/2026/06/adv-kiara-reed.webp' },
];

const impact = [
  { value: '$11.8M', label: 'In funding for projects and activities' },
  { value: '1,327', label: 'Diverse practitioners and community members convened' },
  { value: '23', label: 'Core partner organizations' },
  { value: '3,100+', label: 'Hours spent on capacity-building' },
  { value: '9+', label: 'Funders supporting programs and projects' },
];

const resources = [
  {
    title: 'Coastal Monitoring: Needs Assessment for California Communities',
    body: 'The California Coastal Accelerator brought together cohort members to discuss their individual and collective challenges to coastal monitoring practices, identifying gaps and surfacing common needs. This report synthesizes existing monitoring mechanisms, data quality and accessibility, governance and funding challenges, and opportunities for greater statewide alignment.',
    cta: 'Read the full report',
  },
  {
    title: 'Resilience in the Goleta Slough Coastal Area: Synthesizing Climate Hazards & Regional Priorities',
    body: 'The Goleta Slough supports ecological diversity and important watershed and shoreline processes while remaining deeply shaped by urban expansion. This report synthesizes technical studies, governmental plans, climate impacts, and regional priorities to support the Initiative’s next phases.',
    cta: 'Learn more from Goleta',
  },
  {
    title: 'The Case for Coastal Resilience Investment: Quantifying Oceanside Beach as an Economic Asset',
    body: 'Oceanside Beach attracts millions of visits, supports jobs, and produces tax revenue for essential services, yet erosion and sea-level rise threaten that value. RCC commissioned this study to quantify the beach as an economic asset and identify the cost of inaction.',
    cta: 'Learn more from Oceanside',
  },
];

export function CaliforniaAltPage() {
  return (
    <div className="california-alt">
      <section className="cali-hero" aria-labelledby="cali-title">
        <img src="https://6years.rcc.city/wp-content/uploads/2026/06/craig-melville-NDIegxhmeWw-unsplash-scaled.jpg" alt="Pacific Ocean along the California coast" />
        <div className="cali-hero__veil" aria-hidden="true" />
        <div className="container cali-hero__content">
          <p className="cali-kicker">Regional program</p>
          <h1 id="cali-title">California Resilience Partnership</h1>
          <p>Advancing implementation-ready climate resilience across California through regional partnerships and catalytic investment.</p>
          <Button to="#snapshot" showIcon={false}>Explore the program <ArrowDown weight="bold" aria-hidden="true" /></Button>
        </div>
      </section>

      <section className="cali-section cali-intro">
        <div className="container cali-intro__grid">
          <p className="cali-kicker">California, since 2019</p>
          <div className="cali-intro__copy">
            <p className="cali-intro__lead">Resilient Cities Catalyst advances high-impact climate resilience projects that benefit historically marginalized and climate-vulnerable communities, facilitate actionable knowledge exchange, and elevate California’s global climate leadership.</p>
            <p>The flagship of RCC’s Regional Resilience Partnerships program, the California Resilience Partnership was born in 2021 to generate meaningful partnerships and bolster existing efforts at the local, regional, and state level.</p>
            <p>Through deep work in greater Los Angeles, greater San Diego, greater Sacramento, and the Central Coasts, the program uncovered funding and implementation challenges that underscored the need to strengthen innovative partnerships and catalyze philanthropic funding alongside public resources.</p>
            <p>Anchored by the California Resilience Implementation Accelerator, the Partnership now serves as the umbrella for RCC’s work in and related to California—braiding complementary efforts into stronger project development and resilience action across the nation and beyond.</p>
          </div>
        </div>
      </section>

      <section id="snapshot" className="cali-section cali-snapshot">
        <div className="container">
          <h2>Program snapshot</h2>
          <MetadataTiles items={snapshot} />
        </div>
      </section>

      <section className="cali-challenge" aria-labelledby="challenge-title">
        <div className="container cali-challenge__grid">
          <div>
            <p className="cali-kicker">The challenge</p>
            <h2 id="challenge-title">The plans exist. The path to implementation does not.</h2>
          </div>
          <p>California communities face intensifying wildfire, extreme heat, flooding, sea-level rise, and other climate impacts. Projects can stall because of fragmented funding, limited implementation capacity, and challenges coordinating across jurisdictions and sectors. The Partnership closes this gap by strengthening partnerships, preparing projects for investment, and connecting local priorities with public and philanthropic resources.</p>
        </div>
      </section>

      <section className="cali-section cali-approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="cali-section-heading">
            <p className="cali-kicker">Our approach</p>
            <h2 id="approach-title">Partnerships designed to move work forward.</h2>
          </div>
          <div className="cali-approach__grid">
            {approaches.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="cali-approach__item" key={item.title}>
                  <div className="cali-approach__icon"><Icon weight="duotone" aria-hidden="true" /></div>
                  <p className="cali-approach__number">0{index + 1}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cali-section cali-why" aria-labelledby="why-title">
        <div className="container cali-why__grid">
          <div className="cali-why__mark"><Compass weight="thin" aria-hidden="true" /></div>
          <div>
            <p className="cali-kicker">Why it matters</p>
            <h2 id="why-title">How can strong partnerships turn climate ambition into lasting local action?</h2>
            <p>California has substantial climate expertise, ambitious policy, and committed local leaders. Yet the path from planning to implementation remains difficult, especially for historically marginalized and climate-vulnerable communities.</p>
            <p>By braiding together regional knowledge, community priorities, technical support, public funding, and catalytic philanthropy, the Partnership helps projects advance faster and with greater impact. Its lessons can strengthen resilience implementation across California, the nation, and beyond.</p>
          </div>
        </div>
      </section>

      <section className="cali-section cali-programs" aria-labelledby="programs-title">
        <div className="container">
          <div className="cali-section-heading cali-section-heading--row">
            <div><p className="cali-kicker">Programs</p><h2 id="programs-title">Ten connected initiatives.</h2></div>
            <p>A portfolio that works across geographies, hazards, and stages of implementation.</p>
          </div>
          <div className="cali-programs__grid">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const content = (
                <>
                  <p className="cali-program__number">{String(index + 1).padStart(2, '0')}</p>
                  <Icon weight="duotone" aria-hidden="true" />
                  <h3>{program.title}</h3>
                </>
              );

              if ('to' in program && program.to) {
                return <Link className="cali-program cali-program--link" to={program.to} key={program.title}>{content}</Link>;
              }

              return (
                <article className="cali-program" key={program.title}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cali-section cali-board" aria-labelledby="board-title">
        <div className="container">
          <div className="cali-section-heading cali-section-heading--row">
            <div><p className="cali-kicker">Advisory board</p><h2 id="board-title">Guided by California leaders.</h2></div>
            <p>The CRP Advisory Board provides strategic guidance and represents philanthropy, nonprofits, the private sector, academia, and regions across California.</p>
          </div>
          <div className="cali-board__grid">
            {advisors.map((advisor) => (
              <article className="cali-person" key={advisor.name}>
                <div className="cali-person__photo photo"><img src={advisor.image} alt={`Portrait of ${advisor.name}`} loading="lazy" /></div>
                <h3>{advisor.name}</h3>
                <p>{advisor.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cali-impact" aria-labelledby="impact-title">
        <div className="container">
          <div className="cali-section-heading cali-section-heading--light">
            <p className="cali-kicker">Impact</p>
            <h2 id="impact-title">Progress built across the state.</h2>
            <p>RCC has advanced resilience solutions, built partnerships, convened practitioners, and channeled technical and financial support across California.</p>
          </div>
          <dl className="cali-impact__grid">
            {impact.map((item) => <div key={item.label}><dd>{item.value}</dd><dt>{item.label}</dt></div>)}
          </dl>
        </div>
      </section>

      <section id="resources" className="cali-section cali-resources" aria-labelledby="resources-title">
        <div className="container">
          <div className="cali-section-heading cali-section-heading--row">
            <div><p className="cali-kicker">Resources</p><h2 id="resources-title">Research for implementation.</h2></div>
            <p>Open each resource to learn what it contributes to California’s resilience practice.</p>
          </div>
          <div className="cali-accordion">
            {resources.map((resource, index) => (
              <details key={resource.title} name="california-resources" open={index === 0}>
                <summary>
                  <span className="cali-accordion__number">0{index + 1}</span>
                  <span>{resource.title}</span>
                  <CaretDown weight="bold" aria-hidden="true" />
                </summary>
                <div className="cali-accordion__content">
                  <p>{resource.body}</p>
                  <span className="cali-accordion__cta">{resource.cta}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cali-closing" aria-labelledby="looking-ahead-title">
        <div className="container cali-closing__inner">
          <p className="cali-kicker">Looking ahead</p>
          <h2 id="looking-ahead-title">From climate leadership to visible, lasting results.</h2>
          <p>The California Resilience Partnership will continue expanding implementation support, strengthening innovative partnerships, and elevating the experience of local communities. Its goal is to build a durable pipeline of equitable resilience projects.</p>
          <Button to="/contact/">Work with RCC</Button>
        </div>
      </section>
    </div>
  );
}
