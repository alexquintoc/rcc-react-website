import { IMPACT_STORIES } from '../../lib/content';
import { Link } from '../../lib/router';
import { Reveal } from '../layout/Reveal';
import './ImpactStoryGrid.css';

export function ImpactStoryGrid() {
  return (
    <div className="story-grid">
      {IMPACT_STORIES.map((story, index) => (
        <Reveal as="article" key={story.slug} delay={index * 110} className="story-card">
          <Link to={story.slug} className="story-card__link">
            <div className="story-card__photo photo">
              <img src={story.image} alt="" loading="lazy" />
            </div>
            <p className="story-card__location">{story.location}</p>
            <h3>{story.title}</h3>
            <p className="story-card__summary">{story.summary}</p>
            <span className="story-card__cta">Read the story</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
