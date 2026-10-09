/**
 * Available application theme modes.
 */
export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export const DEFAULT_THEME_MODE: ThemeMode = ThemeMode.LIGHT;

export const THEME_MODE_BODY_CLASSES: Readonly<Record<ThemeMode, string>> =
  Object.freeze({
    [ThemeMode.LIGHT]: 'theme-mode-light',
    [ThemeMode.DARK]: 'theme-mode-dark'
  });

/**
 * Checks whether a value is a supported theme mode.
 *
 * @param value - Value to check.
 * @returns Whether the value is a supported theme mode.
 */
export function isThemeMode(value: unknown): value is ThemeMode {
  return value === ThemeMode.LIGHT || value === ThemeMode.DARK;
}

/**
 * Gets the next available theme mode.
 *
 * @param themeMode - Current theme mode.
 * @returns Theme mode to apply after toggling.
 */
export function getNextThemeMode(themeMode: ThemeMode): ThemeMode {
  switch (themeMode) {
    case ThemeMode.LIGHT:
      return ThemeMode.DARK;

    case ThemeMode.DARK:
      return ThemeMode.LIGHT;
  }
}
