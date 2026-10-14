import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-fg mb-3">{{ title }}</h2>
      @if (subtitle) {
        <p class="text-fg-muted max-w-2xl mx-auto">{{ subtitle }}</p>
      }
    </div>
  `,
})
export class SectionTitleComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}
