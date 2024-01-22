import './ReviewScroll.css';
import React, {Component} from 'react';
import { ReviewBoxesArray } from './ReviewBoxesArray';



// Import statements...

class ReviewBoxesScroll extends React.Component {
        render() {
          const { reviewData } = this.props;
          console.log(reviewData);
          return <ReviewBoxesArray reviewData={reviewData} />;
        }
      }
      
export { ReviewBoxesScroll };
      