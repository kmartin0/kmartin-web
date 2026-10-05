import {Component, CUSTOM_ELEMENTS_SCHEMA, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {register} from 'swiper/element/bundle';
import {ProjectImage} from '../../../../data/model/project/project-image';

register();

@Component({
  selector: 'app-project-screenshot-carousel',
  templateUrl: './project-screenshot-carousel.html',
  styleUrl: './project-screenshot-carousel.scss',
  imports: [
    NgOptimizedImage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProjectScreenshotCarousel {
  readonly screenshots = input.required<readonly ProjectImage[]>();
}
