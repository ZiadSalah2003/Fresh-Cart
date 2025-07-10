import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _httpClient = inject(HttpClient);
  myHeaders:any = { token :localStorage.getItem('userToken') };
  addProductToCart(id: string): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/cart`,
       {
          "productId": id
       },
       {
          headers: this.myHeaders
       }
    );
  }
  getProductCart(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/cart`, {
      headers: this.myHeaders
    });
  }
  deleteSpecificCartItem(id: string): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`, {
      headers: this.myHeaders
    });
  }
  updateProductQuantity(id: string, quantity: number): Observable<any> {
    return this._httpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, 
      { "count": quantity }, 
      { headers: this.myHeaders }
    );
  }
  clearCart(): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/cart`, {
      headers: this.myHeaders
    });
  }
}
