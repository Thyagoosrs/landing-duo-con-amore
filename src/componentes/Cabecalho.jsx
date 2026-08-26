import { marca, navegacao } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="marca">
        <div className="marca__selo" aria-hidden="true"></div>
        <div className="marca__linhas">
          <span className="marca__nome">{marca.nome}</span>
          <span className="marca__dupla">{marca.dupla}</span>
        </div>
      </div>
      <nav className="nav">
        {navegacao.map((item) => (
          <a key={item.ancora} href={item.ancora}>
            {item.rotulo}
          </a>
        ))}
        <BotaoWhatsapp contexto="hero" variante="pill" />
      </nav>
    </header>
  );
}
