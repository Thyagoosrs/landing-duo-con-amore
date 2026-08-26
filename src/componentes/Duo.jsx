import { duo } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';

export default function Duo() {
  return (
    <section className="duo" id="duo">
      <div className="revelar">
        <img className="duo__foto" src={duo.foto} alt={duo.alt} loading="lazy" />
      </div>
      <div className="revelar">
        <div className="kicker">{duo.kicker}</div>
        <h2 className="titulo duo__titulo">{duo.titulo}</h2>
        {duo.paragrafos.map((p) => (
          <p className="corpo" key={p.slice(0, 24)}>
            {p}
          </p>
        ))}
        <BotaoWhatsapp contexto="bastidor" variante="link-forte" className="duo__link" />
      </div>
    </section>
  );
}
