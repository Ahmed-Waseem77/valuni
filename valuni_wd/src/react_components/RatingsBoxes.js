// RatingsBoxesEL.jsx
import React from 'react';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import './RatingsBoxes.css';

class RatingsBoxesEL extends React.Component {
  render() {
    const { Text } = this.props;
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
            Prof. lastName, firstName
          </h2>
          <h2 className='Semester' id='Semester'>
            SEM 2X'2X
          </h2>
          <div className='RatingText' id='RatingText'>
            AAAAAAAAAAAAAAAAaaaaaaaaaaaanidnieidjeijdiejdijeskndkdkemldmlmldmlemsjndjcnjnjnsknendmedlmeldmlemdkemkdekdnkemdkemkdnek
          </div>
        </div>
      </div>
    );
  }
}

export { RatingsBoxesEL };
