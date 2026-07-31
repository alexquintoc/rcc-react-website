import { useEffect, useRef } from 'react';

/**
 * Adds `.is-visible` to an element once it enters the viewport, driving the
 * `.reveal` CSS transition in global.css. IntersectionObserver only — no scroll
 * listeners, no layout thrash. Reduced-motion users never get the hidden state
 * in the first place (gated in CSS), so this hook is a no-op enhancement for them.
 *
 * A fallback timer force-reveals the element regardless of the observer. This
 * is the fix for the exact failure mode flagged against the live site's stat
 * counters in design-analysis.md: content must never stay invisible waiting on
 * a scroll event or an observer edge case (a fast programmatic scroll, a
 * headless renderer, an unusually short viewport) that never fires.
 */
export function useReveal<T extends HTMLElement>(options?: { delay?: number }) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const delay = options?.delay ?? 0;
    const reveal = () => node.classList.add('is-visible');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(reveal, delay);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    const fallback = window.setTimeout(reveal, 2500 + delay);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [options?.delay]);

  return ref;
}
