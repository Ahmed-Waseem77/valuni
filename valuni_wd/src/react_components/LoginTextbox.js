import './LoginTextBox.css';
import React, {Component} from 'react';
import { FaEye } from "react-icons/fa";

class LoginTextBox extends  React.Component{

    render(){
        return(
                <div className = "txtbox" id="txtbox" >
                    <div className = "email" id='textboxDiv'>
                        <input className='textInput' type="text" onChange={this.handleInputChange} onFocus={this.hadleFocus} placeholder='email' /> 
                    </div>
                    
                    <div className='test' id='textboxDiv'>
                    <div className = "emailContents">
                            <input className='textInput' type="password" placeholder='password'/>
                            <button type="submit" className="btneye" id="btn" onClick ={this.handleInputPress}><FaEye /></button> 
                    </div> 
                    </div>
                    
                </div>
        )
    }
}

export {LoginTextBox};
