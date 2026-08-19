import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { scrollToSection } from '@/lib/smoothScroll';
import Magnetic from './Magnetic';
import FloatingShapes from './FloatingShapes';
import RotatingWord from './RotatingWord';

/** Morphing gradient blob with mouse parallax. */
function MorphBlob({
  className,
  depth,
  mx,
  my,
  delay = 0,
}: {
  className: string;
  depth: number;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
  delay?: number;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div
        className="h-full w-full animate-morph"
        animate={{
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      mx.set(cx * 100);
      my.set(cy * 100);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const titleX = useTransform(sx, (v) => v * -0.4);
  const titleParY = useTransform(sy, (v) => v * -0.4);
  const combinedY = useTransform([titleY, titleParY], (vals: number[]) =>
    vals.reduce((a, b) => a + b, 0),
  );

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* morphing aurora blobs */}
      <motion.div style={{ scale: blobScale }} className="aurora">
        <MorphBlob
          mx={sx}
          my={sy}
          depth={1.4}
          delay={0}
          className="left-[10%] top-[14%] h-[30rem] w-[30rem] bg-gradient-to-br from-violet-300/60 to-transparent blur-2xl"
        />
        <MorphBlob
          mx={sx}
          my={sy}
          depth={-1.1}
          delay={2}
          className="right-[6%] top-[18%] h-[26rem] w-[26rem] bg-gradient-to-br from-sky-300/55 to-transparent blur-2xl"
        />
        <MorphBlob
          mx={sx}
          my={sy}
          depth={0.8}
          delay={4}
          className="bottom-[4%] left-[38%] h-[24rem] w-[24rem] bg-gradient-to-br from-rose-300/50 to-transparent blur-2xl"
        />
        <MorphBlob
          mx={sx}
          my={sy}
          depth={1.2}
          delay={1}
          className="bottom-[10%] right-[20%] h-[20rem] w-[20rem] bg-gradient-to-br from-mint/55 to-transparent blur-2xl"
        />
      </motion.div>

      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* floating decorative shapes */}
      <FloatingShapes />

      <motion.div
        style={{ opacity: titleOpacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-violet-200 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-violet-500 backdrop-blur-sm"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-3.5 w-3.5" />
          </motion.span>
          UI/UX · Creative · Frontend
        </motion.div>

        <motion.div
          style={{ x: titleX, y: combinedY }}
          className="flex flex-col items-center"
        >
          {['Designing', 'Experiences', 'That Inspire.'].map((line, i) => (
            <div key={line} className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 1.7 + i * 0.14,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display font-extralight tracking-mega leading-[0.92] ${
                  i === 1 ? 'gradient-text text-glow' : 'text-[#3a3550]'
                } text-[clamp(2.8rem,11vw,9.5rem)]`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.9 }}
          className="mt-10 max-w-xl text-balance text-base text-[#6b6480] md:text-lg"
        >
          I'm Mihir — I craft modern digital experiences that feel{' '}
          <RotatingWord words={['alive.', 'effortless.', 'human.', 'memorable.']} />{' '}
          Every interface should tell a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic
            as="button"
            strength={0.5}
            cursorLabel="View"
            onClick={() => scrollToSection('work')}
          >
            <span className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-8 py-4 text-sm font-medium text-white shadow-xl shadow-violet-300/50">
              <span className="relative z-10">View Projects</span>
              <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
            </span>
          </Magnetic>

          <Magnetic
            as="button"
            strength={0.5}
            cursorLabel="Talk"
            onClick={() => scrollToSection('contact')}
          >
            <span className="flex items-center gap-3 rounded-full border border-violet-300/50 bg-white/50 px-8 py-4 text-sm font-medium text-violet-600 backdrop-blur-sm transition-all hover:border-violet-400 hover:bg-white/80 hover:shadow-lg hover:shadow-violet-200/50">
              Let's Talk
            </span>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        data-cursor="hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-violet-400"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-violet-300/60">
          <span className="mt-1.5 h-2 w-1 animate-scroll-bounce rounded-full bg-violet-400" />
        </span>
      </motion.button>
    </section>
  );
}
