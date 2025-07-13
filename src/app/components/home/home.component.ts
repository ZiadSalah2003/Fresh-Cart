import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { SalePipe } from '../../core/pipes/sale.pipe';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, SalePipe, TermtextPipe, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  
  customOptionsMain : OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    items: 1,
    nav: true
  }
  customOptionsCategories: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  
  
  private readonly _productService = inject(ProductsService);
  private readonly _categoriesService = inject(CategoriesService);
  private readonly _cartService = inject(CartService);
  private readonly _toastrService = inject(ToastrService);
  private readonly _spinnerService = inject(NgxSpinnerService);
  searchTerm: string = '';

  productsList: IProduct[] = [];
  categoriesList: ICategory[] = [];
  getAllProductsSub!: Subscription;
  getAllCategoriesSub!: Subscription;

  ngOnInit(): void {
    this._spinnerService.show('loading-3');
    this.getAllCategoriesSub = this._categoriesService.getAllCategories().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categoriesList = response.data;
        this._spinnerService.hide('loading-3');
      },
      error: (err) => {
        console.log('Error fetching categories:', err);
      }
    });
    this.getAllProductsSub = this._productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.productsList = response.data;
      },
      error: (err) => {
        console.log('Error fetching products:', err);
      }
    });
  }
  addToCart(productId: string): void {
    this._cartService.addProductToCart(productId).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
        this._toastrService.success(response.message, 'Success');
        this._cartService.cartNumber.next(response.numbOfCartItems);
      },
      error: (err) => {
        console.error('Error adding product to cart:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.getAllProductsSub?.unsubscribe();
    this.getAllCategoriesSub?.unsubscribe();
  }
}
