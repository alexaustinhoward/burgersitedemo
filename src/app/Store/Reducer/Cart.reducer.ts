import { Action } from '@ngrx/store'
import { Cart } from './../Model/Cart.model'
import * as  CartActions from './../Actions/Cart.actions'
import {addItemToCart,lowerItem} from '../Utils/cart.utils';
const INITIAL_STATE={
    cartItems:[
      
    ]
}
export function reducer(state=INITIAL_STATE,action:CartActions.Actions){

    switch(action.type){
        case CartActions.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            };
         case CartActions.REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem=> cartItem.fullname !== action.payload
            )
            }
            case CartActions.LOWER_ITEM:
                return{
                    ...state,
                    cartItems:lowerItem(state.cartItems,action.payload)
    
                };
                default:
                    return state;

    }
}
