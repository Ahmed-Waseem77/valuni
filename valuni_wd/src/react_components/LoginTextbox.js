import './LoginTextBox.css';
import React, {Component} from 'react';
import { FaEye } from "react-icons/fa";

class LoginTextBox extends  React.Component{

    render(){
        return(
                
                <div className = "txtbox" id="txtbox" >
                    <div className = "email">
                    <input type="text" onChange={this.handleInputChange} onFocus={this.hadleFocus} placeholder='email' /> 
                    </div>
                    <div className = "email">
                    
                    <div class="eye" id="togglePassword" >
                    <input type="password" placeholder='password'/>
                    <button type="submit" class="btneye"><FaEye /></button> 
                    </div>
                    </div>
                    
                </div>
        )
    }
}

export {LoginTextBox};