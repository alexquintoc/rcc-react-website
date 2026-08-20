import type { JSX } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { Home2Page } from './pages/Home2Page';
import { Home3Page } from './pages/Home3Page';
import { MissionImpactPage } from './pages/MissionImpactPage';
import { CaliforniaPage } from './pages/CaliforniaPage';
import { CaliforniaAltPage } from './pages/CaliforniaAltPage';
import { OceansidePage } from './pages/OceansidePage';
import { NotBuiltPage } from './pages/NotBuiltPage';
import { AustinFluvialDiagramPage } from './pages/AustinFluvialDiagramPage';
import { AboutPage, BoardPage, ContactPage, TeamPage } from './pages/InstitutionalPages';
import { NewsArticlePage, NewsPage, PublicationsPage } from './pages/EditorialPages';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { useRouter } from './lib/useRouter';

const ROUTES: Record<string, () => JSX.Element> = {
  '/': Home3Page,
  '/home-alt': HomePage,
  '/home-2': Home2Page,
  '/home-3': Home3Page,
  '/impact': MissionImpactPage,
  '/about': AboutPage,
  '/how-we-work': HowWeWorkPage,
  '/portfolio': PortfolioPage,
  '/team': TeamPage,
  '/board-of-directors': BoardPage,
  '/contact': ContactPage,
  '/news': NewsPage,
  '/news/announcing-the-first-resilience-district-incubator-pilot-communities': NewsArticlePage,
  '/publications': PublicationsPage,
  '/california-v2': CaliforniaPage,
  '/california': CaliforniaAltPage,
  '/ca-oceanside-rebeach': OceansidePage,
  '/austin-fluvial-diagram': AustinFluvialDiagramPage,
};

function App() {
  const { path } = useRouter();
  const Page = ROUTES[path] ?? NotBuiltPage;
  const isAustinDiagram = path === '/austin-fluvial-diagram';

  return (
    <>
      {!isAustinDiagram && <Header />}
      <main id="main" tabIndex={-1} className={isAustinDiagram ? 'austin-diagram-shell' : undefined}>
        <Page />
      </main>
      {!isAustinDiagram && <Footer />}
    </>
  );
}

export default App;

