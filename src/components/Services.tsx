import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PenTool,
  Search,
  LayoutDashboard,
  Rocket,
  Smartphone,
  AppWindow,
  Fingerprint,
  ArrowUpRight,
} from 'lucide-react';
import RevealText, { FadeUp } from './Reveal';

const services = [
  {
    icon: PenTool,
    title: 'UI Design',
    desc: 'Pixel-precise interfaces with hierarchy, contrast, and motion baked in.',
    color: '#a594e8',
  },
  {
    icon: Search,
    title: 'UX Research',
    desc: 'Interviews, audits, and usability tests that surface the real problem.',
    color: '#9fd8c6',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Design',
    desc: 'Complex data made calm, glanceable, and genuinely pleasant to use.',
    color: '#aed4f0',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    desc: 'High-converting, animation-rich pages that feel like the brand.',
    color: '#f0aec9',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native-feeling mobile experiences designed thumb-first.',
    color: '#a594e8',
  },
  {
    icon: AppWindow,
    title: 'Web Apps',
    desc: 'End-to-end product design for SaaS and tools people use daily.',
    color: '#9fd8c6',
  },
  {
    icon: Fingerprint,
    title: 'Brand Identity',
    desc: 'Logos, systems, and guidelines that make a product unmistakable.',
    color: '#f4c2b4',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-48"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              05 — Services
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="What I can do for you."
            className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight text-[#3a3550] md:text-6xl"
          />
        </div>
        <FadeUp delay={0.2}>
          <p className="max-w-sm text-sm text-[#6b6480]">
            Full-stack design — from the first research interview to the last
            production pixel.
          </p>
        </FadeUp>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-violet-100 bg-white/60 p-8 shadow-lg shadow-violet-100/30 transition-shadow duration-500 hover:shadow-xl hover:shadow-violet-200/50"
          >
            <div
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: s.color + '60' }}
            />
            <div className="relative flex items-start justify-between">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200 bg-white/80 shadow-sm"
                style={{ color: s.color }}
              >
                <s.icon className="h-5 w-5" />
              </motion.div>
              <ArrowUpRight
                className={`h-5 w-5 text-violet-300 transition-all duration-500 ${
                  hovered === i
                    ? 'translate-x-0 -translate-y-0 text-violet-500'
                    : 'translate-x-1 translate-y-1'
                }`}
              />
            </div>
            <h3 className="relative mt-6 font-display text-lg font-medium text-[#3a3550]">
              {s.title}
            </h3>
            <p className="relative mt-2 text-sm text-[#6b6480]">{s.desc}</p>
            <div className="relative mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-violet-400/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
