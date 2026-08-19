import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Circle, Hexagon, Triangle } from 'lucide-react';

const shapes = [
  { Icon: Sparkles, x: '8%', y: '22%', s: 18, c: '#9fd8c6', d: 0, dur: 9 },
  { Icon: Heart, x: '82%', y: '16%', s: 16, c: '#f0aec9', d: 0.4, dur: 11 },
  { Icon: Star, x: '72%', y: '70%', s: 14, c: '#aed4f0', d: 0.8, dur: 8 },
  { Icon: Circle, x: '18%', y: '76%', s: 22, c: '#a594e8', d: 1.2, dur: 12 },
  { Icon: Hexagon, x: '48%', y: '12%', s: 16, c: '#f4c2b4', d: 0.6, dur: 10 },
  { Icon: Triangle, x: '92%', y: '46%', s: 15, c: '#9fd8c6', d: 1.0, dur: 13 },
  { Icon: Sparkles, x: '34%', y: '54%', s: 12, c: '#aed4f0', d: 0.3, dur: 9.5 },
];

/**
 * Decorative floating shapes scattered behind a section. Gentle
 * float + rotation, no interaction. Pure ambiance.
 */
export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((sh, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: sh.x, top: sh.y }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.55, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: sh.d, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 18, 0] }}
            transition={{
              duration: sh.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: sh.d,
            }}
          >
            <sh.Icon
              style={{ width: sh.s, height: sh.s, color: sh.c }}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
