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
    // A rede de segurança só existe para o caso de o observer estar quebrado.
    // Dois cuidados para ela não matar as animações de rolagem no celular:
    // 1. No primeiro callback do observer (prova de vida), ela é desarmada —
    //    senão, em 2,5s ela marcaria a página INTEIRA como visível e quem lê
    //    o hero com calma rolaria para baixo sem ver animação nenhuma.
    // 2. Com a página oculta (aba em segundo plano) o observer não roda mas o
    //    timer sim — então a rede só arma enquanto a página está visível.
    let rede;
    let ioVivo = false;
    const io = new IntersectionObserver(
      (entradas) => {
        ioVivo = true;
        clearTimeout(rede);
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
    const armarRede = () => {
      clearTimeout(rede);
      if (!ioVivo && !document.hidden) rede = setTimeout(mostrarTudo, 2500);
    };
    document.addEventListener('visibilitychange', armarRede);
    armarRede();
    return () => {
      io.disconnect();
      clearTimeout(rede);
      document.removeEventListener('visibilitychange', armarRede);
    };
  }, []);
}
