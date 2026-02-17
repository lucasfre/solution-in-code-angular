import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <app-section-title
        title="Nossos Produtos"
        subtitle="Aplicativos desenvolvidos com dedicação para facilitar a vida dos brasileiros."
      />
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <a routerLink="/produtos/resultados-loteria-do-brasil"
           class="group bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-violet-500/50 transition-colors">
          <img src="assets/products/resultados-loteria-do-brasil.png"
               alt="Resultados Loteria do Brasil"
               class="w-14 h-14 mb-5 rounded-xl" />
          <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
            Resultados Loteria do Brasil
          </h3>
          <p class="text-sm text-gray-400 mb-4">
            Acompanhe os resultados de todas as loterias da Caixa de forma rápida e prática.
          </p>
          <span class="text-sm text-violet-400 font-medium inline-flex items-center gap-1">
            Ver detalhes
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  `,
})
export class ProductsComponent {}
