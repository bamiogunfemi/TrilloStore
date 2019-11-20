export const addItemsToCart=(cartItems, cartItemToAdd)=>{
  const existingCartItem = cartItems.find(
    cartItem=> cartItem.id === cartItemToAdd.id
   );

   if (existingCartItem){
     return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ?
      {...cartItem, quantity: cartItem.quantity +1}:
      cartItems
     )
   }
   return  [...cartItems, {...cartItemToAdd, quantity:1}]
}
