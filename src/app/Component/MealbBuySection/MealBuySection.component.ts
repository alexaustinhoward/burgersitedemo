import {Component, OnInit, Input} from '@angular/core';
import mealitems from '../MealItem/MealItem.json';

@Component({
    selector: 'MealBuySection',
    templateUrl:'./MealBuySection.component.html',
    styleUrls:['./MealBuySection.style.scss']
})
export class MealBuySectionComponent implements OnInit{
 @Input() row:boolean;  
Items:any= mealitems.mealItems;
constructor(){}

ngOnInit(){
    
}


}