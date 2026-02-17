import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./features/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'produtos/resultados-loteria-do-brasil',
    loadComponent: () =>
      import('./features/products/product-detail.component').then((m) => m.ProductDetailComponent),
  },
  {
    path: 'produtos/resultados-loteria-do-brasil/privacidade',
    loadComponent: () =>
      import('./features/products/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
