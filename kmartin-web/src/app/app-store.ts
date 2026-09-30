import {computed, DOCUMENT, effect, inject, Injectable} from '@angular/core';
import {SettingsRepository} from '../data/repository/settings-repository';
import {getNextThemeMode, THEME_MODE_BODY_CLASSES, ThemeMode} from '../data/model/settings/theme-mode';
import {THEME_COLOR_BODY_CLASSES, ThemeColor} from '../data/model/settings/theme-color';

/**
 * Application-level store that exposes global UI state and actions.
 */
@Injectable({
  providedIn: 'root',
})
export class AppStore {
  private readonly settingsRepository = inject(SettingsRepository);
  private readonly document = inject(DOCUMENT);

  readonly appSettings = this.settingsRepository.settings;

  readonly themeMode = computed(() => this.appSettings().themeMode);
  readonly themeColor = computed(() => this.appSettings().themeColor);

  constructor() {
    this.registerThemeModeEffect();
    this.registerThemeColorEffect();
  }

  /**
   * Registers the effect that applies the current theme mode whenever it changes.
   */
  private registerThemeModeEffect(): void {
    effect(() => {
      this.applyThemeMode(this.themeMode());
    });
  }

  /**
   * Registers the effect that applies the current theme color whenever it changes.
   */
  private registerThemeColorEffect(): void {
    effect(() => {
      this.applyThemeColor(this.themeColor());
    });
  }

  /**
   * Toggles between the available application theme modes.
   */
  toggleThemeMode(): void {
    this.settingsRepository.updateSettings({
      themeMode: getNextThemeMode(this.themeMode())
    });
  }

  /**
   * Sets the application theme color.
   *
   * @param themeColor - Theme color to use.
   */
  setThemeColor(themeColor: ThemeColor): void {
    this.settingsRepository.updateSettings({
      themeColor
    });
  }

  /**
   * Applies the given theme mode to the document body.
   *
   * Removes any previously applied theme-mode class before adding the class
   * associated with the new mode.
   *
   * @param themeMode - Theme mode to apply.
   */
  private applyThemeMode(themeMode: ThemeMode): void {
    const bodyClasses = this.document.body.classList;

    bodyClasses.remove(...Object.values(THEME_MODE_BODY_CLASSES));
    bodyClasses.add(THEME_MODE_BODY_CLASSES[themeMode]);
  }

  /**
   * Applies the given theme color to the document body.
   *
   * Removes any previously applied theme-color class before adding the class
   * associated with the new color.
   *
   * @param themeColor - Theme color to apply.
   */
  private applyThemeColor(themeColor: ThemeColor): void {
    const bodyClasses = this.document.body.classList;

    bodyClasses.remove(...Object.values(THEME_COLOR_BODY_CLASSES));
    bodyClasses.add(THEME_COLOR_BODY_CLASSES[themeColor]);
  }
}
