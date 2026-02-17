import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-gray-800 bg-gray-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500">
            &copy; {{ year }} Solution in Code. Todos os direitos reservados.
          </p>
          <a href="mailto:suporte@solutionincode.com"
             class="text-sm text-gray-400 hover:text-violet-400 transition-colors">
            suporte&#64;solutionincode.com
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
