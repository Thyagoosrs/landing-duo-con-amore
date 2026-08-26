import { marca, rodape } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';
import { medir } from '../medicao.js';

// O voltar-ao-início é uma âncora para #topo (o cabeçalho): com an-suave
// ligado a rolagem desliza; sem JS ou com movimento reduzido, salta — e
// funciona do mesmo jeito.
export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__topo">
        <a className="voltar-topo" href="#topo" aria-label={rodape.voltarTopo} onClick={() => medir('voltar_topo')}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5"></path>
            <path d="M5 12l7-7 7 7"></path>
          </svg>
        </a>
      </div>
      <span>{marca.nome + ' · ' + marca.dupla + ' · ' + marca.cidade}</span>
      <BotaoWhatsapp contexto="cerimonialista" variante="link" className="rodape__link" />
    </footer>
  );
}
