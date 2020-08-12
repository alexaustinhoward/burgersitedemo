import {Component, OnInit, Input} from '@angular/core';
import mealitems from '../MealItem/MealItem.json';
@Component({
    selector: 'MealSection',
    templateUrl:'./MealSection.component.html',
    styleUrls:['./MealSection.style.scss']
})
export class MealSectionComponent implements OnInit{
Items:any= mealitems.mealItems;
constructor(){}
ngOnInit(){
    
}


}