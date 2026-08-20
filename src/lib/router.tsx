import { useCallback, useEffect, useMemo, useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { RouterContext } from './routerContext';
import { useRouter } from './useRouter';

/**
 * Minimal path-based router. A dedicated dependency (react-router) isn't warranted
 * for a three-page prototype, and each route here maps 1:1 to a real WordPress slug
 * (see design-analysis.md), so a thin History API wrapper is the honest translation.
 */

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path === '' ? '/' : path;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    const targetPath = normalize(url.pathname);
    const targetLocation = `${targetPath}${url.search}${url.hash}`;
    const currentLocation = `${normalize(window.location.pathname)}${window.location.search}${window.location.hash}`;

    if (targetLocation !== currentLocation) {
      window.history.pushState({}, '', targetLocation);
      setPath(targetPath);
    }

    window.requestAnimationFrame(() => {
      const sectionId = url.hash.slice(1);
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          to.startsWith('#')
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
