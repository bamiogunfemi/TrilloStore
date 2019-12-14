import React, { Component } from "react";
import "./signup.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import {signUpStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const {signUpStart} =this.props
    const { displayName, password, email, confirmPassword } = this.state;
    if ( password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
  signUpStart({displayName, email, password})
  }; 
  handleChange= e =>{

    const {name, value} = e.target;
    this.setState({[name]: value})
  }
  render() {
    const { displayName, password, email, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
        
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
signUpStart: userCredentials=> dispatch(signUpStart())
})
export default connect(null, mapDispatchToProps)(SignUp);
