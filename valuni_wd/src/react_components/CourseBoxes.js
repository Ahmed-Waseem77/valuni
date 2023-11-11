import React, { Component } from 'react';
import Ratings from '../resources/VAL-STAR_FULL.svg'; 
import './CourseBoxes.css';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation


class CourseBoxes extends React.Component {

   
  

  render() {
    const { courseName, lastName, firstName } = this.props;
    return (
      <div className='CourseBox' id='CourseBox'>
        <h1 className='CourseTitle' id='CourseTitle'>{courseName}</h1>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
        <h2 className='ProfDetails' id='ProfDetails'> Prof. {lastName}, {firstName}</h2>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
      </div>
    )
    // Define prop types for better validation
    CourseBoxes.propTypes = {
    courseName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    };
  }
}



export { CourseBox };
