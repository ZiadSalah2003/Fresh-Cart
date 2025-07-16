import { Component, computed, inject, OnInit, Signal } from '@angular/core';
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
  countNumber: Signal<number> = computed(() => this._cartService.cartNumber());

   ngOnInit(): void {
    this._cartService.getProductCart().subscribe({
      next: (response) => {
        console.log('Cart items:', response.data);
        this._cartService.cartNumber.set(response.numOfCartItems);
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      }
    });


  }
  changeLanguage(lang: string):void {
    this._mytranslateService.changeLang(lang);
  }
}
