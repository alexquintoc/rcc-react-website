import { ArrowsClockwise, ChartLineUp, Coins, Crosshair, Lightbulb, UsersThree } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import './HowWeWorkPage.css';

const acceleratedImpact = [
  { value: '175', label: 'multi-benefit resilience projects designed, funded or implemented across diverse geographic areas' },
  { value: '$766M', label: 'directed towards implementation of resilience projects in communities across the world' },
  { value: '15', label: 'plans, strategies and roadmaps developed to guide community and citywide priority actions' },
];

const capacityImpact = [
  { value: '11,225+', label: 'diverse practitioners and community members convened to develop solutions and exchange best practices' },
  { value: '54', label: 'partnerships activated between cross-sectoral actors to establish lasting resilience capacity' },
];

const phases = [
  { icon: Crosshair, title: 'Define and align priorities', body: 'Through assessments and cross-sectoral engagement to understand the interrelated systems, strengths and challenges of each place we work.' },
  { icon: Lightbulb, title: 'Design and launch implementable solutions', body: 'From physical infrastructure projects to community programming.' },
  { icon: Coins, title: 'Identify and activate resources', body: 'Including the technical expertise and the funding or financing required to achieve impact.' },
  { icon: UsersThree, title: 'Forge new models of collaboration', body: 'Between communities, public institutions and private partners to sustain the work into the future, while uplifting and sharing best practices.' },
];

const methods = [
  { title: 'Define and align priorities', items: ['Analytical tools & frameworks', 'Strategic plans & roadmaps', 'Research reports'], tone: 'blue' },
  { title: 'Design and launch implementable solutions', items: ['Project design briefs', 'Concept notes, concept designs', 'Policy recommendations'], tone: 'gray' },
  { title: 'Identify and activate resources', items: ['Implementation plans', 'Subject matter and technical experts', 'Financing strategies', 'Funding collateral'], tone: 'green' },
  { title: 'Forge new models of collaboration', items: ['Knowledge exchange convenings', 'Stakeholder engagement workshops', 'Project alignment facilitation'], tone: 'yellow' },
];

const benefits = [
  'New multi-benefit projects',
  'Increased team capacity',
  'Greater technical expertise',
  'Increased alignment and commitment',
  'Effective strategic partnerships',
  'Increased knowledge',
  'New investment for long-term project viability',
];

export function HowWeWorkPage() {
  return (
    <div className="how-we-work">
      <header className="hww-hero">
        <div className="container hww-hero__inner">
          <p className="hww-kicker">Who we are</p>
          <h1>Our approach</h1>
          <div className="hww-hero__copy">
            <p>Over the past six years, RCC has partnered with cities and communities to move resilience from ideas to action.</p>
            <p>Our dual approach pairs on-the-ground projects with the partnerships, tools, and knowledge needed to sustain them — creating a cycle where each effort strengthens the next.</p>
          </div>
        </div>
      </header>

      <section className="hww-section dual-approach" aria-labelledby="dual-title">
        <div className="container">
          <h2 id="dual-title" className="visually-hidden">Accelerated action and sustained capacity</h2>
          <div className="dual-approach__stage">
            <div className="dual-approach__wheel" aria-hidden="true">
              <ArrowsClockwise className="wheel-arrow wheel-arrow--orange" weight="bold" />
              <ArrowsClockwise className="wheel-arrow wheel-arrow--blue" weight="bold" />
            </div>
            <article className="approach-card approach-card--action">
              <div className="approach-card__image photo"><img src="https://6years.rcc.city/wp-content/uploads/2026/06/Screenshot2026-04-29at11.39.48-AM.webp" alt="Partners collaborating to accelerate resilience action" /></div>
              <h3>Accelerated<br />Action</h3>
              <p>We drive communities and projects to overcome complex and persistent barriers more effectively, allowing for more rapid implementation.</p>
            </article>
            <article className="approach-card approach-card--capacity">
              <div className="approach-card__image photo"><img src="https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/baa9c8b2-61fc-4659-8cc9-486e5c0616f0/DSCF2347_VSCO+%281%29%281%29.JPG" alt="Community leaders building sustained resilience capacity" /></div>
              <h3>Sustained<br />Capacity</h3>
              <p>We empower resilience leaders with the know-how, partnerships and resources required to deliver on current projects and future solutions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hww-section hww-impact">
        <div className="container">
          <p className="hww-kicker">Six years of work</p>
          <h2>Our two-pronged approach has directly benefited vulnerable communities worldwide.</h2>
          <div className="hww-impact__groups">
            <section className="impact-group impact-group--action">
              <header><ArrowsClockwise weight="light" aria-hidden="true" /><h3>Accelerated action</h3></header>
              <dl>{acceleratedImpact.map((item) => <div key={item.value}><dt>{item.value}</dt><dd>{item.label}</dd></div>)}</dl>
            </section>
            <section className="impact-group impact-group--capacity">
              <header><ChartLineUp weight="light" aria-hidden="true" /><h3>Sustained capacity</h3></header>
              <dl>{capacityImpact.map((item) => <div key={item.value}><dt>{item.value}</dt><dd>{item.label}</dd></div>)}</dl>
            </section>
          </div>
        </div>
      </section>

      <section className="hww-section hww-phases">
        <div className="container">
          <div className="hww-heading"><p className="hww-kicker">From priorities to durable action</p><h2>Four connected phases guide the work.</h2></div>
          <div className="hww-phases__grid">{phases.map((phase, index) => { const Icon = phase.icon; return <article key={phase.title}><span>0{index + 1}</span><Icon weight="duotone" aria-hidden="true" /><h3>{phase.title}</h3><p>{phase.body}</p></article>; })}</div>
        </div>
      </section>

      <section className="hww-section methods-section" aria-labelledby="methods-title">
        <div className="container">
          <div className="hww-heading hww-heading--center"><p className="hww-kicker">How RCC works</p><h2 id="methods-title">RCC supports partners in driving new solutions from planning to implementation.</h2><p>We work hand-in-hand with leaders and practitioners across diverse sectors, disciplines and jurisdictions.</p></div>
          <div className="methods-diagram">
            <aside className="methods-benefits">
              <h3>Our tools and methods are adaptive and flexible</h3>
              <h4>And lead to tangible benefits</h4>
              <ul>{benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </aside>
            <div className="methods-flow">
              {methods.map((method, index) => (
                <article className={`method-step method-step--${method.tone}`} key={method.title}>
                  <div className="method-step__pill"><span>0{index + 1}</span><h3>{method.title}</h3></div>
                  <ul>{method.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hww-section obstacles-section">
        <div className="container obstacles-layout">
          <div className="obstacles-photo photo"><img src="https://6years.rcc.city/wp-content/uploads/2026/03/IMG_5709-scaled.jpg" alt="RCC workshop with city and community partners" loading="lazy" /></div>
          <div className="obstacles-copy">
            <p className="hww-kicker">Why this work matters</p>
            <h2>Common obstacles to innovation and change appear in almost every context.</h2>
            <div><p>Silos around particular government functions — such as transportation, economic development and health — and a lack of cross-sectoral collaboration inhibit the delivery of transformative solutions.</p><p>The jurisdictional structures through which governance, resource flow, and regulatory functions operate are not sufficient to meet the world’s most pressing 21st-century challenges — from wildfires and extreme heat to housing and food security.</p><p>All too often the exclusion of community members as critical stakeholders and participants results in programs, projects, and policies that fail to address the complex challenges residents face, not only in disasters but in their daily lives.</p></div>
            <Button to="/portfolio/">Explore our work</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
