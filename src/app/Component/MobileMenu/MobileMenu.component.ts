import {Component,OnInit} from'@angular/core'
@Component({
    selector: 'MobileMenu',
    templateUrl:'./MobileMenu.component.html',
    styleUrls:['./MobileMenu.style.scss']
})
export class MobileMenuComponent implements OnInit{
    toggleiconstatus:boolean=false;
    constructor()
    {
    }
    ngOnInit(){
    }
    OnToggleIcon(){
        this.toggleiconstatus=!this.toggleiconstatus;
        console.log(this.toggleiconstatus);
    }
    GetStatus(){
        return this.toggleiconstatus === true ?'block':'none';
    }
}