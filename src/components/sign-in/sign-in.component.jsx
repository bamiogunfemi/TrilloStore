import React, {Component} from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle  } from '../../firebase/firebase.utils'
class SignIn extends Component{
    constructor(){ 
        super()
     
    this.state ={
       email : '',
       password : ''
    }
}
handleSubmit = e=>{
    e.preventDefault();
    this.setState({email: '', password: ''})
}
handleChange= e =>{
    const {value, name} = e.target;
    this.setState ({ [name]: value});
}
render (){
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password </span>
               <form onSubmit={this.handleSubmit} >
                <FormInput 
                 name="email"
                 value={this.state.email}
                 handleChange={this.handleChange} 
                 label ='Email'
                 required
                 />
             
                <FormInput 
                  name="password" 
                  value={this.state.password}
                  handleChange={this.handleChange} 
                  label='password'
                  required
                  />
                  <div className="buttons">
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton OnClick={signInWithGoogle} isGoogleSignIn>
                    {' '}
                    SIGN IN WITH GOOGLE{' '}</CustomButton>
                    </div>
               </form>
        </div>
    )
}
}


export default SignIn;