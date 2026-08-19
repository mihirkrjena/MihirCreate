import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: a small soft dot that follows instantly and a
 * larger glow ring that lags behind with spring physics. Grows +
 * shows a contextual label when hovering elements marked [data-cursor].
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<'default' | 'hover' | 'text'>(
    'default',
  );
  const [label, setLabel] = useState('');

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const target = (e.target as HTMLElement)?.closest(
        '[data-cursor]',
      ) as HTMLElement | null;
      if (target) {
        const v = target.dataset.cursor as 'hover' | 'text' | undefined;
        setVariant(v === 'text' ? 'text' : 'hover');
        setLabel(target.dataset.cursorLabel ?? '');
      } else {
        setVariant('default');
        setLabel('');
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const ringSize = variant === 'hover' ? 64 : variant === 'text' ? 110 : 34;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-violet-400/80"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border border-violet-400/50 flex items-center justify-center"
        style={{
          width: ringSize,
          height: ringSize,
          transition:
            'width 0.3s cubic-bezier(0.22,1,0.36,1), height 0.3s cubic-bezier(0.22,1,0.36,1), background-color 0.3s, border-color 0.3s',
          backgroundColor:
            variant === 'text'
              ? 'rgba(139,123,216,0.1)'
              : 'rgba(139,123,216,0)',
          backdropFilter: variant === 'text' ? 'blur(2px)' : 'none',
        }}
      >
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-widest text-violet-600">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
