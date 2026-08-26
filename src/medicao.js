// Medição — todo evento do site passa por aqui.
//
// Um evento por intenção, com nome estável (é o nome que aparece no Clarity
// e no Google Analytics; mudar o nome quebra a série histórica dos gráficos):
//   whatsapp_<origem>  clique em qualquer botão de WhatsApp, por posição
//   instagram          saída para o perfil do Instagram
//   menu_<secao>       clique nos links do menu (momentos, duo, contato)
//   voltar_topo        clique no ícone de voltar ao início
//
// Sem Clarity ou GA4 carregado (bloqueador de anúncios, ID ausente, JS
// falhou), não faz nada — e nunca pode quebrar o clique em si.
export function medir(nome) {
  try {
    if (typeof window.clarity === 'function') window.clarity('event', nome);
  } catch (e) {
    /* medição nunca derruba navegação */
  }
  try {
    if (typeof window.gtag === 'function') window.gtag('event', nome);
  } catch (e) {
    /* medição nunca derruba navegação */
  }
}
