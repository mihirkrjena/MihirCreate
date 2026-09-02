import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import RevealText, { FadeUp, TiltCard } from './Reveal';
import Magnetic from './Magnetic';

function ProjectCard({
  p,
  onOpen,
  index,
  scrollY,
}: {
  p: Project;
  onOpen: (p: Project) => void;
  index: number;
  scrollY: MotionValue<number>;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{ y: scrollY }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={index % 2 === 0 ? 'md:pr-12 md:pt-0' : 'md:pl-12 md:pt-24'}
    >
      <TiltCard
        max={6}
        className="group relative cursor-none overflow-hidden rounded-3xl border border-violet-100 bg-white/60 shadow-lg shadow-violet-100/40 transition-shadow duration-500 hover:shadow-2xl hover:shadow-violet-200/60"
      >
        <button
          onClick={() => onOpen(p)}
          data-cursor="text"
          data-cursor-label="Open"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="block w-full text-left"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
            <motion.img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
            <div
              className="absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${p.accent}66, transparent 70%)`,
              }}
            />

            {/* floating label */}
            <motion.div
              animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs text-violet-600 shadow-md backdrop-blur-md"
            >
              View Case
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-xs text-violet-500/70">
                  {p.index} / {p.category}
                </div>
                <h3 className="mt-1 font-display text-2xl font-medium text-[#3a3550] md:text-3xl">
                  {p.title}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#6b6480]">{p.year}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 p-6">
            <p className="text-sm text-[#6b6480]">{p.summary}</p>
            <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-violet-100 bg-violet-50/60 px-2.5 py-0.5 text-[10px] text-violet-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </button>
      </TiltCard>
    </motion.div>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const sections = [
    { k: 'Overview', v: p.overview },
    { k: 'Process', v: p.process },
    { k: 'Research', v: p.research },
    { k: 'Wireframes', v: p.wireframes },
    { k: 'UI Design', v: p.ui },
    { k: 'Prototype', v: p.prototype },
    { k: 'Results', v: p.results },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[800] flex items-start justify-center overflow-y-auto bg-violet-900/20 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative my-10 w-full max-w-3xl rounded-3xl"
      >
        <div className="relative h-64 overflow-hidden rounded-t-3xl md:h-80">
          <img src={p.cover} alt={p.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent" />
          <button
            onClick={onClose}
            data-cursor="hover"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-violet-600 shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-110"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-6 left-6">
            <div className="font-mono text-xs text-violet-500/80">
              {p.index} · {p.category} · {p.year}
            </div>
            <h3 className="mt-1 font-display text-3xl font-medium text-[#3a3550] md:text-4xl">
              {p.title}
            </h3>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-8 md:p-10">
          <div className="space-y-8">
            {sections.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="grid gap-3 md:grid-cols-4"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-violet-500/70">
                  {s.k}
                </div>
                <p className="text-[#6b6480] md:col-span-3">{s.v}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-violet-200 bg-violet-100/60 px-3 py-1 text-xs text-violet-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="work" ref={ref} className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              03 — Selected Work
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="Projects I'm proud of."
            className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight text-[#3a3550] md:text-6xl"
          />
        </div>
        <FadeUp delay={0.2}>
          <p className="max-w-sm text-sm text-[#6b6480]">
            A selection of recent work across fintech, health, brand, and
            product. Click any project to open the full case study.
          </p>
        </FadeUp>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            p={p}
            index={i}
            onOpen={setActive}
            scrollY={i % 2 === 0 ? yLeft : yRight}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Magnetic
  as="button"
  strength={0.5}
  cursorLabel="Contact"
  onClick={() =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
>
  <span className="flex items-center gap-3 rounded-full border border-violet-300/50 bg-white/60 px-7 py-3.5 text-sm text-violet-600 transition-all hover:border-violet-400 hover:bg-white/90 hover:shadow-lg hover:shadow-violet-200/50">
    Have a project in mind?
    <ArrowUpRight className="h-4 w-4" />
  </span>
</Magnetic>
      </div>

      <AnimatePresence>
        {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
