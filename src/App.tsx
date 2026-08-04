import type { JSX } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { Home2Page } from './pages/Home2Page';
import { Home3Page } from './pages/Home3Page';
import { MissionImpactPage } from './pages/MissionImpactPage';
import { CaliforniaPage } from './pages/CaliforniaPage';
import { NotBuiltPage } from './pages/NotBuiltPage';
import { useRouter } from './lib/useRouter';

const ROUTES: Record<string, () => JSX.Element> = {
  '/': Home3Page,
  '/home-alt': HomePage,
  '/home-2': Home2Page,
  '/home-3': Home3Page,
  '/mission-impact': MissionImpactPage,
  '/california-v2': CaliforniaPage,
};

function App() {
  const { path } = useRouter();
  const Page = ROUTES[path] ?? NotBuiltPage;

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
    </>
  );
}

export default App;
