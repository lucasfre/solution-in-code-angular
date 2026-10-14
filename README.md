# Solution in Code — site

Site institucional da **Solution in Code**, publicado em [solutionincode.com.br](https://solutionincode.com.br). Apresenta a empresa, os produtos e as páginas de cada app (detalhes e política de privacidade). Conteúdo em português.

## Funcionalidades

- Página inicial com a proposta da empresa
- Lista de produtos
- Página do app **Resultados Loteria do Brasil**, com links para as lojas
- Política de privacidade do app

## Requisitos

- Node.js 20 ou 22 (LTS) e npm

## Como rodar

```bash
npm ci          # instala as dependências
npm start       # servidor local em http://localhost:4200
npm test        # testes unitários (Karma)
npm run build   # gera o site publicado em docs/
```

## Publicação

O GitHub Pages publica a pasta `docs/` da branch `master` no domínio `solutionincode.com.br` (arquivo `public/CNAME`).

1. Rode `npm run build`: ele gera o site em `docs/`, cria o `404.html` e as páginas de cada rota.
2. Faça commit da pasta `docs/` junto com a mudança.
3. Com o merge no `master`, o site novo vai ao ar.

## Design system

Cores, fonte, logo, componentes e regras de uso da marca: [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md). Os arquivos da marca (logo, símbolo, ícones de app, favicon) ficam em [`public/brand/`](public/brand).

## Estrutura

```
src/
├── styles.css               # tokens do design system (Tailwind v4)
├── index.html               # fontes, favicon
└── app/
    ├── shared/components/   # Header, Footer, Logo, SectionTitle
    └── features/            # home/, products/
public/                      # arquivos copiados para o site (brand/, favicon, CNAME)
docs/                        # site gerado pelo build (não editar à mão)
```

Detalhes para quem mantém o código: [`CLAUDE.md`](CLAUDE.md).
