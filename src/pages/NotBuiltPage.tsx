import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';

export function NotBuiltPage() {
  return (
    <Section tone="paper">
      <div style={{ maxWidth: '52ch' }}>
        <h1 style={{ fontSize: 'var(--text-display-2)', marginBottom: 'var(--space-5)' }}>
          Outside this prototype's scope
        </h1>
        <p
          style={{
            fontSize: 'var(--text-lead)',
            color: 'var(--color-ink-soft)',
            lineHeight: 'var(--leading-snug)',
            marginBottom: 'var(--space-7)',
          }}
        >
          This exploration builds the Homepage, Mission &amp; Impact, and California Resilience
          Partnership pages only. The navigation label you followed is real (preserved from the
          live site's information architecture), but its destination page wasn't part of this
          round of design exploration.
        </p>
        <Button to="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </Section>
  );
}
