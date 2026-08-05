import { ArrowRight, Check, MapPin } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { Link } from '../lib/router';
import { photoUrl } from '../lib/images';
import './Home2Page.css';

const phases = [
  {
    number: '01',
    title: 'Define & Align Priorities',
    description: 'Understand the interrelated systems, strengths and challenges of a place.',
    interventions: 'Assessments, cross-sectoral engagement, research reports',
  },
  {
    number: '02',
    title: 'Design & Launch Implementable Solutions',
    description: 'Move from physical infrastructure projects to community programming.',
    interventions: 'Project design briefs, concept design, policy recommendations',
  },
  {
    number: '03',
    title: 'Identify & Activate Resources',
    description: 'Pair technical expertise with the funding and financing required for impact.',
    interventions: 'Implementation plans, financing strategies, funding collateral',
  },
  {
    number: '04',
    title: 'Forge New Models of Collaboration',
    description: 'Sustain the work between communities, institutions and private partners.',
    interventions: 'Knowledge exchange, workshops, alignment facilitation',
  },
];

const stats = [
  { group: 'Accelerated action', value: '169', label: 'multi-benefit projects' },
  { group: 'Accelerated action', value: '$1.1B', label: 'directed to implementation' },
  { group: 'Sustained capacity', value: '129', label: 'partnerships activated' },
  { group: 'Sustained capacity', value: '78', label: 'cities & regions' },
];

const projects = [
  {
    place: 'Southern California',
    title: 'Coastal resilience',
    image: photoUrl('rcc-goleta-oceanside-coast', 900, 720),
    home3Image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/63260a1a-7379-4c7c-8474-fa284b023471/Binational+Resilience+Fund+Option+1.jpg',
    to: '/california-v2/',
  },
  {
    place: 'Brooklyn, New York',
    title: 'Small business resilience',
    image: photoUrl('rcc-brownsville-corridor', 900, 720),
    home3Image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/baa9c8b2-61fc-4659-8cc9-486e5c0616f0/DSCF2347_VSCO+%281%29%281%29.JPG',
    to: '/impact-stories/',
  },
  {
    place: 'Tampa, Florida',
    title: 'Extreme heat response',
    image: photoUrl('rcc-tampa-extreme-heat', 900, 720),
    home3Image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/7fcf5bf8-2888-431d-af84-cdb3c2458287/tampa-impact-story-01.jpg',
    to: '/programs/',
  },
];

const partners = ['AECOM', 'CivicWell', 'Minderoo', 'Rockefeller Foundation', 'The World Bank', 'ClimateWorks'];

const partnerLogos = [
  { name: 'UN-Habitat', src: 'https://6years.rcc.city/wp-content/uploads/2026/03/unhabitat-rectangle.webp' },
  { name: 'Climate Investment Funds', src: 'https://6years.rcc.city/wp-content/uploads/2026/03/0000_cif.webp' },
  { name: 'Climate Community Foundation Los Angeles', src: 'https://6years.rcc.city/wp-content/uploads/2026/03/logo-ccfla.webp' },
  { name: 'Gold Standard', src: 'https://6years.rcc.city/wp-content/uploads/2026/03/goldstandard.webp' },
];

const newsItems = [
  {
    date: 'June 2, 2026',
    title: 'Four Community-Led Projects Selected for California Resilience Implementation Accelerator',
    excerpt: 'Four winning projects will expand locally led resilience efforts across California.',
    image: 'https://6years.rcc.city/wp-content/uploads/2026/06/Screenshot2026-04-29at11.39.48-AM.webp',
  },
  {
    date: 'June 2, 2026',
    title: 'Non-profit rolls out unique climate-resilient pilot in Brownsville',
    excerpt: 'A neighborhood pilot is transforming bus stops into green-roof shelters built for a changing climate.',
    image: 'https://6years.rcc.city/wp-content/uploads/2026/06/brownsville-2026-04-10155235.webp',
  },
  {
    date: 'March 5, 2026',
    title: 'MCAP at COP29',
    excerpt: 'RCC brings practical pathways for resilient investment and implementation to the global climate conversation.',
    image: 'https://6years.rcc.city/wp-content/uploads/2026/03/MCAP.webp',
  },
];

