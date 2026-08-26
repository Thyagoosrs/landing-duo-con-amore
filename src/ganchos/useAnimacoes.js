import { useEffect } from 'react';
import { ANIMACOES, CLASSES, SEM_MOVIMENTO } from '../animacoes.js';

// Acende no <html> uma classe para cada animação ligada em animacoes.js.
// É o único lugar que decide se uma animação existe; o CSS só reage.
export function useAnimacoes() {
  useEffect(() => {
    const raiz = document.documentElement;
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ligadas = Object.keys(CLASSES).filter(
      (chave) => ANIMACOES[chave] && (!reduzido || SEM_MOVIMENTO.includes(chave))
    );
    ligadas.forEach((chave) => raiz.classList.add(CLASSES[chave]));
    return () => ligadas.forEach((chave) => raiz.classList.remove(CLASSES[chave]));
  }, []);
}
