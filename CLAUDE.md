# Duo Con Amore — landing page

Site de uma página do duo **Thyago & Júlia**: voz e violão ao vivo para casamentos em São Paulo.
Objetivo único da página: fazer o casal (ou a cerimonialista) abrir uma conversa no WhatsApp.

## Stack
React 18 + Vite, JavaScript puro (sem TypeScript), CSS simples com variáveis no `:root`.
Sem backend, sem formulário, sem biblioteca de UI, sem framework de CSS. Manter assim.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

## Onde mexer
| O que | Arquivo |
| --- | --- |
| Qualquer texto ou foto | `src/conteudo.js` |
| Número e mensagens do WhatsApp | `src/whatsapp.js` |
| Cores, tipografia, layout | `src/estilos.css` |
| Ordem das seções | `src/App.jsx` |
| Estrutura de uma seção | `src/componentes/<Nome>.jsx` |
| **Ligar/desligar cada animação** | `src/animacoes.js` — true/false por animação, nada mais |
| Mecânica das animações | `src/ganchos/` e o bloco "Animações" de `estilos.css` |
| Arquivos de imagem | `public/assets/` |

## Regras
1. **Nada de texto solto em componente.** Toda string visível vem de `conteudo.js`.
2. **Nenhum link `wa.me` escrito à mão.** Sempre `<BotaoWhatsapp contexto="chave" />`; a chave existe em `whatsapp.js`.
3. **Não trocar a paleta** sem pedido explícito. Direção fechada (4c): fundo `#e8dfd0`, fundo alternativo `#e2d7c5`, texto `#3b2a1c`, acento `#8c5a34`, corpo `#6f5c46`, faixa escura `#3b2a1c` com filete `#c08a55`.
4. **Cor nova só via token** no `:root` do `estilos.css` — nunca hex solto em componente.
5. **Mobile-first sem media query.** Usar `grid-template-columns: repeat(auto-fit, minmax(Xpx, 1fr))` e `clamp()`, como o resto do arquivo.
6. **Tipografia:** títulos em Cormorant Garamond itálico peso 500; corpo em Inter 400. Não introduzir outra fonte.
7. **Toda imagem tem `alt` descritivo** e `loading="lazy"`, menos a foto do hero.
8. **Animação sempre com fallback:** respeitar `prefers-reduced-motion` e nunca deixar conteúdo invisível se o JS falhar (ver a rede de segurança em `useRevelar`).
9. **No celular, toda animação aparece rolando a página** (entrada na tela via observer, ou presa ao scroll) — nunca dependa de hover ou clique para o efeito existir. Hover/clique pode existir como extra no desktop, sempre dentro de `@media (hover: hover)`.
10. Mudança pedida é mudança cirúrgica: não redesenhar o que não foi pedido.
11. Rodar `npm run build` antes de considerar a tarefa concluída.
12. **Não transformar o snippet do GA4 em carregamento dinâmico.** A tag
    `<script async src="https://www.googletagmanager.com/gtag/js?id=...">` no `index.html`
    tem que continuar escrita por extenso. A propriedade no Google Search Console é
    verificada pelo método "Google Analytics", que lê o HTML cru sem executar JS — montar
    o `src` por `createElement` (como faz o snippet do Clarity, que é da Microsoft e pode
    ficar assim) esconde a tag do verificador e derruba a verificação silenciosamente.

## Tom do texto
Português do Brasil, sofisticado e direto, sem emoji e sem exclamação. Fala com o casal ("vocês").
Botão promete a resposta, não o esforço: "Ver se a data está livre", não "Enviar mensagem".

## Pendências conhecidas
- Thyago não gosta do componente de timeline com a linha que desce (seção Momentos) — repensar a apresentação dos três momentos em outra conversa, sem a linha.
- O selo da marca mostra o texto "Logo" de propósito (placeholder assumido, `marca.selo` em `conteudo.js`) — trocar quando a marca tiver símbolo.
- `duoconamore.com.br` registrado mas sem DNS: criar os registros A do GitHub Pages no Registro.br e um `public/CNAME` com o domínio.
- Todas as fotos em `public/assets/` são placeholders — trocar por fotos reais (inclusive `og.png`, 1200×630).
- `index.html`: `canonical`, `og:url` e `og:image` ainda apontam para `duoconamore.com` (ajustar ao domínio final).
- Seções previstas e ainda não construídas: vídeo com som real (contexto `provaSonora`), depoimentos (`provaSocial`), faixa de preço, bloco de estrutura (equipamento, horário, plano B).
