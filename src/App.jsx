import Cabecalho from './componentes/Cabecalho.jsx';
import Hero from './componentes/Hero.jsx';
import Momentos from './componentes/Momentos.jsx';
import Duo from './componentes/Duo.jsx';
import Citacao from './componentes/Citacao.jsx';
import Galeria from './componentes/Galeria.jsx';
import Contato from './componentes/Contato.jsx';
import Rodape from './componentes/Rodape.jsx';
import Filete from './componentes/Filete.jsx';
import BarraFixa from './componentes/BarraFixa.jsx';
import { useAnimacoes } from './ganchos/useAnimacoes.js';
import { useRevelar } from './ganchos/useRevelar.js';
import { useRolagem } from './ganchos/useRolagem.js';

export default function App() {
  useAnimacoes();
  useRevelar();
  useRolagem();
  return (
    <>
      {/* âncora do voltar-ao-início: precisa ser um elemento comum no y=0 —
          o cabeçalho não serve porque é sticky (o navegador o considera
          "já visível" e a âncora não rolaria nada) */}
      <div id="topo" aria-hidden="true"></div>
      <Filete />
      <Cabecalho />
      <main>
        <Hero />
        <Momentos />
        <Duo />
        <Citacao />
        <Galeria />
        <Contato />
      </main>
      <Rodape />
      <BarraFixa />
    </>
  );
}
