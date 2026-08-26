import { galeria } from '../conteudo.js';

export default function Galeria() {
  return (
    <section className="galeria">
      <div className="kicker">{galeria.kicker}</div>
      <div className="galeria__grade">
        {galeria.fotos.map((g) => (
          <div className="revelar" key={g.foto}>
            <img src={g.foto} alt={g.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
