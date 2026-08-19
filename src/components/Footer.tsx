import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '@/lib/smoothScroll';
import Magnetic from './Magnetic';

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative border-t border-violet-100 px-6 py-16">
      {/* soft glow at top of footer */}
      <motion.div
        className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 text-center">
          <Magnetic as="button" strength={0.6} cursorLabel="Top">
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex flex-col items-center gap-3"
            >
              <motion.span
                whileHover={{ y: -4 }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-200 bg-white/60 text-violet-500 shadow-md transition-colors group-hover:border-violet-400 group-hover:text-violet-600"
              >
                <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              </motion.span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-violet-400">
                Back to top
              </span>
            </button>
          </Magnetic>

          <div className="font-display text-[clamp(2.5rem,12vw,11rem)] font-extralight leading-none tracking-mega">
            <span className="gradient-text">Mihir</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#6b6480]">
            <button onClick={() => scrollToSection('about')} className="transition-colors hover:text-violet-600">About</button>
            <button onClick={() => scrollToSection('work')} className="transition-colors hover:text-violet-600">Work</button>
            <button onClick={() => scrollToSection('process')} className="transition-colors hover:text-violet-600">Process</button>
            <button onClick={() => scrollToSection('services')} className="transition-colors hover:text-violet-600">Services</button>
            <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-violet-600">Contact</button>
          </div>

          <div className="flex flex-col items-center gap-2 pt-6 text-xs text-[#9b94b0]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {year} Mihir Kumar Jena — Designing experiences, not just
              interfaces.
            </motion.p>
            <p className="font-mono">Built with intent, motion, and care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
