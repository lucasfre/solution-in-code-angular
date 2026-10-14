import { Routes } from '@angular/router';

// Os endereços dos produtos estão cadastrados fora do site (lojas, Meta, página do Facebook): não mude.
export const routes: Routes = [
  {
    path: '',
    title: 'Solution in Code — Apps para Android e iOS',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'produtos',
    title: 'Produtos — Solution in Code',
    loadComponent: () =>
      import('./features/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'produtos/resultados-loteria-do-brasil',
    title: 'Resultados Loteria do Brasil — Solution in Code',
    loadComponent: () =>
      import('./features/products/product-detail.component').then((m) => m.ProductDetailComponent),
  },
  {
    path: 'produtos/resultados-loteria-do-brasil/privacidade',
    title: 'Política de Privacidade — Resultados Loteria do Brasil',
    loadComponent: () =>
      import('./features/products/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
