import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Cinematic loading screen for light theme. Counts to 100 with a
 * morphing blob, then curtains away to reveal the site.
 */
export default function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setHidden(true), 450);
        setTimeout(onDone, 1500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center"
          style={{ background: '#f4f1fb' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* morphing blob */}
          <motion.div
            className="absolute h-72 w-72 bg-gradient-to-br from-violet-300 via-mint to-sky-300 opacity-30 blur-3xl"
            animate={{
              borderRadius: [
                '42% 58% 63% 37% / 42% 38% 62% 58%',
                '70% 30% 50% 50% / 55% 60% 40% 45%',
                '35% 65% 38% 62% / 60% 35% 65% 40%',
                '42% 58% 63% 37% / 42% 38% 62% 58%',
              ],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative flex flex-col items-center gap-7 px-6">
            <motion.div
              className="text-[11px] font-mono uppercase tracking-[0.4em] text-violet-500/70"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mihir Kumar Jena
            </motion.div>

            <div className="relative h-[2px] w-64 overflow-hidden rounded-full bg-violet-200/60">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-400 to-sky-300"
                style={{ width: `${count}%` }}
              />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display text-7xl font-light tabular-nums text-[#3a3550] md:text-8xl">
                {count}
              </span>
              <span className="font-display text-3xl text-violet-400">%</span>
            </div>

            <motion.p
              className="max-w-xs text-center text-sm text-[#6b6480]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loading the experience…
            </motion.p>
          </div>

          {/* curtain wipe */}
          <motion.div
            className="absolute inset-0"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: hidden ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'top', background: '#f4f1fb' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
