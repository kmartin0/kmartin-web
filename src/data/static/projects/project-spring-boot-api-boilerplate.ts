import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const SPRING_BOOT_API_BOILERPLATE_PROJECT: Project = {
  id: 'spring-boot-api-boilerplate',
  title: 'Spring Boot API Boilerplate',
  description:
    'Boilerplate project for building REST APIs with Spring Boot. ' +
    'Includes common API functionality such as user management, OAuth 2 authentication, persistence, validation, localization, email support and global exception handling.',

  features: [
    'User registration and account management',
    'Retrieve the authenticated user',
    'Update and delete users',
    'Change password',
    'Forgot and reset password flows',
    'OAuth 2 authentication and authorization using JWK-signed JWTs',
    'Global exception handling with a unified error response format',
    'Bean validation',
    'Localization',
    'Email support',
    'Unit tests',
    'MySQL persistence',
    'MongoDB configuration available on a separate branch',
    'Configurable HTTPS support'
  ],

  technicalDetails: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'OAuth 2',
    'JWK-signed JWT access tokens',
    'Spring Data JPA',
    'MySQL',
    'MongoDB variant',
    'Bean Validation',
    'Lombok',
    'JaCoCo test coverage',
    'Feature-based package structure'
  ],

  screenshots: [],

  previewImage: null,

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/spring-boot-api-boilerplate',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.restApi,
    APP_SVG_ICONS.java,
    APP_SVG_ICONS.springBoot,
    APP_SVG_ICONS.mysql,
    APP_SVG_ICONS.mongodb
  ]
};

export const SPRING_BOOT_API_BOILERPLATE_PROJECT_GROUP: ProjectGroup = {
  id: 'spring-boot-api-boilerplate',
  title: 'Spring Boot API Boilerplate',
  projects: [
    SPRING_BOOT_API_BOILERPLATE_PROJECT
  ]
};
