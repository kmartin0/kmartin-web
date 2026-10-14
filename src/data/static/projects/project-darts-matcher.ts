import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const DARTS_MATCHER_API_PROJECT: Project = {
  id: 'darts-matcher-api',
  title: 'Darts Matcher API',
  description:
    'Backend API for Darts Matcher which manages X01 dart matches, scoring, statistics, Dart Bot opponents and real-time match updates.',

  features: [
    'Create and manage X01 matches',
    'Configure matches using sets or legs with optional clear-by-two rules',
    'Support human players and Dart Bot opponents with configurable playing strength',
    'Add, edit and delete turns with automatic match progression',
    'Reset, reprocess, delete and create rematches',
    'Calculate available X01 checkouts',
    'Track player averages, first-nine averages, checkout statistics, score statistics and standings',
    'Synchronize match updates between clients in real time using WebSockets'
  ],

  technicalDetails: [
    'Java 17',
    'Spring Boot',
    'REST API',
    'STOMP over WebSocket for real-time match communication',
    'MongoDB persistence using Spring Data',
    'MongoDB transactions and optimistic locking for concurrent match updates',
    'Bean Validation with custom match and scoring validators',
    'Globalized error handling for REST and WebSocket communication',
    'English and Dutch localization',
    'JUnit and Testcontainers integration tests using MongoDB',
    'Structured application and WebSocket logging',
    'Docker support using a multi-stage build'
  ],

  screenshots: [],

  previewImage: null,

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/darts-matcher-api',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.restApi,
    APP_SVG_ICONS.java,
    APP_SVG_ICONS.springBoot,
    APP_SVG_ICONS.mongodb,
    APP_SVG_ICONS.websocket
  ]
};

export const DARTS_MATCHER_WEB_PROJECT: Project = {
  id: 'darts-matcher-web',
  title: 'Darts Matcher Web',
  description:
    'Web application for creating, playing and sharing X01 darts matches using the Darts Matcher platform.',

  features: [
    'Create 301 and 501 matches',
    'Configure matches using sets or legs',
    'Configure clear-by-two rules for sets, legs and final sets',
    'Support up to four players',
    'Play against configurable Dart Bot opponents',
    'Track checkout attempts and checkout percentages',
    'Enter scores using an integrated keypad',
    'Display remaining scores, suggested checkouts, averages and match standings',
    'Edit or undo previously entered scores',
    'View match information, statistics and a complete match timeline',
    'Reset, repair, delete and create rematches',
    'Share matches using a match link or match ID',
    'Synchronize match updates between clients in real time',
    'Store recently visited matches locally with paginated match history',
    'Configure which players are being scored for on each device',
    'Light and dark mode',
    'Responsive layouts for mobile and desktop'
  ],

  technicalDetails: [
    'TypeScript',
    'Angular',
    'Angular Material and CDK',
    'Angular Signals for application and page state',
    'Angular Signal Forms with custom validation',
    'REST API communication using HttpClient',
    'STOMP over WebSocket for real-time match updates',
    'IndexedDB persistence using Dexie',
    'Centralized HTTP and WebSocket error handling',
    'Feature-based application structure',
    'Responsive SCSS styling',
    'Docker multi-stage build served using nginx'
  ],

  screenshots: [
    {
      name: 'Home',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_home.png',
      width: 540,
      height: 960
    },
    {
      name: 'Home dark mode',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_home-dark.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match dark mode',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match-dark.png',
      width: 540,
      height: 960
    },
    {
      name: 'Score for',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_score-for.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match win',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match-win.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match information',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match-information.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match statistics',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match-statistics.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match timeline',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match-timeline.png',
      width: 540,
      height: 960
    },
    {
      name: 'Match history',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match-history.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Match',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/darts-matcher-web/540/darts-matcher_match.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/darts-matcher-web',
      icon: APP_SVG_ICONS.github
    },
    {
      url: 'https://dartsmatcher.kmartin.nl/',
      icon: APP_SVG_ICONS.web
    }
  ],

  technologies: [
    APP_SVG_ICONS.web,
    APP_SVG_ICONS.typescript,
    APP_SVG_ICONS.angular
  ]
};

export const DARTS_MATCHER_PROJECT_GROUP: ProjectGroup = {
  id: 'darts-matcher',
  title: 'Darts Matcher',
  projects: [
    DARTS_MATCHER_WEB_PROJECT,
    DARTS_MATCHER_API_PROJECT
  ]
};
