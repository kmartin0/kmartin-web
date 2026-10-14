import {Project} from '../../model/project/project';
import {ProjectGroup} from '../../model/project/project-group';
import {APP_SVG_ICONS} from '../icons/app-svg-icons';

export const MUSIC_PLAYER_ANDROID_PROJECT: Project = {
  id: 'music-player-android',
  title: 'Music Player Android',
  description:
    'Native Android music player application created during the Mobile Application Development course.',

  features: [
    'Display audio files from the user\'s device, including artist, album and album artwork',
    'Play and pause audio',
    'Play the next or previous track',
    'Display a blurred version of the current album artwork in the player background',
    'Media notification with playback controls',
    'Respond to audio focus changes when another application requests audio playback',
    'Pause playback when an audio device is disconnected',
    'Display track lyrics'
  ],

  technicalDetails: [
    'Kotlin',
    'MVVM architecture using Android Architecture Components',
    'Audio file indexing using MediaStore',
    'Background audio playback using MediaBrowserService',
    'Media playback integration using MediaSession and MediaController'
  ],

  screenshots: [
    {
      name: 'Home',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/music-player-android/540/android-music-player_home.png',
      width: 540,
      height: 960
    },
    {
      name: 'Home playing',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/music-player-android/540/android-music-player-home_playing.png',
      width: 540,
      height: 960
    },
    {
      name: 'Player',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/music-player-android/540/android-music-player_playing.png',
      width: 540,
      height: 960
    },
    {
      name: 'Lyrics',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/music-player-android/540/android-music-player_lyrics.png',
      width: 540,
      height: 960
    },
    {
      name: 'Media notification',
      url: 'https://raw.githubusercontent.com/kmartin0/assets/master/music-player-android/540/android-music-player-notification.png',
      width: 540,
      height: 960
    }
  ],

  previewImage: {
    name: 'Player',
    url: 'https://raw.githubusercontent.com/kmartin0/assets/master/music-player-android/540/android-music-player_playing.png',
    width: 540,
    height: 960
  },

  projectLinks: [
    {
      url: 'https://github.com/kmartin0/music-player-android',
      icon: APP_SVG_ICONS.github
    }
  ],

  technologies: [
    APP_SVG_ICONS.android,
    APP_SVG_ICONS.kotlin
  ]
};

export const MUSIC_PLAYER_PROJECT_GROUP: ProjectGroup = {
  id: 'music-player',
  title: 'Music Player',
  projects: [
    MUSIC_PLAYER_ANDROID_PROJECT
  ]
};
