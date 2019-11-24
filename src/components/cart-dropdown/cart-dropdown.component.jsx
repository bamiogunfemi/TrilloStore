import React from 'react';
import {connect } from 'react-redux'
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cartitem/cartitem.component';
import {selectCartitems} from '../../redux/cart/cart.selectors'
const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">{
            cartItems.map(cartItems=> <CartItem key={CartItem.id} item={CartItem}/>)
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
const mapStateToProps=({cart:{cartItems}}) =>({
    cartItems
})
export default connect (mapStateToProps)(CartDropdown)
