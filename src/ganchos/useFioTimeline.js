import { useEffect, useRef } from 'react';

// Desenha o fio vertical da timeline conforme a rolagem e move o ponto-guia.
// Devolve três refs para o componente Momentos plugar no JSX.
export function useFioTimeline() {
  const caixa = useRef(null);
  const fio = useRef(null);
  const guia = useRef(null);

  useEffect(() => {
    const box = caixa.current;
    if (!box) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (fio.current) fio.current.style.setProperty('--fio', '1');
      return;
    }
    let agendado = false;
    const pintar = () => {
      agendado = false;
      const r = box.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const p = Math.min(1, Math.max(0, (vh * 0.82 - r.top) / Math.max(r.height * 0.72, 1)));
      if (fio.current) fio.current.style.setProperty('--fio', p.toFixed(3));
      if (guia.current) {
        const alcance = Math.max(r.height - 28, 0);
        guia.current.style.transform = 'translateY(' + (p * alcance).toFixed(1) + 'px)';
        guia.current.style.opacity = p > 0.02 && p < 0.99 ? '0.55' : '0';
      }
    };
    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(pintar);
    };
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar, { passive: true });
    pintar();
    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
    };
  }, []);

  return { caixa, fio, guia };
}
