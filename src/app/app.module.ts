import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileMenuComponent } from './Component/MobileMenu/MobileMenu.component';
import { NavigationBarComponent} from './Component/NavigationBar/NavigationBar.component';
import {PromoSectionComponent} from './Component/PromoSection/PromoSection.component';
import {AboutSectionComponent} from './Component/AboutSection/AboutSection.component';
import {MealItemComponent} from './Component/MealItem/MealItem.component';
import { LandingPageComponent } from './Page/LandingPage/LandingPage.component';
import { AboutPageComponent } from './Page/AboutPage/AboutPage.component';
import {MealSectionComponent} from './Component/MealSection/Mealsection.component';
import { MealPageComponent } from './Page/MealPage/MealPage.component';
import { OrderPageComponent } from './Page/OrderPage/OrderPage.component';
import { MealBuySectionComponent } from './Component/MealbBuySection/MealBuySection.component';
import {StoreModule,ActionReducer} from '@ngrx/store';
import {reducer} from './Reducer/Cart.reducer';

import { CartViewComponent } from './Component/cart-view/cart-view.component';
import { CartItemsComponent } from './Component/CartItems/CartItems.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../../src/aws-exports.js'
Amplify.configure(awsconfig)



const appRoutes: Routes=[
  { path:'order', component: OrderPageComponent },
  { path:'about', component: AboutPageComponent },
  { path:'', component: LandingPageComponent },
  { path:'meal', component: MealPageComponent }
  
];



@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    NavigationBarComponent,
    PromoSectionComponent,
    AboutSectionComponent,
    MealItemComponent,
    LandingPageComponent,
    AboutPageComponent,
    MealSectionComponent,
    MealPageComponent,
    OrderPageComponent,
    MealBuySectionComponent,
    CartViewComponent,
    CartItemsComponent
   
  
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      cartItems:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
