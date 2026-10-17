import { useEffect, useRef } from 'react';

export function PortfolioMotion() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-enter]'));
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      nodes.forEach(node => observer.observe(node));
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', updateProgress);
      };
    }
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return <div ref={progress} className="scroll-progress" aria-hidden="true" />;
}
