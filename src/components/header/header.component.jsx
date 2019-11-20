import React from 'react'
import './header.style.scss';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import {auth} from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
const Header =({currentUser,hidden})=>(
    <div className="header">
        <Link  className ='logoContainer' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to= '/shop'>
            SHOP
            </Link>
            <Link className='option' to= '/contact'>
            CONTACT
            </Link>
            {
                currentUser ?
                <div className ='option' onClick={()=> auth.signOut()}>SIGN OUT</div> :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <Link className='option' to= '/cart'>
                <CartIcon/>
            </Link>
        </div>
        { hidden ? null:  <CartDropdown/> }
       
    </div>
)

const mapStateToProps =({user: {currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);