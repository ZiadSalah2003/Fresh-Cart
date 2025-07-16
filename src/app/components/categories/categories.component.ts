import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  counter:WritableSignal<number> = signal(0);
  userName:string='';

  changeCounter():void{
    this.counter.update(value => value + 1);
   } 
}
