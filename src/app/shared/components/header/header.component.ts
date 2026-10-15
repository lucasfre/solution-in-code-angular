import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <header class="border-b border-line bg-canvas/85 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a routerLink="/" class="rounded-md hover:opacity-80 transition-opacity" aria-label="Solution in Code — Início">
          <app-logo class="text-sm" />
        </a>

        <div class="flex items-center gap-2 sm:gap-6">
          <ul class="hidden sm:flex items-center gap-8">
            <li>
              <a routerLink="/" routerLinkActive="text-accent-strong!" [routerLinkActiveOptions]="{ exact: true }"
                 class="text-sm font-medium text-fg-muted hover:text-fg transition-colors">
                Início
              </a>
            </li>
            <li>
              <a routerLink="/produtos" routerLinkActive="text-accent-strong!"
                 class="text-sm font-medium text-fg-muted hover:text-fg transition-colors">
                Produtos
              </a>
            </li>
          </ul>

          <button
            (click)="alternarTema()"
            class="p-2 rounded-md text-fg-muted hover:text-fg transition-colors"
            [attr.aria-label]="escuro ? 'Ativar modo claro' : 'Ativar modo escuro'"
            [attr.title]="escuro ? 'Modo claro' : 'Modo escuro'"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              @if (escuro) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              }
            </svg>
          </button>

          <button
            (click)="menuOpen = !menuOpen"
            class="sm:hidden p-2 text-fg-muted hover:text-fg transition-colors"
            [attr.aria-expanded]="menuOpen"
            aria-label="Menu"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              @if (menuOpen) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      @if (menuOpen) {
        <ul class="sm:hidden border-t border-line px-4 py-4 space-y-3">
          <li>
            <a routerLink="/" (click)="menuOpen = false"
               routerLinkActive="text-accent-strong!" [routerLinkActiveOptions]="{ exact: true }"
               class="block text-sm font-medium text-fg-muted hover:text-fg transition-colors">
              Início
            </a>
          </li>
          <li>
            <a routerLink="/produtos" (click)="menuOpen = false"
               routerLinkActive="text-accent-strong!"
               class="block text-sm font-medium text-fg-muted hover:text-fg transition-colors">
              Produtos
            </a>
          </li>
        </ul>
      }
    </header>
  `,
})
export class HeaderComponent {
  private document = inject(DOCUMENT);

  menuOpen = false;
  /** O index.html já definiu o tema antes da página aparecer. */
  escuro = this.document.documentElement.dataset['theme'] === 'dark';

  alternarTema() {
    this.escuro = !this.escuro;
    const tema = this.escuro ? 'dark' : 'light';
    this.document.documentElement.dataset['theme'] = tema;
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', this.escuro ? '#121212' : '#fafaf8');
    try {
      localStorage.setItem('theme', tema);
    } catch {
      // Sem localStorage (modo privado restrito): o tema vale só nesta visita.
    }
  }
}
