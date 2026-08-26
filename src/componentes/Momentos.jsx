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
            {momentos.lista.map((m, i) => (
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
                  {/* máscara alterna o lado e cada foto desliza numa velocidade */}
                  <Figura
                    className="momento__figura"
                    src={m.foto}
                    width={m.largura}
                    height={m.altura}
                    alt={m.alt}
                    foco={m.foco}
                    revelacao={i % 2 ? 'direita' : 'esquerda'}
                    parallax={[0.025, 0.035, 0.03][i % 3]}
                    folga
                  />
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
