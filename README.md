# Duo Con Amore — landing page

Site de uma página do duo Thyago & Júlia (voz e violão para casamentos).
React + Vite. Sem backend, sem formulário: todo contato vai para o WhatsApp.

- **Direção visual:** 4c — bege areia (#e8dfd0), texto marrom (#3b2a1c), acento terracota (#8c5a34).
- **Tipografia:** Cormorant Garamond (títulos, itálico) + Inter (corpo).
- **Responsivo** sem media queries: grids `auto-fit` e `clamp()`.

---

## 1. Rodar na sua máquina

Precisa do Node 20+ ([nodejs.org](https://nodejs.org)).

```bash
cd landing-duo-con-amore
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:5173
```

Outros comandos:

```bash
npm run build    # gera a pasta dist/ (o site pronto para publicar)
npm run preview  # serve a dist/ para conferir antes de publicar
```

---

## 2. Estrutura

```
landing-duo-con-amore/
├── index.html                 título, descrição, imagem de compartilhamento (SEO/OG)
├── public/assets/             TODAS as fotos do site
├── src/
│   ├── conteudo.js            ← TODO o texto e o caminho de cada foto
│   ├── whatsapp.js            ← número + mensagem de cada botão
│   ├── estilos.css            cores, tipografia e layout (tokens no :root)
│   ├── App.jsx                ordem das seções da página
│   ├── componentes/           Cabecalho, Hero, Momentos, Duo, Citacao, Galeria, Contato, Rodape
│   └── ganchos/               animações (revelar ao rolar, fio da timeline)
└── .github/workflows/deploy.yml   publica sozinho a cada push na main
```

Regra de ouro: **texto e foto ficam em `src/conteudo.js`, contato em `src/whatsapp.js`, aparência em `src/estilos.css`.**
Os componentes só montam a estrutura — quase nunca precisam ser tocados.

---

## 3. Manutenção — receitas

### Trocar um texto
`src/conteudo.js`. Ache a frase, edite, salve. O navegador atualiza sozinho com `npm run dev`.

### Trocar uma foto
1. Coloque o arquivo em `public/assets/` (JPG, ~1600px de largura, até ~400 KB).
2. Em `src/conteudo.js`, ajuste o nome: `midia('hero.jpg')`.
3. Atualize o `alt` (descrição da foto — importante para acessibilidade e Google).

As imagens que vieram no repositório são **placeholders** (`.png` com o nome da seção). Todas precisam ser substituídas:
`hero`, `duo`, `momento-cerimonia`, `momento-coquetel`, `momento-festa`, `galeria-1..3`, `og` (1200×630, imagem que aparece ao compartilhar o link).

### Trocar o número do WhatsApp
`src/whatsapp.js`, constante `WHATSAPP`. Formato: `55` + DDD + número, só dígitos.

### Mudar a mensagem de um botão
`src/whatsapp.js`, objeto `MENSAGENS`. Cada chave é um contexto da página (`hero`, `repertorio`, `bastidor`, `rodape`, `semData`, `cerimonialista`, `provaSonora`, `provaSocial`).
**Não quebre as três regras** que estão comentadas no arquivo — elas fazem a mensagem chegar pronta pra pessoa digitar a data.

### Adicionar um momento na timeline
Em `src/conteudo.js`, adicione um item em `momentos.lista` (`numeral`, `titulo`, `texto`, `foto`, `alt`). O layout e a animação se ajustam sozinhos.

### Mudar uma cor
`src/estilos.css`, bloco `:root`. Todas as cores saem de lá — mude o token, muda em toda a página.

---

## 4. Subir para o GitHub (primeira vez)

```bash
cd landing-duo-con-amore
git init
git add .
git commit -m "Landing Duo Con Amore — versão inicial"
git branch -M main
```

Crie o repositório vazio em github.com/new (nome sugerido: `landing-duo-con-amore`), sem README, e então:

```bash
git remote add origin https://github.com/SEU-USUARIO/landing-duo-con-amore.git
git push -u origin main
```

Dia a dia, depois disso:

```bash
git add .
git commit -m "troca as fotos da galeria"
git push
```

---

## 5. Publicar

### Opção A — Vercel (recomendado)
1. vercel.com → *Add New Project* → importe o repositório.
2. Ele detecta Vite sozinho (build `npm run build`, saída `dist`). Clique em *Deploy*.
3. Cada `git push` na `main` republica automaticamente.
4. Domínio próprio: *Settings → Domains*, adicione `duoconamore.com` e aponte o DNS conforme a instrução da tela.

### Opção B — GitHub Pages (já configurado)
1. No repositório: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
2. Dê um `git push` na `main`. O workflow `.github/workflows/deploy.yml` builda e publica.
3. Sai em `https://SEU-USUARIO.github.io/landing-duo-con-amore/` (o `base: './'` do Vite já cobre a subpasta).

### Antes de anunciar o link
- [ ] Fotos reais no lugar dos placeholders (inclusive a `og`).
- [ ] Número do WhatsApp conferido — clique em todos os botões no celular.
- [ ] `index.html`: `canonical`, `og:url` e `og:image` com o domínio final.
- [ ] Testado em um celular de verdade.

---

## 6. Usar com o Claude Code

Na raiz do projeto tem um `CLAUDE.md` com o contexto do produto e as regras de edição.

```bash
cd landing-duo-con-amore
claude
```

Exemplos de pedido que funcionam bem:
- "troque a foto da cerimônia por assets/cerimonia-2.jpg e ajuste o alt"
- "adicione uma seção de depoimentos depois da citação, usando o contexto provaSocial do whatsapp.js"
- "o hero está muito alto no desktop; reduza mantendo o enquadramento no mobile"

Peça sempre `npm run build` no fim para garantir que nada quebrou.
