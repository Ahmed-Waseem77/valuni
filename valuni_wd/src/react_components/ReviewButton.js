import './ReviewButton.css';
import {Homepage} from '../homepage/Homepage';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class ReviewButtonEl extends React.Component{
    render(){
    return (
    <div>
      <button className = "btnRev" id = "btnRev" onClick={this.handlePress} onMouseOver={this.handleHover}>
      <Link to="" className='link'> Review </Link>
      </button>
    </div>
    )
  }
}


export {ReviewButtonEl};
