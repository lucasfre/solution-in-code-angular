# Design system — Solution in Code

Identidade visual da Solution in Code aplicada ao site. A fonte da verdade é o código:

- **Tokens** (cores e fonte): [`src/styles.css`](src/styles.css), no bloco `@theme`.
- **Logo:** componente [`<app-logo>`](src/app/shared/components/logo/logo.component.ts).
- **Arquivos da marca** (SVG/PNG/ICO): [`public/brand/`](public/brand) e a raiz de [`public/`](public).

## Cola rápida

```html
<!-- Logo -->
<app-logo class="text-sm" />                       <!-- segue o tema (claro ou escuro) -->
<app-logo tone="inverse" class="text-sm" />        <!-- fundo escuro -->
<img src="brand/symbol.svg" alt="Solution in Code" class="h-10 w-10" />  <!-- só o símbolo -->

<!-- Texto -->
<h2 class="text-3xl font-bold text-fg">Título</h2>
<p class="text-fg-muted">Texto secundário</p>
<a href="..." class="link">Link no meio do texto</a>

<!-- Botões -->
<a routerLink="/produtos" class="btn-primary">Ação principal</a>
<a routerLink="/contato" class="btn-secondary">Ação secundária</a>

<!-- Cartões -->
<div class="card p-8">Conteúdo</div>
<a routerLink="/x" class="card-interactive p-8">Cartão clicável</a>

<!-- Botões das lojas (pretos no claro, claros no escuro) -->
<app-store-badges [googlePlay]="app.googlePlay" [appStore]="app.appStore" />

<!-- Seção escura -->
<section class="bg-inverse text-inverse-fg">
  <p class="text-inverse-muted">Texto secundário</p>
</section>
```

## Marca

### O símbolo

Um **S** formado por dois chevrons de código encaixados: `<` em cima e `>` embaixo. O último traço, em laranja, fecha o S e representa a solução: o código que chega no resultado.

### Logo

| Variante | Quando usar | No código | Arquivo |
|---|---|---|---|
| **Completo** (símbolo + "SOLUTION / IN CODE") | Cabeçalho, rodapé, documentos, apresentações | `<app-logo />` | `brand/logo.png`, `brand/logo-inverse.png` |
| **Símbolo** | Favicon, ícone de app, avatar de rede social, espaços pequenos | `<img src="brand/symbol.svg" alt="Solution in Code">` | `brand/symbol.svg`, `brand/symbol-inverse.svg` |

- **Tom:** `tone="default"` (padrão) usa a cor do texto do tema: traço de cima em `ink` no modo claro e em `paper` no escuro. `tone="inverse"` é para seções escuras (`bg-inverse`), com traço de cima sempre em `paper`. O traço laranja e o "IN" laranja não mudam.
- **Tamanho:** o logo segue o `font-size` do elemento (classes `text-*`). O símbolo tem 2,4× o tamanho da fonte.
- **Tamanho mínimo:** logo completo com 28 px de altura (`text-xs`); símbolo com 16 px. Abaixo de 32 px use o [`favicon.svg`](public/favicon.svg), que tem traço mais grosso.
- **Área de respiro:** deixe livre em volta do logo pelo menos a altura da palavra "IN".

**Não faça:** trocar as cores, pintar o traço de cima de laranja, girar, esticar, trocar a fonte do nome, colocar o logo sobre o laranja ou sobre foto sem contraste.

### Slogan

**Código que resolve.** Conversa com o nome (*Solution in Code*, solução em código) e não fala de IA, então serve para qualquer peça.

- **No site:** é o título da home, em Space Grotesk, com "resolve" em `text-accent-strong`.
- **Nas artes** (cabeçalho da Play, prévia de compartilhamento): aparece como linha de terminal, `> Código que resolve▌`, em JetBrains Mono 500. O `>` e o cursor de bloco vão em laranja da marca, e o texto em `inverse-muted` no fundo escuro ou `fg-muted` no claro. O `>` repete o chevron do símbolo.
- Se não couber nada além do logo, use só ele; o slogan é opcional.

### Arquivos

| Arquivo | Uso |
|---|---|
| `public/brand/symbol.svg` / `symbol-inverse.svg` | Símbolo vetorial (fundo transparente) para claro / escuro |
| `public/brand/logo.png` / `logo-inverse.png` | Logo completo, 1281×432, fundo transparente |
| `public/brand/app-icon.svg` / `app-icon-inverse.svg` | Ícone de app (quadrado, sem cantos: as lojas arredondam) |
| `public/brand/app-icon-1024.png` / `app-icon-512.png` / `app-icon-inverse-1024.png` | Ícone para lojas, redes sociais e perfis |
| `public/brand/app-icon-inverse-512.png` | Ícone escuro 512×512 (PNG 24 bits, sem transparência): ícone da página de desenvolvedor na Play Store |
| `public/brand/play-header.png` | Cabeçalho da página de desenvolvedor na Play Store (4096×2304, PNG 24 bits): logo claro sobre ink e o slogan `> Código que resolve` em JetBrains Mono. Fonte: [`design/play-header.html`](design/play-header.html) |
| `public/brand/og-image-dark.png` / `og-image-light.png` | Prévia ao compartilhar o link do site (1200×630). A escura é a `og:image` do `index.html`; a clara serve para posts e apresentações. Fonte: [`design/og-image.html`](design/og-image.html) (`?tema=claro` gera a clara) |
| `public/favicon.svg`, `public/favicon.ico` (16/32/48) | Ícone da aba do navegador |
| `public/apple-touch-icon.png` (180×180) | Ícone ao salvar o site na tela inicial do iPhone |

