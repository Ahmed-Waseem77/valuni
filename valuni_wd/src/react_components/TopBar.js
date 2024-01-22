// TopBar.js
import React, { Component } from 'react';
import { FaSearch, FaToggleOn } from 'react-icons/fa';
import logo from '../resources/VAL-STARS-LOGO-LIGHT.svg';
import { Link } from 'react-router-dom';
import './TopBar.css';
import Ratings from '../resources/VAL-STAR_FULL.svg';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
      this.setState({
        suggestions: [],
      });
    }
  };

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    const suggestions = this.generateSuggestions(inputValue);

    this.setState({
      inputValue,
      suggestions,
    });
  };

  generateStars = () => {
    return Array.from({ length: 5 }).map((_, starIndex) => (
      <img key={starIndex} src={Ratings} className='Stars' alt='Stars' />
    ));
  };

  generateSuggestions = (inputValue) => {
    const predefinedSuggestions = [ 'CSCE 000/2203', 'FINC 303/2101', 'CSCE 102/1000', 'CSCE 239L/2302', 'CSCE 527/5262'];

    if (inputValue.trim() === '') {
      return [];
    }

    const filteredSuggestions = predefinedSuggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );

    return filteredSuggestions.map((suggestion, index) => (
      <Link key={index} to={`/page/${suggestion.toLowerCase()}`} className="dropdown-item">
        <div className="suggestion-content">
          <div className="suggestion-inner">
            {suggestion}
            <div className="StarsContainer11">
              {this.generateStars()}
            </div>
          </div>
        </div>
      </Link>
    ));
  };

  handleButtonClick = () => {
    console.log('Button clicked!');
  };

  darktheme = () => {
    
  }
  render() {
    const { inputValue, suggestions } = this.state;

    const isDropdownActive = suggestions.length > 0;
    document.body.classList.toggle('blur-background', isDropdownActive);

    return (
      <div className="Topbar-container">
        <div className="Topbar" id="Topbar">
          <object type="image/svg+xml" data={logo} className="App-logo" alt="logo"></object>
          <div className="SearchBar" id="SearchBar">
            <input
              className="TxtBar"
              type="text"
              value={inputValue}
              onChange={this.handleInputChange}
              placeholder=""
            />
            <button
              type="submit"
              className="btnSearch"
              onClick={this.handleButtonClick}
            >
              <FaSearch />
            </button>
            {suggestions.length > 0 && (
              <div className="dropdown-menu">
                {suggestions}
              </div>
            )}
          </div>
          <div className="label">AUC</div>

          {/* <div className="themebtn"><button onClick={this.darktheme}><FaToggleOn/></button></div> */}
        </div>
        <div className="inside-corner"> </div>
      </div>
    );
  }
}

export { TopBar };
