import { Component, computed, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.html',
  styleUrl: './styles.css'
})
export class Process {
  private readonly i18n = inject(I18n);
  readonly t = this.i18n.t;

  readonly mailto = computed(
    () => `mailto:ruthchavar@gmail.com?subject=${encodeURIComponent(this.t().services.ctaSubject)}`
  );
}
