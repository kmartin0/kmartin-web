/**
 * Applies the persisted application theme before Angular initializes.
 *
 * Keep the values in sync with their Angular counterparts:
 * - STORAGE_KEY mirrors SettingsRepository.
 *
 * - DEFAULT_THEME_MODE mirrors DEFAULT_THEME_MODE from theme-mode.ts.
 * - THEME_MODE_BODY_CLASSES mirrors THEME_MODE_BODY_CLASSES from theme-mode.ts.
 *
 * - DEFAULT_THEME_COLOR mirrors DEFAULT_THEME_COLOR from theme-color.ts.
 * - THEME_COLOR_BODY_CLASSES mirrors THEME_COLOR_BODY_CLASSES from theme-color.ts.
 *
 * This script runs before Angular startup to prevent a flash of the default
 * theme when persisted theme settings exist.
 */
(function () {
  const STORAGE_KEY = 'kmartin-web:app-settings';

  const DEFAULT_THEME_MODE = 'light';
  const DEFAULT_THEME_COLOR = 'cream';

  const THEME_MODE_BODY_CLASSES = {
    light: 'theme-mode-light',
    dark: 'theme-mode-dark'
  };

  const THEME_COLOR_BODY_CLASSES = {
    cream: 'theme-color-cream',
    blue: 'theme-color-blue',
    green: 'theme-color-green',
    pink: 'theme-color-pink'
  };

  function loadSettings() {
    try {
      const storedSettings = localStorage.getItem(STORAGE_KEY);

      return storedSettings === null
        ? null
        : JSON.parse(storedSettings);
    } catch {
      return null;
    }
  }

  function applyTheme(themeMode, themeColor) {
    const themeModeClass =
      THEME_MODE_BODY_CLASSES[themeMode]
      ?? THEME_MODE_BODY_CLASSES[DEFAULT_THEME_MODE];

    const themeColorClass =
      THEME_COLOR_BODY_CLASSES[themeColor]
      ?? THEME_COLOR_BODY_CLASSES[DEFAULT_THEME_COLOR];

    document.body.classList.add(themeModeClass, themeColorClass);
  }

  const settings = loadSettings();

  applyTheme(settings?.themeMode, settings?.themeColor);
})();
