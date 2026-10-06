import {Icon} from '../../model/icon/icon';

export const APP_ICONS = {
  github: {id: 'github', path: '/icons/github.svg'},
  linkedin: {id: 'linkedin', path: '/icons/linkedin.svg'}
} as const satisfies Record<string, Icon>;

export type AppIcon = (typeof APP_ICONS)[keyof typeof APP_ICONS];
