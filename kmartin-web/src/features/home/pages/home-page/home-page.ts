import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {RouterLink} from '@angular/router';
import {AppToolbar} from '../../../../shared/components/app-toolbar/app-toolbar';

const SOCIAL_LINKS = [
  {name: 'Github', icon: 'github', url: 'https://github.com/kmartin0'},
  {name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/pk-martin'},
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
