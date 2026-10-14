import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const KNITSTER_ANDROID_PROJECT: Project = {
  id: 'knitster-android',
  title: 'Knitster Android',
  description:
    'Native Android application for keeping track of knitting projects and row counters.',

  features: [
    'Create and manage knitting projects',
    'Add notes and choose an icon for each project',
    'Add multiple row counters to a project',
    'Increment, decrement, reset and reorder row counters',
    'Set an optional target for each row counter',
    'Light and dark mode',
    'Multiple colour themes',
    'English and Dutch language support',
    'Option to keep the screen awake while using the app',
    'Persist projects and settings locally on the device'
  ],

  technicalDetails: [
    'Kotlin',
    'Jetpack Compose with Material 3',
    'MVI architecture using StateFlow',
    'Room for local database persistence',
    'DataStore for application settings',
    'Hilt for dependency injection',
    'Navigation using Navigation Compose',
    'Kotlin Coroutines and Flow for asynchronous and reactive data handling'
  ],

  screenshots: [
    {
      name: 'Empty project list',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_home-empty.png',
      width: 540,
      height: 960
    },
    {
      name: 'Project list',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_home.png',
      width: 540,
      height: 960
    },
    {
      name: 'Project',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_project.png',
      width: 540,
      height: 960
    },
    {
      name: 'Add row counter',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_add-counter.png',
      width: 540,
      height: 960
    },
    {
      name: 'Project icon picker',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_set-icon.png',
      width: 540,
      height: 960
    },
    {
      name: 'Settings',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_settings.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Project',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/knitster-android/540/knitster-android_project.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/knitster-android',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.android,
    APP_SVG_ICONS.kotlin
  ]
};

export const KNITSTER_PROJECT_GROUP: ProjectGroup = {
  id: 'knitster',
  title: 'Knitster',
  projects: [
    KNITSTER_ANDROID_PROJECT
  ]
};
