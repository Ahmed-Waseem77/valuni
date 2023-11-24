// RatingsBoxesEL.jsx
import React from 'react';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import './RatingsBoxes.css';

class RatingsBoxesEL extends React.Component {
  render() {
    const { Text } = this.props;
    const { ProfLast } = this.props;
    const { ProfFirst } = this.props;
    const { Sem } = this.props;
    Text = "HellozHellozHellozHellozHellozHellozHellozHellozHellozHellozHelloz";
    ProfLast = "Cena";
    ProfFirst = "John";
    Sem = "2X' 2X'";
    return (
      <div className='flex'>
        <div className='RatingsBox' id='RatingsBox'>
          <div className='RatingDetails' id='RatingDetails'>
            <h1 className='Rater' id='Rater'>
              Anonymous
            </h1>
            <div className='StarsContainer'>
              <img src={Ratings} className='Stars' alt='Stars' />
              <img src={Ratings} className='Stars' alt='Stars' />
              <img src={Ratings} className='Stars' alt='Stars' />
              <img src={Ratings} className='Stars' alt='Stars' />
              <img src={Ratings} className='Stars' alt='Stars' />
            </div>
          </div>
          <h2 className='ProfDetails' id='ProfDetails'>
            Prof. {ProfLast}, {ProfFirst}
          </h2>
          <h2 className='Semester' id='Semester'>
            SEM {Sem}
          </h2>
          <div className='RatingText' id='RatingText'>{Text}</div>
        </div>
      </div>
    );
  }
}

export { RatingsBoxesEL };
