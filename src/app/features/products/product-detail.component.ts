import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StoreBadgesComponent } from '../../shared/components/store-badges/store-badges.component';
import { RESULTADOS_LOTERIA } from './products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, StoreBadgesComponent],
  template: `
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm text-fg-muted" aria-label="Você está em">
        <a routerLink="/produtos" class="hover:text-accent-strong transition-colors">Produtos</a>
        <span class="mx-2">/</span>
        <span class="text-fg">{{ app.nome }}</span>
      </nav>

      <!-- Cabeçalho -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
        <img [src]="app.icone" alt="" class="w-20 h-20 shrink-0 rounded-2xl" />
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold text-fg mb-2">{{ app.nome }}</h1>
          <p class="text-fg-muted">Grátis para Android e iOS</p>
        </div>
      </div>
      <p class="text-lg text-fg-muted mb-8 max-w-2xl">{{ app.resumo }}</p>
      <app-store-badges [googlePlay]="app.googlePlay" [appStore]="app.appStore" class="mb-16" />

      <!-- Funcionalidades -->
      <h2 class="text-2xl font-bold text-fg mb-6">O que o app faz</h2>
      <div class="grid sm:grid-cols-2 gap-4 mb-12">
        @for (item of funcionalidades; track item.titulo) {
          <div class="card p-6">
            <h3 class="font-bold text-fg mb-2">{{ item.titulo }}</h3>
            <p class="text-sm text-fg-muted leading-relaxed">{{ item.texto }}</p>
          </div>
        }
      </div>

      <!-- Aviso -->
      <p class="bg-accent-soft rounded-xl p-5 text-sm text-fg leading-relaxed mb-12">
        Este aplicativo não é afiliado a nenhuma entidade governamental e não representa o governo do Brasil. Os
        resultados vêm de fontes públicas e oficiais, como o site da
        <a href="https://caixa.gov.br/" target="_blank" rel="noopener noreferrer" class="link">CAIXA</a>.
      </p>

      <!-- Redes -->
      <h2 class="text-2xl font-bold text-fg mb-2">Resultados também em vídeo</h2>
      <p class="text-fg-muted mb-6">Acompanhe os sorteios no YouTube e no Facebook.</p>
      <div class="flex flex-wrap gap-3 mb-12">
        <a [href]="app.youtube" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
          </svg>
          YouTube
        </a>
        <a [href]="app.facebook" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/>
          </svg>
          Facebook
        </a>
      </div>

      <!-- Privacidade e suporte -->
      <div class="border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <a [routerLink]="app.privacidade" class="btn-secondary self-start">Política de privacidade</a>
        <p class="text-sm text-fg-muted">
          Dúvidas ou sugestões:
          <a href="mailto:suporte@solutionincode.com" class="link">suporte&#64;solutionincode.com</a>
        </p>
      </div>
    </section>
  `,
})
export class ProductDetailComponent {
  app = RESULTADOS_LOTERIA;

  funcionalidades = [
    {
      titulo: 'Todas as loterias da Caixa',
      texto:
        'Mega-Sena, Lotofácil, Quina, Lotomania, Timemania, Dupla Sena, Dia de Sorte, Super Sete, +Milionária, Loteca e Federal, com a premiação de cada faixa e as cidades dos ganhadores.',
    },
    {
      titulo: 'Meus jogos',
      texto: 'Salve suas apostas e o app confere sozinho a cada concurso, destacando os números que você acertou.',
    },
    {
      titulo: 'Aviso de resultado',
      texto: 'Receba uma notificação quando sair o resultado. Você escolhe de quais loterias quer ser avisado.',
    },
    {
      titulo: 'Concursos anteriores e próximos',
      texto: 'Navegue pelos concursos anteriores, busque pelo número e veja a data e o prêmio estimado do próximo.',
    },
    {
      titulo: 'Sem anúncios',
      texto: 'Planos mensal, anual ou vitalício para usar sem anúncios e consultar os resultados mesmo sem internet.',
    },
    {
      titulo: 'Seus dados, sua escolha',
      texto: 'Apague seus dados quando quiser, direto nas configurações do app.',
    },
  ];
}
