import {Component, input} from '@angular/core';
import {Project} from '../../../../data/model/project/project';
import {MatCard} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project-preview-card',
  templateUrl: './project-preview-card.html',
  styleUrl: './project-preview-card.scss',
  imports: [
    MatCard,
    MatIcon,
    MatTooltip,
    RouterLink
  ]
})
export class ProjectPreviewCard {
  readonly project = input.required<Project>();

  protected readonly AppEndpoints = AppEndpoints;
}
