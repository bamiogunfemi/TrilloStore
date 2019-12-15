import React,{useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import CheckoutPage from './pages/checkout/checkout.component'
import {Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import {userSession} from './redux/user/user.actions'


const App =({userSession,currentUser})=>{
   useEffect(()=>{
    userSession()
   },[userSession])
  ;
  
    return (
      <div>  
   <Header />
   <Switch>
   <Route exact path='/' component={HomePage}/>
   <Route path='/shop' component={ShopPage}/>
   <Route exact path='/checkout' component={CheckoutPage}/>
   <Route 
   exact
    path='/signin' 
   render={()=>
    currentUser ?
     (<Redirect to='/'/>):(
   <SignInAndSignUpPage/>
    )}
    />
   </Switch>
   
      </div>
  
 
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
   
})
const mapDispatchToProps = dispatch =>({
  userSession: ()=>dispatch(userSession())
})


export default connect(mapStateToProps,mapDispatchToProps ) (App);
