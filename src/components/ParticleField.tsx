import { useEffect, useRef } from 'react';

/**
 * Canvas particle field for a light theme: soft pastel dots drifting
 * with faint connecting lines, reacting subtly to the mouse.
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    const COUNT = Math.min(80, Math.floor((w * h) / 20000));
    const palette = ['#a594e8', '#9fd8c6', '#f0aec9', '#aed4f0', '#f4c2b4'];
    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      c: string;
    };
    const particles: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 2.4 + 0.6,
      c: palette[Math.floor(Math.random() * palette.length)],
    }));

    let mx = w / 2;
    let my = h / 2;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dxm = p.x - mx;
        const dym = p.y - my;
        const dm = Math.hypot(dxm, dym);
        const boost = dm < 200 ? 1 - dm / 200 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + boost * 2, 0, Math.PI * 2);
        ctx.fillStyle = p.c + '99';
        ctx.globalAlpha = 0.5 + boost * 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(139,123,216,${0.1 * (1 - d / 140)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
      aria-hidden
    />
  );
}
