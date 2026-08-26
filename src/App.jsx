import Cabecalho from './componentes/Cabecalho.jsx';
import Hero from './componentes/Hero.jsx';
import Momentos from './componentes/Momentos.jsx';
import Duo from './componentes/Duo.jsx';
import Citacao from './componentes/Citacao.jsx';
import Galeria from './componentes/Galeria.jsx';
import Contato from './componentes/Contato.jsx';
import Rodape from './componentes/Rodape.jsx';
import { useRevelar } from './ganchos/useRevelar.js';

export default function App() {
  useRevelar();
  return (
    <>
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
    </>
  );
}
