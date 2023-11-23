import './RatingsBoxes.css';
// import {Homepage} from '../homepage/Homepage';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Ratings from '../resources/VAL-STAR_FULL.svg'; 


class RatingsBoxesEL extends React.Component{
    render(){
    const { Text } = this.props;
    return (
      <div className='flex'>
      <div className='RatingsBox' id='RatingsBox'>
        <h1 className='Rater' id='Rater'>Anonymous</h1>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
        <h2 className='ProfDetails' id='ProfDetails'> Prof. lastName, firstName</h2>
        <h2 className='Semester' id='Semester'> SEM 2X'2X</h2>
        <div className='RatingText' id='RatingText'>AAAAAAAAAAAAAA</div>
      </div>
      </div>
    )
  }
}


export {RatingsBoxesEL};