import {Component, OnInit} from '@angular/core'
@Component({
    selector: 'OrderPage',
    templateUrl:'./OrderPage.component.html',
    styleUrls:['./OrderPage.style.scss']
})
export class OrderPageComponent implements OnInit{
   typeofburger:boolean=true;
    numba:Array<number>=[0,0,0,0,0,0];
    preimage:Array<string>=["../../../assets/images/burgerselection1.png",
    "../../../assets/images/burgerselection2.png",
    "../../../assets/images/burgerselection3.png",
    "../../../assets/images/burgerselection4.png"
]
choiceoptions:Array<string>=["whole-wheat","none","quarter","whole-wheat","quarter","whole-wheat"
]
imagechoices:Array<string>=[
    "../../../assets/images/burgerbun1.png",
    "", "../../../assets/images/burgerselection1.png",
    "../../../assets/images/burgerbottom1.png","../../../assets/images/burgerselection1.png",
    "../../../assets/images/burgerbottom1.png"
]
    coolimage:string='../../../assets/images/burgerselection1.png';

    buntextoptions:Array<string>=["whole-wheat","regular","seasame seed"
    ]
   
    buntopimages:Array<string>=[
        "../../../assets/images/burgerbun1.png",
    "../../../assets/images/burgerbun2.png",
    "../../../assets/images/burgerbun3.png",
    ]
    lctextptions:Array<string>=["none","Lettuce","Lettuce & cheese"
]
    lcimageoptions:Array<string>=[
    "none",
    "../../../assets/images/lettuce.png",
    "../../../assets/images/Lettucecheese.png"
]
   pattiestextoptions:Array<string>=["qaurter","regular","veggie","chicken"
]
pattiesimagesoptions:Array<string>=["../../../assets/images/burgerselection1.png",
"../../../assets/images/burgerselection2.png",
"../../../assets/images/burgerselection3.png",
"../../../assets/images/burgerselection4.png"
]
bunbottomimages:Array<string>=[
    "../../../assets/images/burgerbottom1.png",
"../../../assets/images/burgerbottom2.png",
"../../../assets/images/burgerbottom3.png",
]

constructor(){}
ngOnInit(){
    
}
nextoptions(num,inputarray,i,textoptions,imageoptions){
    if(this.numba[num]<=inputarray.length-1){
        this.numba[num]=this.numba[num]+1;
        this.choiceoptions[i]=textoptions[this.numba[num]]
        this.imagechoices[i]=imageoptions[this.numba[num]]
        console.log(this.numba[num])


    
    }
    if(this.numba[num]==inputarray.length){
        this.numba[num]= 0;
        this.choiceoptions[i]=textoptions[this.numba[num]]
        this.imagechoices[i]=imageoptions[this.numba[num]]
        console.log(this.numba[num])
      }
}
prevoptions(num,inputarray,i,textoptions,imageoptions){
    if(this.numba[num]>=0){
        this.numba[num]=this.numba[num]-1;
        this.choiceoptions[i]=textoptions[this.numba[num]]
        this.imagechoices[i]=imageoptions[this.numba[num]]
        console.log(this.numba[num])
    }
    if(this.numba[num]==-1){
        this.numba[num]= inputarray.length-1;
        this.choiceoptions[i]=textoptions[this.numba[num]]
        this.imagechoices[i]=imageoptions[this.numba[num]]
        console.log(this.numba[num])
      }
}
SetOptions(j:number,i:number,textoptions,imageoptions){
  
        this.choiceoptions[j]=textoptions[i]
        this.imagechoices[j]=imageoptions[i]
  

}
SetType(type:boolean){
    this.typeofburger=type;   

}

}