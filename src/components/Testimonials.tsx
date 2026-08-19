import RevealText, { FadeUp } from './Reveal';

const testimonials = [
  {
    quote:
      'Mihir doesn\'t just design screens — he designs the feeling you get when you use them. Our app finally feels like ours.',
    name: 'Aarav Mehta',
    title: 'Founder, Nebula Finance',
    color: '#a594e8',
  },
  {
    quote:
      'The motion work alone elevated our brand. Stakeholders went from skeptical to standing ovation in one review.',
    name: 'Lena Park',
    title: 'Head of Product, Pulse Health',
    color: '#9fd8c6',
  },
  {
    quote:
      'He handed off a design system so clean our devs actually used it. That never happens.',
    name: 'Diego Ramos',
    title: 'Engineering Lead, Forge Studio',
    color: '#aed4f0',
  },
  {
    quote:
      'Rare to find a designer who thinks in flows, not just frames. Mihir is that designer.',
    name: 'Sofia Lindqvist',
    title: 'CEO, Terra Maps',
    color: '#f0aec9',
  },
  {
    quote:
      'Every detail had intent. Nothing was accidental. Working with him felt like watching a craftsman at a bench.',
    name: 'Jordan Blake',
    title: 'PM, Brightwave',
    color: '#f4c2b4',
  },
  {
    quote:
      'He shipped frontend that matched the design pixel-for-pixel. The handoff gap just disappeared.',
    name: 'Yuki Tanaka',
    title: 'CTO, Studio Lore',
    color: '#a594e8',
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="glass mx-3 w-[340px] shrink-0 rotate-[-1.5deg] rounded-3xl p-7 transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl hover:shadow-violet-200/50">
      <svg
        className="mb-4 h-7 w-7"
        fill={t.color}
        viewBox="0 0 24 24"
        opacity={0.6}
      >
        <path d="M9.5 8c-2.5 0-4.5 2-4.5 4.5S7 17 9.5 17c.3 0 .5 0 .8-.1-1 1.3-2.6 2.1-4.3 2.1v2c3.6 0 6.5-2.9 6.5-6.5V12.5C12.5 10 10.5 8 9.5 8zm9 0c-2.5 0-4.5 2-4.5 4.5S16 17 18.5 17c.3 0 .5 0 .8-.1-1 1.3-2.6 2.1-4.3 2.1v2c3.6 0 6.5-2.9 6.5-6.5V12.5C21.5 10 19.5 8 18.5 8z" />
      </svg>
      <p className="text-sm leading-relaxed text-[#4a4460]">{t.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
          style={{ background: `linear-gradient(135deg, ${t.color}, #aed4f0)` }}
        >
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-[#3a3550]">{t.name}</div>
          <div className="text-xs text-[#6b6480]">{t.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <FadeUp className="inline-block">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
            07 — Testimonials
          </span>
        </FadeUp>
        <RevealText
          as="h2"
          text="Kind words from kind people."
          className="mx-auto mt-6 max-w-2xl font-display text-4xl font-light tracking-tight text-[#3a3550] md:text-6xl"
        />
      </div>

      <div className="relative mt-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f4f1fb] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f4f1fb] to-transparent" />
        <div className="flex w-max animate-marquee">
          {[...row1, ...row1, ...row1].map((t, i) => (
            <Card key={`a${i}`} t={t} />
          ))}
        </div>
        <div className="mt-6 flex w-max animate-marquee-reverse">
          {[...row2, ...row2, ...row2].map((t, i) => (
            <Card key={`b${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
