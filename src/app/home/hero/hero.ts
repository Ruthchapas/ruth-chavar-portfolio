import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './styles.css'
})
export class Hero implements AfterViewInit, OnDestroy {
  private readonly i18n = inject(I18n);
  readonly t = this.i18n.t;

  @ViewChild('heroVideo') private heroVideo?: ElementRef<HTMLVideoElement>;

  private readonly onVisibilityChange = (): void => {
    if (document.visibilityState === 'visible') {
      this.tryPlay();
    }
  };

  ngAfterViewInit(): void {
    // Si la persona prefiere menos movimiento, el vídeo ni se reproduce:
    // se queda quieto sobre el color de fondo.
    if (this.prefersReducedMotion()) {
      return;
    }

    this.tryPlay();

    // Algunos navegadores pausan el vídeo al llevar la pestaña a segundo
    // plano y no lo reanudan solos al volver: lo reintentamos a mano.
    document.addEventListener('visibilitychange', this.onVisibilityChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  private tryPlay(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video || !video.paused) {
      return;
    }

    // Algunos navegadores no reflejan bien el atributo `muted` del HTML en
    // la propiedad del elemento; forzarlo evita que el autoplay se bloquee
    // por confundirse con un vídeo con sonido.
    video.muted = true;

    video.play().catch(() => {
      // Si el navegador bloquea el autoplay, no pasa nada:
      // el color de fondo hace de respaldo igualmente.
    });
  }
}
