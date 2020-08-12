import { Component,ChangeDetectionStrategy, OnInit,Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select} from '@ngrx/store';
import { AppState } from '../../app.state';
import { map } from 'rxjs/operators';
import * as CartAction from '../../Actions/Cart.actions'
import { Cart } from '../../Model/Cart.model'
import mealitems from '../MealItem/MealItem.json';
@Component({
  selector: 'cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.style.scss']
  
})
export class CartViewComponent implements OnInit {
 
 
    cartList$: Observable<any>;
 
 
 
  constructor(private store: Store<AppState>) {
   
   }
  
   check(name) {
    console.log(name)
   
 }
  ngOnInit() {
  this.cartList$= this.store.pipe(map(state=>state.cartItems.cartItems));
  }
 
  
}
