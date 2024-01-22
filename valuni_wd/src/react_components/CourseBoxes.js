import React from 'react';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import './CourseBoxes.css';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Link, useNavigate } from 'react-router-dom';

function CourseBoxes({ title, lastName, firstName }) {
  const navigate = useNavigate();

  const handleCourseReviewClick = () => {
    navigate('/CourseReview', { state: { crn: title } });
  };

  const handleTeacherReviewClick = () => {
    navigate('/TeacherReview', { state: { crn: title } });
  };

  return (
    <div className='flex'>
      <div className='CourseBox' id='CourseBox'>
        <h1 className='CourseTitle' id='CourseTitle'>
          <button className="linkCourse" onClick={handleCourseReviewClick}>
            {title}
          </button>
        </h1>
        <div className='RatingDetails' id='RatingDetails'>
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
        </div>
        <h2 className='ProfDetails' id='ProfDetails'>
          Prof.{' '}
          <button className="linkCourse" onClick={handleTeacherReviewClick}>
            {lastName}, {firstName}
          </button>
        </h2>
        <div className='RatingDetails' id='RatingDetails'>
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
          <img src={Ratings} className="Stars" alt="Stars" />
        </div>
      </div>
    </div>
  );
}

// Define prop types for better validation
CourseBoxes.propTypes = {
  title: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export { CourseBoxes };
