import {Component} from '@angular/core';
import {ThemeToggle} from '../theme-toggle/theme-toggle';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.html',
  styleUrl: './home-toolbar.scss',
  imports: [
    ThemeToggle,
    RouterLink,
    MatToolbar
  ]
})
export class HomeToolbar {
  protected readonly AppEndpoints = AppEndpoints;
}
