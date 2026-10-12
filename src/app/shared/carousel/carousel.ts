import { Component, computed, inject, input, signal } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { GalleryItem } from '../../models/project';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './styles.css'
})
export class Carousel {
  readonly t = inject(I18n).t;

  readonly items = input.required<GalleryItem[]>();
  /** Texto alternativo de cada elemento, en el mismo orden que `items`. */
  readonly alts = input<string[]>([]);

  readonly index = signal(0);
  readonly current = computed(() => this.items()[this.index()]);
  readonly currentAlt = computed(() => this.alts()[this.index()] ?? '');

  prev(): void {
    const total = this.items().length;
    this.index.update((i) => (i - 1 + total) % total);
  }

  next(): void {
    const total = this.items().length;
    this.index.update((i) => (i + 1) % total);
  }

  goTo(i: number): void {
    this.index.set(i);
  }
}
