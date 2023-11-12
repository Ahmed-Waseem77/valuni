import './TopBar.css';
import React, {Component} from 'react';
import { FaSearch } from "react-icons/fa";
import logo from '../resources/VAL-STARS-LOGO-LIGHT.svg'; 

class TopBar extends React.Component{
    handleInputChange = (event) => {
        // Handle input change if needed
    };
    
    hadleFocus = (event) => {
        // Handle focus if needed
    };
    
    handleButtonClick = () => {
        console.log('Button clicked!');
        // Add any additional logic you want to perform when the button is clicked
    };
    render(){
        return(
            <div className="Topbar-container">
            <div className = "Topbar" id = "Topbar">
                <object type="image/svg+xml" data={logo} className="App-logo" alt="logo" >  
                </object> 
                <div className = "SearchBar" id="SearchBar">
                        <input className = 'TxtBar' type="text" onChange={this.handleInputChange} onFocus={this.hadleFocus} placeholder = ""/> 
                        <button type="submit" className="btnSearch" onClick={this.handleButtonClick}><FaSearch /> </button> 
                </div>
                <div className='label'>AUC</div> 
            </div>
            <div className='inside-corner'> </div>
            </div>
        )

    }
}

export {TopBar};
