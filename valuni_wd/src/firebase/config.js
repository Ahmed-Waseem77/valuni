// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// AW: 2021-10-10:  Firebase configuration is removed from this file for security reasons.
const firebaseConfig = {
  apiKey:             "",
  authDomain:         "",
  projectId:          "",
  storageBucket:      "",
  messagingSenderId:  "",
  appId:              "",
  measurementId:      ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


// function to  Test connectivity to Firebase 

function testFirebase() {
  if (app) {
    console.log("Firebase is initialized successfully");
  } else {
    console.log("Firebase initialization failed");
  }
} 



export default testFirebase;
