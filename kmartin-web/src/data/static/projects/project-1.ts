import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_ICONS} from '../icons/app-icons';

export const PROJECT_1_WEB_PROJECT: Project = {
  id: 'project-1-web',
  title: 'Project 1 Web',
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
      name: 'GitHub',
      url: 'https://github.com/kmartin0',
      icon: APP_ICONS.github
    }
  ],

  technologies: [
    {
      name: 'GitHub',
      icon: APP_ICONS.github
    },
    {
      name: 'LinkedIn',
      icon: APP_ICONS.linkedin
    }
  ]
};

export const PROJECT_1_API_PROJECT: Project = {
  id: 'project-1-api',
  title: 'Project 1 API',
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
      name: 'GitHub',
      url: 'https://github.com/kmartin0',
      icon: APP_ICONS.github
    }
  ],

  technologies: [
    {
      name: 'GitHub',
      icon: APP_ICONS.github
    },
    {
      name: 'LinkedIn',
      icon: APP_ICONS.linkedin
    }
  ]
};

export const PROJECT_1_PROJECT_GROUP: ProjectGroup = {
  id: 'project-1',
  title: 'Project 1',
  projects: [
    PROJECT_1_WEB_PROJECT,
    PROJECT_1_API_PROJECT
  ]
};
