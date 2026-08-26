// conteudo.js — TODO o texto e TODAS as fotos do site moram aqui.
// Para mudar uma frase, um título ou uma imagem, mexa só neste arquivo.
// Nada de texto solto dentro dos componentes.

const BASE = (import.meta.env && import.meta.env.BASE_URL) || './';
const midia = (arquivo) => BASE + 'assets/' + arquivo;

export const marca = {
  nome: 'Duo Con Amore',
  dupla: 'Thyago & Júlia',
  cidade: 'São Paulo, SP',
  instagram: 'duoconamore',
  // placeholder assumido: o quadradinho escrito "Logo" avisa que a marca ainda não tem símbolo.
  selo: 'Logo',
};

export const navegacao = [
  { rotulo: 'Os momentos', ancora: '#momentos' },
  { rotulo: 'O duo', ancora: '#duo' },
  { rotulo: 'Contato', ancora: '#contato' },
];

export const hero = {
  kicker: 'Voz e violão ao vivo · São Paulo e região',
  // linhas: cada item é uma linha do título — a animação sobe uma de cada vez.
  linhas: ['Um casal que canta', 'para casais.'],
  texto:
    'Do primeiro acorde da cerimônia à última música da festa — voz e violão a dois, com a delicadeza de quem também vive um grande amor.',
  foto: midia('hero.jpg'),
  alt: 'Thyago e Júlia abraçados e sorrindo, com luzes quentes de festa ao fundo',
};

export const momentos = {
  kicker: 'Os momentos',
  titulo: 'Três momentos, um só fio de música.',
  resumo:
    'O dia inteiro coberto ao vivo — do primeiro acorde no altar à última música da pista.',
  lista: [
    {
      numeral: 'I',
      titulo: 'Cerimônia',
      texto:
        'A entrada, as alianças, a saída. Repertório sacro e clássico, ensaiado com o ritmo do seu roteiro.',
      foto: midia('momento-cerimonia.jpg'),
      alt: 'Júlia ao microfone e Thyago ao violão diante do altar da igreja',
      // foco (opcional): qual parte da foto aparece na moldura 5:4 da timeline.
      // 'center 100%' ancora embaixo (mostra mais corpo); 'center 0%' ancora em cima.
      foco: 'center 88%',
    },
    {
      numeral: 'II',
      titulo: 'Coquetel',
      texto:
        'O brinde, o abraço, o reencontro. MPB e clássicos nacionais na medida certa da conversa.',
      foto: midia('momento-coquetel.jpg'),
      alt: 'Convidados brindando com taças de espumante no coquetel',
    },
    {
      numeral: 'III',
      titulo: 'Festa',
      texto:
        'A primeira dança, só de vocês — e o pop que levanta o salão até a última música.',
      foto: midia('momento-festa.jpg'),
      alt: 'Convidados dançando na pista sob globos espelhados',
    },
  ],
  nota: 'O repertório a gente monta com vocês — música fora da lista é normal, é o que mais acontece.',
};

export const duo = {
  kicker: 'O duo',
  titulo: 'Thyago & Júlia',
  paragrafos: [
    'Somos um casal que canta casamentos. Voz e violão, sem playback e sem excesso — o que acontece no altar é sempre ao vivo.',
    'Antes do grande dia, conversamos sobre a história de vocês e montamos o repertório junto: as músicas que já são suas e as que vão passar a ser.',
    'Levamos o nosso som. Chegamos antes, alinhamos o roteiro com a cerimonialista e ensaiamos a entrada no local.',
  ],
  foto: midia('duo.jpg'),
  alt: 'Thyago e Júlia lado a lado, elegantes, no salão de um casamento',
};

export const citacao = 'Não cantamos músicas. Cantamos o amor.';

export const galeria = {
  kicker: 'Galeria',
  fotos: [
    { foto: midia('galeria-1.jpg'), alt: 'Júlia cantando no coro da igreja, com vitrais coloridos ao fundo' },
    { foto: midia('galeria-2.jpg'), alt: 'Thyago e Júlia juntos no salão da igreja antes da cerimônia' },
  ],
};

export const rodape = {
  // rótulo acessível do ícone de voltar ao início (não aparece na tela, o leitor de tela lê)
  voltarTopo: 'Voltar ao início da página',
};

export const contato = {
  titulo: 'Conte pra gente sobre o dia de vocês.',
  texto:
    'Data, local e os momentos que vocês querem com música ao vivo. Respondemos no mesmo dia.',
};
