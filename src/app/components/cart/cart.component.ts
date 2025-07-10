import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ICart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private readonly _cartService = inject(CartService);
  cartDetails : ICart = {} as ICart;

  ngOnInit(): void {
    this._cartService.getProductCart().subscribe({
      next: (response) => {
        console.log('Cart items:', response.data);
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      }
    });
  }
  removeItem(id: string): void {
    this._cartService.deleteSpecificCartItem(id).subscribe({
      next: (response) => {
        console.log('Cart item deleted:', response);
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.error('Error deleting cart item:', err);
      }
    });
  }
  updateCount(id: string, quantity: number): void {
    if (quantity > 0) {
      this._cartService.updateProductQuantity(id, quantity).subscribe({
        next: (response) => {
          console.log('Cart item updated:', response);
          this.cartDetails = response.data;
        },
        error: (err) => {
          console.error('Error updating cart item:', err);
        }
      });
    }
  }
  clearCart(): void {
    this._cartService.clearCart().subscribe({
      next: (response) => {
        console.log('Cart cleared:', response);
        this.cartDetails = {} as ICart;
      },
      error: (err) => {
        console.error('Error clearing cart:', err);
      }
    });
  }
}