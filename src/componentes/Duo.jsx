import { duo } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';
import Figura from './Figura.jsx';

export default function Duo() {
  return (
    <section className="duo" id="duo">
      <Figura className="duo__foto" src={duo.foto} alt={duo.alt} parallax={0.025} folga />
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
