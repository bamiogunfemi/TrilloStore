import React, {Component} from 'react'
import './singup.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '..custom-button/custom-button.component'
import {auth} from '../../firebase/firebase.utils';


class SignUp extends Component{
    constructor(){
        super()
        this.state ={
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }
    handleSubmit= async event=>{
        event.preventDefault()

        const {displayName, password, email,confirmPassword} = this.state;
         if (password !== confirmPassword){
             alert('passwords do not match')
             return

         }
         try{
         const {user} = await auth.createUserWithEmailAndPassword(email,password)
    }
    catch(error){

    }
    render(){
        const {displayName, password, email,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
             <h2 className='title'>I don't have an account</h2>
             <span>Sign up with email and password</span>
              <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <formInput
                type='text'
                name='displayName'
                value ={displayName}
                onChange={this.handleChange}
                label ='Display Name'
                required
                />
                <formInput
                type='email'
                name='email'
                value ={email}
                onChange={this.handleChange}
                label ='Email'
                required

                />
                <formInput
                type='password'
                name='password'
                value ={password}
                onChange={this.handleChange}
                label ='Password'
                required
                />
                <formInput
                type='password'
                name='password'
                value ={confirmPassword}
                onChange={this.handleChange}
                label ='Confirm Password'
                required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
                </div>
        )
    }
}
export default SignUp