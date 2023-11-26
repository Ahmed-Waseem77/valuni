
import './App.css';  
//import {devComponent} from './fdev.js';

//import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage'; 


function App() {

fetch('http://localhost:3005/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

  return (  
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" className= 'Homepage' element={<HomePage />} />
      </Routes>
  );
}

export default App;
