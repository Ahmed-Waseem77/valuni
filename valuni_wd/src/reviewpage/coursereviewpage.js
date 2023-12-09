import React, {Component} from 'react';  
import './coursereviewpage.css';
import {TopBar} from '../react_components/TopBar';
import {ReviewBoxesScroll} from '../react_components/ReviewScroll';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import {ReviewButtonEl} from '../react_components/ReviewButton';
import { ReviewFormEl } from '../react_components/ReviewForm';

class CourseReviewPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviewButtonClicked: false,
    };
  }

  handleReviewButtonClick = () => {
    console.log('Review submitted!');
    this.setState({ reviewButtonClicked: true });

  };

  handleReviewSubmit = (writtenRemarks) => {

    console.log('Review submitted with written remarks:', writtenRemarks);

    this.setState({ reviewButtonClicked: false });
  };
  
  render(){
    const { reviewButtonClicked } = this.state;
    return (
      
      <div className={`reviewpage-container ${reviewButtonClicked ? 'blur-background' : ''}`}>
      <TopBar/>  
      <div className='reviewpage-body'>
        <div className='review-column1'>
          <h1 className='titleindent'>{this.props.title}</h1>
          <h2 className='titleinde'>Course Description</h2>
          <div className='scrollable-content'>
            <h5 className='Desc'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep-
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep-
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep-
            </h5>
          </div>
          <h2 className='titleinde'>Instructors</h2>
          <h5 className='Desc'>
          Prof Last name, First name <br/>
          Prof Last name, First name
          </h5>
          <h2 className='titleinde'>OVERALL</h2>
          <div className='StarsContainerOA'>
                <img src={Ratings} className='StarsOA' alt='Stars' />
                <img src={Ratings} className='StarsOA' alt='Stars' />
                <img src={Ratings} className='StarsOA' alt='Stars' />
                <img src={Ratings} className='StarsOA' alt='Stars' />
                <img src={Ratings} className='StarsOA' alt='Stars' />
          </div>
            <h3 className='titleinde'>Light Workload</h3>
            <div className='StarsContainer1'>
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
            </div>
            <h3 className='titleinde'>Content</h3>
            <div className='StarsContainer1'>
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
            </div>
            <h3 className='titleinde'>Availability</h3>
            <div className='StarsContainer1'>
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
                <img src={Ratings1} className='Stars' alt='Stars' />
            </div>
          <div className='rvButton'>
          <ReviewButtonEl onButtonClick={this.handleReviewButtonClick} />
          </div>
        </div>
        <div className='review-column2'>
          <h2 className='rev'>REVIEWS</h2>
          <div className='fadin'></div>
            <ReviewBoxesScroll/> 
        </div>
      </div>
      {reviewButtonClicked && (
          <ReviewFormEl onClose={() => this.setState({ reviewButtonClicked: false })} onReviewSubmit={this.handleReviewSubmit}/>
        )}
    </div>
    )
  }
}


export {CourseReviewPage};
