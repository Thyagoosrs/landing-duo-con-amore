import { useEffect } from 'react';

// Tudo que é preso à rolagem mora aqui, num único requestAnimationFrame:
// zoom das fotos, parallax da galeria, filete de progresso, barra fixa e
// cabeçalho retrátil. Um listener só, passivo, em vez de cinco.
//
// Cada trecho só roda se a classe correspondente estiver no <html>
// (ver animacoes.js). Desligado, o gancho devolve os valores neutros.
export function useRolagem() {
  useEffect(() => {
    const raiz = document.documentElement;
    const tem = (classe) => raiz.classList.contains(classe);

    const lentes = Array.from(document.querySelectorAll('.lente'));
    const paralaxes = Array.from(document.querySelectorAll('[data-parallax]'));
    const filete = document.querySelector('.filete__barra');
    const barra = document.querySelector('.barra-fixa');
    const faixaCab = document.querySelector('.cabecalho__faixa');
    const contato = document.getElementById('contato');
    if (!lentes.length && !filete && !barra && !faixaCab) return;

    let ultimo = window.scrollY;
    let agendado = false;
    let alturaCab = 0;

    // altura real do cabeçalho (no celular ele quebra em duas linhas) exposta
    // como --altura-cabecalho: é o scroll-margin-top das âncoras do menu.
    const medirCabecalho = () => {
      if (!faixaCab) return;
      const h = faixaCab.offsetHeight;
      if (h !== alturaCab) {
        alturaCab = h;
        raiz.style.setProperty('--altura-cabecalho', h + 'px');
      }
    };

    const pintar = () => {
      agendado = false;
      const st = window.scrollY;
      const vh = window.innerHeight || 800;
      const comZoom = tem('an-zoom');
      const comParallax = tem('an-parallax');

      // zoom preso à rolagem: cresce enquanto a foto atravessa a tela.
      // Na galeria, o parallax precisa de folga, então a lente já entra ampliada.
      lentes.forEach((lente) => {
        const base = comParallax && lente.hasAttribute('data-folga') ? 1.08 : 1;
        if (!comZoom) {
          lente.style.setProperty('--z', base.toFixed(4));
          return;
        }
        const r = lente.getBoundingClientRect();
        const rel = (r.top + r.height / 2) / vh;
        const q = Math.min(1, Math.max(0, 1 - rel));
        lente.style.setProperty('--z', (base * (1 + 0.035 * q)).toFixed(4));
      });

      paralaxes.forEach((img) => {
        if (!comParallax) {
          img.style.setProperty('--py', '0px');
          return;
        }
        const r = img.getBoundingClientRect();
        const meio = r.top + r.height / 2 - vh / 2;
        const fator = parseFloat(img.getAttribute('data-parallax')) || 0;
        img.style.setProperty('--py', (-meio * fator).toFixed(1) + 'px');
      });

      if (filete) {
        const total = Math.max(document.documentElement.scrollHeight - vh, 1);
        filete.style.width = Math.min(100, Math.max(0, (st / total) * 100)).toFixed(1) + '%';
      }

      // a barra sobe depois do hero e desce quando o contato entra:
      // dois botões iguais na mesma tela é insistência, não conversão.
      if (barra) {
        const contatoNaTela = contato ? contato.getBoundingClientRect().top < vh * 0.9 : false;
        barra.classList.toggle('visivel', st > vh * 0.62 && !contatoNaTela);
      }

      if (faixaCab) {
        if (!tem('an-cabecalho')) faixaCab.classList.remove('recolhido');
        else if (st > 140 && st > ultimo + 4) faixaCab.classList.add('recolhido');
        else if (st < ultimo - 4 || st <= 140) faixaCab.classList.remove('recolhido');
      }

      ultimo = st;
    };

    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(pintar);
    };

    const aoRedimensionar = () => {
      medirCabecalho();
      aoRolar();
    };

    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRedimensionar, { passive: true });
    medirCabecalho();
    pintar();
    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRedimensionar);
    };
  }, []);
}
