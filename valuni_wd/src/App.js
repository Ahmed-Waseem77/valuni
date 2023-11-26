
import './App.css';  
import {devComponent} from './fdev.js';

//import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage'; 
import { CourseReviewPage } from './reviewpage/coursereviewpage.js'; 
import { TeacherReviewPage } from './reviewpage/teacherreviewpage.js'; 
function App() {

// fetch('http://localhost:3000/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });
const props1 = {title:"CSCE XXXX"};
const props2 = {firstName:"firstname", lastName:"lastname"};
  return (  
      <Routes>
        <Route path="/" element={devComponent} />
        <Route path="/Home" className= 'Homepage' element={<HomePage />} />
        <Route path="/CourseReview"  className= 'CourseReview' element={<CourseReviewPage {...props1} />} />
        <Route path="/TeacherReview" className= 'TeacherReview' element={<TeacherReviewPage {...props2}/>} />
      </Routes>
      
//=======
//import React from 'react';
//import './App.css';
//import SignIn from './SignIn';
//import SignUp from './SignUp';
//import { testFirebase, signInWithEmailAndPasswordFunction, signUpWithEmailAndPassword } from './firebase/config';
//
//function App() {
//  // Call the testFirebase function to test Firebase connectivity
//  testFirebase();
//
//  const handleSignIn = (email, password) => {
//    signInWithEmailAndPasswordFunction(email, password);
//  };
//
//  const handleSignUp = (email, password) => {
//    signUpWithEmailAndPassword(email, password);
//  };
//
//  return (
//    <div>
//      <h1>Your App Title</h1>
//      <SignIn onSignIn={handleSignIn} />
//      <SignUp onSignUp={handleSignUp} />
//    </div>
//>>>>>>> refs/remotes/origin/dev-b
  );
}

export default App;
