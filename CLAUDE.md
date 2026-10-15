# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Institutional website for "Solution in Code" company, hosted at solutionincode.com.br via GitHub Pages. The company is positioned as software development (personal and business systems, apps, tools/automations) built with AI and agents; copy must stay generic, not app-only, and only claim what the company really does. Features a home page, products listing, product detail for "Resultados Loteria do Brasil" app, and its privacy policy. Content is in Portuguese (pt-BR).

## Tech Stack

- Angular 19 (standalone components, no NgModule)
- TypeScript 5.7 with strict mode enabled
- Tailwind CSS v4 for styling, with the Solution in Code design system (tokens in `src/styles.css`, guide in `DESIGN-SYSTEM.md`)
- Karma + Jasmine for unit tests
- Deployed to GitHub Pages via the `docs/` folder

## Commands

- `npm start` — dev server at localhost:4200
- `npm run build` — production build (outputs to `docs/`, flattens browser subfolder, copies 404.html for SPA routing)
- `npm test` — run unit tests via Karma (there are no `*.spec.ts` files yet, so it currently fails with TS18003)
- `npm run watch` — dev build with watch mode

## Architecture

Multi-page Angular app with lazy-loaded routes:

```
/                                                    → Home
/produtos                                            → Products list
/produtos/resultados-loteria-do-brasil               → Product detail
/produtos/resultados-loteria-do-brasil/privacidade   → Privacy policy
```

### Directory Structure

```
src/app/
├── shared/components/     # Header, Footer, Logo, SectionTitle, StoreBadges
├── features/
│   ├── home/              # Home page
│   └── products/          # Products, ProductDetail, PrivacyPolicy; products.ts = app data (name, links, store URLs, social)
├── app.component.ts       # Shell (header + router-outlet + footer)
├── app.routes.ts          # Route definitions with lazy loading
└── app.config.ts          # Standalone app configuration
```

`design/` (repo root) holds the HTML sources of the brand art (`play-header.html`, `og-image.html`); each file's header comment has the headless Chrome command that renders its PNG into `public/brand/`.

Build output goes to `docs/` for GitHub Pages. The post-build script flattens Angular's `browser/` subfolder and creates `404.html` for SPA routing. The `CNAME` file in `public/` maps to `solutionincode.com.br`.

## Key Notes

- Component prefix is `app` (configured in `angular.json`)
- All components are standalone (no NgModule)

## Design System

Full guide (tokens, logo rules, components, contrast): `DESIGN-SYSTEM.md`. Keep it updated when tokens or components change.

- Light and dark mode: `<html data-theme="light|dark">`, set before first paint by an inline script in `src/index.html` (saved choice in `localStorage['theme']`, else the system preference); the sun/moon button in the header toggles and saves it. Dark values override the tokens in `:root[data-theme="dark"]` (`src/styles.css`). Never use Tailwind's `dark:` variant: components only use tokens. New color tokens need a light value (`@theme`) and a dark value. Check every change in both themes.
- Light theme: `canvas` (paper #FAFAF8) background, `fg` (ink #121212) text, `accent` (orange #FF5B1F). Dark sections use `bg-inverse` + `text-inverse-fg` / `text-inverse-muted` and stay dark in both themes (in dark mode give them a `border-line` edge).
- Space Grotesk (400/500/700) from Google Fonts is the default `font-sans`.
- Use only the semantic token classes (`bg-surface`, `text-fg-muted`, `border-line`...). The default Tailwind palette is disabled (`--color-*: initial`), so `text-gray-400`, `text-white`, `bg-violet-600` etc. **silently generate no CSS**.
- Orange text/icons on the page background = `text-accent-strong` (#C2410C light / #FF7A47 dark, AA in both); the global focus outline uses it too. `text-accent` only inside `bg-inverse` sections or in the logo. Buttons on orange use `text-on-accent` (dark), never white.
- Reusable classes in `src/styles.css` (`@layer components`): `btn-primary`, `btn-secondary`, `card`, `card-interactive`, `link`. Store download buttons: `<app-store-badges>`. In Tailwind v4 `@apply` only accepts utilities, so shared bases use grouped selectors, not `@apply btn`.
- Logo: `<app-logo tone="default|inverse" />` (full logo), sized by font-size (`class="text-sm"`); symbol only: `public/brand/symbol.svg`. Brand files (SVG/PNG/app icons) in `public/brand/`; favicon in `public/favicon.svg|ico`. Regenerate PNGs with the commands in `DESIGN-SYSTEM.md` and open them before committing (a headless render once produced a blank icon).

## Known Pitfalls

- Link previews (WhatsApp, LinkedIn, Facebook, X) come from the static `og:*` / `twitter:card` tags in `src/index.html`: crawlers don't run Angular, so every page shares the same preview (`public/brand/og-image-dark.png`, source `design/og-image.html`). Don't add `og:url` there: all routes are copies of `index.html` and it would point every page to the home.

- **Never change the product URLs** (`/produtos/resultados-loteria-do-brasil` and `.../privacidade`). They are registered outside the site: Play Store / App Store listings, the Meta app settings and the Facebook page button. New pages for a product go under its current path.
- Official Instagram is `@resultados.loteria.brasil`. `@resultadosloteria` is **not** ours (it promotes a competitor app).
- The privacy policy page uses the same text as the in-app screen (`resultado-loteria-app/src/screens/privacy-policy-screen`). Change both together.

- `docs/` is committed build output, so `src/styles.css` excludes it from Tailwind scanning (`@source not "../docs"`). Without it, classes from the old build leak into the CSS.
- `ng build` prints `rules skipped due to selector errors: & -> Empty sub-selector`. This is expected: Tailwind v4 outputs nested CSS (`&:hover { @media (hover: hover) {...} }`) that the Angular optimizer doesn't flatten; the rules are kept and work in current browsers.
