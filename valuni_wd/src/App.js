
import './App.css';  
//import {devComponent} from './fdev.js';

//import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage';


function App() {
  return ( 
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" className= 'Homepage' element={<HomePage />} />
      </Routes> */}
    </div>
  );
} 



//testFirebase();

export default App;
