---
name: Duo Con Amore
description: Voz e violão ao vivo para casamentos em São Paulo — landing de uma página cujo único objetivo é abrir conversa no WhatsApp.
colors:
  areia: "#e8dfd0"
  areia-fundo: "#e2d7c5"
  marrom: "#3b2a1c"
  marrom-escuro: "#2c1f14"
  terracota: "#8c5a34"
  terra-escura: "#70401d"
  texto: "#6f5c46"
  dourado: "#c08a55"
  linha: "rgba(59, 42, 28, 0.16)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(32px, 6.4vw, 62px)"
    fontWeight: 500
    lineHeight: 1.16
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(28px, 3.6vw, 44px)"
    fontWeight: 500
    lineHeight: 1.22
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(24px, 3.2vw, 32px)"
    fontWeight: 500
    lineHeight: 1.24
  quote:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(24px, 4.4vw, 44px)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  body-secao:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  action:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
  link:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
  action-pill:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.24em"
rounded:
  xs: "2px"
  sm: "3px"
  md: "6px"
  pill: "999px"
  circle: "50%"
spacing:
  gap-sm: "clamp(16px, 3vw, 32px)"
  gap-md: "clamp(24px, 4vw, 56px)"
  secao-y: "clamp(48px, 7vw, 96px)"
  pad-x: "clamp(20px, 5vw, 72px)"
  pagina: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.marrom}"
    textColor: "{colors.areia}"
    rounded: "{rounded.md}"
    padding: "17px 26px"
  button-primary-hover:
    backgroundColor: "{colors.marrom-escuro}"
    textColor: "{colors.areia}"
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.terracota}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  button-pill-hover:
    backgroundColor: "{colors.terracota}"
    textColor: "{colors.areia}"
  link-underline:
    backgroundColor: "transparent"
    textColor: "{colors.terracota}"
    padding: "0 0 3px"
  back-to-top:
    backgroundColor: "transparent"
    textColor: "{colors.terracota}"
    rounded: "{rounded.circle}"
    height: "44px"
    width: "44px"
---

# Design System: Duo Con Amore

## Overview

**Creative North Star: "A Sala ao Entardecer"**

O sistema inteiro é a luz de fim de tarde entrando numa sala onde alguém está tocando. Nenhuma superfície é branca, nenhum texto é preto: tudo já passou pelo filtro dessa hora. O fundo é bege areia, o texto é marrom, o acento é terracota e o dourado aparece só como um fio de 1px. É por isso que as fotos levam um filtro sépia e que a foto do hero respira num ciclo de 24 segundos — a sala tem ar, e o ar se move devagar.

O clima é elegante, contido e cerimonioso. Elegante na tipografia: todo título é Cormorant Garamond em itálico, e o itálico não é ênfase, é o estado normal do título. Contido na frequência: o terracota é o acento e aparece pouco, porque a raridade é o que lhe dá peso. Cerimonioso na estrutura: a citação vive numa faixa marrom escura com um filete dourado de 44px embaixo, tratando a fala do casal como o momento formal que ela é.

O oposto disso é o site que se explica gritando. Aqui nada precisa de card, de sombra ou de ícone para ser lido — a hierarquia sai do fundo (areia → areia-fundo → faixa marrom), do filete de 1px e do tamanho do tipo. A página tem um único trabalho: fazer o casal abrir o WhatsApp. Tudo o que não serve a isso é ruído.

**Key Characteristics:**
- Nenhum cinza puro, nenhum branco puro, nenhum preto puro — toda cor tem temperatura
- Itálico serifado em 100% dos títulos; Inter só no corpo, nos rótulos e nos botões
- Praticamente sem sombra: duas no arquivo inteiro, ambas funcionais
- Zero card e zero container aninhado — seção se separa por fundo e filete
- Medida de leitura curta e deliberada (34ch a 46ch)
- Movimento longo e orgânico: 0,85s a 24s, nunca uma transição seca
- Mobile-first sem media query, exceto onde o cabeçalho exige (768px)

## Colors

Uma paleta de quatro pigmentos terrosos e um dourado de detalhe. Não há cor fria em lugar nenhum do sistema.

### Primary
- **Terracota** (`#8c5a34`): o acento único. Vive nos kickers, nos links, no contorno das pills, na bolinha e no fio da timeline, e no anel de foco. Nunca preenche uma área grande — é linha, texto e contorno.
- **Terracota Escuro** (`#70401d`): a variante para quando o terracota cai sobre a área clara do véu do hero e perde contraste. Uso exclusivo do `.hero__kicker`.

### Secondary
- **Dourado Suave** (`#c08a55`): fio, nunca superfície. São três aparições no site inteiro: o filete sob a citação, o risco de feedback sob os links do menu e o anel de foco dentro do painel escuro (onde o terracota entrega 1,97:1 e falha o piso de 3:1).

