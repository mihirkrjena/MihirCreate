import { useState } from 'react';
import { useSmoothScroll } from '@/lib/smoothScroll';
import Cursor from '@/components/Cursor';
import ParticleField from '@/components/ParticleField';
import ScrollProgress from '@/components/ScrollProgress';
import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CaseStudy from '@/components/CaseStudy';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function App() {
  useSmoothScroll();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />

      <div className="noise-overlay" />

      <Cursor />
      <ParticleField />
      <ScrollProgress />

      {/* mouse spotlight that follows the cursor */}
      <MouseSpotlight />

      <Nav />

      <main
        className={`relative z-10 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Hero />
        <SectionDivider color="#9fd8c6" />
        <About />
        <SectionDivider color="#aed4f0" />
        <Skills />
        <SectionDivider color="#f0aec9" flip />
        <Projects />
        <SectionDivider color="#a594e8" />
        <CaseStudy />
        <SectionDivider color="#9fd8c6" flip />
        <Services />
        <SectionDivider color="#f4c2b4" />
        <Experience />
        <SectionDivider color="#aed4f0" flip />
        <Testimonials />
        <SectionDivider color="#a594e8" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

/** A soft radial spotlight that trails the cursor, fixed behind content. */
function MouseSpotlight() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{
        background:
          'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(139,123,216,0.06), transparent 70%)',
      }}
      ref={(el) => {
        if (!el) return;
        const node = el as unknown as { _bound?: boolean };
        if (!node._bound) {
          node._bound = true;
          window.addEventListener('mousemove', (e) => {
            el.style.setProperty('--mx', `${e.clientX}px`);
            el.style.setProperty('--my', `${e.clientY}px`);
          });
        }
      }}
    />
  );
}
