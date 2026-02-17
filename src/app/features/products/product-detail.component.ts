import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm text-gray-500">
        <a routerLink="/produtos" class="hover:text-violet-400 transition-colors">Produtos</a>
        <span class="mx-2">/</span>
        <span class="text-gray-300">Resultados Loteria do Brasil</span>
      </nav>

      <div class="bg-gray-900 border border-gray-800 rounded-xl p-8 sm:p-12">
        <!-- Header -->
        <div class="flex items-start gap-6 mb-8">
          <img src="assets/products/resultados-loteria-do-brasil.png"
               alt="Resultados Loteria do Brasil"
               class="w-16 h-16 shrink-0 rounded-2xl" />
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">Resultados Loteria do Brasil</h1>
            <p class="text-gray-400">Aplicativo gratuito para Android e iOS</p>
          </div>
        </div>

        <!-- Descrição -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-white mb-3">Sobre o aplicativo</h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            O Resultados Loteria do Brasil permite que você acompanhe os resultados de todas as loterias da Caixa
            Econômica Federal de forma rápida, prática e gratuita. O aplicativo não é afiliado a nenhuma entidade
            governamental e não representa o governo do Brasil.
          </p>
          <p class="text-gray-400 leading-relaxed">
            As informações são baseadas em fontes públicas e oficiais do site da CAIXA.
          </p>
        </div>

        <!-- Features -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-white mb-4">Funcionalidades</h2>
          <ul class="space-y-3">
            @for (feature of features; track feature) {
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            }
          </ul>
        </div>

        <!-- CTA Download -->
        <div class="mb-8 bg-gradient-to-r from-violet-600/10 to-emerald-600/10 border border-violet-500/20 rounded-xl p-6 sm:p-8 text-center">
          <h2 class="text-xl font-bold text-white mb-2">Baixe agora gratuitamente</h2>
          <p class="text-gray-400 mb-6 text-sm">Disponível para Android e iOS</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.solutionincode.resultadosloteriadobrasil"
               target="_blank" rel="noopener noreferrer"
               class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium px-6 py-3.5 rounded-xl transition-all hover:scale-105">
              <svg class="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.593-2.302 2.593-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
              </svg>
              <span class="text-left leading-tight">
                <span class="block text-[10px] uppercase tracking-wider text-gray-400">Disponível no</span>
                <span class="block text-base font-semibold">Google Play</span>
              </span>
            </a>
            <a href="https://apps.apple.com/br/app/resultados-loteria-do-brasil/id1548330205"
               target="_blank" rel="noopener noreferrer"
               class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium px-6 py-3.5 rounded-xl transition-all hover:scale-105">
              <svg class="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span class="text-left leading-tight">
                <span class="block text-[10px] uppercase tracking-wider text-gray-400">Baixe na</span>
                <span class="block text-base font-semibold">App Store</span>
              </span>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-4">
          <a routerLink="/produtos/resultados-loteria-do-brasil/privacidade"
             class="inline-flex items-center gap-2 border border-gray-700 hover:border-violet-500/50 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProductDetailComponent {
  features = [
    'Resultados atualizados de todas as loterias da Caixa',
    'Interface simples e intuitiva',
    'Notificações de novos resultados',
    'Histórico de resultados anteriores',
    'Aplicativo leve e rápido',
    'Disponível para Android e iOS',
    'Opção de remover anúncios via compra no app',
  ];
}
