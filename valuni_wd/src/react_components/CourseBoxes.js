import React, { Component } from 'react';
import Ratings from '../resources/VAL-STAR_FULL.svg'; 
import './CourseBoxes.css';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Link } from 'react-router-dom';




class CourseBoxes extends React.Component {
  render() {
    const { title, lastName, firstName } = this.props;
 
    return (
      <div className='flex'>
      <div className='CourseBox' id='CourseBox'>
        <h1 className='CourseTitle' id='CourseTitle' ><Link to= "/CourseReview"  classname = "linkCourse">{title}</Link></h1>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
        <h2 className='ProfDetails' id='ProfDetails'> Prof. <Link to= "/TeacherReview"  classname = "linkCourse">{lastName}, {firstName}</Link></h2>
        <div className='RatingDetails' id='RatingDetails'> 
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
          <img src={Ratings} className="Stars" alt="Stars" />  
        </div>
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


export { CourseBoxes };
