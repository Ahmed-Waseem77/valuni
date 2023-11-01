import './login.css';
import logo from '../resources/VAL_LOGO_STARTS.svg'; 
import React, {Component} from 'react';

class LoginPage extends React.Component { 
    render () { 
        return ( 
            <div className="login">
            <header className="login-header">
              <object type="image/svg+xml" data={logo} className="App-logo" alt="logo" >  
              </object>
            </header>
            </div>
        )
    }
} 


export {LoginPage}






