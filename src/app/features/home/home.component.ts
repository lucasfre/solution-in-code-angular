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
      <p class="text-sm font-bold uppercase tracking-wider text-accent-strong mb-4">Sistemas · Apps · Ferramentas</p>
      <h1 class="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold text-fg mb-6">
        Soluções em código, construídas com <span class="text-accent-strong">IA e agentes</span>.
      </h1>
      <p class="max-w-2xl text-lg sm:text-xl text-fg-muted mb-10">
        A Solution in Code é uma empresa brasileira de tecnologia. Criamos sistemas pessoais e empresariais, apps e
        ferramentas, com agentes de IA trabalhando em cada etapa para entregar mais rápido e com qualidade.
      </p>
      <a routerLink="/produtos" class="btn-primary px-8">
        Conheça nossos produtos
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </section>

    <!-- O que fazemos -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <h2 class="text-3xl sm:text-4xl font-bold text-fg mb-3">O que fazemos</h2>
      <p class="text-lg text-fg-muted mb-10 max-w-2xl">Software sob medida, do uso pessoal ao dia a dia de uma empresa.</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        @for (area of areas; track area.titulo) {
          <div class="card p-6">
            <div class="w-12 h-12 mb-5 rounded-lg bg-accent-soft flex items-center justify-center text-accent-strong">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="area.icone" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-fg mb-2">{{ area.titulo }}</h3>
            <p class="text-sm text-fg-muted leading-relaxed">{{ area.texto }}</p>
          </div>
        }
      </div>
    </section>

    <!-- Como trabalhamos -->
    <section class="bg-inverse">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <p class="text-sm font-bold uppercase tracking-wider text-accent mb-4">Como trabalhamos</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-inverse-fg mb-4">Desenvolvimento com IA e agentes</h2>
        <p class="text-lg text-inverse-muted mb-12 max-w-3xl">
          Agentes de IA trabalham junto com a gente do começo ao fim: aceleram o que é repetitivo e deixam mais tempo
          para o que importa. As decisões e a revisão final continuam com a gente.
        </p>
        <div class="grid md:grid-cols-3 gap-10">
          @for (etapa of etapas; track etapa.titulo) {
            <div>
              <div class="w-10 h-1 rounded-full bg-accent mb-5"></div>
              <h3 class="text-lg font-bold text-inverse-fg mb-2">{{ etapa.titulo }}</h3>
              <p class="text-inverse-muted leading-relaxed">{{ etapa.texto }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Produtos -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 class="text-3xl sm:text-4xl font-bold text-fg mb-3">Nossos produtos</h2>
      <p class="text-lg text-fg-muted mb-10 max-w-2xl">Feitos e mantidos pela Solution in Code.</p>
      <div class="card p-6 sm:p-10">
        <div class="flex items-center gap-4 mb-6">
          <img [src]="app.icone" alt="" class="w-16 h-16 shrink-0 rounded-2xl" />
          <div>
            <h3 class="text-2xl font-bold text-fg">{{ app.nome }}</h3>
            <p class="text-sm text-fg-muted">App grátis para Android e iOS</p>
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

  areas = [
    {
      titulo: 'Sistemas pessoais',
      texto: 'Ferramentas sob medida para organizar a rotina, acompanhar informações e resolver problemas do dia a dia.',
      icone: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      titulo: 'Sistemas empresariais',
      texto: 'Sistemas web e integrações que automatizam processos e conectam os dados do seu negócio.',
      icone:
        'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      titulo: 'Apps',
      texto: 'Aplicativos para Android e iOS, da ideia à publicação nas lojas.',
      icone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
    {
      titulo: 'Ferramentas e automações',
      texto: 'Bots e rotinas que rodam sozinhos: coletam dados, geram relatórios e publicam conteúdo.',
      icone:
        'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    },
  ];

  etapas = [
    {
      titulo: 'Da ideia à especificação',
      texto: 'Agentes transformam o pedido em requisitos e critérios de aceite antes da primeira linha de código.',
    },
    {
      titulo: 'Código revisado e testado',
      texto: 'Cada entrega passa por agentes de revisão de código, testes e segurança.',
    },
    {
      titulo: 'Operação no automático',
      texto: 'Rotinas de análise, relatórios e publicações rodam sozinhas, todos os dias.',
    },
  ];
}
