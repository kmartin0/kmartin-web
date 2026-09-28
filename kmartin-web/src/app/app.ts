import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

const ICONS_METADATA = [
  {name: 'linkedin', location: 'linkedin-icon.svg'},
  {name: 'github', location: 'github-icon.svg'}
];

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
    ICONS_METADATA.forEach(iconMetaData => {
      this.matIconRegistry.addSvgIcon(
        iconMetaData.name, this.domSanitizer.bypassSecurityTrustResourceUrl(iconMetaData.location)
      );
    });
  }
}
