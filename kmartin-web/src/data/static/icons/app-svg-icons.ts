import {SvgIcon} from '../../model/svg-icon/svg-icon';

// https://icones.js.org
export const APP_SVG_ICONS = {
  android: {id: 'android', name: 'Android', path: '/icons/android.svg'},
  angular: {id: 'angular', name: 'Angular', path: '/icons/angular.svg'},
  restApi: {id: 'rest-api', name: 'REST API', path: '/icons/rest-api.svg'},
  arcore: {id: 'arcore', name: 'ARCore', path: '/icons/arcore.svg'},
  github: {id: 'github', name: 'GitHub', path: '/icons/github.svg'},
  googlePlay: {id: 'google-play', name: 'Google Play', path: '/icons/google-play.svg'},
  java: {id: 'java', name: 'Java', path: '/icons/java.svg'},
  kotlin: {id: 'kotlin', name: 'Kotlin', path: '/icons/kotlin.svg'},
  linkedin: {id: 'linkedin', name: 'LinkedIn', path: '/icons/linkedin.svg'},
  mongodb: {id: 'mongodb', name: 'MongoDB', path: '/icons/mongodb.svg'},
  mysql: {id: 'mysql', name: 'MySQL', path: '/icons/mysql.svg'},
  postgresql: {id: 'postgresql', name: 'PostgreSQL', path: '/icons/postgresql.svg'},
  raspberryPi: {id: 'raspberry-pi', name: 'Raspberry Pi', path: '/icons/raspberry-pi.svg'},
  springBoot: {id: 'spring-boot', name: 'Spring Boot', path: '/icons/spring-boot.svg'},
  terminal: {id: 'terminal', name: 'Terminal', path: '/icons/terminal.svg'},
  typescript: {id: 'typescript', name: 'TypeScript', path: '/icons/typescript.svg'},
  web: {id: 'web', name: 'Web', path: '/icons/web.svg'},
  websocket: {id: 'websocket', name: 'WebSocket', path: '/icons/websocket.svg'},
} as const satisfies Record<string, SvgIcon>;

export type AppSvgIcon = (typeof APP_SVG_ICONS)[keyof typeof APP_SVG_ICONS];
