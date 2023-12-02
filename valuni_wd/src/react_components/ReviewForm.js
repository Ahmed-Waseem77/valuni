
import React from 'react';
import './ReviewForm.css';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import {GenButtonEl} from '../react_components/GenericButton'

class ReviewFormEl extends React.Component {
  render() {
    return (
      <div className="Review-Form">
        <div className='column1'>
          <div className='ReviewTitle'>
            REVIEW FORM
          </div>
          <div className='DecorativeLine'></div>

          {/* Overall Section */}
          <div className='Section'>
            <div className='OverallSectionAtt'>
              Overall
            </div>
            <div className='StarsContainerRF'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img key={index} src={Ratings} className='StarsRF' alt='Stars' />
              ))}
            </div>
          </div>
          <div className='DecorativeLine'></div>

          {/* Other Sections */}
          <div className='Section'>
            <div className='SectionAtt'>
              Workload
            </div>
            <div className='StarsContainerRF'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img key={index} src={Ratings1} className='BlueStarsRF' alt='Stars' />
              ))}
            </div>
          </div>
          <div className='DecorativeLine'></div>

          <div className='Section'>
            <div className='SectionAtt'>
              Grading
            </div>
            <div className='StarsContainerRF'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img key={index} src={Ratings1} className='BlueStarsRF' alt='Stars' />
              ))}
            </div>
          </div>
          <div className='DecorativeLine'></div>

          <div className='Section'>
            <div className='SectionAtt'>
              Content Quality
            </div>
            <div className='StarsContainerRF'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img key={index} src={Ratings1} className='BlueStarsRF' alt='Stars' />
              ))}
            </div>
          </div>
          <div className='DecorativeLine'></div>

          <div className='Section'>
            <div className='SectionAtt'>
              Difficulty
            </div>
            <div className='StarsContainerRF'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img key={index} src={Ratings1} className='BlueStarsRF' alt='Stars' />
              ))}
            </div>
          </div>
          <div className='DecorativeLine'></div>

          <div className='Section'>
            <div className='SectionAtt'>
              Support
            </div>
            <div className='StarsContainerRF'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img key={index} src={Ratings1} className='BlueStarsRF' alt='Stars' />
              ))}
            </div>
          </div>
          <div className='DecorativeLine'></div>
        </div>
        <div className='column2'>
          <div className='WrittenRemarks'>
            Written Remarks (optional)
          </div>
              <textarea name="text" className = 'InputBoxRF'rows="14" cols="10" wrap="soft" placeholder='Text here...'></textarea>
          <div className='ButtonArea'>
            <GenButtonEl className='Submitbtn' buttonText="Submit" btnColor = 'SubmitColor'/>
            <GenButtonEl className='Cancelbtn' buttonText="Cancel" btnColor = 'Cancel_Color'/>
          </div>
        </div>
      </div>
    );
  }
}

export { ReviewFormEl };