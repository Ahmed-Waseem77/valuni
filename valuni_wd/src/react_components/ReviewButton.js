import './ReviewButton.css';
import {Homepage} from '../homepage/Homepage';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { ReviewFormEl } from './ReviewForm';



class ReviewButtonEl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    };
  }

  handlePress = () => {
    this.setState((prevState) => ({
      buttonClicked: true,
    }));
    this.props.onButtonClick();
  };

  render() {
    const { buttonClicked } = this.state;

    return (
      <div>
        <button className="btnRev" id="btnRev" onClick={this.handlePress} onMouseOver={this.handleHover}>
            <Link to= "" className="link">
              Review
            </Link>
          </button>
      </div>
    );
  }
}

export {ReviewButtonEl};
