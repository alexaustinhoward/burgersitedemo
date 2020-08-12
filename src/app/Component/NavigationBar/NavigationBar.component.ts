import {Component, OnInit,ChangeDetectorRef } from '@angular/core'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-angular'
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
    selector: 'NavigationBar',
    templateUrl:'./NavigationBar.component.html',
    styleUrls:['./NavigationBar.style.scss']
})
export class NavigationBarComponent implements OnInit{
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
  OnToggleIcon(){
    this.togglesignin=!this.togglesignin;
    console.log(this.togglesignin);
}
GetStatus(){
    return this.togglesignin === true ?'block':'none';
}
}