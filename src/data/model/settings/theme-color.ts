/**
 * Available application theme colors.
 */
export enum ThemeColor {
  CREAM = 'cream',
  BLUE = 'blue',
  GREEN = 'green',
  PINK = 'pink'
}

export const DEFAULT_THEME_COLOR: ThemeColor = ThemeColor.BLUE;

export const THEME_COLOR_BODY_CLASSES: Readonly<Record<ThemeColor, string>> =
  Object.freeze({
    [ThemeColor.CREAM]: 'theme-color-cream',
    [ThemeColor.BLUE]: 'theme-color-blue',
    [ThemeColor.GREEN]: 'theme-color-green',
    [ThemeColor.PINK]: 'theme-color-pink',
  });

/**
 * Checks whether a value is a supported theme color.
 *
 * @param value - Value to check.
 * @returns Whether the value is a supported theme color.
 */
export function isThemeColor(value: unknown): value is ThemeColor {
  return value === ThemeColor.CREAM
    || value === ThemeColor.BLUE
    || value === ThemeColor.GREEN
    || value === ThemeColor.PINK;
}
