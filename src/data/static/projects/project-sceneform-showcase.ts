import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const SCENEFORM_SHOWCASE_ANDROID_PROJECT: Project = {
  id: 'sceneform-showcase-android',
  title: 'Sceneform Showcase Android',
  description:
    'Android augmented reality application using the Sceneform SDK to display .gltf and .glb 3D models. ' +
    'Models can be selected from predefined Sketchfab examples or loaded by scanning a QR code.',

  features: [
    'Display .gltf and .glb 3D models on detected planes',
    'Choose from predefined examples fetched from the Sketchfab API',
    'Scan a QR code that links to a 3D model file',
    'Move the model to a different location on the plane',
    'Move the model vertically',
    'Rotate the model around the X-axis',
    'Rotate the model around the Y-axis',
    'Resize the model',
    'Capture a picture of the AR view'
  ],

  technicalDetails: [
    'Java',
    'Android',
    'Sceneform SDK for augmented reality rendering',
    'Sketchfab REST API for retrieving example 3D models',
    'QR code scanning for loading external model files',
    'Support for .gltf and .glb model formats'
  ],

  screenshots: [
    {
      name: 'Home',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/sceneform-android/540/android-sceneform_home.png',
      width: 540,
      height: 1170
    },
    {
      name: 'AR model',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/sceneform-android/540/android-sceneform_ar.png',
      width: 540,
      height: 1170
    }
  ],

  previewImage: {
    name: 'Home',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/sceneform-android/540/android-sceneform_home.png',
    width: 540,
    height: 1170
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/sceneform-showcase-android',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.android,
    APP_SVG_ICONS.java,
    APP_SVG_ICONS.arcore
  ]
};

export const SCENEFORM_SHOWCASE_PROJECT_GROUP: ProjectGroup = {
  id: 'sceneform-showcase',
  title: 'Sceneform Showcase',
  projects: [
    SCENEFORM_SHOWCASE_ANDROID_PROJECT
  ]
};
