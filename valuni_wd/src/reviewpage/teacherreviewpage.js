import React, {Component} from 'react';  
import './coursereviewpage.css';
import {TopBar} from '../react_components/TopBar';
import {ReviewBoxesScroll} from '../react_components/ReviewScroll';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import {ReviewButtonEl} from '../react_components/ReviewButton';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import { ReviewFormEl } from '../react_components/ReviewForm';


class TeacherReviewPage extends React.Component{
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

  render(){
    const { reviewButtonClicked } = this.state;

    return (
      <div className={`reviewpage-container ${reviewButtonClicked ? 'blur-background' : ''}`}>
      <TopBar/>  
      <div className='reviewpage-body'>
        <div className='review-column1'>
          <h1 className='titleindent'>{this.props.firstName} {this.props.lastName}</h1>
          <h2 className='titleinde'>Course Given:</h2>
          <h5 className='Desc'>
          Course Title: XXXX, CRN:### <br/>
          Course Title: XXXX, CRN:###
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
          <ReviewFormEl onClose={() => this.setState({ reviewButtonClicked: false })} />
          )}
    </div>
    )
  }
}


export {TeacherReviewPage};
