import { marca } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';

export default function Rodape() {
  return (
    <footer className="rodape">
      <span>{marca.nome + ' · ' + marca.dupla + ' · ' + marca.cidade}</span>
      <BotaoWhatsapp contexto="cerimonialista" variante="link" className="rodape__link" />
    </footer>
  );
}
