import { useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import { Link } from '../lib/router';
import './PortfolioPage.css';

const featuredProjects = [
  {
    eyebrow: 'Regional program · California',
    title: 'Turning climate ambition into lasting local action.',
    description: 'RCC advances high-impact projects for climate-vulnerable communities while strengthening the partnerships and resources required to sustain them.',
    image: 'https://6years.rcc.city/wp-content/uploads/2026/06/craig-melville-NDIegxhmeWw-unsplash-scaled.jpg',
    imageAlt: 'Pacific Ocean along the California coast',
    href: '/california/',
    internal: true,
  },
  {
    eyebrow: 'Neighborhood program · New York',
    title: 'Small businesses building neighborhood resilience.',
    description: 'The Brownsville corridor combines community priorities, public-space improvements, and local business capacity to address climate pressures block by block.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/baa9c8b2-61fc-4659-8cc9-486e5c0616f0/DSCF2347_VSCO+%281%29%281%29.JPG',
    imageAlt: 'Community resilience improvements in Brownsville, Brooklyn',
    href: 'https://www.rcc.city/impact-brownsville-nyc',
  },
  {
    eyebrow: 'Global program · Europe & Caribbean',
    title: 'Preparing climate projects for investment and delivery.',
    description: 'The Project Preparation Program helps communities transform resilience priorities into stronger, implementable infrastructure projects across global regions.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1680895779744-DZ7079YVGVVBODKKDOYI/pexels-heather-smith-170379.jpg',
    imageAlt: 'Resilient infrastructure within a green landscape',
    href: 'https://www.rcc.city/project-preparation-program',
  },
];

const projects = [
  {
    location: 'Oceanside, California',
    title: 'RE:BEACH Oceanside',
    description: 'A community-led coastal resilience pilot restoring and retaining sand through design innovation and science-based adaptation.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/0b8cadb3-71d4-4b06-8a10-cbb068a8324e/Oceanside.webp',
    href: '/ca-oceanside-rebeach/',
    internal: true,
    locations: ['California'],
    areas: ['coastal resilience'],
  },
  {
    location: 'Brownsville, Brooklyn, New York',
    title: 'Small Business Climate Resilience Corridor',
    description: 'A neighborhood-scale model that pairs climate-ready public space with stronger local businesses and community capacity.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/baa9c8b2-61fc-4659-8cc9-486e5c0616f0/DSCF2347_VSCO+%281%29%281%29.JPG',
    href: 'https://www.rcc.city/impact-brownsville-nyc',
    locations: ['New York'],
    areas: ['extreme heat', 'small business resilience'],
  },
  {
    location: 'Tampa, Florida',
    title: 'Addressing the Impacts of Extreme Heat',
    description: 'Collaborative planning and implementation support that helps neighborhoods respond to intensifying urban heat.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/7fcf5bf8-2888-431d-af84-cdb3c2458287/tampa-impact-story-01.jpg',
    href: 'https://www.rcc.city/impact-tampa-extreme-heat',
    locations: ['Florida'],
    areas: ['extreme heat'],
  },
  {
    location: 'Greater San Diego, California',
    title: 'Building Coastal Resilience',
    description: 'Regional partners turn shared coastal risks into a coordinated pipeline of implementable resilience projects.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/63260a1a-7379-4c7c-8474-fa284b023471/Binational+Resilience+Fund+Option+1.jpg',
    href: 'https://www.rcc.city/impact-coastal-resilience-in-greater-san-diego',
    locations: ['California'],
    areas: ['coastal resilience'],
  },
  {
    location: 'Phoenix, Arizona',
    title: 'Advancing Extreme Heat Resilience',
    description: 'A practical pathway for moving heat-response priorities from planning toward investment and on-the-ground action.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/b10d2e50-5680-4ad4-8d97-b7b1a836986f/phoenix-workshop-01.jpg',
    href: 'https://www.rcc.city/impact-phoenix-extreme-heat',
    locations: ['Arizona'],
    areas: ['extreme heat'],
  },
];

const directoryLocations = ['California', 'New York', 'Florida', 'Arizona'];
const directoryAreas = ['coastal resilience', 'extreme heat', 'small business resilience'];

export function PortfolioPage() {
  const [directoryLocation, setDirectoryLocation] = useState('All');
  const [directoryArea, setDirectoryArea] = useState('All');
  const sliderRef = useRef<HTMLDivElement>(null);
  const filteredProjects = useMemo(() => projects.filter((project) =>
    (directoryLocation === 'All' || project.locations.includes(directoryLocation)) &&
    (directoryArea === 'All' || project.areas.includes(directoryArea)),
  ), [directoryLocation, directoryArea]);

  function moveSlider(direction: -1 | 1) {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction * slider.clientWidth * .72, behavior: 'smooth' });
  }

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
            <div><p className="portfolio-kicker">Featured work</p><h2 id="featured-title">Projects moving resilience forward.</h2></div>
            <p>Selected work connecting local priorities, technical expertise, implementation support, and catalytic investment.</p>
          </div>
          <div className="featured-slider">
            <div className="featured-slider__controls">
              <p>3 projects</p>
              <div><button type="button" onClick={() => moveSlider(-1)} aria-label="Previous featured projects"><ArrowLeft weight="bold" aria-hidden="true" /></button><button type="button" onClick={() => moveSlider(1)} aria-label="Next featured projects"><ArrowRight weight="bold" aria-hidden="true" /></button></div>
            </div>
            <div className="featured-slider__viewport" ref={sliderRef}>
              <div className="featured-projects">
                {featuredProjects.map((project) => {
                  const card = <><div className="featured-project__image photo"><img src={project.image} alt={project.imageAlt} /></div><div className="featured-project__content"><div><p className="featured-project__meta">{project.eyebrow}</p><h3>{project.title}</h3></div><p>{project.description}</p><span>Explore the project {project.internal ? <ArrowRight weight="bold" aria-hidden="true" /> : <ArrowUpRight weight="bold" aria-hidden="true" />}</span></div></>;
                  return project.internal ? <Link key={project.title} to={project.href} className="featured-project">{card}</Link> : <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="featured-project">{card}</a>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-directory" id="project-directory" aria-labelledby="directory-title">
        <div className="container">
          <div className="portfolio-section-heading portfolio-section-heading--directory">
            <div><p className="portfolio-kicker">Project directory</p><h2 id="directory-title">Work shaped by place.</h2></div>
            <p>Explore selected efforts that pair accelerated action with the local capacity needed to carry resilience forward.</p>
          </div>
          <div className="portfolio-filters portfolio-filters--directory" aria-label="Filter project directory">
            <div className="portfolio-filter-group"><p>Location</p><div>{['All', ...directoryLocations].map((location) => <button key={location} type="button" className={directoryLocation === location ? 'is-active' : ''} aria-pressed={directoryLocation === location} onClick={() => setDirectoryLocation(location)}>{location}</button>)}</div></div>
            <div className="portfolio-filter-group"><p>Resilience area</p><div>{['All', ...directoryAreas].map((area) => <button key={area} type="button" className={directoryArea === area ? 'is-active' : ''} aria-pressed={directoryArea === area} onClick={() => setDirectoryArea(area)}>{area}</button>)}</div></div>
          </div>
          <p className="directory-results" aria-live="polite">Showing {filteredProjects.length} of {projects.length} projects</p>
          <div className="project-directory-grid">
            {filteredProjects.map((project, index) => {
              const content = <><div className="directory-card__image photo"><img src={project.image} alt="" loading="lazy" /></div><div className="directory-card__body"><p className="directory-card__number">{String(index + 1).padStart(2, '0')}</p><p className="directory-card__location">{project.location}</p><h3>{project.title}</h3><p className="directory-card__description">{project.description}</p><span>View project {project.internal ? <ArrowRight weight="bold" aria-hidden="true" /> : <ArrowUpRight weight="bold" aria-hidden="true" />}</span></div></>;
              return project.internal ? <Link key={project.title} to={project.href} className="directory-card">{content}</Link> : <a key={project.title} href={project.href} className="directory-card" target="_blank" rel="noreferrer">{content}</a>;
            })}
            {filteredProjects.length === 0 && <div className="directory-empty"><h3>No matching projects.</h3><p>Try another location or resilience area.</p></div>}
          </div>
        </div>
      </section>
    </div>
  );
}
