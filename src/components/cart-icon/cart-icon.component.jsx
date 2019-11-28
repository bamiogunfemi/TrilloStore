import React from "react";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";
import "./cart-icon.style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <CartLogo className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
