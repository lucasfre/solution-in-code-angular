import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StoreBadgesComponent } from '../../shared/components/store-badges/store-badges.component';
import { RESULTADOS_LOTERIA } from '../products/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, StoreBadgesComponent],
  template: `
    <!-- Hero -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <p class="text-sm font-bold uppercase tracking-wider text-accent-strong mb-4">Apps para Android e iOS</p>
      <h1 class="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold text-fg mb-6">
        Soluções em código para o seu <span class="text-accent-strong">dia a dia</span>.
      </h1>
      <p class="max-w-2xl text-lg sm:text-xl text-fg-muted mb-10">
        A Solution in Code é uma empresa brasileira que cria e mantém aplicativos rápidos, leves e fáceis de usar.
      </p>
      <a routerLink="/produtos" class="btn-primary px-8">
        Conheça nossos apps
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </section>

    <!-- App em destaque -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <h2 class="text-sm font-bold uppercase tracking-wider text-fg-muted mb-6">Em destaque</h2>
      <div class="card p-6 sm:p-10">
        <div class="flex items-center gap-4 mb-6">
          <img [src]="app.icone" alt="" class="w-16 h-16 shrink-0 rounded-2xl" />
          <div>
            <h3 class="text-2xl font-bold text-fg">{{ app.nome }}</h3>
            <p class="text-sm text-fg-muted">Grátis para Android e iOS</p>
          </div>
        </div>
        <p class="max-w-2xl text-lg text-fg-muted mb-6">{{ app.resumo }}</p>
        <ul class="space-y-3 mb-8">
          @for (destaque of app.destaques; track destaque) {
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-accent-strong mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-fg">{{ destaque }}</span>
            </li>
          }
        </ul>
        <app-store-badges [googlePlay]="app.googlePlay" [appStore]="app.appStore" class="mb-8" />
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a [routerLink]="app.pagina" class="link">Conheça o app</a>
          <a [routerLink]="app.privacidade" class="link">Política de privacidade</a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  app = RESULTADOS_LOTERIA;
}
