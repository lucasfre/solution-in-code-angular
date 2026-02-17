# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Institutional website for "Solution in Code" company, hosted at solutionincode.com.br via GitHub Pages. Features a home page, products listing, product detail for "Resultados Loteria do Brasil" app, and its privacy policy. Content is in Portuguese (pt-BR).

## Tech Stack

- Angular 19 (standalone components, no NgModule)
- TypeScript 5.7 with strict mode enabled
- Tailwind CSS v4 for styling (dark theme)
- Karma + Jasmine for unit tests
- Deployed to GitHub Pages via the `docs/` folder

## Commands

- `npm start` — dev server at localhost:4200
- `npm run build` — production build (outputs to `docs/`, flattens browser subfolder, copies 404.html for SPA routing)
- `npm test` — run unit tests via Karma
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
├── shared/components/     # Header, Footer, SectionTitle
├── features/
│   ├── home/              # Home page
│   └── products/          # Products, ProductDetail, PrivacyPolicy
├── app.component.ts       # Shell (header + router-outlet + footer)
├── app.routes.ts          # Route definitions with lazy loading
└── app.config.ts          # Standalone app configuration
```

Build output goes to `docs/` for GitHub Pages. The post-build script flattens Angular's `browser/` subfolder and creates `404.html` for SPA routing. The `CNAME` file in `public/` maps to `solutionincode.com.br`.

## Key Notes

- Component prefix is `app` (configured in `angular.json`)
- All components are standalone (no NgModule)
- Dark theme: bg-gray-950 base with violet accent colors
- Inter font loaded from Google Fonts
