import { Component, inject, signal } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './styles.css'
})
export class Services {
  private readonly i18n = inject(I18n);
  readonly t = this.i18n.t;

  /** Servicio desplegado (solo uno a la vez); el primero empieza abierto. */
  readonly open = signal<number | null>(0);

  toggle(index: number): void {
    this.open.update((current) => (current === index ? null : index));
  }

  /** Cada servicio abre un correo con su nombre en el asunto. */
  mailtoFor(title: string): string {
    const subject = `${this.t().services.ctaSubject}: ${title}`;
    return `mailto:ruthchavar@gmail.com?subject=${encodeURIComponent(subject)}`;
  }
}
