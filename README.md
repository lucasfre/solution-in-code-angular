# Solution in Code — site

Site institucional da **Solution in Code**, publicado em [solutionincode.com.br](https://solutionincode.com.br). Apresenta a empresa (desenvolvimento de sistemas pessoais e empresariais, apps e ferramentas com IA e agentes), os produtos e as páginas de cada app (detalhes e política de privacidade). Conteúdo em português.

## Funcionalidades

- Página inicial: o que a empresa faz, como trabalha com IA e agentes, e os produtos (com os botões das lojas)
- Lista de produtos
- Página do app **Resultados Loteria do Brasil**: funcionalidades, lojas, YouTube, Facebook e Instagram
- Política de privacidade do app (mesmo texto da tela do app), também no rodapé de todas as páginas
- Modo claro e escuro: segue o tema do sistema na primeira visita e lembra a escolha feita no botão do header
- Prévia com imagem ao compartilhar o link no WhatsApp, LinkedIn, Facebook e X (`og:image`)

Os endereços dos produtos estão cadastrados nas lojas, na Meta e na página do Facebook. **Não mude** `/produtos/resultados-loteria-do-brasil` nem `/produtos/resultados-loteria-do-brasil/privacidade`. Os dados de cada app (nome, resumo, links) ficam em `src/app/features/products/products.ts`.

## Requisitos

- Node.js 20 ou 22 (LTS) e npm

## Como rodar

```bash
npm ci          # instala as dependências
npm start       # servidor local em http://localhost:4200
npm test        # Karma: ainda não há testes, falha com TS18003 até existir o primeiro *.spec.ts
npm run build   # gera o site publicado em docs/
```

## Publicação

O GitHub Pages publica a pasta `docs/` da branch `master` no domínio `solutionincode.com.br` (arquivo `public/CNAME`).

1. Rode `npm run build`: ele gera o site em `docs/`, cria o `404.html` e as páginas de cada rota.
2. Faça commit da pasta `docs/` junto com a mudança.
3. Com o merge no `master`, o site novo vai ao ar.

## Design system

Cores, fontes, logo, slogan, modo claro e escuro, componentes e regras de uso da marca: [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md). Os arquivos da marca (logo, símbolo, ícones de app, cabeçalho da Play, prévias de compartilhamento) ficam em [`public/brand/`](public/brand), e as fontes das artes em [`design/`](design).

## Estrutura

```
src/
├── styles.css               # tokens do design system (Tailwind v4)
├── index.html               # fontes, favicon
└── app/
    ├── shared/components/   # Header, Footer, Logo, SectionTitle, StoreBadges
    └── features/            # home/, products/
public/                      # arquivos copiados para o site (brand/, favicon, CNAME)
design/                      # fontes HTML das artes (cabeçalho da Play, prévia de compartilhamento)
docs/                        # site gerado pelo build (não editar à mão)
```

Detalhes para quem mantém o código: [`CLAUDE.md`](CLAUDE.md).
