import React from 'react';
import {ReactComponent as CartLogo} from '../../assets/cart.svg'
import './cart-icon.style.scss';
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartIcon =({toggleCartHidden})=>(
  <div className="cart-icon" onClick={toggleCartHidden}>
      <CartLogo className='shopping-icon'/>
      <span className ='item-count'>0</span>
  </div>
)
const mapDispatchToProps = dispatch =>({
  toggleCartHidden:()=> dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)( CartIcon);