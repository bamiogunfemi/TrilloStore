import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import CheckoutPage from './pages/checkout/checkout.component'
import {Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect } from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
class App extends React.Component {
 
  unsubscibeFromAuth = null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
         this.props.setCurrentUser({
           
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
   <Route path='/shop' component={ShopPage}/>
   <Route exact path='/checkout' component={CheckoutPage}/>
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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
})

const mapDispatchToProps= dispatch =>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps ) (App);
