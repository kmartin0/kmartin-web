import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {HomeToolbar} from '../../components/home-toolbar/home-toolbar';

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
    HomeToolbar
  ],
  styleUrl: './home-page.scss'
})
export class HomePage {

  protected readonly SOCIAL_LINKS = SOCIAL_LINKS;
}