### Neutral
- **Bege Areia** (`#e8dfd0`): o chão da página e o texto sobre as superfícies escuras.
- **Bege Areia Fundo** (`#e2d7c5`): a variação de fundo que separa a seção Momentos do resto sem precisar de borda.
- **Marrom Profundo** (`#3b2a1c`): título, botão sólido e a faixa escura da citação.
- **Marrom Escuro** (`#2c1f14`): o hover do botão sólido e a base do vidro do menu.
- **Marrom Texto** (`#6f5c46`): todo texto corrido, mais claro que o título de propósito — a hierarquia acontece antes do tamanho.
- **Linha** (`rgba(59, 42, 28, 0.16)`): o filete de 1px. É o único separador do sistema.

O menu do celular deriva mais oito valores (`--menu-veu`, `--menu-borda`, `--menu-texto`…), todos calculados a partir de `#2c1f14` e `#e8dfd0`. São locais daquele componente e não entram na paleta.

### Named Rules
**A Regra do Acento Raro.** Terracota nunca preenche um bloco. Ele é texto, filete de 1px, contorno ou ponto de 5px. No único lugar onde vira fundo — o hover da pill e do voltar-ao-início — é como resposta ao cursor, não como estado de repouso.

**A Regra da Temperatura.** Nenhum `#fff`, nenhum `#000`, nenhum cinza neutro entra no arquivo. Cor nova nasce como token no `:root` ou não nasce.

## Typography

**Display Font:** Cormorant Garamond (com Georgia, serif)
**Body Font:** Inter (com system-ui, -apple-system, sans-serif)

> O itálico é normativo, mas o schema do frontmatter não tem propriedade para ele — os quatro papéis serifados abaixo são **sempre** `font-style: italic`, e o CSS é a autoridade. Não leia a ausência no frontmatter como permissão para usar romano.

**Character:** Uma serifa de alto contraste em itálico contra uma grotesca neutra em corpo pequeno. O par funciona porque os dois lados não competem: o Cormorant faz todo o trabalho de voz e o Inter desaparece para ser lido. O itálico é o estado padrão do título, não uma ênfase dentro dele.

### Hierarchy
- **Display** (itálico 500, `clamp(32px, 6.4vw, 62px)`, 1.16): o título do hero, e só ele. Limitado a 22ch.
- **Headline** (itálico 500, `clamp(28px, 3.6vw, 44px)`, 1.22): título de seção. Limitado a 26ch quando tem resumo ao lado.
- **Title** (itálico 500, `clamp(24px, 3.2vw, 32px)`, 1.24): título de item dentro de uma seção — cada momento da timeline.
- **Quote** (itálico 400, `clamp(24px, 4.4vw, 44px)`, 1.4): exclusivo da faixa escura. Peso 400 e não 500: sobre fundo marrom, o texto claro já ganha peso aparente.
- **Body** (400, 15px, 1.8): texto corrido de página, `max-width: 46ch`. É o `.corpo`.
- **Body-seção** (400, 14px, 1.8): texto dentro de uma seção — resumo dos momentos, texto de cada momento, itens do menu do celular. Medida de 34ch a 38ch.
- **Action** (500, 13px, 1): o botão sólido. Todo CTA do site usa este degrau.
- **Link** (400, 12,5px, 1.5): links sublinhados e o menu de desktop.
- **Action-pill** (500, 12px, 1): o botão pill do cabeçalho.
- **Label** (500, 10px, `0.24em`, caixa alta): o kicker terracota que abre cada seção, e o nome da marca. No hero o espaçamento vira `clamp(0.12em, 0.6vw, 0.24em)` porque em 360px a linha quebrava em duas.

### Named Rules
**A Regra das Duas Fontes.** Existem duas famílias e não haverá uma terceira. Precisou de outra voz? Resolve com peso, tamanho, itálico ou espaçamento dentro das duas que já existem.

**A Regra dos Quatro Fora da Rampa.** Existem exatamente quatro tamanhos de Inter fora dos degraus acima, e cada um tem motivo declarado: **13,5px** na nota do repertório (um único parágrafo, herdado); **11px** no pill do cabeçalho abaixo de 768px (variante responsiva do Action-pill, não um degrau novo — é o que faz marca, kebab e botão caberem em 360px); **8px** no texto "Logo" dentro do selo, que é placeholder e sai quando a marca tiver símbolo; e o piso de **8,5px** no `clamp` do kicker do hero. Este último é dívida medida: o kicker cabe em 10px com 0,12em de espaçamento mesmo em 320px (276px de texto em 280px disponíveis), então o piso pode subir para o degrau Label quando alguém aceitar o kicker do celular ficar 1,4px maior. Nenhum tamanho novo entra sem virar degrau aqui ou ganhar uma linha nesta regra.

