import './login.css';
import logo from '../resources/VAL_LOGO_STARTS.svg';  
import logoType from '../resources/VAL_LOGO_TYPE_DRK.svg';
import React, {Component} from 'react';

class LoginPage extends React.Component { 
    render () { 
        return ( 
            <div className="login">
                <div className="login-form"> 
                    <object type="image/svg+xml" data={logo} className="App-logo" alt="logo" >  
                    </object>  <br/>
                    <object type= "image/svg+xml" data={logoType} className="App-logo-type" alt="logoType"> 
                    </object>
                </div>
            </div>
        )
    }
} 


export {LoginPage}






