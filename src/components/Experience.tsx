import { motion } from 'framer-motion';
import RevealText, { FadeUp } from './Reveal';

const roles = [
  {
    period: '2026 — Present',
    role: 'Freelance UI/UX Designer',
    org: 'Independent',
    desc: 'Working with clients on end-to-end UI/UX design — from concept and wireframes to polished, ready-to-build interfaces.',
    tags: ['UI/UX', 'Figma', 'Freelance'],
  },
  {
    period: '2024 — 2025',
    role: 'UI/UX Design Internship',
    org: '',
    desc: 'Hands-on experience designing real interfaces, working through the full process from research to final UI.',
    tags: ['UI Design', 'Wireframing'],
  },
  {
    period: '2024',
    role: 'Google UX Design Certificate',
    org: 'Google',
    desc: 'Completed a structured program covering UX research, wireframing, prototyping, and usability testing.',
    tags: ['UX Research', 'Prototyping'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-5xl px-6 py-32 md:py-48"
    >
      <div className="text-center">
        <FadeUp className="inline-block">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
            06 — Experience
          </span>
        </FadeUp>
        <RevealText
          as="h2"
          text="Where I've worked."
          className="mt-6 font-display text-4xl font-light tracking-tight text-[#3a3550] md:text-6xl"
        />
      </div>

      <div className="relative mt-20 pl-8 md:pl-0">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-violet-300/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {roles.map((r, i) => {
          const right = i % 2 === 1;
          return (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative mb-12 md:mb-16 md:w-1/2 ${
                right ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'
              }`}
            >
              <motion.span
                className={`absolute top-2 h-3.5 w-3.5 rounded-full bg-violet-400 ring-4 ring-violet-200/60 ${
                  right
                    ? '-left-[1.35rem] md:-left-[1.75rem]'
                    : '-left-[1.35rem] md:-right-[1.75rem] md:left-auto'
                }`}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
              <div className="glass rounded-2xl p-6 transition-transform duration-500 hover:scale-[1.02]">
                <div className="font-mono text-xs text-violet-500/80">
                  {r.period}
                </div>
                <h3 className="mt-2 font-display text-lg font-medium text-[#3a3550]">
                  {r.role}
                </h3>
                {r.org && <div className="text-sm text-violet-500">{r.org}</div>}
                <p className="mt-3 text-sm text-[#6b6480]">{r.desc}</p>
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    right ? '' : 'md:justify-end'
                  }`}
                >
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-violet-100 bg-violet-50/60 px-2.5 py-0.5 text-[10px] text-violet-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}