**A Regra da Medida Curta.** Nenhum bloco de texto passa de 46ch. É o que mantém a leitura de coluna estreita mesmo quando a tela é larga — e é por isso que o site não usa a largura toda em nenhum ponto.

## Layout

Grade fluida sem breakpoint. Toda seção multi-coluna é `repeat(auto-fit, minmax(Xpx, 1fr))` — 300px para os blocos grandes (hero, duo, momentos), 280px no contato, 230px dentro de um momento, 220px na galeria. A coluna quebra sozinha quando não cabe; não há media query decidindo isso.

Espaçamento por `clamp()`, sempre com três valores: mínimo de celular, taxa em `vw`, teto de desktop. O ritmo vertical de seção é `clamp(48px, 7vw, 96px)`, o respiro lateral é `--pad-x: clamp(20px, 5vw, 72px)` e a página trava em `1240px`.

A única media query estrutural é `768px`, e existe por um motivo específico: abaixo dela os links de navegação moram atrás do kebab, acima dela ficam sempre visíveis. Junto com a troca, marca, selo e pill encolhem — no Galaxy S8 de 360px a linha do cabeçalho só fecha assim.

`overflow-x: hidden` está no `<html>` **e** no `body`. Só no body, o Chrome do Android ignora e alarga a página quando uma animação escala uma foto.

### Named Rules
**A Regra do auto-fit.** Coluna nova entra por `minmax()`, não por breakpoint. Se você está escrevendo `@media` para mudar contagem de coluna, o `minmax` está errado.

## Elevation & Depth

O sistema é plano. Em 820 linhas de CSS existem duas `box-shadow`, e as duas são funcionais, não decorativas:

- `0 1px 0 var(--linha)` no cabeçalho grudado — não é sombra, é o filete que separa a faixa do conteúdo que passa por baixo.
- `0 14px 32px -14px var(--menu-sombra), inset 0 1px 0 var(--menu-brilho)` no painel do menu — o único elemento que de fato flutua, porque é `position: absolute` sobre a foto do hero.

A profundidade real vem de outro lugar: da troca de fundo (`areia` → `areia-fundo` → faixa `marrom`) e do filete de 1px. É assim que a página se divide em seções sem uma única borda de card.

O painel do menu é o único material distinto do sistema: vidro escuro com `backdrop-filter: blur(20px) brightness(0.45) saturate(1.1)`. O `brightness` não é enfeite — ele comprime a faixa dinâmica da foto antes da composição, e é o que permite o véu ficar em 68% de opacidade sem o texto perder o piso de contraste. Há fallback em `@supports not` que sobe o véu para 90% onde `backdrop-filter` não existe.

## Shapes

Canto quase reto. O raio é pequeno o bastante para ser sentido e não visto: 2px no selo da marca e nos itens do menu, 3px nas fotos, no kebab e no painel, 6px no botão sólido. Os únicos raios grandes são semânticos, não estilísticos — `999px` na pill (é uma pill) e `50%` nos pontos da timeline e no voltar-ao-início (são círculos).

Foto é sempre retrato: `4/5` no hero, no duo e na galeria; `5/4` nos momentos. Nenhuma foto quadrada, nenhuma paisagem.

Contorno de 1px substitui preenchimento sempre que possível: a pill, o selo, a bolinha da timeline e o voltar-ao-início são todos traço, não bloco.

## Components

### Buttons
- **Shape:** canto suave de 6px no sólido; pill completa (`999px`) na contornada.
- **Primary** (`.btn-solido`): fundo marrom (`#3b2a1c`), texto areia, `padding: 17px 26px`, Inter 500 13px. No hero ele estica até 340px; na barra fixa, até 420px.
- **Hover:** só o fundo escurece para `#2c1f14`, em 0,25s. Não há transform, não há sombra.
- **Pill** (`.btn-pill`): contorno de 1px terracota sobre transparente, Inter 500 12px, `white-space: nowrap`. No hover inverte — fundo terracota, texto areia.
- **Link** (`.link-sub`): terracota com filete de 1px a 3px abaixo da palavra. A variante `--forte` sobe o peso para 500 e engrossa o filete.

### Navigation
- **Desktop (≥768px):** links em Inter 400 12.5px cor `--texto`, hover para marrom. Sem sublinhado, sem estado ativo.
- **Celular (<768px):** kebab de 32px que abre o painel de vidro. O gatilho veste o material do painel quando aberto (`aria-expanded="true"` → fundo `#2c1f14`, texto areia) — é o que costura os dois sem precisar de bico.
- **Item do painel:** `min-height: 48px` (44 é o mínimo legal, 48 é o confortável), Inter 500 14px, separador recuado a 14px das bordas. O feedback é um risco dourado de 20px que cresce por `scaleX` — não por `width`, porque largura animada dispara layout a cada quadro e o quadro já está caro com o `backdrop-filter`.

