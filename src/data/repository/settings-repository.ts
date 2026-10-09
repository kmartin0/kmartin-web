import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {AppSettings, DEFAULT_APP_SETTINGS, resolveAppSettings} from '../model/settings/app-settings';
import {tryParseJson} from '../../shared/utils/json.util';

const APP_SETTINGS_LOCAL_STORAGE_KEY = 'kmartin-web:app-settings';

/**
 * Repository responsible for application settings.
 *
 * Owns the reactive settings state and synchronizes persisted preferences
 * with local storage, including changes made in other tabs.
 */
@Injectable({providedIn: 'root'})
export class SettingsRepository {
  private readonly destroyRef = inject(DestroyRef);

  private readonly _settings = signal<AppSettings>({...DEFAULT_APP_SETTINGS});

  readonly settings = this._settings.asReadonly();

  constructor() {
    this.loadSettings();
    this.registerStorageEventListener();
  }

  /**
   * Updates selected application settings and persists the resulting settings.
   *
   * Missing properties are preserved from the current settings state.
   * If persistence fails, the updated settings remain active for the current session.
   *
   * @param changes - Settings properties to update.
   */
  updateSettings(changes: Partial<AppSettings>): void {
    const settings = {
      ...this._settings(),
      ...changes
    };

    this._settings.set(settings);

    try {
      localStorage.setItem(APP_SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Settings remain available for the current session.
    }
  }

  /**
   * Registers the listener that synchronizes application settings across tabs.
   */
  private registerStorageEventListener(): void {
    const handleStorageEvent = (event: StorageEvent): void => {
      if (event.key === APP_SETTINGS_LOCAL_STORAGE_KEY || event.key === null) {
        this.loadSettings();
      }
    };

    window.addEventListener('storage', handleStorageEvent);

    this.destroyRef.onDestroy(() => window.removeEventListener('storage', handleStorageEvent));
  }

  /**
   * Loads the persisted application settings into the reactive state.
   *
   * Missing, invalid, or unreadable settings fall back to their defaults.
   * Loading does not write settings back to local storage.
   */
  private loadSettings(): void {
    let settings: AppSettings;

    try {
      const storedSettings = localStorage.getItem(APP_SETTINGS_LOCAL_STORAGE_KEY);

      settings = storedSettings === null
        ? {...DEFAULT_APP_SETTINGS}
        : resolveAppSettings(tryParseJson(storedSettings));
    } catch {
      settings = {...DEFAULT_APP_SETTINGS};
    }

    this._settings.set(settings);
  }
}
