import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const PROJECT_2_WEB_PROJECT: Project = {
  id: 'project-2-web',
  title: 'Project 2 Web',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  features: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt ut labore',
    'Ut enim ad minim veniam'
  ],

  technicalDetails: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Duis aute irure dolor in reprehenderit',
    'Excepteur sint occaecat cupidatat non proident'
  ],

  screenshots: [
    {
      name: 'Parrot',
      url: 'https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
      width: 494,
      height: 740
    },
    {
      name: 'Hummingbird',
      url: 'https://img.magnific.com/free-photo/photorealistic-hummingbird-outdoors-nature_23-2151474112.jpg?semt=ais_hybrid&w=740&q=80',
      width: 740,
      height: 415
    }
  ],

  previewImage: {
    name: 'Parrot',
    url: 'https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
    width: 494,
    height: 740
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.github,
    APP_SVG_ICONS.linkedin
  ]
};

export const PROJECT_2_API_PROJECT: Project = {
  id: 'project-2-api',
  title: 'Project 2 API',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  features: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt ut labore',
    'Ut enim ad minim veniam'
  ],

  technicalDetails: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Duis aute irure dolor in reprehenderit',
    'Excepteur sint occaecat cupidatat non proident'
  ],

  screenshots: [
    {
      name: 'Parrot',
      url: 'https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
      width: 494,
      height: 740
    },
    {
      name: 'Hummingbird',
      url: 'https://img.magnific.com/free-photo/photorealistic-hummingbird-outdoors-nature_23-2151474112.jpg?semt=ais_hybrid&w=740&q=80',
      width: 740,
      height: 415
    }
  ],

  previewImage: {
    name: 'Hummingbird',
    url: 'https://img.magnific.com/free-photo/photorealistic-hummingbird-outdoors-nature_23-2151474112.jpg?semt=ais_hybrid&w=740&q=80',
    width: 740,
    height: 415
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.github,
    APP_SVG_ICONS.linkedin
  ]
};

export const PROJECT_2_ANDROID_PROJECT: Project = {
  id: 'project-2-android',
  title: 'Project 2 Android',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  features: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt ut labore',
    'Ut enim ad minim veniam'
  ],

  technicalDetails: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Duis aute irure dolor in reprehenderit',
    'Excepteur sint occaecat cupidatat non proident'
  ],

  screenshots: [
    {
      name: 'Parrot',
      url: 'https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
      width: 494,
      height: 740
    },
    {
      name: 'Hummingbird',
      url: 'https://img.magnific.com/free-photo/photorealistic-hummingbird-outdoors-nature_23-2151474112.jpg?semt=ais_hybrid&w=740&q=80',
      width: 740,
      height: 415
    }
  ],

  previewImage: {
    name: 'Parrot',
    url: 'https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
    width: 494,
    height: 740
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.github,
    APP_SVG_ICONS.linkedin
  ]
};

export const PROJECT_2_PROJECT_GROUP: ProjectGroup = {
  id: 'project-2',
  title: 'Project 2',
  projects: [
    PROJECT_2_WEB_PROJECT,
    PROJECT_2_API_PROJECT,
    PROJECT_2_ANDROID_PROJECT
  ]
};
