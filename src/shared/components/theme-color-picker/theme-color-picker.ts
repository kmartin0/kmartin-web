import {Component, inject} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from '@angular/material/radio';
import {AppStore} from '../../../app/app-store';
import {ThemeColor} from '../../../data/model/settings/theme-color';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-theme-color-picker',
  templateUrl: 'theme-color-picker.html',
  styleUrl: 'theme-color-picker.scss',
  imports: [
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatRadioGroup,
    MatRadioButton,
    MatTooltip
  ]
})
export class ThemeColorPicker {
  private readonly appStore = inject(AppStore);

  protected readonly ThemeColor = ThemeColor;
  protected readonly themeColor = this.appStore.themeColor;

  /**
   * Applies the selected application theme color.
   *
   * @param event - Radio-button change containing the selected theme color.
   */
  protected onThemeColorSelected(event: MatRadioChange): void {
    this.appStore.setThemeColor(event.value);
  }
}
