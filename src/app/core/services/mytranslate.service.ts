import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {

  private readonly _translateService = inject(TranslateService);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _renderer = inject(RendererFactory2).createRenderer(null, null) as Renderer2;

  constructor() {
    if(isPlatformBrowser(this._platformId)) {
      let saveLang = localStorage.getItem('lang');
      this._translateService.setDefaultLang('en');
      if(saveLang !== 'null')
        this._translateService.use(saveLang!);
      this.changeDirection(saveLang!);
   }
  }
   changeDirection(lang: string): void {
    if (lang === 'en') {
      this._renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      this._renderer.setAttribute(document.documentElement, 'lang', 'en');
    } else if (lang === 'ar') {
      this._renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      this._renderer.setAttribute(document.documentElement, 'lang', 'ar');
    }
  }
  changeLang(lang: string): void {
      if(isPlatformBrowser(this._platformId)) {
      this._translateService.use(lang);
      localStorage.setItem('lang', lang);
      this.changeDirection(lang);
    }
  }
}
  