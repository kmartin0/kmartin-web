import {Routes} from '@angular/router';
import {HomePage} from '../features/home/pages/home-page/home-page';
import {ProjectsPage} from '../features/projects/pages/projects-page/projects-page';
import {PageError} from '../shared/components/page-error/page-error';
import {ProjectPage} from '../features/projects/pages/project-page/project-page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'projects', component: ProjectsPage},
  {path: 'projects/:projectId', component: ProjectPage},
  {path: '**', component: PageError, data: {message: '404 Page Not Found', showHomeButton: true}}
];
