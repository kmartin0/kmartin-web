import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {APP_SVG_ICONS} from '../data/static/icons/app-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer = inject(DomSanitizer);

  constructor() {
    this.registerIcons();
  }

  /**
   * Registers the custom application icons.
   */
  private registerIcons(): void {
    Object.values(APP_SVG_ICONS).forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon.id,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
