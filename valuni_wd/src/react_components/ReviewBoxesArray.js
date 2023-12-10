import React from 'react';
import { RatingsBoxesEL } from './RatingsBoxes';

class ReviewBoxesArray extends React.Component {
  render() {
    const { reviewData } = this.props;

    // Split reviewData into two parts
    const list = reviewData;
    const firstHalf = list.slice(0, list.length / 2);
    const secondHalf = list.slice(list.length / 2, list.length);
    // var
    console.log(firstHalf);
    console.log(secondHalf);
    return (
      <div className="containerRatingBoxes">
        
         <div className="containerperbox">

        {firstHalf.map((RateBox, index) => (
          <RatingsBoxesEL
            key={index}
            Text={RateBox.RText}
            ProfLast={RateBox.Last_Name}
            ProfFirst={RateBox.First_Name}
            Sem={RateBox.Semester}
          />
        ))}
        </div>
        <div className="containerperbox">
        {secondHalf.map((RateBox, index) => (
          <RatingsBoxesEL
            key={index}
            Text={RateBox.RText}
            ProfLast={RateBox.Last_Name}
            ProfFirst={RateBox.First_Name}
            Sem={RateBox.Semester}
          />
        ))}
        </div>
        
      </div>
    
    );
  }
}

export { ReviewBoxesArray };
