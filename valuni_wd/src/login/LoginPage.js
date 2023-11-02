import './login.css';
import logo from '../resources/VAL_LOGO_STARTS.svg';  
import logoType from '../resources/VAL_LOGO_TYPE_DRK.svg'; 
import loginBackgroundImage from '../resources/VAL_BCKGRD_SPLASH_LGHT.svg';
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

                <div className="img-container">
                    <object type="image/svg+xml" data={loginBackgroundImage} className="login-background-image" alt="logo" > 
                    </object> 
                </div>
            </div>
        )
    }
} 


export {LoginPage}






