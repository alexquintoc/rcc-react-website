import { ArrowUpRight } from '@phosphor-icons/react';
import { NEWS } from '../../lib/content';
import { Link } from '../../lib/router';
import { Reveal } from '../layout/Reveal';
import './NewsList.css';

export function NewsList() {
  return (
    <ul className="news-list">
      {NEWS.map((item, index) => (
        <Reveal as="li" key={item.slug} delay={index * 80}>
          <Link to={item.slug} className="news-row">
            <div className="news-row__photo photo">
              <img src={item.image} alt="" loading="lazy" />
            </div>
            <div className="news-row__body">
              <p className="news-row__date">{item.date}</p>
              <h3>{item.title}</h3>
            </div>
            <ArrowUpRight weight="bold" aria-hidden="true" className="news-row__arrow" />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
