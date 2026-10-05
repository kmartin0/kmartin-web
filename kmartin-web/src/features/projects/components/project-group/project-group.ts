import {Component, input} from '@angular/core';
import {ProjectGroup as ProjectGroupModel} from '../../../../data/model/project/project-group';
import {ProjectPreviewCard} from '../project-preview-card/project-preview-card';

@Component({
  selector: 'app-project-group',
  templateUrl: './project-group.html',
  styleUrl: './project-group.scss',
  imports: [
    ProjectPreviewCard
  ]
})
export class ProjectGroup {
  readonly projectGroup = input.required<ProjectGroupModel>();
}
