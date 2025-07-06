import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interface/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly _productService = inject(ProductsService);

  productsList: IProduct[] = [];

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.productsList = response.data;
      },
      error: (err) => {
        console.log('Error fetching products:', err);
      }
    });
  }
}
