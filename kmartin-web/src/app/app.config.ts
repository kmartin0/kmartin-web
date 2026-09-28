import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {MAT_ICON_DEFAULT_OPTIONS} from '@angular/material/icon';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {provide: MAT_ICON_DEFAULT_OPTIONS, useValue: {fontSet: 'material-symbols-outlined'}},
  ]
};
