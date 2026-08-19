import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
  cursorLabel?: string;
};

/**
 * Magnetic wrapper — the element drifts toward the cursor while it
 * hovers, then springs back on leave. Marked [data-cursor] so the
 * custom cursor enlarges over it.
 */
export default function Magnetic({
  children,
  className = '',
  strength = 0.4,
  as = 'div',
  href,
  onClick,
  cursorLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const dataAttrs: Record<string, string> = {
    'data-cursor': 'hover',
  };
  if (cursorLabel) dataAttrs['data-cursor-label'] = cursorLabel;

  const content = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      {...dataAttrs}
    >
      {children}
    </motion.div>
  );

  if (as === 'button') {
    return (
      <button onClick={onClick} className="block">
        {content}
      </button>
    );
  }
  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className="block">
        {content}
      </a>
    );
  }
  return content;
}
