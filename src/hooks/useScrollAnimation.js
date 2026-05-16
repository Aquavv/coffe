import { useEffect, useRef } from 'react';

/**
 * Hook de animación al hacer scroll.
 * @param {object} options
 * @param {'fade-up'|'fade-left'|'fade-right'|'fade-in'|'zoom-in'} options.variant
 * @param {number}  options.delay     - delay en ms antes de que inicie la animación
 * @param {number}  options.threshold - fracción del elemento visible para disparar (0–1)
 */
export function useScrollAnimation({ variant = 'fade-up', delay = 0, threshold = 0.15 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(`anim-${variant}`);
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('anim-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, threshold]);

  return ref;
}
