import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[200] h-[3px] w-full bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: 'left',
          boxShadow: '0 0 12px rgba(168,85,247,0.7)',
        }}
      />
    </div>
  );
}
