// Figura — toda foto animada do site passa por aqui.
//
// Três camadas, para as animações não brigarem pelo mesmo transform:
//   .figura  -> máscara: revelação por clip-path (an-revelacao) e véu quente (an-veu)
//   .lente   -> rolagem: zoom preso ao dedo (an-zoom) e parallax (an-parallax)
//   img      -> assentamento de 1,09 para 1 na entrada e o toque (an-toque)
//
// Sem nenhuma classe de animação no <html>, isto rende só a foto, visível.
export default function Figura({ className = '', foco, parallax, folga, ...img }) {
  return (
    <div className={('figura revelar ' + className).trim()}>
      <span className={'lente' + (folga ? ' lente--folga' : '')} {...(folga ? { 'data-folga': '' } : {})}>
        <img
          loading="lazy"
          style={foco ? { objectPosition: foco } : undefined}
          {...(parallax ? { 'data-parallax': parallax } : {})}
          {...img}
        />
      </span>
      <i className="figura__veu" aria-hidden="true"></i>
    </div>
  );
}
