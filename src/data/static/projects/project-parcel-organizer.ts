import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const PARCEL_ORGANIZER_API_PROJECT: Project = {
  id: 'parcel-organizer-api',
  title: 'Parcel Organizer REST API',
  description:
    'REST API for the Parcel Organizer platform built using Spring Boot.',

  features: [
    'User authentication and registration',
    'Password recovery',
    'Update account details',
    'Create, read, update and delete parcels'
  ],

  technicalDetails: [
    'Java',
    'Spring Boot',
    'Layered architecture',
    'PostgreSQL persistence using Spring Data',
    'Liquibase database migrations',
    'Globalized error handling',
    'Localization',
    'Hibernate second-level cache',
    'OAuth 2.0 and JWT authentication using Spring Security'
  ],

  screenshots: [],

  previewImage: null,

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/parcel-organizer-api',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.restApi,
    APP_SVG_ICONS.java,
    APP_SVG_ICONS.springBoot,
    APP_SVG_ICONS.postgresql
  ]
};

export const PARCEL_ORGANIZER_ANDROID_PROJECT: Project = {
  id: 'parcel-organizer-android',
  title: 'Parcel Organizer Android',
  description:
    'Native Android application for the Parcel Organizer platform which lets users organize their incoming and outgoing parcels.',

  features: [
    'Light and dark mode',
    'Login and registration',
    'Password recovery',
    'Update account details',
    'Create, update and delete parcels',
    'Search, sort and filter parcels'
  ],

  technicalDetails: [
    'Kotlin',
    'MVVM architecture using Android Architecture Components',
    'Single-activity architecture with fragment navigation using Navigation Components',
    'Material Design using Material Components',
    'REST API communication using Retrofit and RxJava'
  ],

  screenshots: [
    {
      name: 'Login',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_login.png',
      width: 540,
      height: 960
    },
    {
      name: 'Create account',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_create-account.png',
      width: 540,
      height: 960
    },
    {
      name: 'Forgot password',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_forgot-password.png',
      width: 540,
      height: 960
    },
    {
      name: 'Parcels',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_parcels.png',
      width: 540,
      height: 960
    },
    {
      name: 'Parcel search',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_parcels-search.png',
      width: 540,
      height: 960
    },
    {
      name: 'Parcel sorting',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_parcel-sort-sheet.png',
      width: 540,
      height: 960
    },
    {
      name: 'Create parcel',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_create-parcel.png',
      width: 540,
      height: 960
    },
    {
      name: 'Update parcel',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_update-parcel.png',
      width: 540,
      height: 960
    },
    {
      name: 'Profile dark mode',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_profile-dark.png',
      width: 540,
      height: 960
    },
    {
      name: 'Change profile',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_change-profile.png',
      width: 540,
      height: 960
    },
    {
      name: 'Change password',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_change-password.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Parcels',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-android/540/parcel-organizer_parcels.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/parcel-organizer-android',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.android,
    APP_SVG_ICONS.kotlin
  ]
};

export const PARCEL_ORGANIZER_WEB_PROJECT: Project = {
  id: 'parcel-organizer-web',
  title: 'Parcel Organizer Web',
  description:
    'Web application for the Parcel Organizer platform which lets users organize their incoming and outgoing parcels.',

  features: [
    'Light and dark mode',
    'Responsive design for mobile and desktop',
    'Login and registration',
    'Password recovery',
    'Update account details',
    'Create, update and delete parcels',
    'Search, sort and filter parcels'
  ],

  technicalDetails: [
    'TypeScript',
    'Angular',
    'REST API communication using HttpClient',
    'Responsive layouts for mobile and desktop',
    'Hosted on a Raspberry Pi using Docker and nginx'
  ],

  screenshots: [
    {
      name: 'Login',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_home-login.png',
      width: 540,
      height: 960
    },
    {
      name: 'Register',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_home-register.png',
      width: 540,
      height: 960
    },
    {
      name: 'Forgot password',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_forgot-password.png',
      width: 540,
      height: 960
    },
    {
      name: 'Parcels',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_parcels.png',
      width: 540,
      height: 960
    },
    {
      name: 'Parcels dark mode',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_parcels-dark.png',
      width: 540,
      height: 960
    },
    {
      name: 'Create parcel',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_create-parcel.png',
      width: 540,
      height: 960
    },
    {
      name: 'Edit user',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_edit-user.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Parcels',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/parcel-organizer-web/540/parcel-organizer-web_parcels.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/parcel-organizer-web',
      icon: APP_SVG_ICONS.github
    },
    {
      url: 'https://parcelorganizer.kmartin.nl/',
      icon: APP_SVG_ICONS.web
    }
  ],

  technologies: [
    APP_SVG_ICONS.web,
    APP_SVG_ICONS.typescript,
    APP_SVG_ICONS.angular
  ]
};

export const PARCEL_ORGANIZER_PROJECT_GROUP: ProjectGroup = {
  id: 'parcel-organizer',
  title: 'Parcel Organizer',
  projects: [
    PARCEL_ORGANIZER_WEB_PROJECT,
    PARCEL_ORGANIZER_ANDROID_PROJECT,
    PARCEL_ORGANIZER_API_PROJECT
  ]
};
