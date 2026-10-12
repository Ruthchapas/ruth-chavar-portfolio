import { Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './styles.css'
})
export class About {
  private readonly i18n = inject(I18n);
  readonly t = this.i18n.t;
}
