import './login.css';
import logo from '../resources/VAL_LOGO_STARTS.svg';  
import logoType from '../resources/VAL_LOGO_TYPE_DRK.svg'; 
import { LoginTextBox } from '../react_components/LoginTextbox';
import { LoginButtonEL } from '../react_components/LoginButton';

import React, { Component } from 'react';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
  };

  // Function to handle changes in email and password inputs
  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  // Function to handle the login button click
  handleLoginButtonClick = async () => {
    const { email, password } = this.state;

    // Implement your sign-in logic here
    // For example, you can call your sign-in function and handle the result
    // signInWithEmailAndPasswordFunction(email, password);

    // You can also navigate to the next window or perform other actions based on the result
  };

  render() {
    return (
      <div className="login">
        <div className="login-form">
          <object type="image/svg+xml" data={logo} className="Applogo" alt="logo">
          </object>

          <object type="image/svg+xml" data={logoType} className="App-logo-type" alt="logoType">
          </object>

          {/* Pass email, password, and related functions as props to LoginTextBox */}
          <div id="cont">
            <LoginTextBox
              email={this.state.email}
              password={this.state.password}
              onInputChange={this.handleInputChange}
            />
          </div>

          {/* Pass email, password, and the login function as props to LoginButtonEL */}
          <div id="cont">
            <LoginButtonEL
              email={this.state.email}
              password={this.state.password}
              onLoginButtonClick={this.handleLoginButtonClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { LoginPage };
