
import './App.css';  
//import {devComponent} from './fdev.js';

//import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage'; 


function App() {

fetch('mysql://valuni_ropethird:050941bdad080ca74329ca3543b680010525525b@zrp.h.filess.io:3305/valuni_ropethird')
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
