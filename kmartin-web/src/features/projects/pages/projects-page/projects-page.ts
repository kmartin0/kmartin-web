import {Component, inject} from '@angular/core';
import {ProjectRepository} from '../../../../data/repository/project-repository';
import {AppToolbar} from '../../../../shared/components/app-toolbar/app-toolbar';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {ProjectPreviewCard} from '../../components/project-preview-card/project-preview-card';
import {ProjectGroup} from '../../components/project-group/project-group';
import {MatDivider} from '@angular/material/list';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.html',
  imports: [
    AppToolbar,
    ProjectPreviewCard,
    ProjectGroup,
    MatDivider
  ],
  styleUrl: './projects-page.scss'
})
export class ProjectsPage {
  private readonly projectRepository = inject(ProjectRepository);

  protected readonly projectGroups = this.projectRepository.projectGroups;
  protected readonly AppEndpoints = AppEndpoints;
}
