// Figura — toda foto animada do site passa por aqui.
//
// Três camadas, para as animações não brigarem pelo mesmo transform:
//   .figura  -> máscara: revelação por clip-path (an-revelacao) e véu quente (an-veu)
//   .lente   -> rolagem: zoom preso ao dedo (an-zoom) e parallax (an-parallax)
//   img      -> assentamento de 1,16 para 1 e floração de cor na entrada
//
// revelacao: de onde a máscara abre no desktop — 'baixo' (padrão), 'esquerda' ou
// 'direita'. No celular não há máscara: a foto dissolve (ver estilos.css).
// Sem nenhuma classe de animação no <html>, isto rende só a foto, visível.
export default function Figura({ className = '', foco, parallax, folga, revelacao, ...img }) {
  return (
    <div
      className={('figura revelar ' + className).trim()}
      {...(revelacao && revelacao !== 'baixo' ? { 'data-revela': revelacao } : {})}
    >
      {/* a máscara da revelação fica na .lente, nunca na .figura: o observer
          mede a área visível da .figura, e clip com 100% de inset = área zero
          = o IntersectionObserver nunca dispara e a foto nunca aparece */}
      <span className={'lente' + (folga ? ' lente--folga' : '')} {...(folga ? { 'data-folga': '' } : {})}>
        <img
          loading="lazy"
          style={foco ? { objectPosition: foco } : undefined}
          {...(parallax ? { 'data-parallax': parallax } : {})}
          {...img}
        />
        <i className="figura__veu" aria-hidden="true"></i>
      </span>
    </div>
  );
}
