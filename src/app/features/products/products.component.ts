import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RESULTADOS_LOTERIA } from './products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <app-section-title
        title="Nossos apps"
        subtitle="Aplicativos criados e mantidos pela Solution in Code, disponíveis para Android e iOS."
      />
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card p-8 flex flex-col">
          <img [src]="app.icone" alt="" class="w-14 h-14 mb-5 rounded-xl" />
          <h3 class="text-xl font-bold text-fg mb-1">
            <a [routerLink]="app.pagina" class="hover:text-accent-strong transition-colors">{{ app.nome }}</a>
          </h3>
          <p class="text-sm text-fg-muted mb-4">Android e iOS · Grátis</p>
          <p class="text-fg-muted mb-6 flex-1">{{ app.resumo }}</p>
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a [routerLink]="app.pagina" class="link">Ver detalhes</a>
            <a [routerLink]="app.privacidade" class="link">Política de privacidade</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProductsComponent {
  app = RESULTADOS_LOTERIA;
}
