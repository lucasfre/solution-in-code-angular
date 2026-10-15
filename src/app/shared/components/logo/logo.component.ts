import { Component, Input } from '@angular/core';

/**
 * Logo da Solution in Code (símbolo "S de chevrons" + nome empilhado).
 * O tamanho segue o font-size do elemento: `<app-logo class="text-sm" />`.
 * Só o símbolo: public/brand/symbol.svg. Regras de uso em DESIGN-SYSTEM.md.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  host: {
    class: 'inline-flex items-center gap-[0.55em]',
    '[class.text-fg]': "tone === 'default'",
    '[class.text-inverse-fg]': "tone === 'inverse'",
    role: 'img',
    'aria-label': 'Solution in Code',
  },
  template: `
    <svg
      viewBox="0 0 100 100"
      class="h-[2.4em] w-[2.4em] shrink-0"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="72,16 28,38 72,62" stroke="currentColor" stroke-width="13" />
      <line x1="72" y1="62" x2="28" y2="84" class="stroke-accent" stroke-width="13" />
    </svg>
    <span class="flex flex-col font-bold uppercase leading-[0.95] tracking-[0.01em]">
      <span>Solution</span>
      <span class="flex gap-[0.3em]">
        <span class="text-accent">In</span>
        <span>Code</span>
      </span>
    </span>
  `,
})
export class LogoComponent {
  /** `default`: para fundo claro · `inverse`: para fundo escuro (bg-inverse). */
  @Input() tone: 'default' | 'inverse' = 'default';
}
