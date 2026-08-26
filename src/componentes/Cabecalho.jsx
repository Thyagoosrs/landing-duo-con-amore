import { marca, navegacao } from '../conteudo.js';
import BotaoWhatsapp from './BotaoWhatsapp.jsx';
import { medir } from '../medicao.js';

// A .cabecalho__faixa existe por causa do cabeçalho retrátil (an-cabecalho):
// é ela que gruda no topo e recolhe ao descer — ver useRolagem.
export default function Cabecalho() {
  return (
    <header className="cabecalho__faixa">
      <div className="cabecalho">
        <div className="marca revelar" data-cascata="0">
          <div className="marca__selo">{marca.selo}</div>
          <div className="marca__linhas">
            <span className="marca__nome">{marca.nome}</span>
            <span className="marca__dupla">{marca.dupla}</span>
          </div>
        </div>
        <nav className="nav revelar" data-cascata="1">
          {navegacao.map((item) => (
            <a key={item.ancora} href={item.ancora} onClick={() => medir('menu_' + item.ancora.slice(1))}>
              {item.rotulo}
            </a>
          ))}
          <BotaoWhatsapp contexto="hero" origem="cabecalho" variante="pill" />
        </nav>
      </div>
    </header>
  );
}
