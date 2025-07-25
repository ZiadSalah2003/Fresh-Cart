import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _httpClient = inject(HttpClient);
  cartNumber: WritableSignal<number> = signal(0);
  addProductToCart(id: string): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/cart`,
       {
          "productId": id
       }
    );
  }
  getProductCart(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/cart`);
  }
  deleteSpecificCartItem(id: string): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`);
  }
  updateProductQuantity(id: string, quantity: number): Observable<any> {
    return this._httpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, 
      { "count": quantity }
    );
  }
  clearCart(): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/cart`);
  }
}
