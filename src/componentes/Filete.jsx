// Filete de progresso (an-filete): linha de 2px no topo mostrando o quanto
// da página já foi rolado. A largura é pintada pelo useRolagem.
export default function Filete() {
  return (
    <div className="filete" aria-hidden="true">
      <i className="filete__barra"></i>
    </div>
  );
}
