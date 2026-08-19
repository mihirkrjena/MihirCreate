import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import RevealText, { FadeUp } from './Reveal';

const stats = [
  { value: 24, suffix: '+', label: 'Projects Shipped', color: '#a594e8' },
  { value: 2, suffix: 'yrs', label: 'Experience', color: '#9fd8c6' },
  { value: 17, suffix: '+', label: 'Happy Clients', color: '#f0aec9' },
  { value: 80, suffix: '+', label: 'Designs Crafted', color: '#aed4f0' },
];

function CountUp({
  to,
  suffix,
  active,
  color,
}: {
  to: number;
  suffix: string;
  active: boolean;
  color: string;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return (
    <span className="tabular-nums">
      {n}
      <span style={{ color }}>{suffix}</span>
    </span>
  );
}

const journey = [
  {
    year: '2023',
    title: 'First Pixel',
    desc: 'Began designing landing pages for local startups while studying. Fell in love with the craft.',
  },
  {
    year: '2024',
    title: 'Studio Life',
    desc: 'Joined a product studio — shipped my first end-to-end mobile app and learned what "design system" really means.',
  },
  {
    year: '2025',
    title: 'Going Independent',
    desc: 'Started taking on freelance clients across fintech, health, and gaming. Built my first motion-rich portfolio.',
  },
  {
    year: '2026',
    title: 'Designing Experiences',
    desc: 'Now blending UI/UX with creative frontend — building interfaces that move, breathe, and tell stories.',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-48"
    >
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        {/* Left — intro */}
        <div className="md:col-span-7">
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              01 — About
            </span>
          </FadeUp>

          <RevealText
            as="h2"
            text="I design experiences, not just interfaces."
            className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight text-[#3a3550] md:text-6xl"
          />

          <FadeUp delay={0.2} className="mt-8 max-w-xl space-y-5 text-[#6b6480]">
            <p>
              I'm Mihir Kumar Jena, a UI/UX designer and creative frontend
              enthusiast. I believe great products aren't just usable — they
              feel inevitable. Every transition, every hover, every empty state
              is a chance to make someone feel something.
            </p>
            <p>
              My work lives at the intersection of aesthetics, usability,
              interaction, and storytelling. I sweat the details others skip,
              because the details are the experience.
            </p>
          </FadeUp>

          {/* stats */}
          <div
            ref={ref}
            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="glass relative overflow-hidden rounded-2xl p-6"
              >
                <motion.div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl"
                  style={{ background: s.color + '40' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                />
                <div className="relative font-display text-3xl font-light text-[#3a3550] md:text-4xl">
                  <CountUp
                    to={s.value}
                    suffix={s.suffix}
                    active={inView}
                    color={s.color}
                  />
                </div>
                <div className="relative mt-2 text-xs uppercase tracking-wider text-[#6b6480]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — timeline */}
        <motion.div
          style={{ x: parX }}
          className="md:col-span-5 md:pl-8"
        >
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              The Journey
            </span>
          </FadeUp>

          <div className="relative mt-10 pl-8">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-violet-300/30 to-transparent" />
            {journey.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-10 last:mb-0"
              >
                <motion.span
                  className="absolute -left-[1.55rem] top-1.5 h-3 w-3 rounded-full bg-violet-400 ring-4 ring-violet-200/60"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                />
                <div className="font-mono text-xs text-violet-500/80">
                  {item.year}
                </div>
                <div className="mt-1 font-display text-lg font-medium text-[#3a3550]">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-[#6b6480]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
