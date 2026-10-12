import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects-data';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './catalog.html',
  styleUrl: './styles.css'
})
export class Catalog {
  private readonly i18n = inject(I18n);
  readonly t = this.i18n.t;

  readonly projects = computed(() =>
    PROJECTS.map((meta) => ({
      ...meta,
      ...this.t().catalog.projects[meta.code]
    }))
  );

  isInternal(url: string): boolean {
    return url.startsWith('/');
  }
}
