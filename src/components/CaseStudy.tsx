import { motion } from 'framer-motion';
import {
  Search,
  Heart,
  GitBranch,
  Layout,
  Palette,
  PlayCircle,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';
import RevealText, { FadeUp } from './Reveal';

const steps = [
  {
    icon: Search,
    title: 'Research',
    desc: 'Interviews, audits, and competitive analysis to understand the real problem before touching a pixel.',
  },
  {
    icon: Heart,
    title: 'Empathy',
    desc: 'Personas, journey maps, and diary studies. Designing for real humans, not averages.',
  },
  {
    icon: GitBranch,
    title: 'User Flow',
    desc: 'Mapping every path — including the dead ends — so nothing is discovered in production.',
  },
  {
    icon: Layout,
    title: 'Wireframes',
    desc: 'Low-fidelity structure first. Validation before decoration.',
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'High-fidelity UI with a living system of tokens, components, and motion specs.',
  },
  {
    icon: PlayCircle,
    title: 'Prototype',
    desc: 'Interactive prototypes with real data, tested on real devices, with real users.',
  },
  {
    icon: FlaskConical,
    title: 'Testing',
    desc: 'Usability rounds, A/B tests, and accessibility audits. Iterate until it sings.',
  },
  {
    icon: CheckCircle2,
    title: 'Final Result',
    desc: 'Handoff with documentation, motion guidelines, and a dev-ready design system.',
  },
];

export default function CaseStudy() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-48"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              04 — Process
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="From research to result, step by step."
            className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight text-[#3a3550] md:text-6xl"
          />
        </div>
        <FadeUp delay={0.2}>
          <p className="max-w-sm text-sm text-[#6b6480]">
            A repeatable framework behind every project — but never rigid.
            Process should serve the work, not the other way around.
          </p>
        </FadeUp>
      </div>

      <div className="relative mt-20">
        {/* central line on desktop */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-300/50 to-transparent md:block" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center gap-8 md:w-1/2 ${
                  right ? 'md:ml-auto md:flex-row' : 'md:flex-row-reverse md:text-right'
                }`}
              >
                {/* node with pulse */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-200 bg-white/80 text-violet-500 shadow-lg shadow-violet-100/50">
                  <motion.span
                    className="absolute inset-0 rounded-2xl border border-violet-300"
                    animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: i * 0.2,
                    }}
                  />
                  <s.icon className="h-6 w-6" />
                </div>

                <div
                  className={`glass flex-1 rounded-2xl p-6 transition-transform duration-500 hover:scale-[1.02] ${
                    right ? 'md:ml-8' : 'md:mr-8'
                  }`}
                >
                  <div className="font-mono text-xs text-violet-500/70">
                    Step {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-medium text-[#3a3550]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b6480]">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
