import { contato, marca } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';
import { medir } from '../medicao.js';

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato__risco" aria-hidden="true"></div>
      <div className="contato__grade revelar">
        <div>
          <h2 className="titulo contato__titulo">{contato.titulo}</h2>
          <p className="corpo">{contato.texto}</p>
        </div>
        <div className="contato__acoes">
          <BotaoWhatsapp contexto="rodape" />
          <a
            className="instagram"
            href={'https://instagram.com/' + marca.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => medir('instagram')}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.2" cy="6.8" r="1.05" fill="currentColor" stroke="none"></circle>
            </svg>
            <span>{'@' + marca.instagram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
