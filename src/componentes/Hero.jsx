import { hero } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';

// O título é quebrado em hero.linhas: com an-titulo ligado, cada linha sobe
// de dentro da própria máscara (90ms entre uma e outra). Sem a classe — ou
// sem JS — as linhas são spans comuns e o texto está sempre visível.
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__quadro">
        <img
          className="hero__foto"
          src={hero.foto}
          width={hero.largura}
          height={hero.altura}
          alt={hero.alt}
          fetchpriority="high"
        />
        <div className="hero__veu" aria-hidden="true"></div>
        <div className="hero__sobreposto">
          <div className="kicker hero__kicker revelar" data-cascata="1">
            {hero.kicker}
          </div>
          <h1 className="hero__titulo revelar" data-cascata="2">
            {hero.linhas.map((linha, i) => (
              <span className="hero__linha" key={linha} style={{ '--ld': i * 0.09 + 's' }}>
                <span className="hero__linha-interna">{linha}</span>
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="hero__abaixo">
        <p className="corpo revelar" data-cascata="3">
          {hero.texto}
        </p>
        <div className="hero__acoes revelar" data-cascata="4">
          <BotaoWhatsapp contexto="hero" />
          <BotaoWhatsapp contexto="semData" variante="link" />
        </div>
      </div>
    </section>
  );
}
