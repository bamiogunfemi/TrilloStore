import React from 'react'
import './header.style.scss';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as CartImage} from '../../assets/cart.svg'
import {auth} from '../../firebase/firebase.utils'

const Header =({currentUser})=>(
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
                <CartImage/>
            </Link>
        </div>
    </div>
)

const mapStateToProps =state=>({
    currentUser:state.user.CurrentUser
})
export default connect(mapStateToProps)(Header);