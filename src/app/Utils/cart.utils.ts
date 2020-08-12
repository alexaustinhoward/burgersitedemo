export const addItemToCart =(cartItems, cartItemAdd)=>{
    const existingCartItem = cartItems.find(item => item.fullname === cartItemAdd.fullname);
    if (existingCartItem) {
   
      return cartItems.map(item =>
        item.fullname=== cartItemAdd.fullname
          ? { fullname:cartItemAdd.fullname, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...cartItems,{...cartItemAdd, quantity:1}]
    };
    export const lowerItem=(cartItems, lowerItem)=>{
        const existingCartItem = cartItems.find(
            cartItem=>cartItem.fullname === lowerItem
        )
        if(existingCartItem.quantity===1){
            return cartItems.filter(cartItem=>
                 cartItem.fullname !== lowerItem)
        }    
        return cartItems.map(
            cartItem =>
            cartItem.fullname=== lowerItem
            ?{fullname:cartItem.fullname, quantity: cartItem.quantity -1}
            : cartItem 
        )
    }
