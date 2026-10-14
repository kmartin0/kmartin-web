import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const BACKFLOW_CALCULATOR_ANDROID_PROJECT: Project = {
  id: 'backflow-calculator-android',
  title: 'Backflow Calculator Android',
  description:
    'Native Android application for simplifying the calculation of the total number of boxes to be returned.',

  features: [
    'Calculate On The Floor using Supply and SGF',
    'Calculate Fill Amount using ASSQ and Flex',
    'Calculate Backflow using MUPQ Per Box',
    'Calculate Total Boxes To Be Returned using the calculated On The Floor, Fill Amount and Backflow values',
    'Receive update notifications when a new release is published on GitHub',
    'Generate a QR code linking to the latest GitHub release'
  ],

  technicalDetails: [
    'Kotlin',
    'MVVM architecture using Android Architecture Components'
  ],

  screenshots: [
    {
      name: 'Empty calculator',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/backflow-calculator-android/540/backflow-calculator_home-empty.png',
      width: 540,
      height: 960
    },
    {
      name: 'Completed calculator',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/backflow-calculator-android/540/backflow-calculator_home-filled-in.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Completed calculator',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/backflow-calculator-android/540/backflow-calculator_home-filled-in.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/backflow-calculator-android',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.android,
    APP_SVG_ICONS.kotlin
  ]
};

export const BACKFLOW_CALCULATOR_PROJECT_GROUP: ProjectGroup = {
  id: 'backflow-calculator',
  title: 'Backflow Calculator',
  projects: [
    BACKFLOW_CALCULATOR_ANDROID_PROJECT
  ]
};
