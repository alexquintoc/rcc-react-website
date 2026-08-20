import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import { Link } from '../lib/router';
import './PortfolioPage.css';

const projects = [
  {
    location: 'Oceanside, California',
    title: 'RE:BEACH Oceanside',
    description: 'A community-led coastal resilience pilot restoring and retaining sand through design innovation and science-based adaptation.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/0b8cadb3-71d4-4b06-8a10-cbb068a8324e/Oceanside.webp',
    href: '/ca-oceanside-rebeach/',
    internal: true,
  },
  {
    location: 'Brownsville, Brooklyn, New York',
    title: 'Small Business Climate Resilience Corridor',
    description: 'A neighborhood-scale model that pairs climate-ready public space with stronger local businesses and community capacity.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/baa9c8b2-61fc-4659-8cc9-486e5c0616f0/DSCF2347_VSCO+%281%29%281%29.JPG',
    href: 'https://www.rcc.city/impact-brownsville-nyc',
  },
  {
    location: 'Tampa, Florida',
    title: 'Addressing the Impacts of Extreme Heat',
    description: 'Collaborative planning and implementation support that helps neighborhoods respond to intensifying urban heat.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/7fcf5bf8-2888-431d-af84-cdb3c2458287/tampa-impact-story-01.jpg',
    href: 'https://www.rcc.city/impact-tampa-extreme-heat',
  },
  {
    location: 'Greater San Diego, California',
    title: 'Building Coastal Resilience',
    description: 'Regional partners turn shared coastal risks into a coordinated pipeline of implementable resilience projects.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/63260a1a-7379-4c7c-8474-fa284b023471/Binational+Resilience+Fund+Option+1.jpg',
    href: 'https://www.rcc.city/impact-coastal-resilience-in-greater-san-diego',
  },
  {
    location: 'Phoenix, Arizona',
    title: 'Advancing Extreme Heat Resilience',
    description: 'A practical pathway for moving heat-response priorities from planning toward investment and on-the-ground action.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/b10d2e50-5680-4ad4-8d97-b7b1a836986f/phoenix-workshop-01.jpg',
    href: 'https://www.rcc.city/impact-phoenix-extreme-heat',
  },
];

export function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container portfolio-hero__grid">
          <p className="portfolio-kicker">Portfolio</p>
          <h1>Resilience<br />in action.</h1>
          <p className="portfolio-hero__intro">Across regions, hazards, and scales, RCC helps communities move ambitious ideas into projects that can be funded, delivered, and sustained.</p>
        </div>
      </section>

      <section className="portfolio-featured" id="featured-work" aria-labelledby="featured-title">
        <div className="container">
          <div className="portfolio-section-heading">
            <div><p className="portfolio-kicker">Featured work</p><h2 id="featured-title">California Resilience Partnership</h2></div>
            <p>A statewide partnership that connects local priorities, technical expertise, implementation support, and catalytic investment.</p>
          </div>
          <div className="featured-projects">
            <Link to="/california/" className="featured-project">
              <div className="featured-project__image photo"><img src="https://6years.rcc.city/wp-content/uploads/2026/06/craig-melville-NDIegxhmeWw-unsplash-scaled.jpg" alt="Pacific Ocean along the California coast" /></div>
              <div className="featured-project__content">
                <div><p className="featured-project__meta">Regional program · California</p><h3>Turning climate ambition into lasting local action.</h3></div>
                <p>RCC advances high-impact projects for climate-vulnerable communities while strengthening the partnerships and resources required to sustain them.</p>
                <span>Explore the California program <ArrowRight weight="bold" aria-hidden="true" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="portfolio-directory" id="project-directory" aria-labelledby="directory-title">
        <div className="container">
          <div className="portfolio-section-heading portfolio-section-heading--directory">
            <div><p className="portfolio-kicker">Project directory</p><h2 id="directory-title">Work shaped by place.</h2></div>
            <p>Explore selected efforts that pair accelerated action with the local capacity needed to carry resilience forward.</p>
          </div>
          <div className="project-directory-grid">
            {projects.map((project, index) => {
              const content = <><div className="directory-card__image photo"><img src={project.image} alt="" loading="lazy" /></div><div className="directory-card__body"><p className="directory-card__number">{String(index + 1).padStart(2, '0')}</p><p className="directory-card__location">{project.location}</p><h3>{project.title}</h3><p className="directory-card__description">{project.description}</p><span>View project {project.internal ? <ArrowRight weight="bold" aria-hidden="true" /> : <ArrowUpRight weight="bold" aria-hidden="true" />}</span></div></>;
              return project.internal ? <Link key={project.title} to={project.href} className="directory-card">{content}</Link> : <a key={project.title} href={project.href} className="directory-card" target="_blank" rel="noreferrer">{content}</a>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
