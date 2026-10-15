import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESULTADOS_LOTERIA } from '../../../features/products/products';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  template: `
    <footer class="bg-inverse">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <app-logo tone="inverse" class="text-sm" />
          <nav aria-label="Rodapé" class="flex flex-col gap-2 text-sm">
            <a routerLink="/produtos" class="text-inverse-fg hover:text-accent transition-colors">Produtos</a>
            <a [routerLink]="app.privacidade" class="text-inverse-fg hover:text-accent transition-colors">
              Política de privacidade · {{ app.nome }}
            </a>
            <a href="mailto:suporte@solutionincode.com.br" class="text-inverse-fg hover:text-accent transition-colors">
              suporte&#64;solutionincode.com.br
            </a>
          </nav>
        </div>
        <p class="mt-10 text-sm text-inverse-muted">
          &copy; {{ year }} Solution in Code. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  app = RESULTADOS_LOTERIA;
  year = new Date().getFullYear();
}
