// animacoes.js — o interruptor de cada animação do site.
//
// Mexa SÓ aqui: true liga, false desliga. Cada chave acende uma classe no
// <html> (ver CLASSES abaixo) e o CSS do bloco "animações" em estilos.css só
// age quando aquela classe existe.
//
// Duas garantias que não se quebram:
// 1. Desligar qualquer animação NUNCA esconde conteúdo — o estado final
//    (foto visível, texto no lugar) é sempre o padrão do CSS.
// 2. Quem usa 'prefers-reduced-motion: reduce' no sistema não recebe classe
//    nenhuma, menos as de SEM_MOVIMENTO, que não são enfeite.

export const ANIMACOES = {
  // --- nas fotos ---
  revelacao: true, // a foto aparece por máscara, de baixo para cima, e assenta de 1,09 para 1
  zoomRolagem: true, // a foto cresce 3,5% enquanto atravessa a tela, no ritmo do dedo
  veuQuente: true, // véu terracota sobre a foto que evapora em 1,5s quando ela entra
  respiracaoHero: true, // a foto do topo cresce 7% em 24s, ida e volta, para sempre
  toqueFoto: true, // tocar (ou passar o mouse) aproxima 4,5%: entra em 0,6s, volta em 1,6s
  parallaxGaleria: true, // as duas fotos da galeria deslizam em velocidades diferentes

  // --- na página ---
  cascata: true, // selo, kicker, título, texto e botão entram com 70ms entre um e outro
  tituloLinhas: true, // as linhas do título do hero sobem de dentro de uma máscara
  fioTimeline: true, // o fio vertical dos momentos cresce conforme a rolagem
  barraFixa: true, // barra de WhatsApp que sobe depois do hero e desce no contato
  cabecalhoRetratil: true, // o cabeçalho gruda no topo, recolhe ao descer e volta ao subir
  fileteProgresso: true, // filete de 2px no topo mostrando quanto falta da página
  rolagemSuave: true, // âncoras do menu e o voltar-ao-início deslizam até a seção, em vez de saltar
};

// chave -> classe no <html>. Toda regra de animação no estilos.css começa por uma destas.
export const CLASSES = {
  revelacao: 'an-revelacao',
  zoomRolagem: 'an-zoom',
  veuQuente: 'an-veu',
  respiracaoHero: 'an-respiracao',
  toqueFoto: 'an-toque',
  parallaxGaleria: 'an-parallax',
  cascata: 'an-cascata',
  tituloLinhas: 'an-titulo',
  fioTimeline: 'an-fio',
  barraFixa: 'an-barra',
  cabecalhoRetratil: 'an-cabecalho',
  fileteProgresso: 'an-filete',
  rolagemSuave: 'an-suave',
};

// Estas sobrevivem ao 'prefers-reduced-motion': a barra fixa é conversão, não enfeite.
// Ela continua aparecendo, só não desliza (ver o bloco reduced-motion do estilos.css).
export const SEM_MOVIMENTO = ['barraFixa'];

export const ligada = (chave) => ANIMACOES[chave] === true;
