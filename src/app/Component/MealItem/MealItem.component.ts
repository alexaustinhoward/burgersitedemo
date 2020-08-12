import {Component, OnInit, Input} from '@angular/core';
import mealitems from './MealItem.json';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs/Observable';
import * as CartAction from '../../Actions/Cart.actions'
import {Cart} from '../../Model/Cart.model'

@Component({
    selector: 'MealItem',
    templateUrl:'./MealItem.component.html',
    styleUrls:['./MealItem.style.scss']
})
export class MealItemComponent implements OnInit{
    @Input() background: string;
    @Input() titlespan1: string;
    @Input() titlespan2: string;
    @Input() calories: string;
    @Input() fat: string;
    @Input() Cholestrol: string;
    @Input() Protein: string;
    @Input() Sodium: string;
    @Input() orderstate:boolean;
    @Input() Name:string;
   
    constructor(private store: Store<AppState>){
      
    }
    AddItem(name) {
         console.log(name)
        this.store.dispatch(new CartAction.AddItem(name))
       
      }

ngOnInit(){
    
}

}