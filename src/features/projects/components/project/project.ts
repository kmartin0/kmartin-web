import {Component, input} from '@angular/core';
import {Project as ProjectModel} from '../../../../data/model/project/project';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatDivider} from '@angular/material/list';
import {ProjectScreenshotCarousel} from '../project-screenshot-carousel/project-screenshot-carousel';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  imports: [
    MatIcon,
    MatTooltip,
    MatDivider,
    ProjectScreenshotCarousel
  ],
  styleUrl: './project.scss'
})
export class Project {
  readonly project = input.required<ProjectModel>();
}
