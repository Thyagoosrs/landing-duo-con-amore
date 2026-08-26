import { galeria } from '../conteudo.js';
import Figura from './Figura.jsx';

// data-parallax: fator do deslocamento (an-parallax). 'folga' amplia a lente
// em 8% para o deslize nunca mostrar borda — ver useRolagem.
const FATORES = [0.03, 0.045];

export default function Galeria() {
  return (
    <section className="galeria">
      <div className="kicker revelar">{galeria.kicker}</div>
      <div className="galeria__grade">
        {galeria.fotos.map((g, i) => (
          <Figura
            key={g.foto}
            className="galeria__figura"
            src={g.foto}
            alt={g.alt}
            parallax={FATORES[i % FATORES.length]}
            folga
          />
        ))}
      </div>
    </section>
  );
}
