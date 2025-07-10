import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

    private readonly _activatedRoute = inject(ActivatedRoute);
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _ordersService = inject(OrdersService);
    cartId : string | null = "";
    orders:FormGroup = this._formBuilder.group({
      details: [''],
      phone: [''],
      city: [''],
    });

  ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe({
          next: (params) => {
              const id = params.get('id');
              this.cartId = id; 
          }
      });
  }
  orderSubmit() {
    this._ordersService.checkOut(this.cartId, this.orders.value).subscribe({
      next: (response) => {
        console.log(response);
        if(response.status === 'success') {
          response.session.url;
          window.open(response.session.url, '_blank' );
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
