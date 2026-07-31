import { photoUrl } from '../../lib/images';
import { Reveal } from '../layout/Reveal';
import './PeopleGrid.css';

interface Person {
  name: string;
  title: string;
  seed: string;
}

export function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="people-grid">
      {people.map((person, index) => (
        <Reveal as="article" key={person.name} delay={index * 90} className="person-card">
          <div className="person-card__photo photo">
            <img src={photoUrl(person.seed, 480, 560)} alt="" loading="lazy" />
          </div>
          <p className="person-card__name">{person.name}</p>
          <p className="person-card__title">{person.title}</p>
        </Reveal>
      ))}
    </div>
  );
}
