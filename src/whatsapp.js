// whatsapp.js — fonte única de verdade dos contatos por WhatsApp.
// Para mudar número ou texto, mexa SÓ aqui. Os componentes pedem por chave
// (ex.: <BotaoWhatsapp contexto="hero" />), nunca por URL escrita à mão.

export const WHATSAPP = '5511915997777'; // 55 + DDD + número

// Regras de escrita (não quebrar):
// 1. Um campo por mensagem, e ele é a ÚLTIMA coisa do texto — o cursor do
//    WhatsApp cai no fim, então a pessoa abre e já digita.
// 2. A mensagem tem de fazer sentido se for enviada sem edição nenhuma.
// 3. Nunca terminar em espaço solto (iOS/Android aparam): terminar em ':' ou
//    em palavra ('dia'), para 'A data é:15/03/2027' continuar legível.
export const MENSAGENS = {
  hero: 'Oi! Vim pelo site de vocês. Queria saber se vocês estão livres para o meu casamento. A data é:',
  provaSonora:
    'Oi! Acabei de ver o vídeo de vocês cantando na entrada da noiva. Queria saber se a agenda está livre no meu casamento. A data é:',
  repertorio:
    'Oi! Vim pela parte de repertório do site. Tem uma música que eu já sei que quero ouvir no meu casamento. Antes de tudo: vocês estão livres no dia',
  bastidor:
    'Oi! Li como vocês trabalham no dia do casamento e queria conversar. Meu casamento é dia',
  provaSocial:
    'Oi! Vi os depoimentos no site de vocês. Queria saber se a agenda está livre no meu dia. A data é:',
  rodape: 'Oi! Vim pelo site de vocês. Meu casamento é dia',
  semData:
    'Oi! Vim pelo site de vocês. Ainda não fechei a data do casamento, mas já queria entender como funciona. Uma dúvida que eu tenho:',
  cerimonialista:
    'Oi! Sou cerimonialista e vim pelo site de vocês. Queria entender como funciona o trabalho de vocês no dia, pra ver se indico pros meus casais. Atendo principalmente na região de',
};

// Rótulos de botão por contexto — o botão promete a resposta, não o esforço.
export const ROTULOS = {
  hero: 'Ver se a data está livre',
  provaSonora: 'Ver se a data está livre',
  repertorio: 'Perguntar sobre a minha música',
  bastidor: 'Falar sobre o meu casamento',
  provaSocial: 'Ver se a data está livre',
  rodape: 'Ver se a data está livre',
  semData: 'Ainda não fechei a data',
  cerimonialista: 'Sou cerimonialista',
};

export const linkWhatsapp = (chave, numero = WHATSAPP) => {
  const texto = MENSAGENS[chave];
  if (!texto) throw new Error('whatsapp.js: contexto desconhecido "' + chave + '"');
  return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
};
