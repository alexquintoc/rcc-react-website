import type { JSX } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { MissionImpactPage } from './pages/MissionImpactPage';
import { CaliforniaPage } from './pages/CaliforniaPage';
import { NotBuiltPage } from './pages/NotBuiltPage';
import { useRouter } from './lib/useRouter';

const ROUTES: Record<string, () => JSX.Element> = {
  '/': HomePage,
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
