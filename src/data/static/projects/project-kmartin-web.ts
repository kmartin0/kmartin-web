import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const KMARTIN_WEB_PROJECT: Project = {
  id: 'kmartin-web',
  title: 'Portfolio Website',
  description:
    'Personal portfolio website for showing software projects, technologies and project details.',

  features: [
    'Landing page with links to GitHub and LinkedIn',
    'Browse projects grouped by platform or product',
    'Project preview cards with screenshots and technology icons',
    'Detailed project pages with descriptions, features and technical information',
    'Links to project repositories and live applications',
    'Screenshot carousel for project images',
    'Light and dark mode',
    'Multiple selectable color themes',
    'Persist theme preferences locally',
    'Responsive layouts for mobile and desktop'
  ],

  technicalDetails: [
    'TypeScript',
    'Angular',
    'Angular Material and CDK',
    'Angular Signals for application state',
    'Angular Router for project and page navigation',
    'Custom Material theme system with light and dark modes and multiple color themes',
    'Local storage for persisted application settings',
    'Swiper for project screenshot carousels',
    'SVG technology and reference icons',
    'Docker multi-stage build served using nginx',
    'Responsive SCSS styling'
  ],

  screenshots: [
    {
      name: 'Home',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/kmartin-web/540/kmartin-web_home.png',
      width: 540,
      height: 960
    },
    {
      name: 'Home dark mode',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/kmartin-web/540/kmartin-web_home-dark.png',
      width: 540,
      height: 960
    },
    {
      name: 'Projects',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/kmartin-web/540/kmartin-web_projects.png',
      width: 540,
      height: 960
    },
    {
      name: 'Project',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/kmartin-web/540/kmartin-web_project.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Projects',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/kmartin-web/540/kmartin-web_projects.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/kmartin-web',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.web,
    APP_SVG_ICONS.typescript,
    APP_SVG_ICONS.angular
  ]
};

export const KMARTIN_WEB_PROJECT_GROUP: ProjectGroup = {
  id: 'kmartin-web',
  title: 'Portfolio Website',
  projects: [
    KMARTIN_WEB_PROJECT
  ]
};
