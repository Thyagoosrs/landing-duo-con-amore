import { useEffect } from 'react';

// Adiciona a classe .visivel em tudo que tem .revelar quando entra na tela,
// e traduz data-cascata="n" no atraso --d que o CSS usa para escalonar a entrada.
// Respeita prefers-reduced-motion e tem uma rede de segurança de 2,5s.
export function useRevelar() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.revelar'));
    if (!els.length) return;

    els.forEach((el) => {
      const i = el.getAttribute('data-cascata');
      if (i !== null) el.style.setProperty('--d', parseInt(i, 10) * 0.07 + 's');
    });

    const mostrarTudo = () => els.forEach((el) => el.classList.add('visivel'));
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzido || !('IntersectionObserver' in window)) {
      mostrarTudo();
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visivel');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    const rede = setTimeout(mostrarTudo, 2500);
    return () => {
      io.disconnect();
      clearTimeout(rede);
    };
  }, []);
}
