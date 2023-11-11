import React, { Component } from 'react';
import Ratings from '../resources/VAL-STAR_FULL.svg'; 
import './CourseBoxes.css';

class CourseBoxes extends React.Component {
  render() {
    return (
      <div className='CourseBox' id='CourseBox'>
        <h1 className='CourseTitle' id='CourseTitle'>CSCE XXXX</h1>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
        <h2 className='ProfDetails' id='ProfDetails'>Prof. Last Name, First Name </h2>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
      </div>
    )
  }
}

export { CourseBoxes };