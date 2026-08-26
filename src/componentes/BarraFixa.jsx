import BotaoWhatsapp from './BotaoWhatsapp.jsx';

// Barra fixa de WhatsApp (an-barra). Sobe quando o hero sai da tela e desce
// quando a seção de contato entra — a troca de .visivel é do useRolagem.
// Reusa o contexto 'hero' (mesma mensagem, mesmo rótulo, nenhuma chave nova),
// mas mede como whatsapp_barra para o gráfico separar barra de hero.
export default function BarraFixa() {
  return (
    <div className="barra-fixa" aria-hidden="false">
      <BotaoWhatsapp contexto="hero" origem="barra" className="barra-fixa__botao" />
    </div>
  );
}
