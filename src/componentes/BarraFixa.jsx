import BotaoWhatsapp from './BotaoWhatsapp.jsx';

// Barra fixa de WhatsApp (an-barra). Sobe quando o hero sai da tela e desce
// quando a seção de contato entra — a troca de .visivel é do useRolagem.
// Reusa o contexto 'hero': mesma mensagem, mesmo rótulo, nenhuma chave nova.
export default function BarraFixa() {
  return (
    <div className="barra-fixa" aria-hidden="false">
      <BotaoWhatsapp contexto="hero" className="barra-fixa__botao" />
    </div>
  );
}
