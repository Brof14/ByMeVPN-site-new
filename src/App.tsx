import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductDemo } from '@/components/ProductDemo';
import { Platforms } from '@/components/Platforms';
import { Features } from '@/components/Features';
import { HowToStart } from '@/components/HowToStart';
import { Pricing } from '@/components/Pricing';
import { Referral } from '@/components/Referral';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-ink"
      >
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProductDemo />
        <Platforms />
        <Features />
        <HowToStart />
        <Pricing />
        <Referral />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

export default App;
