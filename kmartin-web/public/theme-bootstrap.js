/**
 * Applies the persisted application theme before Angular initializes.
 *
 * Keep the values in sync with their Angular counterparts:
 * - STORAGE_KEY mirrors SettingsRepository.
 * - DEFAULT_THEME_MODE mirrors DEFAULT_THEME_MODE from theme-mode.ts.
 * - THEME_MODE_BODY_CLASSES mirrors THEME_MODE_BODY_CLASSES from theme-mode.ts.
 *
 * This script runs before the Angular application is available to prevent a
 * flash of the default theme when a persisted theme mode exists.
 */
(function () {
  const STORAGE_KEY = 'kmartin-web:app-settings';

  const DEFAULT_THEME_MODE = 'light';

  const THEME_MODE_BODY_CLASSES = {
    light: 'theme-mode-light',
    dark: 'theme-mode-dark'
  };

  try {
    const storedSettings = localStorage.getItem(STORAGE_KEY);
    const settings = storedSettings === null
      ? null
      : JSON.parse(storedSettings);

    const themeMode = settings?.themeMode ?? DEFAULT_THEME_MODE;

    document.body.classList.add(
      THEME_MODE_BODY_CLASSES[themeMode] ??
      THEME_MODE_BODY_CLASSES[DEFAULT_THEME_MODE]
    );
  } catch {
    document.body.classList.add(
      THEME_MODE_BODY_CLASSES[DEFAULT_THEME_MODE]
    );
  }
})();
