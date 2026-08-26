import { linkWhatsapp, ROTULOS } from '../whatsapp.js';
import { medir } from '../medicao.js';

// contexto: chave de whatsapp.js (hero, repertorio, bastidor, rodape, semData…)
// variante: 'solido' | 'pill' | 'link' | 'link-forte'
const CLASSES = {
  solido: 'btn-solido',
  pill: 'btn-pill',
  link: 'link-sub',
  'link-forte': 'link-sub link-sub--forte',
};

// Todo clique de WhatsApp passa por aqui, então a medição mora aqui:
// um evento por posição na página (whatsapp_hero, whatsapp_barra…) diz não
// só QUANTOS clicaram, mas QUAL botão abriu a conversa.
//
// origem: nome do evento quando vários botões reusam o mesmo contexto de
// mensagem — cabeçalho, hero e barra fixa mandam a mesma mensagem ('hero'),
// mas cada um mede como um evento próprio. Sem origem, mede pelo contexto.
export default function BotaoWhatsapp({ contexto, origem, variante = 'solido', className = '', children }) {
  const classe = [CLASSES[variante] || CLASSES.solido, className].filter(Boolean).join(' ');
  return (
    <a
      className={classe}
      href={linkWhatsapp(contexto)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => medir('whatsapp_' + (origem || contexto))}
    >
      {children || ROTULOS[contexto]}
    </a>
  );
}
