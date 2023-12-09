import React, { useEffect, useState } from 'react';
import './coursereviewpage.css';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../react_components/TopBar';
import { ReviewBoxesScroll } from '../react_components/ReviewScroll';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import { ReviewButtonEl } from '../react_components/ReviewButton';
import { useLocation } from 'react-router-dom';

function CourseReviewPage() {
  const [courseData, setCourseData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const [instructorData, setInstructorData] = useState([]);
  const [courseCRN, setCourseCRN] = useState('');

  const location = useLocation();
  const state = location?.state;
  const navigate = useNavigate();

  useEffect(() => {
    const baseUrl = 'http://localhost:3005';

    if (state && state.crn) {
      // Decode the title parameter
      
      const decodedTitle = decodeURIComponent(state.crn);
      console.log(decodedTitle);
      setCourseCRN(decodedTitle);

      fetch(`${baseUrl}/getCourseInfo/${encodeURIComponent(decodedTitle)}`)
        .then((response) => response.json())
        .then((data) => setCourseData(data[0]));

      fetch(`${baseUrl}/getReviewContent/${encodeURIComponent(decodedTitle)}`)
        .then((response) => response.json())
        .then((data) => setReviewData(data));

      fetch(`${baseUrl}/getCourseInstructors/${encodeURIComponent(decodedTitle)}`)
        .then((response) => response.json())
        .then((data) => setInstructorData(data));
    }
  }, [state]);

  // Function to calculate the star count based on the value (0-5)
  const calculateStars = (value) => {
    const roundedValue = Math.round(value);
    return Array.from({ length: 5 }, (_, index) => (index < roundedValue ? Ratings : Ratings1));
  };
  const calculateAverage = (values) => {
    // Convert string values to numbers
    const numericValues = values.map(value => parseFloat(value));

    const validValues = numericValues.filter((value) => !isNaN(value));
  
    console.log('Valid Values:', validValues);
  
    if (validValues.length === 0) return 0;
  
    const sum = validValues.reduce((acc, value) => acc + value, 0);
    return sum / validValues.length;
  };
  const handleReviewButtonClick = () => {
    // Use navigate to go to the ReviewForm component
    navigate('/ReviewForm', { state: { crn: courseCRN } });
  };
  
  return (
    <div className='reviewpage-container'>
      <TopBar />
      <div className='reviewpage-body'>
        <div className='review-column1'>
          <h1 className='titleindent'>{courseData.CName}</h1>
          <h2 className='titleinde'>Course Description</h2>
          <div className='scrollable-content'>
            <h5 className='Desc'>{courseData.CDescription}</h5>
          </div>
          <h2 className='titleinde'>Instructors</h2>
          <h5 className='Desc'>
            {instructorData.map((instructor) => (
              <div key={instructor.ID}>
                {instructor.First_Name} {instructor.Last_Name}
              </div>
            ))}
          </h5>
          <h2 className='titleinde'>OVERALL</h2>
          <div className='StarsContainerOA'>
            {calculateStars(calculateAverage([courseData.Workload,courseData.ContentQuality,courseData.Support])).map((star, index) => (
              <img key={index} src={star} className='StarsOA' alt='Stars' />
            ))}
            {console.log(calculateAverage([courseData.Workload,courseData.ContentQuality,courseData.Support]))}
          </div>
          <h3 className='titleinde'>Light Workload</h3>
          <div className='StarsContainer1'>
            {calculateStars(courseData.Workload).map((star, index) => (
              <img key={index} src={star} className='Stars' alt='Stars' />
            ))}
          </div>
          <h3 className='titleinde'>Content</h3>
          <div className='StarsContainer1'>
            {calculateStars(courseData.ContentQuality).map((star, index) => (
              <img key={index} src={star} className='Stars' alt='Stars' />
            ))}
          </div>
          <h3 className='titleinde'>Availability</h3>
          <div className='StarsContainer1'>
            {calculateStars(courseData.Support).map((star, index) => (
              <img key={index} src={star} className='Stars' alt='Stars' />
            ))}
          </div>
          <div className='rvButton'>

            <ReviewButtonEl onButtonClick={handleReviewButtonClick}/>
          </div>
        </div>
        <div className='review-column2'>
          <h2 className='rev'>REVIEWS</h2>
          <div className='fadin'></div>
          <ReviewBoxesScroll reviewData={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default CourseReviewPage;
