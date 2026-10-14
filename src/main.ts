import {bootstrapApplication} from '@angular/platform-browser';
import {register} from 'swiper/element/bundle';

import {App} from './app/app';
import {appConfig} from './app/app.config';

// Enables <swiper-container> and <swiper-slide>
register();

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
