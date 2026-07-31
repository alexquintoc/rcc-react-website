import { APPROACH } from '../../lib/content';
import { Reveal } from '../layout/Reveal';
import './ApproachSplit.css';

const PANELS = [APPROACH.sustained, APPROACH.accelerated];

export function ApproachSplit() {
  return (
    <div className="approach-split">
      {PANELS.map((panel, index) => (
        <Reveal as="article" key={panel.title} delay={index * 120} className="approach-panel">
          <div className="approach-panel__photo photo">
            <img src={panel.image} alt="" loading="lazy" />
            <h3 className="approach-panel__title">{panel.title}</h3>
          </div>
          <div className="approach-panel__body">
            <p>{panel.description}</p>
            <ul>
              {panel.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
