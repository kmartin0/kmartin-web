import {Component, CUSTOM_ELEMENTS_SCHEMA, input} from '@angular/core';
import {register} from 'swiper/element/bundle';
import {ProjectImage} from '../../../../data/model/project/project-image';
import {MatTooltip} from '@angular/material/tooltip';

register();

@Component({
  selector: 'app-project-screenshot-carousel',
  templateUrl: './project-screenshot-carousel.html',
  styleUrl: './project-screenshot-carousel.scss',
  imports: [
    MatTooltip
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProjectScreenshotCarousel {
  readonly screenshots = input.required<readonly ProjectImage[]>();
}
