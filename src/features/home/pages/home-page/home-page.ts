import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {RouterLink} from '@angular/router';
import {AppToolbar} from '../../../../shared/components/app-toolbar/app-toolbar';
import {APP_SVG_ICONS} from '../../../../data/static/icons/app-svg-icons';

const SOCIAL_LINKS = [
  {icon: APP_SVG_ICONS.github, url: 'https://github.com/kmartin0'},
  {icon: APP_SVG_ICONS.linkedin, url: 'https://linkedin.com/in/pk-martin'},
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [
    MatIcon,
    MatTooltip,
    MatButton,
    RouterLink,
    AppToolbar
  ],
  styleUrl: './home-page.scss'
})
export class HomePage {
  protected readonly SOCIAL_LINKS = SOCIAL_LINKS;
  protected readonly AppEndpoints = AppEndpoints;
}
