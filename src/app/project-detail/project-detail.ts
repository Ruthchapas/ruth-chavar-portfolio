import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PROJECTS } from '../data/projects-data';
import { I18n } from '../i18n/i18n';
import { Carousel } from '../shared/carousel/carousel';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Carousel],
  templateUrl: './project-detail.html',
  styleUrl: './styles.css'
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18n);
  readonly t = this.i18n.t;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: this.route.snapshot.paramMap.get('slug') }
  );

  readonly project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));

  readonly text = computed(() => {
    const project = this.project();
    return project ? this.t().catalog.projects[project.code] : undefined;
  });

  readonly paragraphs = computed(() => {
    const text = this.text();
    return text?.detail?.length ? text.detail : text ? [text.description] : [];
  });
}
