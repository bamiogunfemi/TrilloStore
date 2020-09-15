import React, { useState } from "react";
import "./signup.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../../components/custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
const SignUp = ({ signUpStart }) => {
  const [signUpCredentials, setCredentials] = useState({ displayName: '', password: '', email: '', confirmPassword: '' })
  const { displayName, password, email, confirmPassword } = signUpCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    signUpStart({ displayName, email, password })
  };
  const handleChange = e => {

    const { name, value } = e.target;
    setCredentials({...signUpCredentials,[name]: value })
  }
  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );

}
const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart())
})
export default connect(null, mapDispatchToProps)(SignUp);
