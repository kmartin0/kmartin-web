import {Routes} from '@angular/router';
import {HomePage} from '../features/home/pages/home-page/home-page';
import {ProjectsPage} from '../features/projects/pages/projects-page/projects-page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'projects', component: ProjectsPage},
];
