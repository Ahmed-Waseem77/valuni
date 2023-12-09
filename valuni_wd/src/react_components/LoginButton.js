import React, { useState } from 'react';
import './LoginButton.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPasswordFunction } from '../firebase/config';

function LoginButtonEL(props) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePress = async () => {
    const { email, password, onLoginButtonClick } = props;

    try {
      // Wait for the sign-in function to complete
      const userExists = await signInWithEmailAndPasswordFunction(email, password);

      // If sign-in is successful, you can navigate to the next window
      if (userExists) {
        console.log('User signed in successfully. Navigating to the next window...');

        // Use useNavigate to navigate to the next window with additional props
        navigate('/Home', { state: { email } }); // Adjust the path as needed

        // Call the onLoginButtonClick function if provided
        if (onLoginButtonClick) {
          onLoginButtonClick();
        }
      } else {
        console.log('User does not exist in the database.');
        // Handle case where the user does not exist
        setError('User does not exist in the database.');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle the sign-in error if needed
      setError(`Error signing in: ${error.message}`);
    }
  };

  return (
    <div className="errAndBtn">
      {error && <div className="err">{error}</div>}
      <button className="btn" id="btn" onClick={handlePress} onMouseOver={props.handleHover}>
        {/* Render the Link conditionally */}
        {props.linkTo ? (
          <Link to={props.linkTo} className="link">
            Login
          </Link>
        ) : (
          'Login'
        )}
      </button>
    </div>
  );
}

export { LoginButtonEL };
