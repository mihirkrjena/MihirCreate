import { motion } from 'framer-motion';
import {
  PenTool,
  Layers,
  Frame,
  Smartphone,
  Component,
  Shapes,
  Code2,
  Palette,
  Paintbrush,
} from 'lucide-react';
import RevealText, { FadeUp, TiltCard } from './Reveal';

const groups = [
  {
    icon: PenTool,
    title: 'UI Design',
    desc: 'Interfaces with hierarchy, contrast, and a sense of craft.',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    glow: 'from-violet-300/60',
  },
  {
    icon: Layers,
    title: 'UX Design',
    desc: 'Flows, research, and systems that make products feel inevitable.',
    items: ['User Research', 'User Flow', 'Testing'],
    glow: 'from-sky-300/60',
  },
  {
    icon: Frame,
    title: 'Wireframing',
    desc: 'Low-fidelity thinking before high-fidelity pixels.',
    items: ['Lo-fi', 'Information Architecture'],
    glow: 'from-rose-300/60',
  },
  {
    icon: Smartphone,
    title: 'Prototyping',
    desc: 'Interactive, motion-aware prototypes that feel like the real thing.',
    items: ['Figma Proto', 'Framer', 'Code'],
    glow: 'from-mint/60',
  },
  {
    icon: Component,
    title: 'Design Systems',
    desc: 'Scalable tokens, components, and documentation that teams actually use.',
    items: ['Tokens', 'Components', 'Docs'],
    glow: 'from-violet-300/60',
  },
  {
    icon: Code2,
    title: 'Frontend',
    desc: 'I ship what I design — React, Tailwind, and motion included.',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    glow: 'from-sky-300/60',
  },
];

const tools = [
  { name: 'Figma', icon: Shapes },
  { name: 'Adobe XD', icon: Frame },
  { name: 'Photoshop', icon: Paintbrush },
  { name: 'Illustrator', icon: Palette },
  { name: 'React', icon: Code2 },
  { name: 'Tailwind', icon: Layers },
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              02 — Skills
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="A toolkit for building the alive."
            className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight text-[#3a3550] md:text-6xl"
          />
        </div>
        <FadeUp delay={0.2}>
          <p className="max-w-sm text-sm text-[#6b6480]">
            From research to production. Each discipline feeds the next — design
            is only done when it ships.
          </p>
        </FadeUp>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard
              max={10}
              className="group relative h-full overflow-hidden rounded-3xl border border-violet-100 bg-white/60 p-8 shadow-lg shadow-violet-100/40 transition-all duration-500 hover:shadow-xl hover:shadow-violet-200/60"
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${g.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100`}
              />
              <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200 bg-white/80 text-violet-500 shadow-sm"
                >
                  <g.icon className="h-5 w-5" />
                </motion.div>
                <h3 className="mt-6 font-display text-xl font-medium text-[#3a3550]">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-[#6b6480]">{g.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-violet-100 bg-violet-50/60 px-3 py-1 text-xs text-violet-600"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* tools marquee */}
      <div className="relative mt-20 overflow-hidden py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f4f1fb] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f4f1fb] to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {[...tools, ...tools, ...tools].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full border border-violet-100 bg-white/70 px-5 py-2.5 text-sm text-[#6b6480] shadow-sm"
            >
              <t.icon className="h-4 w-4 text-violet-400" />
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
