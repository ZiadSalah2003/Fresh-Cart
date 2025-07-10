import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
     withViewTransitions()),
     provideHttpClient(withFetch()),
     provideAnimations(),
     provideToastr({
       timeOut: 3000,
       positionClass: 'toast-top-right',
       preventDuplicates: true,
     }),
    ]
};
