import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly _productService = inject(ProductsService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  productDetails: IProduct | null = null;

  ngOnInit(): void {
    const productId = this._activatedRoute.snapshot.paramMap.get('id');
    if (productId) {
      this._productService.getSpecificProduct(productId).subscribe({
        next: (response) => {
          console.log(response.data );
          this.productDetails = response.data;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
        }
      });
    }
  }

}
