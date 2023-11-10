import React from 'react';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { testFirebase, signInWithEmailAndPasswordFunction, signUpWithEmailAndPassword } from './firebase/config';

function App() {
  // Call the testFirebase function to test Firebase connectivity
  testFirebase();

  const handleSignIn = (email, password) => {
    signInWithEmailAndPasswordFunction(email, password);
  };

  const handleSignUp = (email, password) => {
    signUpWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1>Your App Title</h1>
      <SignIn onSignIn={handleSignIn} />
      <SignUp onSignUp={handleSignUp} />
    </div>
  );
}

export default App;
