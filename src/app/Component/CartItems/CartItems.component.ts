import { Component, OnInit ,ChangeDetectionStrategy,Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CartAction from '../../Store/Actions/Cart.actions'
@Component({
  selector: 'CartItems',
  templateUrl: './CartItems.component.html',
  styleUrls: ['./CartItems.style.scss']
  ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemsComponent implements OnInit {

@Input()cartitemslist:any;
  constructor(private store: Store<AppState>) {
 
  
   }
   LowerItem(name) {
    console.log(name)
   this.store.dispatch(new CartAction.LowerItem(name))
 }
 RemoveItem(name) {
  console.log(name)
 this.store.dispatch(new CartAction.RemoveItem(name))

}

  ngOnInit() {
     
  }

}
