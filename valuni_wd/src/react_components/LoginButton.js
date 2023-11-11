import './LoginButton.css';
import {Homepage} from '../homepage/Homepage';
import React, {Component} from 'react';




class LoginButtonEL extends React.Component{
    render(){
    return (
    <div>
      <button className = "btn" id = "btn" onClick={this.handlePress} onMouseOver={this.handleHover}>
        login
      </button>
    </div>
    )
  }
}


export {LoginButtonEL};