interface Home2PageProps {
  variant?: 'default' | 'imageHero';
}

export function Home2Page({ variant = 'default' }: Home2PageProps = {}) {
  const imageHero = variant === 'imageHero';

  return (
    <div className={`home2 ${imageHero ? 'home3' : ''}`}>
      <section className={`home2-hero ${imageHero ? 'home2-hero--image-title' : ''}`} aria-labelledby={imageHero ? 'home3-title' : 'home2-title'}>
        <div className="container home2-hero__inner">
          {!imageHero && (
            <>
              <p className="home2-eyebrow">Resilient Cities Catalyst</p>
              <h1 id="home2-title">We accelerate action and build capacity within communities, cities and regions.</h1>
              <p className="home2-hero__lede">
                We help local leaders turn complex resilience challenges into funded, implementable solutions that last.
              </p>
            </>
          )}
          <div className="home2-hero__media photo">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1668709305178-54DLNGKOWQ9Q8LJ320WV/boys-swinging-on-a-swing-set-in-a-park_t20_GJAAoe.jpg"
              alt="Young people enjoying a neighborhood park"
            />
            {imageHero ? (
              <div className="home2-hero__media-copy">
                <p className="home2-eyebrow">Resilient Cities Catalyst</p>
                <h1 id="home3-title">We accelerate action and build capacity within communities, cities and regions.</h1>
                <p className="home2-hero__lede">We help local leaders turn complex resilience challenges into funded, implementable solutions that last.</p>
              </div>
            ) : (
              <div className="home2-hero__media-label">Resilience starts with the places people call home.</div>
            )}
          </div>
          <div className="home2-actions">
            <Button to="#journey">See how we work</Button>
            <Button to="/impact-stories/" variant="secondary">Explore case studies</Button>
          </div>
        </div>
      </section>

      <section className="home2-section home2-problem" aria-labelledby="problem-title">
        <div className="container home2-problem__grid">
          <div>
            <p className="home2-kicker">The problem</p>
            <h2 id="problem-title">Cities are trying to solve 21st-century problems with 20th-century tools and structures.</h2>
          </div>
          <div className="home2-problem__aside">
            <p className="home2-kicker">The barriers, at a glance</p>
            <p>That gap is where RCC works: aligning institutions, unlocking resources and building trust with communities.</p>
            <ul className="home2-tags" aria-label="Common barriers">
              <li>Government barriers</li>
              <li>Resource barriers</li>
              <li>Community barriers</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="journey" className="home2-section home2-journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="home2-heading-row">
            <div>
              <p className="home2-kicker">How we work</p>
              <h2 id="journey-title">A practical journey from challenge to lasting change.</h2>
            </div>
            <p>Each phase builds momentum, while focused interventions meet a city where it is.</p>
          </div>
          <ol className="home2-phases">
            {phases.map((phase) => (
              <li key={phase.number}>
                <span className="home2-phase__number">{phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <div className="home2-phase__interventions"><span>Interventions</span>{phase.interventions}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home2-section home2-case" aria-labelledby="case-title">
        <div className="container">
          <p className="home2-kicker">Resilience in action</p>
          <div className="home2-case__card">
            <div className="home2-case__image photo">
              <img
                src={imageHero
                  ? 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/b10d2e50-5680-4ad4-8d97-b7b1a836986f/phoenix-workshop-01.jpg'
                  : photoUrl('rcc-phoenix-shade-corridor', 1200, 1000)}
                alt={imageHero
                  ? 'Community health workers leading an extreme heat resilience workshop in Phoenix'
                  : 'A shaded public space in a resilient city project'}
              />
            </div>
            <div className="home2-case__content">
              <p className="home2-case__place"><MapPin weight="fill" aria-hidden="true" /> Phoenix, Arizona</p>
              <h2 id="case-title">One city, start to finish — the four phases in practice.</h2>
              <ul>
                <li><Check weight="bold" aria-hidden="true" />A shared understanding of heat risk and local priorities</li>
                <li><Check weight="bold" aria-hidden="true" />A community-shaped pipeline of implementable projects</li>
                <li><Check weight="bold" aria-hidden="true" />New funding and partnerships to scale the plan</li>
              </ul>
              <div className="home2-case__metrics">
                <div><strong>$60M</strong><span>plan scaled</span></div>
                <div><strong>4</strong><span>sites replicated</span></div>
              </div>
              <Button to="/impact-stories/" variant="secondary">Read the story</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="home2-stats" aria-labelledby="stats-title">
        <div className="container">
          <div className="home2-heading-row home2-heading-row--light">
            <div><p className="home2-kicker">Impact, in numbers</p><h2 id="stats-title">Action that can be measured.</h2></div>
            <p>Our portfolio pairs immediate project delivery with the capacity communities need to keep going.</p>
          </div>
          <dl>
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt>{stat.group}</dt><dd>{stat.value}</dd><span>{stat.label}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="home2-section home2-portfolio" aria-labelledby="portfolio-title">
        <div className="container">
          <div className="home2-heading-row">
            <div><p className="home2-kicker">Portfolio</p><h2 id="portfolio-title">Different places. Shared momentum.</h2></div>
            <Button to="/programs/" variant="ghost">See full portfolio</Button>
          </div>
          <div className="home2-projects">
            {projects.map((project) => (
              <Link to={project.to} className="home2-project" key={project.title}>
                <div className="home2-project__image photo">
                  <img src={imageHero ? project.home3Image : project.image} alt={`${project.title} in ${project.place}`} />
                </div>
                <p>{project.place}</p><h3>{project.title}</h3><ArrowRight weight="bold" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home2-trusted" aria-labelledby="trusted-title">
        <div className="container">
          <p className="home2-kicker">Trusted by</p>
          <h2 id="trusted-title">Built with partners committed to durable change.</h2>
          {imageHero ? (
            <ul className="home2-trusted__logos">
              {partnerLogos.map((partner) => (
                <li key={partner.name}><img src={partner.src} alt={partner.name} loading="lazy" /></li>
              ))}
            </ul>
          ) : (
            <ul>{partners.map((partner) => <li key={partner}>{partner}</li>)}</ul>
          )}
        </div>
      </section>

      {imageHero && (
        <section className="home2-news" aria-labelledby="news-title">
          <div className="container">
            <div className="home2-heading-row">
              <div>
                <p className="home2-kicker">News</p>
                <h2 id="news-title">Ideas and action from the field.</h2>
              </div>
              <p>Updates from the communities, partners and practitioners moving resilience forward.</p>
            </div>
            <div className="home2-news__grid">
              {newsItems.map((item) => (
                <article className="home2-news__card" key={item.title}>
                  <div className="home2-news__image photo">
                    <img src={item.image} alt="" loading="lazy" />
                  </div>
                  <div className="home2-news__body">
                    <p className="home2-news__meta"><span>News</span>{item.date}</p>
                    <h3>{item.title}</h3>
                    <p className="home2-news__excerpt">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="home2-cta" aria-labelledby="cta-title">
        <div className="container home2-cta__inner">
          <p className="home2-kicker">Start a conversation</p>
          <h2 id="cta-title">Working on a resilience challenge in your city?</h2>
          <p>Bring us the challenge. Together, we can define the path from ambition to implementation.</p>
          <Button to="/contact/">Get in touch</Button>
        </div>
      </section>
    </div>
  );
}
