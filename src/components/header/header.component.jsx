import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.style'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT
                    </OptionDiv> :
                    <OptionLink to='/signin'>
                        SIGN IN
                </OptionLink>
            }
            <OptionLink>
                <CartIcon />
            </OptionLink>
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
