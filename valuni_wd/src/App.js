
import './App.css';  

import {devComponent} from './fdev.js';
import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage'; 
import { CourseReviewPage } from './reviewpage/coursereviewpage.js'; 
import { TeacherReviewPage } from './reviewpage/teacherreviewpage.js'; 
import {ReviewFormEl} from './react_components/ReviewForm.js';
function App() {

fetch('http://localhost:3005/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  
const props1 = {title:"CSCE XXXX"};
const props2 = {firstName:"firstname", lastName:"lastname"};
  return (  
      <Routes>
        <Route path="/" element={devComponent} />
        <Route path="/Home" className= 'Homepage' element={<HomePage />} />
        <Route path="/CourseReview"  className= 'CourseReview' element={<CourseReviewPage {...props1} />} />
        <Route path="/TeacherReview" className= 'TeacherReview' element={<TeacherReviewPage {...props2}/>} />
        <Route path="/ReviewForm" className= 'ReviewForm' element={<ReviewFormEl />} />
      </Routes>
      
  );
}

export default App;
