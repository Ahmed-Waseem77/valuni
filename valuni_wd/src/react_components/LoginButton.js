import './LoginButton.css';
import React, {Component} from 'react';

class LoginButtonEL extends React.Component{
    handlePress = () => {
        console.log('Button pressed');
        if (this.props.onPress) {
          this.props.onPress();
        }
      };
    
      handleHover = () => {
        console.log('Mouse hovered over the button');
        if (this.props.onHover) {
          this.props.onHover();
        }
      };
    render(){
    return (
    <div>
      <button className = "btn" id = "btn" onClick={this.handlePress} onMouseOver={this.handleHover}>
        Login
      </button>
    </div>
    )
  }
}


export {LoginButtonEL};