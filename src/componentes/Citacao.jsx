import { citacao } from '../conteudo.js';

export default function Citacao() {
  return (
    <section className="citacao">
      <div className="citacao__interno revelar">
        <blockquote className="citacao__texto">{'\u201C' + citacao + '\u201D'}</blockquote>
        <div className="citacao__risco" aria-hidden="true"></div>
      </div>
    </section>
  );
}
