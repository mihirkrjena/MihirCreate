import { motion } from 'framer-motion';

/**
 * Animated soft-wave SVG divider. Three layered paths drift at
 * different speeds for a gentle, liquid feel.
 */
export default function SectionDivider({
  color = '#9fd8c6',
  flip = false,
  className = '',
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none relative h-24 w-full overflow-hidden ${className}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      aria-hidden
    >
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0,60 C360,100 720,20 1440,60 C2160,100 2520,20 2880,60 L2880,120 L0,120 Z"
          fill={color}
          opacity={0.25}
          animate={{ x: [0, -480, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,72 C480,30 960,100 1440,72 C1920,44 2400,100 2880,72 L2880,120 L0,120 Z"
          fill={color}
          opacity={0.5}
          animate={{ x: [0, 480, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
