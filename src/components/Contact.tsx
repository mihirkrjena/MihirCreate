import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import RevealText, { FadeUp } from './Reveal';
import Magnetic from './Magnetic';
import FloatingShapes from './FloatingShapes';

const socials = [
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'X', href: '#' },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setError('');
    try {
      const { error: dbError } = await supabase.from('messages').insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (dbError) throw dbError;
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-32 md:py-48"
    >
      {/* aurora */}
      <div className="aurora">
        <motion.div
          className="left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-300/40 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="right-[20%] top-[60%] h-72 w-72 rounded-full bg-rose-300/30 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <FloatingShapes />

      <div className="relative grid gap-16 md:grid-cols-2 md:gap-24">
        {/* Left */}
        <div>
          <FadeUp>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-500/70">
              08 — Contact
            </span>
          </FadeUp>
          <RevealText
            as="h2"
            text="Let's make something memorable."
            className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-[#3a3550] md:text-6xl"
          />
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-md text-[#6b6480]">
              Have a project, a question, or just want to say hello? I read
              every message and reply within a day or two.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((s) => (
                <Magnetic
                  key={s.label}
                  as="a"
                  href={s.href}
                  strength={0.6}
                  cursorLabel="Visit"
                >
                  <span className="flex items-center gap-2 rounded-full border border-violet-200 bg-white/60 px-5 py-2.5 text-sm text-violet-600 transition-all hover:border-violet-400 hover:bg-white/90 hover:shadow-md hover:shadow-violet-200/50">
                    {s.label}
                  </span>
                </Magnetic>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right — form */}
        <FadeUp delay={0.15}>
          <form
            onSubmit={submit}
            className="glass-strong rounded-3xl p-8 md:p-10"
          >
            <div className="space-y-6">
              <Field label="Your Name">
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  required
                  placeholder="Jane Doe"
                  className="input"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  required
                  placeholder="jane@studio.com"
                  className="input"
                />
              </Field>
              <Field label="Message">
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  required
                  rows={4}
                  placeholder="Tell me about your project…"
                  className="input resize-none"
                />
              </Field>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-[#9b94b0]">
                Your message is saved securely.
              </p>
              <Magnetic as="button" strength={0.5} cursorLabel="Send">
                <span className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-300/50">
                  <span className="relative z-10">
                    {status === 'sending'
                      ? 'Sending…'
                      : status === 'sent'
                        ? 'Sent'
                        : status === 'error'
                          ? 'Try again'
                          : 'Send Message'}
                  </span>
                  <AnimatePresence mode="wait" initial={false}>
                    {status === 'sending' && (
                      <motion.span
                        key="l"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </motion.span>
                    )}
                    {status === 'sent' && (
                      <motion.span
                        key="c"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Check className="h-4 w-4" />
                      </motion.span>
                    )}
                    {(status === 'idle' || status === 'error') && (
                      <motion.span
                        key="s"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
                </span>
              </Magnetic>
            </div>

            <AnimatePresence>
              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 rounded-xl border border-violet-200 bg-violet-50/80 px-4 py-3 text-sm text-violet-600"
                >
                  Thanks — your message is on its way. I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 rounded-xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm text-rose-600"
                >
                  {error || 'Something went wrong. Please try again.'}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-[#6b6480]">
        {label}
      </span>
      {children}
    </label>
  );
}
