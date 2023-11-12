import './LoginButton.css';
import {Homepage} from '../homepage/Homepage';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';




class LoginButtonEL extends React.Component{
    render(){
    return (
    <div>
      <button className = "btn" id = "btn" onClick={this.handlePress} onMouseOver={this.handleHover}>
        <Link to="/Home" className='link'> login </Link>
      </button>
    </div>
    )
  }
}


export {LoginButtonEL};