### Figura
O componente de foto tem três camadas para que as animações não briguem pelo mesmo `transform`: `.figura` é a máscara (`overflow: hidden`, raio 3px), `.lente` recebe o parallax de rolagem, e o `img` recebe o assentamento e a cor. A foto entra com `filter: sepia(0.45) saturate(0.55) brightness(1.03)` e um véu terracota a 34% que dissolve na revelação.

### Timeline (componente de assinatura)
Trilho de 1px com um fio terracota que cresce conforme a rolagem (`scaleY(var(--fio))`), bolinhas de 23px em contorno e numeral em Cormorant itálico. Sem JS ou com movimento reduzido, o fio nasce completo e estático — o componente nunca fica pela metade.

> Nota de produto: esta apresentação está marcada para revisão. A linha que desce não agrada; os três momentos devem ser repensados sem ela. Preserve o conteúdo, não o trilho.

### Barra fixa
Aparece só no celular, colada embaixo, com `rgba(232, 223, 208, 0.94)` e `blur(8px)`. Entra por `translateY(130%)` → `none` em 0,45s. Respeita `env(safe-area-inset-bottom)`.

### Motion

O vocabulário de movimento é longo e desacelerado. `cubic-bezier(0.22, 1, 0.36, 1)` é o easing padrão — aparece em 11 lugares. A saída do menu usa `cubic-bezier(0.4, 0, 1, 1)`, mais reta e rápida: entrada quer ser percebida, saída quer sair da frente.

As durações vão de 0,14s (fade de saída) a 24s (a respiração da foto do hero). As revelações ficam entre 0,85s e 1,6s — devagar o suficiente para parecer assentamento, não pop.

Cada animação tem um interruptor em `src/animacoes.js` e uma classe correspondente no `<html>` (`an-fio`, `an-revelacao`, `an-respiracao`…). O CSS só anima dentro dessas classes, então o estado sem JS é sempre o estado final e legível.

**A Regra da Rede de Segurança.** Nenhuma animação pode deixar conteúdo invisível se o JS falhar. O estado de repouso do CSS é o estado visível; a animação só existe dentro de uma classe que o JS adiciona.

**A Regra do Dedo.** No celular, todo efeito nasce de rolar a página ou de `:active`. Hover é extra de desktop e vive dentro de `@media (hover: hover)` — nunca é o único caminho para um efeito existir.

## Do's and Don'ts

### Do:
- **Do** declarar cor nova como token no `:root` de `estilos.css` antes de usar. Hex solto em componente não entra.
- **Do** usar `repeat(auto-fit, minmax(Xpx, 1fr))` e `clamp()` para responsividade. A media query de 768px do cabeçalho é a exceção documentada, não o padrão.
- **Do** manter todo título em Cormorant Garamond itálico 500 e todo corpo em Inter 400.
- **Do** dar `alt` descritivo e `loading="lazy"` a toda imagem, menos a foto do hero.
- **Do** manter o texto visível em `src/conteudo.js` e os links de WhatsApp em `src/whatsapp.js` via `<BotaoWhatsapp contexto="chave" />`.
- **Do** testar em 360×740, 375×667, 375×812, 390×844, 412×915 e 768×1024 antes de fechar qualquer ajuste visual. O bug de largura só aparece rolando a página inteira e voltando ao topo.
- **Do** usar contorno de 1px em vez de preenchimento quando um elemento precisar de forma.

### Don't:
- **Don't** parecer landing de SaaS: card dentro de card, gradiente roxo-azul, ícone em quadradinho arredondado acima do título, sombra em tudo. Este sistema não tem card nenhum e tem duas sombras.
- **Don't** parecer fornecedor de festa: dourado brilhante, fonte script, coração, superlativo sobre o dia mais feliz. O dourado aqui é fio de 1px em três lugares, e o texto fala com o casal sem exclamação e sem emoji.
- **Don't** parecer portfólio de fotógrafo: foto full-bleed engolindo a tela, menu escondido, texto mínimo. A cerimonialista precisa achar a informação e o botão.
- **Don't** adicionar sombra decorativa. As duas que existem são funcionais; superfície em repouso não levita.
- **Don't** introduzir uma terceira família tipográfica, nem cinza puro, branco puro ou preto puro.
- **Don't** usar easing de bounce ou elástico. O vocabulário é `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Don't** fazer um efeito depender de hover ou de clique no celular.
- **Don't** deixar `overflow-x: hidden` só no `body` — precisa estar no `<html>` também.
- **Don't** transformar o snippet do GA4 em carregamento dinâmico. A verificação do Search Console lê o HTML cru.
- **Don't** redesenhar o que não foi pedido. Mudança pedida é mudança cirúrgica.
