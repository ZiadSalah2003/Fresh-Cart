import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
     withViewTransitions()),
     provideHttpClient(withFetch(), withInterceptors([headerInterceptor, errorsInterceptor])),
     provideAnimations(),
     provideToastr({
       timeOut: 3000,
       positionClass: 'toast-top-right',
       preventDuplicates: true,
     }),
    ]
};
