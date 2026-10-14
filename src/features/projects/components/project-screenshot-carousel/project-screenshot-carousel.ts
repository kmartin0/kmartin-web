import {Component, CUSTOM_ELEMENTS_SCHEMA, input} from '@angular/core';
import {ProjectImage} from '../../../../data/model/project/project-image';

@Component({
  selector: 'app-project-screenshot-carousel',
  templateUrl: './project-screenshot-carousel.html',
  styleUrl: './project-screenshot-carousel.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProjectScreenshotCarousel {
  readonly screenshots = input.required<readonly ProjectImage[]>();
}
