import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a routerLink="/" class="text-xl font-bold tracking-tight text-white hover:text-violet-400 transition-colors">
          Solution in Code
        </a>

        <button
          (click)="menuOpen = !menuOpen"
          class="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
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

        <ul class="hidden sm:flex items-center gap-8">
          <li>
            <a routerLink="/" routerLinkActive="text-violet-400" [routerLinkActiveOptions]="{ exact: true }"
               class="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Início
            </a>
          </li>
          <li>
            <a routerLink="/produtos" routerLinkActive="text-violet-400"
               class="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Produtos
            </a>
          </li>
        </ul>
      </nav>

      @if (menuOpen) {
        <ul class="sm:hidden border-t border-gray-800 px-4 py-4 space-y-3">
          <li>
            <a routerLink="/" (click)="menuOpen = false"
               routerLinkActive="text-violet-400" [routerLinkActiveOptions]="{ exact: true }"
               class="block text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Início
            </a>
          </li>
          <li>
            <a routerLink="/produtos" (click)="menuOpen = false"
               routerLinkActive="text-violet-400"
               class="block text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Produtos
            </a>
          </li>
        </ul>
      }
    </header>
  `,
})
export class HeaderComponent {
  menuOpen = false;
}
