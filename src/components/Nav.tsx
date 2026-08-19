import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/lib/smoothScroll';
import Magnetic from './Magnetic';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-[150] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
            scrolled
              ? 'glass-strong rounded-full py-2.5 shadow-lg shadow-violet-200/40'
              : ''
          }`}
          style={scrolled ? { maxWidth: 920 } : undefined}
        >
          <button
            onClick={() => go('hero')}
            data-cursor="hover"
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-sky-300 text-sm font-bold text-white shadow-md shadow-violet-300/50">
              M
              <motion.span
                className="absolute inset-0 rounded-full bg-violet-300 blur-md opacity-50 -z-10"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            <span className="font-display text-sm font-medium tracking-tight text-[#3a3550] hidden sm:block">
              Mihir Kumar Jena
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-cursor="hover"
                className="group relative px-4 py-2 text-sm text-[#6b6480] transition-colors hover:text-[#3a3550]"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <Magnetic
            as="button"
            strength={0.5}
            cursorLabel="Talk"
            onClick={() => go('contact')}
          >
            <span className="flex items-center gap-2 rounded-full border border-violet-300/40 bg-violet-100/60 px-5 py-2 text-sm font-medium text-violet-600 transition-colors hover:bg-violet-100">
              Let's Talk
            </span>
          </Magnetic>

          <button
            onClick={() => setOpen((v) => !v)}
            data-cursor="hover"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 text-[#3a3550] md:hidden"
            aria-label="Menu"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-[#3a3550] transition-all ${
                  open ? 'top-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-[#3a3550] transition-all ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-[#3a3550] transition-all ${
                  open ? 'top-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] flex flex-col items-center justify-center gap-6 bg-[#f4f1fb]/95 backdrop-blur-xl md:hidden"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                onClick={() => go(l.id)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                className="font-display text-3xl font-light text-[#3a3550]"
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
