import { Component, signal } from '@angular/core';

interface ExpertiseItem {
  id: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.html',
  styleUrl: './styles.css'
})
export class Expertise {
  readonly items: ExpertiseItem[] = [
    {
      id: 'apps',
      title: 'Aplicaciones web',
      detail:
        'Desarrollo de productos digitales a medida, desde el primer prototipo hasta producción, con Angular y TypeScript.'
    },
    {
      id: 'cultura',
      title: 'Proyectos para cultura',
      detail:
        'Catálogos digitales, visores de colección y webs para museos, archivos y espacios patrimoniales.'
    },
    {
      id: 'modernizacion',
      title: 'Modernización de productos',
      detail:
        'Migración y rediseño técnico de plataformas que se han quedado atrás, sin parar el negocio mientras tanto.'
    },
    {
      id: 'consultoria',
      title: 'Consultoría técnica',
      detail:
        'Arquitectura, elección de stack y acompañamiento en decisiones difíciles antes de que se conviertan en problemas caros.'
    }
  ];

  readonly openId = signal<string | null>(null);

  toggle(id: string): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
