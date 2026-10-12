import { ViewportScroller } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { I18n } from './i18n/i18n';
import { Locale } from './i18n/translations.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './styles.css'
})
export class App implements OnInit {
  private readonly i18n = inject(I18n);
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);

  readonly t = this.i18n.t;
  readonly locale = this.i18n.locale;
  readonly locales = this.i18n.locales;
  readonly year = new Date().getFullYear();

  private isFirstNavigation = true;

  ngOnInit(): void {
    // Evita que el navegador restaure la posición de scroll anterior al recargar.
    this.viewportScroller.setHistoryScrollRestoration('manual');

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        // Al cargar o recargar la página nos quedamos arriba (en el héroe),
        // aunque la URL lleve un #fragmento de una visita anterior.
        if (this.isFirstNavigation) {
          this.isFirstNavigation = false;
          this.viewportScroller.scrollToPosition([0, 0]);
          return;
        }

        const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;
        if (fragment) {
          // Esperamos a que la página se pinte y a que carguen las fuentes
          // para que el destino no se mueva después de hacer el scroll.
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              document.fonts.ready.then(() => this.viewportScroller.scrollToAnchor(fragment))
            )
          );
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

  setLocale(locale: Locale): void {
    this.i18n.setLocale(locale);
  }
}
