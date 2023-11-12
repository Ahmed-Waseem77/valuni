
import './App.css';  
import {devComponent} from './fdev.js';

//import testFirebase from './firebase/config.js';

import { LoginPage } from './login/LoginPage';  
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/Homepage';


function App() {
  return ( 
      {...devComponent}
  );
} 



//testFirebase();

export default App;
