import React, { useState } from 'react';
import './contact.style.scss'
import { connect } from 'react-redux'
import { contactStart } from '../../redux/user/user.actions'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

const Contact = ({contactStart}) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '', name:'' })
    const { email, password ,name} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        
        contactStart(email, password, name)


    }
    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({...userCredentials, [name]: value });
    }

        return (
            <div className="contact-page">
                <h2>Get in touch with us !</h2>
          
                <form  onSubmit={handleSubmit} >
                  
                <FormInput
                        name="name"
                        type='name'
                        value={name}
                        handleChange={handleChange}
                        label='name'
                        required 

                  
                    />
                    <FormInput
                        name="email"
                        type='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required 

                    />

                    <textarea
                    
                        name="password"
                        type='password'
                        value={password}
                        handleChange={handleChange}
                       placeholder='message'
                        required
                        rows='20'
                        cols ='70'
                    />
                    <div>
                        <CustomButton type='submit'> Send </CustomButton>
                    </div>
                    

                </form>
            
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
  
  contactStart: (email, password, name) => dispatch(contactStart({ email, password, name }))
})
export default connect(null, mapDispatchToProps)(Contact);
