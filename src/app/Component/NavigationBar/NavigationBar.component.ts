import {Component, OnInit,ChangeDetectorRef,NgZone } from '@angular/core'
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
constructor(private _ngZone: NgZone,private ref: ChangeDetectorRef){}
ngOnInit(){
    onAuthUIStateChange((authState, authData) => {
        this.authState = authState;
        this.user = authData as CognitoUserInterface;
     
        this._ngZone.run(() => {   this.ref.detectChanges() });
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