import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent],
  template: `
    <footer class="bg-inverse">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
          <app-logo tone="inverse" class="text-sm" />
          <div class="flex flex-col sm:items-end items-center gap-1">
            <a href="mailto:suporte@solutionincode.com"
               class="text-sm text-inverse-fg hover:text-accent transition-colors">
              suporte&#64;solutionincode.com
            </a>
            <p class="text-sm text-inverse-muted">
              &copy; {{ year }} Solution in Code. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
