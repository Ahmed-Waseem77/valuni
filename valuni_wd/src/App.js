
import './App.css';  

//import {devComponent} from './fdev.js';
//import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage'; 
import  CourseReviewPage  from './reviewpage/coursereviewpage.js'; 
import { TeacherReviewPage } from './reviewpage/teacherreviewpage.js'; 
function App() {


  
const props1 = {title:"CSCE XXXX"};
const props2 = {firstName:"firstname", lastName:"lastname"};
  return (  
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Home" className= 'Homepage' element={<HomePage />} />
        <Route path="/CourseReview"  className= 'CourseReview' element={<CourseReviewPage {...props1} />} />
        <Route path="/TeacherReview" className= 'TeacherReview' element={<TeacherReviewPage {...props2}/>} />
      </Routes>
      
  );
}

export default App;
