import { linkWhatsapp, ROTULOS } from '../whatsapp.js';

// contexto: chave de whatsapp.js (hero, repertorio, bastidor, rodape, semData…)
// variante: 'solido' | 'pill' | 'link' | 'link-forte'
const CLASSES = {
  solido: 'btn-solido',
  pill: 'btn-pill',
  link: 'link-sub',
  'link-forte': 'link-sub link-sub--forte',
};

// Todo clique de WhatsApp passa por aqui, então a medição mora aqui:
// um evento por contexto (whatsapp_hero, whatsapp_repertorio…) diz não só
// QUANTOS clicaram, mas QUAL argumento da página abriu a conversa.
// Sem Clarity carregado (ID não colado, bloqueador, JS falhou), não faz nada.
function medirClique(contexto) {
  if (typeof window.clarity === 'function') {
    window.clarity('event', 'whatsapp_' + contexto);
  }
}

export default function BotaoWhatsapp({ contexto, variante = 'solido', className = '', children }) {
  const classe = [CLASSES[variante] || CLASSES.solido, className].filter(Boolean).join(' ');
  return (
    <a
      className={classe}
      href={linkWhatsapp(contexto)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => medirClique(contexto)}
    >
      {children || ROTULOS[contexto]}
    </a>
  );
}
