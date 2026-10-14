import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const CIVILIAN_CPR_ANDROID_PROJECT: Project = {
  id: 'civilian-cpr-android',
  title: 'Civilian CPR Android',
  description:
    'Native Android application for receiving and managing civilian CPR alert messages.',

  features: [
    'Light and dark mode based on the system theme',
    'Receive and process incoming SMS messages',
    'Persist CPR alert messages received from Hartstichting',
    'Display notifications for incoming CPR alerts',
    'Open Google Maps from a notification with directions to the CPR location, including possible AED waypoints',
    'Display received messages ordered by date',
    'Share, copy and delete messages',
    'Batch delete multiple messages',
    'Open directions for a message in Google Maps'
  ],

  technicalDetails: [
    'Kotlin',
    'MVVM architecture using Android Architecture Components',
    'Single-activity architecture with fragment navigation using Navigation Components',
    'Material Design using Material Components',
    'Dependency injection using Hilt',
    'Local persistence using Room',
    'Kotlin Coroutines for background operations'
  ],

  screenshots: [
    {
      name: 'Empty state',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_empty-state.png',
      width: 540,
      height: 960
    },
    {
      name: 'Messages',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_messages.png',
      width: 540,
      height: 960
    },
    {
      name: 'Dark theme',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_home-dark-theme.png',
      width: 540,
      height: 960
    },
    {
      name: 'Delete context menu',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_delete-context.png',
      width: 540,
      height: 960
    },
    {
      name: 'CPR notification',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_notification.png',
      width: 540,
      height: 960
    },
    {
      name: 'Google Maps directions',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_maps.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Messages',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/civilian-cpr-android/540/civilian-cpr_messages.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/civilian-cpr-android',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.android,
    APP_SVG_ICONS.kotlin
  ]
};

export const CIVILIAN_CPR_PROJECT_GROUP: ProjectGroup = {
  id: 'civilian-cpr',
  title: 'Civilian CPR',
  projects: [
    CIVILIAN_CPR_ANDROID_PROJECT
  ]
};
