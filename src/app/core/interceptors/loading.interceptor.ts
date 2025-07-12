import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const _spinnerService = inject(NgxSpinnerService);
  _spinnerService.show('loading-3');
  return next(req).pipe(
    finalize(() => {
      _spinnerService.hide('loading-3');
    })
  );
};
