import { ApplicationConfig, importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from './core/services/mytranslate.service';


 export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 }

export function initializeTranslate(translateService: MytranslateService) {
  return () => {
    // The service constructor will handle the initialization
    return Promise.resolve();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
     withViewTransitions()),
     provideHttpClient(withFetch(), withInterceptors([headerInterceptor, errorsInterceptor, loadingInterceptor])),
     provideAnimations(),
     importProvidersFrom(
      NgxSpinnerModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
     ),
     provideToastr({
       timeOut: 3000,
       positionClass: 'toast-top-right',
       preventDuplicates: true,
     }),
     {
       provide: APP_INITIALIZER,
       useFactory: initializeTranslate,
       deps: [MytranslateService],
       multi: true
     }
    ]
};
