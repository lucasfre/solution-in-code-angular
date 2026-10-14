# Design system — Solution in Code

Identidade visual da Solution in Code aplicada ao site. A fonte da verdade é o código:

- **Tokens** (cores e fonte): [`src/styles.css`](src/styles.css), no bloco `@theme`.
- **Logo:** componente [`<app-logo>`](src/app/shared/components/logo/logo.component.ts).
- **Arquivos da marca** (SVG/PNG/ICO): [`public/brand/`](public/brand) e a raiz de [`public/`](public).

## Cola rápida

```html
<!-- Logo -->
<app-logo class="text-sm" />                       <!-- fundo claro -->
<app-logo tone="inverse" class="text-sm" />        <!-- fundo escuro -->
<app-logo variant="symbol" class="text-base" />    <!-- só o símbolo -->

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

<!-- Seção escura -->
<section class="bg-inverse text-inverse-fg">
  <p class="text-inverse-muted">Texto secundário</p>
  <a href="..." class="btn-light">Botão sobre fundo escuro</a>
</section>
```

## Marca

### O símbolo

Um **S** formado por dois chevrons de código encaixados: `<` em cima e `>` embaixo. O último traço, em laranja, fecha o S e representa a solução: o código que chega no resultado.

### Logo

| Variante | Quando usar | No código | Arquivo |
|---|---|---|---|
| **Completo** (símbolo + "SOLUTION / IN CODE") | Cabeçalho, rodapé, documentos, apresentações | `<app-logo />` | `brand/logo.png`, `brand/logo-inverse.png` |
| **Símbolo** | Favicon, ícone de app, avatar de rede social, espaços pequenos | `<app-logo variant="symbol" />` | `brand/symbol.svg`, `brand/symbol-inverse.svg` |

- **Tom:** `tone="default"` (padrão) para fundo claro, com traço de cima em `ink`. `tone="inverse"` para fundo escuro, com traço de cima em `paper`. O traço laranja e o "IN" laranja não mudam.
- **Tamanho:** o logo segue o `font-size` do elemento (classes `text-*`). O símbolo tem 2,4× o tamanho da fonte.
- **Tamanho mínimo:** logo completo com 28 px de altura (`text-xs`); símbolo com 16 px. Abaixo de 32 px use o [`favicon.svg`](public/favicon.svg), que tem traço mais grosso.
- **Área de respiro:** deixe livre em volta do logo pelo menos a altura da palavra "IN".

**Não faça:** trocar as cores, pintar o traço de cima de laranja, girar, esticar, trocar a fonte do nome, colocar o logo sobre o laranja ou sobre foto sem contraste.

### Arquivos

| Arquivo | Uso |
|---|---|
| `public/brand/symbol.svg` / `symbol-inverse.svg` | Símbolo vetorial (fundo transparente) para claro / escuro |
| `public/brand/logo.png` / `logo-inverse.png` | Logo completo, 1281×432, fundo transparente |
| `public/brand/app-icon.svg` / `app-icon-inverse.svg` | Ícone de app (quadrado, sem cantos: as lojas arredondam) |
| `public/brand/app-icon-1024.png` / `app-icon-512.png` / `app-icon-inverse-1024.png` | Ícone para lojas, redes sociais e perfis |
| `public/favicon.svg`, `public/favicon.ico` (16/32/48) | Ícone da aba do navegador |
| `public/apple-touch-icon.png` (180×180) | Ícone ao salvar o site na tela inicial do iPhone |

O nome no logo usa a fonte **Space Grotesk Bold**, em caixa alta. Os PNGs foram gerados a partir dos SVGs; se o símbolo mudar, gere os PNGs de novo.

## Cores

### Paleta da marca

| Nome | Hex | Papel |
|---|---|---|
| `ink` | `#121212` | Preto da marca: texto, traço do símbolo, seções escuras |
| `paper` | `#FAFAF8` | Branco da marca: fundo da página |
| `orange` | `#FF5B1F` | Laranja da marca: destaque, botões, traço final do S |

A paleta fica em variáveis CSS (`--sic-ink`, `--sic-paper`, `--sic-orange`) e **só é usada para definir os tokens abaixo**. Nos componentes, use sempre os tokens.

### Tokens (classes do Tailwind)