O nome no logo usa a fonte **Space Grotesk Bold**, em caixa alta.

### Gerar os PNGs de novo

Se o símbolo ou as cores mudarem, edite os SVGs e gere os ícones no macOS com o Chrome e o `sips`:

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --hide-scrollbars --window-size=1024,1024 --screenshot=public/brand/app-icon-1024.png "file://$PWD/public/brand/app-icon.svg"
"$CHROME" --headless=new --hide-scrollbars --window-size=1024,1024 --screenshot=public/brand/app-icon-inverse-1024.png "file://$PWD/public/brand/app-icon-inverse.svg"
sips -z 512 512 public/brand/app-icon-1024.png --out public/brand/app-icon-512.png
sips -z 512 512 public/brand/app-icon-inverse-1024.png --out public/brand/app-icon-inverse-512.png
sips -z 180 180 public/brand/app-icon-1024.png --out public/apple-touch-icon.png
sips -s format ico -z 48 48 public/brand/app-icon-1024.png --out public/favicon.ico
```

Abra os PNGs gerados antes do commit para conferir que não saíram em branco. O `favicon.ico` sai com um tamanho só (48 px); os navegadores atuais usam o `favicon.svg`. O cabeçalho da Play sai do [`design/play-header.html`](design/play-header.html) e as prévias de compartilhamento do [`design/og-image.html`](design/og-image.html). Os comandos estão no comentário de cada arquivo. O `logo.png` e o `logo-inverse.png` dependem da fonte: capture o `<app-logo>` renderizado no navegador, com fundo transparente.

## Cores

### Paleta da marca

| Nome | Hex | Papel |
|---|---|---|
| `ink` | `#121212` | Preto da marca: texto, traço do símbolo, seções escuras |
| `paper` | `#FAFAF8` | Branco da marca: fundo da página |
| `orange` | `#FF5B1F` | Laranja da marca: destaque, botões, traço final do S |

Os valores ficam direto nos tokens do `@theme` (`canvas` = paper, `fg` e `inverse` = ink, `accent` = laranja). Nos componentes, use sempre os tokens.

### Tokens (classes do Tailwind)

Cada token vira classe do Tailwind com qualquer prefixo de cor: `bg-`, `text-`, `border-`, `stroke-`, `fill-` etc. O valor muda sozinho com o tema (veja "Modo claro e escuro").

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `canvas` | `#FAFAF8` | `#121212` | Fundo da página (`bg-canvas`) |
| `surface` | `#FFFFFF` | `#1B1B1A` | Cartões e blocos (`bg-surface`) |
| `surface-muted` | `#F2F1EC` | `#242422` | Fundo alternativo |
| `line` | `#E6E4DF` | `#2F2F2C` | Bordas e divisórias (`border-line`) |
| `fg` | `#121212` | `#FAFAF8` | Texto principal (`text-fg`) |
| `fg-muted` | `#5C5C57` | `#B8B8B4` | Texto secundário (`text-fg-muted`) |
| `accent` | `#FF5B1F` | `#FF5B1F` | Fundo de botão principal; texto laranja **só em seção escura** (`bg-inverse`) |
| `accent-hover` | `#FF7A47` | `#FF7A47` | Hover do botão principal |
| `accent-strong` | `#C2410C` | `#FF7A47` | **Texto e ícones laranja sobre o fundo da página** (`text-accent-strong`) |
| `accent-soft` | `#FFF1EB` | `#2A1A12` | Fundo suave: ícones em destaque, avisos (aceita `.link` por cima com contraste AA) |
| `on-accent` | `#121212` | `#121212` | Texto sobre o laranja (`text-on-accent`) |
| `inverse` | `#121212` | `#0B0B0B` | Fundo de seções escuras (`bg-inverse`), escuras nos dois temas |
| `inverse-fg` | `#FAFAF8` | `#FAFAF8` | Texto principal em seção escura |
| `inverse-muted` | `#B8B8B4` | `#B8B8B4` | Texto secundário em seção escura |

### Modo claro e escuro

- **Como funciona:** o `<html>` recebe `data-theme="light"` ou `"dark"`. Um script no `index.html` define o tema **antes da página aparecer**, sem piscar: usa a escolha salva (`localStorage`, chave `theme`) ou, na primeira visita, o tema do sistema. O botão de sol/lua no header troca e salva. Os valores escuros estão em `:root[data-theme="dark"]` no `src/styles.css`.
- **Nos componentes não muda nada:** use os tokens de sempre. **Não use a variante `dark:`**, porque o tema é trocado pelos tokens.
- **Seções escuras (`bg-inverse`)** continuam escuras nos dois temas. No escuro ficam um tom abaixo do fundo, então leve uma borda `border-line` (`border-t`/`border-y`) para separar.
- **Cor nova:** defina o valor claro no `@theme` e o escuro em `:root[data-theme="dark"]`, e confira o contraste nos dois.
- **Teste sempre nos dois temas** antes de abrir o PR.

