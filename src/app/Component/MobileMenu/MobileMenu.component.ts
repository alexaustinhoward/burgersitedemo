import {Component,OnInit,ChangeDetectorRef } from'@angular/core';

import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
@Component({
    selector: 'MobileMenu',
    templateUrl:'./MobileMenu.component.html',
    styleUrls:['./MobileMenu.style.scss']
})
export class MobileMenuComponent implements OnInit{
    toggleiconstatus:boolean=false;
    title = 'amplify-angular-auth';
    user: CognitoUserInterface | undefined;
    togglesignin:boolean=false;
    authState: AuthState;
constructor(private ref: ChangeDetectorRef){}
ngOnInit(){
    onAuthUIStateChange((authState, authData) => {
        this.authState = authState;
        this.user = authData as CognitoUserInterface;
        this.ref.markForCheck()
      })
      
}
ngOnDestroy() {
    return onAuthUIStateChange;
  }
  OnToggleSignInIcon(){
    this.togglesignin=!this.togglesignin;
    console.log(this.togglesignin);
}
GetSigninStatus(){
    return this.togglesignin === true ?'block':'none';
}
 OnToggleIcon(){
        this.toggleiconstatus=!this.toggleiconstatus;
        console.log(this.toggleiconstatus);
    }
 GetStatus(){
        return this.toggleiconstatus === true ?'block':'none';
    }
}