import { momentos } from '../conteudo.js';
import { useFioTimeline } from '../ganchos/useFioTimeline.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';
import Figura from './Figura.jsx';

export default function Momentos() {
  const { caixa, fio, guia } = useFioTimeline();

  return (
    <section className="momentos" id="momentos">
      <div className="momentos__interno">
        <div className="momentos__topo revelar">
          <div>
            <div className="kicker">{momentos.kicker}</div>
            <h2 className="momentos__titulo">{momentos.titulo}</h2>
          </div>
          <p className="momentos__resumo">{momentos.resumo}</p>
        </div>

        <div className="timeline" ref={caixa}>
          <div className="timeline__trilho" aria-hidden="true"></div>
          <div className="timeline__fio" ref={fio} aria-hidden="true"></div>
          <div className="timeline__guia" ref={guia} aria-hidden="true"></div>
          <div className="timeline__lista">
            {momentos.lista.map((m) => (
              <article className="momento revelar" key={m.numeral}>
                <div className="momento__marcador">
                  <div className="momento__bolinha" aria-hidden="true"></div>
                  <div className="momento__numeral">{m.numeral}</div>
                </div>
                <div className="momento__conteudo">
                  <div>
                    <h3 className="momento__titulo">{m.titulo}</h3>
                    <p className="momento__texto">{m.texto}</p>
                  </div>
                  <Figura className="momento__figura" src={m.foto} alt={m.alt} foco={m.foco} />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="momentos__nota revelar">
          <p>{momentos.nota}</p>
          <BotaoWhatsapp contexto="repertorio" variante="link-forte" />
        </div>
      </div>
    </section>
  );
}
