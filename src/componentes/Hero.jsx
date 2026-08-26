import { hero } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__quadro">
        <img className="hero__foto" src={hero.foto} alt={hero.alt} />
        <div className="hero__veu" aria-hidden="true"></div>
        <div className="hero__sobreposto">
          <div className="kicker hero__kicker">{hero.kicker}</div>
          <h1 className="hero__titulo">{hero.titulo}</h1>
        </div>
      </div>
      <div className="hero__abaixo">
        <p className="corpo">{hero.texto}</p>
        <div className="hero__acoes">
          <BotaoWhatsapp contexto="hero" />
          <BotaoWhatsapp contexto="semData" variante="link" />
        </div>
      </div>
    </section>
  );
}
