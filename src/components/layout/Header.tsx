import { useEffect, useRef, useState } from 'react';
import { List, X, CaretDown } from '@phosphor-icons/react';
import { Link } from '../../lib/router';
import { useRouter } from '../../lib/useRouter';
import { NAV, ORG } from '../../lib/content';
import { Button } from '../ui/Button';
import './Header.css';

export function Header() {
  const { path } = useRouter();
  const isHome3 = path === '/' || path === '/home-3' || path === '/mission-impact' || path === '/california' || path === '/ca-oceanside-rebeach';
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Close any open menu when the route changes (e.g. via browser back/forward).
  // Adjusted during render, per React's guidance, rather than in an effect,
  // since this is deriving state from a prop-like value (the current path).
  const [lastPath, setLastPath] = useState(path);
  if (path !== lastPath) {
    setLastPath(path);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: '-1px 0px 0px 0px',
      threshold: 1,
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: 'absolute', top: 0, height: 1 }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header ref={headerRef} className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__bar">
          <Link to="/" className="site-header__mark" aria-label={`${ORG.name}, home`}>
            {isHome3 ? (
              <img
                className="site-header__logo"
                src="https://6years.rcc.city/wp-content/uploads/2024/11/RCC-Logo_Horizontal-Logo-Full-Color-1.png"
                alt={ORG.name}
              />
            ) : (
              <>
                <span className="site-header__mark-full">{ORG.name}</span>
                <span className="site-header__mark-short" aria-hidden="true">RCC</span>
              </>
            )}
          </Link>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              {NAV.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isOpen = openMenu === item.label;
                return (
                  <li key={item.label} className="site-header__item">
                    {hasChildren ? (
                      <button
                        type="button"
                        className="site-header__link"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => setOpenMenu(isOpen ? null : item.label)}
                      >
                        {item.label}
                        <CaretDown weight="bold" aria-hidden="true" className="site-header__caret" />
                      </button>
                    ) : (
                      <Link to={item.href} className="site-header__link">
                        {item.label}
                      </Link>
                    )}

                    {hasChildren && (
                      <div className={`site-header__panel ${isOpen ? 'is-open' : ''}`}>
                        <ul>
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link to={child.href} onClick={() => setOpenMenu(null)}>
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <Button to="/donate/" variant="primary" showIcon={false} className="site-header__donate">
              Donate
            </Button>
            <button
              type="button"
              className="site-header__toggle"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X weight="bold" aria-hidden="true" /> : <List weight="bold" aria-hidden="true" />}
              <span className="visually-hidden">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`site-header__mobile ${mobileOpen ? 'is-open' : ''}`}>
          <MobileNav onNavigate={() => setMobileOpen(false)} />
        </div>
      </header>
    </>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav aria-label="Primary, mobile" className="mobile-nav">
      <ul>
        {NAV.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isOpen = openItem === item.label;
          return (
            <li key={item.label}>
              <div className="mobile-nav__row">
                <Link to={item.href} onClick={onNavigate} className="mobile-nav__link">
                  {item.label}
                </Link>
                {hasChildren && (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                    onClick={() => setOpenItem(isOpen ? null : item.label)}
                    className="mobile-nav__caret"
                  >
                    <CaretDown weight="bold" aria-hidden="true" />
                  </button>
                )}
              </div>
              {hasChildren && (
                <div className={`mobile-nav__sub ${isOpen ? 'is-open' : ''}`}>
                  <ul>
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link to={child.href} onClick={onNavigate}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
        <li>
          <Link to="/donate/" onClick={onNavigate} className="mobile-nav__link mobile-nav__link--accent">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
}
