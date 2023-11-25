// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';  // Add this line




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// AW: 2021-10-10:  Firebase configuration is removed from this file for security reasons.
const firebaseConfig = {
  apiKey: "AIzaSyChFnWRgOgVa55H2oa-kDclPwFvVw7mJns",
  authDomain: "val-uni.firebaseapp.com",
  databaseURL: "https://val-uni-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "val-uni",
  storageBucket: "val-uni.appspot.com",
  messagingSenderId: "707606250442",
  appId: "1:707606250442:web:d76900f3f63a1b396c0533",
  measurementId: "G-Q670T2RE5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);

// function to Test connectivity to Firebase
export function testFirebase() {
  console.log(process.env);
  if (app) {
    console.log(process.env.REACT_APP_FIREBASE_API_KEY);
    console.log('Firebase is initialized successfully');

    // Test database connectivity
    const db = getFirestore(app);
    const exampleCollection = collection(db, 'exampleCollection');

    getDocs(exampleCollection)
      .then((querySnapshot) => {
        console.log('Successfully connected to the database');
        // You can further process the data if needed
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch((error) => {
        console.error('Error connecting to the database:', error);
      });
  } else {
    console.log('Firebase initialization failed');
  }
}

export function signInWithEmailAndPasswordFunction(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth(); // Get the authentication instance

      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user is authenticated
      if (user && user.uid) {
        // User is authenticated
        resolve(true);
      } else {
        // User is not authenticated
        resolve(false);
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      reject(error); // Reject the promise in case of an error
    }
  });
}


// Function to sign up user with email and password
export async function signUpWithEmailAndPassword(email, password) {
  // Check if the email has the allowed domain
  if (!email.endsWith('@aucegypt.edu')) {
    console.error('Invalid email domain. Please use an @aucegypt.edu email.');
    return;
  }

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);

    console.log('Verification email sent to', email);
    console.log('Waiting for email verification...');

    // Wait for email verification
    await waitForEmailVerification(user);

    console.log('Email verified successfully.');
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
}

// Function to wait for email verification
async function waitForEmailVerification(user) {
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      // Check if the email is verified
      if (user.emailVerified) {
        clearInterval(intervalId);
        resolve();
      }
    }, 1000); // Check every second
  });
}