Cada token vira classe do Tailwind com qualquer prefixo de cor: `bg-`, `text-`, `border-`, `stroke-`, `fill-` etc.

| Token | Valor | Uso |
|---|---|---|
| `canvas` | `#FAFAF8` | Fundo da página (`bg-canvas`) |
| `surface` | `#FFFFFF` | Cartões e blocos (`bg-surface`) |
| `surface-muted` | `#F2F1EC` | Fundo alternativo, hover de botões claros |
| `line` | `#E6E4DF` | Bordas e divisórias (`border-line`) |
| `fg` | `#121212` | Texto principal (`text-fg`) |
| `fg-muted` | `#5C5C57` | Texto secundário (`text-fg-muted`) |
| `accent` | `#FF5B1F` | Fundo de botão principal; texto laranja **só em fundo escuro** |
| `accent-hover` | `#FF7A47` | Hover do botão principal |
| `accent-strong` | `#C2410C` | **Texto e ícones laranja sobre fundo claro** (`text-accent-strong`) |
| `accent-soft` | `#FFE9E0` | Fundo suave: ícones em destaque, avisos |
| `on-accent` | `#121212` | Texto sobre o laranja (`text-on-accent`) |
| `inverse` | `#121212` | Fundo de seções escuras (`bg-inverse`) |
| `inverse-fg` | `#FAFAF8` | Texto principal em seção escura |
| `inverse-muted` | `#B8B8B4` | Texto secundário em seção escura |
| `inverse-line` | `#2A2A28` | Bordas em seção escura |

### Regras de contraste (WCAG AA)

- **Texto laranja em fundo claro:** sempre `text-accent-strong` (5:1). O `#FF5B1F` puro sobre o `paper` dá só 3:1 e não passa nem para texto grande.
- **Texto laranja em fundo escuro:** `text-accent` (6:1).
- **Botão laranja:** texto escuro (`text-on-accent`, 6:1). Texto branco sobre o laranja dá 3:1, não use.
- O logo é exceção: o "IN" usa o laranja da marca em qualquer fundo.

### A paleta padrão do Tailwind está desligada

O `@theme` começa com `--color-*: initial`. Por isso **classes como `bg-gray-900`, `text-white` ou `text-violet-400` não geram CSS nenhum**: o elemento fica sem cor e não aparece erro. Isso garante que só as cores do design system entram no site. Precisa de uma cor nova? Crie um token (veja "Como evoluir").

## Tipografia

**Space Grotesk** (Google Fonts, licença OFL: livre para uso comercial), pesos 400, 500 e 700. Já é a fonte padrão (`font-sans`) de toda a página. Títulos têm `letter-spacing: -0.02em` automático.

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
| `<app-logo>` | Logo. Entradas: `variant` (`full` \| `symbol`) e `tone` (`default` \| `inverse`). Já tem `role="img"` e `aria-label`. |
| `.btn-primary` | Botão principal: laranja com texto escuro. Uma ação principal por tela. |
| `.btn-secondary` | Botão secundário: branco com borda. |
| `.btn-light` | Botão claro para usar sobre seção escura (ex.: botões das lojas). |
| `.card` | Bloco branco com borda e cantos arredondados. |
| `.card-interactive` | `.card` com borda laranja no hover, para cartões clicáveis. |
| `.link` | Link dentro de texto: laranja forte, sublinha no hover. |
| `<app-section-title>` | Título + subtítulo de seção, centralizados. |

**Ícones:** SVG inline 24×24, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, pontas arredondadas (estilo outline). A cor vem da classe de texto (`text-accent-strong`, `text-fg-muted`...).

**Foco e seleção:** todo elemento focado pelo teclado ganha contorno laranja (`:focus-visible`), e o texto selecionado fica com fundo laranja. As duas coisas são globais, não precisa fazer nada.

## Como evoluir

- **Nova cor:** adicione o token no `@theme` de `src/styles.css` (ex.: `--color-success: #15803d;`), confira o contraste e registre na tabela de tokens acima.
- **Novo componente visual reaproveitável:** adicione em `@layer components` no `src/styles.css` (com `@apply` de utilitários) e registre na tabela de componentes.
- **Mudou o símbolo ou as cores da marca:** atualize o `<app-logo>`, os SVGs de `public/brand/` e o `public/favicon.svg`, e gere os PNGs e o `favicon.ico` de novo.
