import {computed, DOCUMENT, effect, inject, Injectable} from '@angular/core';
import {SettingsRepository} from '../data/repository/settings-repository';
import {getNextThemeMode, THEME_MODE_BODY_CLASSES, ThemeMode} from '../data/model/settings/theme-mode';

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

  constructor() {
    this.registerThemeModeEffect();
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
   * Toggles between the available application theme modes.
   */
  toggleThemeMode(): void {
    this.settingsRepository.updateSettings({
      themeMode: getNextThemeMode(this.themeMode())
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
}
