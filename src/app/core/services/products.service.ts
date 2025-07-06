import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _httpClient = inject(HttpClient);

  getAllProducts(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/products`);
  }
  getSpecificProduct(id: string): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/products/${id}`);
  }
}
