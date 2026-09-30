import {Component} from '@angular/core';
import {ThemeModeToggle} from '../theme-toggle/theme-mode-toggle';
import {AppEndpoints} from '../../../../app/app-endpoints';
import {RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {ThemeColorPicker} from '../theme-color-picker/theme-color-picker';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.html',
  styleUrl: './home-toolbar.scss',
  imports: [
    ThemeModeToggle,
    RouterLink,
    MatToolbar,
    ThemeColorPicker
  ]
})
export class HomeToolbar {
  protected readonly AppEndpoints = AppEndpoints;
}
