import './LoginTextBox.css';
import React from 'react';
import { FaEye } from 'react-icons/fa';

class LoginTextBox extends React.Component {
  // Function to handle changes in the input fields
  handleInputChange = (e) => {
    const { name, value } = e.target;
    // Assuming you have a function to handle input changes in the parent component
    if (this.props.onInputChange) {
      this.props.onInputChange(name, value);
    }
  };

  // Function to handle the eye button click
  handleInputPress = () => {
    // Assuming you have a function to handle the eye button press in the parent component
    if (this.props.onEyeButtonClick) {
      this.props.onEyeButtonClick();
    }
  };

  render() {
    const { email, password, isPasswordVisible } = this.props;

    return (
      <div className="txtbox" id="txtbox">
        <div className="email" id="textboxDiv">
          <input
            className="textInput"
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            placeholder="email"
          />
        </div>

        <div className="test" id="textboxDiv">
          <div className="emailContents">
            <input
              className="textInput"
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleInputChange}
            />
            <button type="button" className="btneye" id="btn" onClick={this.handleInputPress}>
              <FaEye />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { LoginTextBox };
