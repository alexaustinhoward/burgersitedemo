import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Cart } from '../Model/Cart.model'
export const ADD_ITEM = '[Cart] Add'
export const REMOVE_ITEM = '[Cart] Remove'
export const LOWER_ITEM = '[Cart] Lower'
export class AddItem implements Action {
     readonly type=ADD_ITEM
     constructor(public payload: Cart){}
}
export class RemoveItem implements Action {
    readonly type=REMOVE_ITEM
    constructor(public payload: Cart){}
}
export class LowerItem implements Action {
    readonly type=LOWER_ITEM
    constructor(public payload: Cart){}
}
export type Actions= AddItem| RemoveItem| LowerItem