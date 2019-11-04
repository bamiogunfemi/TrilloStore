import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Cart from './components/cart/cart.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect } from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component {
 
  unsubscibeFromAuth = null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
         setCurrentUser({
           
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        }
        
      setCurrentUser(userAuth )
      
    })
  }
  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
  
  render(){
    return (
      <div> 
   <Header />
   <Switch>
   <Route exact path='/' component={HomePage}/>
   <Route    path='/shop' component={ShopPage}/>
   <Route 
   exact
    path='/signin' 
   render={()=>
    this.props.currentUser ?
     (<Redirect to='/'/>):(
   <SignInAndSignUpPage/>
    )}
    />
   </Switch>
   
      </div>
  
 
  );
}
}
const mapStateToProps =({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProps= dispath =>({
  setCurrentUser: user=>dispatchEvent(setCurrentUser(user  ))
})

export default connect(null,mapDispatchToProps ) (App);
