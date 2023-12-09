import React, { useState, useEffect } from 'react';
import './Homepage.css';
import { TopBar } from '../react_components/TopBar';
import { Scroll } from '../react_components/Scroll';
import { getData } from '../react_components/getData';
import { useLocation } from 'react-router-dom';

// Convert HomePage to a functional component
function HomePage() {
  const [coursesData, setCoursesData] = useState([]);
  const [email, setEmail] = useState('');

  // Use useLocation to get the email from the URL
  const location = useLocation();

  useEffect(() => {
    const emailFromLocation = location.state ? location.state.email : null;

    if (emailFromLocation) {
      console.log('Email is: ', emailFromLocation);
      setEmail(emailFromLocation);

      // Call getData function with the email and update state with fetched data
      getData(emailFromLocation).then((data) => {
        setCoursesData(data);
      });
    }
  }, [location.state]);

  console.log(coursesData);

  return (
    <div className='homepage-container'>
      <TopBar />
      <div className="homepage-title"> <h5>COURSES IN YOUR MAJOR</h5> </div>
      <Scroll data={coursesData} /> {/* Pass the fetched data to Scroll component */}
      <div className="divider"> </div>
      <div className="homepage-title"> <h5>COURSES YOU HAVE TAKEN</h5> </div>
      <Scroll data={coursesData} /> {/* Pass the fetched data to Scroll component */}
    </div>
  );
}

export { HomePage };
