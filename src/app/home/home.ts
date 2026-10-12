import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { Catalog } from './catalog/catalog';
import { About } from './about/about';

@Component({
  selector: 'app-home',
  imports: [Hero, Catalog, About],
  templateUrl: './home.html',
  styleUrl: './styles.css'
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');

    this.revealObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => this.revealObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
