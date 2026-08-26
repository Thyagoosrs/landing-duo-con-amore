import { useEffect, useRef, useState } from 'react';
import { marca, navegacao, cabecalho as textoCabecalho } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';
import { medir } from '../medicao.js';

// A .cabecalho__faixa existe por causa do cabeçalho retrátil (an-cabecalho):
// é ela que gruda no topo e recolhe ao descer — ver useRolagem.
//
// No celular o cabeçalho é uma linha só: logo, o menu (⋮) e o botão de
// WhatsApp. Os três links de navegação ficam atrás do kebab, num cartão que
// FLUTUA sobre a foto do hero (position:absolute) — não empurra a página.
// Sem isso, três linhas de cabeçalho empurravam a foto para fora da primeira
// tela (o achado nº2 da auditoria original). A partir de 768px (ver
// estilos.css) sobra espaço: o kebab some e os mesmos links aparecem sempre
// visíveis, lado a lado — por isso a marcação existe duas vezes.
//
// Fecha por: toque fora, Esc (devolvendo o foco ao kebab), clique num link e
// rolagem além de 24px. O limiar existe para um arraste acidental de 2px não
// matar o menu.
const LIMIAR_ROLAGEM = 24;

function aoClicarLink(item, fechar) {
  medir('menu_' + item.ancora.slice(1));
  if (fechar) fechar();
}

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const kebabRef = useRef(null);
  const painelRef = useRef(null);

  useEffect(() => {
    if (!menuAberto) return;

    // a classe no <html> é o que impede o cabeçalho de recolher com o menu
    // aberto e pausa a respiração da foto atrás do vidro (ver estilos.css)
    const raiz = document.documentElement;
    raiz.classList.add('menu-aberto');

    const aoTocarFora = (e) => {
      const foraDoKebab = kebabRef.current && !kebabRef.current.contains(e.target);
      const foraDoPainel = painelRef.current && !painelRef.current.contains(e.target);
      if (foraDoKebab && foraDoPainel) setMenuAberto(false);
    };
    const aoTeclar = (e) => {
      if (e.key === 'Escape') {
        setMenuAberto(false);
        if (kebabRef.current) kebabRef.current.focus();
      }
    };
    const yAbertura = window.scrollY;
    const aoRolar = () => {
      if (Math.abs(window.scrollY - yAbertura) > LIMIAR_ROLAGEM) setMenuAberto(false);
    };

    document.addEventListener('pointerdown', aoTocarFora);
    document.addEventListener('keydown', aoTeclar);
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => {
      raiz.classList.remove('menu-aberto');
      document.removeEventListener('pointerdown', aoTocarFora);
      document.removeEventListener('keydown', aoTeclar);
      window.removeEventListener('scroll', aoRolar);
    };
  }, [menuAberto]);

  return (
    <header className="cabecalho__faixa">
      <div className="cabecalho">
        <div className="marca revelar" data-cascata="0">
          <div className="marca__selo">{marca.selo}</div>
          <div className="marca__linhas">
            <span className="marca__nome">{marca.nome}</span>
            <span className="marca__dupla">{marca.dupla}</span>
          </div>
        </div>

        {/* desktop (≥768px): sempre visível, sem kebab — ver estilos.css */}
        <nav className="cabecalho__nav-largo revelar" data-cascata="1" aria-label="Seções da página">
          {navegacao.map((item) => (
            <a key={item.ancora} href={item.ancora} onClick={() => aoClicarLink(item)}>
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="cabecalho__direita revelar" data-cascata="2">
          <button
            type="button"
            className="kebab"
            ref={kebabRef}
            aria-expanded={menuAberto}
            aria-controls="menu-secoes"
            aria-label={menuAberto ? textoCabecalho.fecharMenu : textoCabecalho.abrirMenu}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="5" r="1.7" />
              <circle cx="12" cy="12" r="1.7" />
              <circle cx="12" cy="19" r="1.7" />
            </svg>
          </button>
          <BotaoWhatsapp contexto="hero" origem="cabecalho" variante="pill" />
        </div>
      </div>

      {/* celular (<768px): cartão flutuante atrás do kebab — ver estilos.css */}
      <div
        className={'cabecalho__painel' + (menuAberto ? ' aberto' : '')}
        id="menu-secoes"
        ref={painelRef}
      >
        <nav aria-label="Seções da página">
          {navegacao.map((item) => (
            <a key={item.ancora} href={item.ancora} onClick={() => aoClicarLink(item, () => setMenuAberto(false))}>
              {item.rotulo}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
