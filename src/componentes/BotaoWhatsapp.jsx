import { linkWhatsapp, ROTULOS } from '../whatsapp.js';

// contexto: chave de whatsapp.js (hero, repertorio, bastidor, rodape, semData…)
// variante: 'solido' | 'pill' | 'link' | 'link-forte'
const CLASSES = {
  solido: 'btn-solido',
  pill: 'btn-pill',
  link: 'link-sub',
  'link-forte': 'link-sub link-sub--forte',
};

export default function BotaoWhatsapp({ contexto, variante = 'solido', className = '', children }) {
  const classe = [CLASSES[variante] || CLASSES.solido, className].filter(Boolean).join(' ');
  return (
    <a className={classe} href={linkWhatsapp(contexto)} target="_blank" rel="noopener noreferrer">
      {children || ROTULOS[contexto]}
    </a>
  );
}
