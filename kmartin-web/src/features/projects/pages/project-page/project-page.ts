import {Component, inject} from '@angular/core';
import {AppToolbar} from '../../../../shared/components/app-toolbar/app-toolbar';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {ProjectPageStore} from './project-page-store';
import {PageError} from '../../../../shared/components/page-error/page-error';
import {Project} from '../../components/project/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
  imports: [
    AppToolbar,
    PageError,
    Project
  ],
  providers: [
    ProjectPageStore
  ]
})
export class ProjectPage {
  private readonly store = inject(ProjectPageStore);

  protected readonly AppEndpoints = AppEndpoints;
  protected readonly uiState = this.store.state;
}
