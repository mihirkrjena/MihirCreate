import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Layers, Sparkles, MessageCircle, RefreshCw, Zap, ArrowUpRight } from 'lucide-react';
import RevealText, { FadeUp } from './Reveal';

const reasons = [
  {
    icon: PenTool,
    title: 'Detail-obsessed craft',
    desc: 'Every spacing, color, and micro-interaction is intentional — not left to default settings.',
    color: '#a594e8',
  },
  {
    icon: Layers,
    title: 'End-to-end thinking',
    desc: 'From the first wireframe to a polished, interactive prototype — I own the full design journey.',
    color: '#9fd8c6',
  },
  {
    icon: Sparkles,
    title: 'Fresh, modern aesthetic',
    desc: 'No generic templates. Every project gets its own visual identity built around what it needs to say.',
    color: '#aed4f0',
  },
  {
    icon: MessageCircle,
    title: 'Clear communication',
    desc: 'You always know where a project stands — I keep feedback loops short and honest.',
    color: '#f0aec9',
  },
  {
    icon: RefreshCw,
    title: 'Iterative process',
    desc: 'Designs evolve through real feedback, not guesswork — refined until they actually feel right.',
    color: '#f4c2b4',
  },
  {
    icon: Zap,
    title: 'Fast, reliable turnaround',
    desc: 'Momentum matters. I move quickly without cutting corners on quality.',
    color: '#a594e8',
  },
];

function Row({
  r,
  index,
  active,
  onEnter,
  onLeave,
}: {
  r: (typeof reasons)[number];
  index: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = r.icon;

  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-none overflow-hidden border-b border-violet-100 py-5 md:py-6"
      data-cursor="hover"
    >
      {/* glow that appears behind the row on hover */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 right-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: `radial-gradient(600px circle at 15% 50%, ${r.color}, transparent 70%)` }}
      />

      <div className="flex items-center gap-5 md:gap-8">
        <span
          className="font-mono text-xs text-violet-300 transition-colors duration-500 md:text-sm"
          style={{ color: active ? r.color : undefined }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <motion.div
          animate={{ rotate: active ? 12 : 0, scale: active ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-white/70 shadow-sm md:h-10 md:w-10"
          style={{ color: r.color }}
        >
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </motion.div>

        <div className="flex-1">
          <h3 className="font-display text-xl font-light tracking-tight text-[#3a3550] transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
            {r.title}
          </h3>
          <div
            className="mt-1.5 h-px w-8 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: r.color }}
          />
        </div>

        <ArrowUpRight
          className={`h-4 w-4 shrink-0 text-violet-300 transition-all duration-500 md:h-5 md:w-5 ${
            active ? 'translate-x-0 -translate-y-0 rotate-0 text-violet-500 opacity-100' : '-translate-y-1 translate-x-1 opacity-0'
          }`}
        />
      </div>

      <AnimatePresence>
        {active && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden pl-[3.75rem] text-sm leading-relaxed text-[#6b6480] md:pl-[5.25rem] md:text-base"
          >
            {r.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24 md:py-36">
      <div className="text-center">
        <FadeUp className="inline-block">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
            07 — Approach
          </span>
        </FadeUp>
        <RevealText
          as="h2"
          text="Why work with me."
          className="mx-auto mt-6 max-w-2xl font-display text-4xl font-light tracking-tight text-[#3a3550] md:text-6xl"
        />
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-[#6b6480]">
            Hover over each principle — it's how I actually work, not a list of buzzwords.
          </p>
        </FadeUp>
      </div>

      <div className="mt-12 border-t border-violet-100">
        {reasons.map((r, i) => (
          <Row
            key={r.title}
            r={r}
            index={i}
            active={active === i}
            onEnter={() => setActive(i)}
            onLeave={() => setActive(null)}
          />
        ))}
      </div>
    </section>
  );
}