import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
  readonly _authService = inject(AuthService);
  readonly _translateService = inject(TranslateService);
  private readonly _mytranslateService = inject(MytranslateService);
  private readonly _cartService = inject(CartService);
  countNumber:number = 0;

   ngOnInit(): void {
    this._cartService.cartNumber.subscribe({
      next: (count) => {
        this.countNumber = count;
      },
      error: (err) => {
        console.error('Error fetching cart number:', err);
      }
    });
  }
  changeLanguage(lang: string):void {
    this._mytranslateService.changeLang(lang);
  }
}