### Regras de contraste (WCAG AA)

- **Texto laranja no fundo da página:** sempre `text-accent-strong`: 5:1 no claro (`#C2410C`) e 7:1 no escuro (`#FF7A47`). O `#FF5B1F` puro sobre o `paper` dá só 3:1 e não passa nem para texto grande.
- **Texto laranja em seção escura (`bg-inverse`):** `text-accent` (6:1).
- **Botão laranja:** texto escuro (`text-on-accent`, 6:1). Texto branco sobre o laranja dá 3:1, não use.
- O logo é exceção: o "IN" usa o laranja da marca em qualquer fundo.

### A paleta padrão do Tailwind está desligada

O `@theme` começa com `--color-*: initial`. Por isso **classes como `bg-gray-900`, `text-white` ou `text-violet-400` não geram CSS nenhum**: o elemento fica sem cor e não aparece erro. Isso garante que só as cores do design system entram no site. Precisa de uma cor nova? Crie um token (veja "Como evoluir").

## Tipografia

**Space Grotesk** (Google Fonts, licença OFL: livre para uso comercial), pesos 400, 500 e 700. Já é a fonte padrão (`font-sans`) de toda a página. Títulos têm `letter-spacing: -0.02em` automático.

**JetBrains Mono** (Google Fonts, OFL), peso 500, aparece **só nas artes da marca**, para o slogan em estilo terminal (veja "Slogan"). O site não carrega essa fonte.

| Elemento | Classes |
|---|---|
| Título do hero (H1) | `text-4xl sm:text-5xl lg:text-6xl font-bold text-fg` |
| Título de página (H1) | `text-2xl sm:text-3xl font-bold text-fg` |
| Título de seção (H2) | `<app-section-title>` ou `text-3xl sm:text-4xl font-bold text-fg` |
| Título de cartão (H3) | `text-lg font-bold text-fg` |
| Texto corrido | `text-base text-fg` (leitura longa: `leading-relaxed`) |
| Texto secundário | `text-sm text-fg-muted` |
| Rótulo pequeno | `text-[10px] uppercase tracking-wider text-fg-muted` |

## Componentes

Todos estão em [`src/styles.css`](src/styles.css) (`@layer components`), então dá para combinar com qualquer classe do Tailwind: `class="btn-primary px-8 w-full"`.

| Classe / componente | O que é |
|---|---|
| `<app-logo>` | Logo completo. Entrada `tone` (`default` \| `inverse`). Já tem `role="img"` e `aria-label`. |
| `.btn-primary` | Botão principal: laranja com texto escuro. Uma ação principal por tela. |
| `.btn-secondary` | Botão secundário: fundo `surface` com borda. |
| `.card` | Bloco `surface` com borda e cantos arredondados. |
| `.card-interactive` | `.card` com borda laranja no hover, para cartões clicáveis. |
| `.link` | Link dentro de texto: laranja forte, sublinha no hover. |
| `<app-section-title>` | Título + subtítulo de seção, centralizados. |
| `<app-store-badges>` | Botões do Google Play e da App Store: pretos no tema claro, claros no escuro (`bg-fg text-canvas`). Entradas `googlePlay` e `appStore`. |

**S decorativo:** o topo da home tem o S da marca grande e apagado à direita (`stroke-surface-muted` + `stroke-accent-soft`, `aria-hidden`), como no cabeçalho da Play. Só aparece a partir de `lg` (1024 px), para não ficar atrás do texto no celular. Use só em seções de destaque, não em todas.

**Ícones:** SVG inline 24×24, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, pontas arredondadas (estilo outline). A cor vem da classe de texto (`text-accent-strong`, `text-fg-muted`...).

**Foco e seleção:** todo elemento focado pelo teclado ganha contorno laranja forte (`:focus-visible`, `accent-strong`, contraste de 3:1 ou mais nos fundos claro e escuro), e o texto selecionado fica com fundo laranja. As duas coisas são globais, não precisa fazer nada.

## Como evoluir

- **Nova cor:** adicione o token no `@theme` de `src/styles.css` (ex.: `--color-success: #15803d;`) e o valor escuro em `:root[data-theme="dark"]`, confira o contraste nos dois temas e registre na tabela de tokens acima.
- **Novo componente visual reaproveitável:** adicione em `@layer components` no `src/styles.css` (com `@apply` de utilitários) e registre na tabela de componentes.
- **Mudou o símbolo ou as cores da marca:** atualize o `<app-logo>`, os SVGs de `public/brand/` e o `public/favicon.svg`, e gere os PNGs de novo (comandos em "Gerar os PNGs de novo").
