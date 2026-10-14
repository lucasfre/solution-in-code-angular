import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <!-- Hero -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-fg mb-6">
        Transformamos ideias em
        <span class="text-accent-strong">soluções digitais</span>
      </h1>
      <p class="text-lg sm:text-xl text-fg-muted max-w-2xl mx-auto mb-10">
        Desenvolvemos aplicativos móveis inovadores e de alta qualidade para simplificar o dia a dia.
      </p>
      <a routerLink="/produtos" class="btn-primary px-8">
        Conheça nossos produtos
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </section>

    <!-- Destaques -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <app-section-title
        title="Por que a Solution in Code?"
        subtitle="Nosso compromisso com qualidade e inovação nos guia em cada projeto."
      />
      <div class="grid sm:grid-cols-3 gap-8">
        @for (card of highlights; track card.title) {
          <div class="card-interactive p-8 text-center">
            <div class="w-12 h-12 mx-auto mb-5 rounded-lg bg-accent-soft flex items-center justify-center text-accent-strong">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="card.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-fg mb-2">{{ card.title }}</h3>
            <p class="text-sm text-fg-muted">{{ card.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class HomeComponent {
  highlights = [
    {
      title: 'Inovação',
      description: 'Utilizamos as tecnologias mais recentes para criar experiências únicas e modernas.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Qualidade',
      description: 'Cada detalhe é pensado para garantir a melhor experiência ao usuário final.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Simplicidade',
      description: 'Soluções intuitivas que resolvem problemas reais de forma simples e eficiente.',
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    },
  ];
}
