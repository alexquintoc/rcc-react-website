import type { Stat } from '../../lib/content';
import { Reveal } from '../layout/Reveal';
import './StatBar.css';

/**
 * The live site's counters render "0" until a JS animation completes (see
 * design-analysis.md, Problem 3). Here the real number is always in the markup;
 * only the entrance (opacity/translate, not the digits) is animated on scroll-in,
 * so nothing depends on JavaScript finishing to show a true value.
 */
export function StatBar({ stats }: { stats: Stat[] }) {
  const lead = stats.find((stat) => stat.lead) ?? stats[0];
  const supporting = stats.filter((stat) => stat !== lead);

  return (
    <div className="stat-bar">
      <Reveal as="div" className="stat-cell stat-cell--lead">
        <StatCell stat={lead} />
      </Reveal>
      {supporting.map((stat, index) => (
        <Reveal as="div" key={stat.id} delay={(index + 1) * 90} className="stat-cell">
          <StatCell stat={stat} />
        </Reveal>
      ))}
    </div>
  );
}

function StatCell({ stat }: { stat: Stat }) {
  return (
    <>
      <p className="stat-cell__value">
        {stat.prefix}
        {stat.value.toLocaleString('en-US')}
        {stat.suffix}
      </p>
      <p className="stat-cell__label">{stat.label}</p>
    </>
  );
}
