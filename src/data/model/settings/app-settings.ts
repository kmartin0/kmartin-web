import {DEFAULT_THEME_MODE, isThemeMode, ThemeMode} from './theme-mode';
import {DEFAULT_THEME_COLOR, isThemeColor, ThemeColor} from './theme-color';

export interface AppSettings {
  themeMode: ThemeMode;
  themeColor: ThemeColor
}

export const DEFAULT_APP_SETTINGS: AppSettings = {
  themeMode: DEFAULT_THEME_MODE,
  themeColor: DEFAULT_THEME_COLOR
};

/**
 * Resolves application settings from an unknown stored value.
 *
 * Missing or invalid properties are replaced with their defaults.
 *
 * @param value - Stored value to resolve.
 * @returns Valid application settings.
 */
export function resolveAppSettings(value: unknown): AppSettings {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return {...DEFAULT_APP_SETTINGS};
  }

  const settings = value as Record<string, unknown>;

  return {
    themeMode: isThemeMode(settings['themeMode'])
      ? settings['themeMode']
      : DEFAULT_APP_SETTINGS.themeMode,

    themeColor: isThemeColor(settings['themeColor'])
      ? settings['themeColor']
      : DEFAULT_APP_SETTINGS.themeColor
  };
}
