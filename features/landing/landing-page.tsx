import { BackgroundGradients } from './components/background-gradients';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { Footer } from './components/footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundGradients />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
