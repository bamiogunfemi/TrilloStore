import React, { useState } from 'react';
import './sign-in.style.scss'
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        
        emailSignInStart(email, password)


    }
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({...userCredentials, [name]: value });
    }

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>
                <form onSubmit={handleSubmit} >
                    <FormInput
                        name="email"
                        type='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required 
                    />

                    <FormInput
                        name="password"
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign in with Google
            </CustomButton>
                    </div>


                </form>

            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);
