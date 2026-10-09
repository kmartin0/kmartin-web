import {Component, input} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {ThemeColorPicker} from '../theme-color-picker/theme-color-picker';
import {ThemeModeToggle} from '../theme-toggle/theme-mode-toggle';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.html',
  imports: [
    MatToolbar,
    RouterLink,
    ThemeColorPicker,
    ThemeModeToggle
  ],
  styleUrl: './app-toolbar.scss'
})
export class AppToolbar {
  readonly title = input.required<string>();
  readonly titleLink = input<string | null>(null);
}
