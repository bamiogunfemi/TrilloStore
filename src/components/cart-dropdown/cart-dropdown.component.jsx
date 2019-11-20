import React from 'react';
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component';
import Cart from '../cart/cart.component';

const CartDropdown =()=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
export default CartDropdown