
import React from 'react';
import './ReviewForm.css';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import {GenButtonEl} from '../react_components/GenericButton'

class ReviewFormEl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      writtentRemarks: '',
    };
  }

  handleCancelClick = () => {
    this.setState({ isVisible: false });
    this.props.onClose(); 
  };

  handleSubmitClick = () => {
    const writtenRemarks = this.state.writtenRemarks;
    this.setState({ isVisible: false, writtenRemarks: '' });
    this.props.onClose();
    this.props.onReviewSubmit(writtenRemarks);
    
  };

  handleInputChange = (event) => {

    this.setState({ writtenRemarks: event.target.value });
  };

  render() {
    const { buttonClicked } = this.props;

    if (!this.state.isVisible) {
      return null;
    }
    return (
      <div className='RF-container'>
      <div className={`RF ${buttonClicked ? 'visible' : ''}`}>
        <div className="Review-Form">
          <div className='column1'>
            <div className='ReviewTitle'>
              REVIEW FORM
            </div>
            <div className='DecorativeLine'></div>

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
                <textarea name="text" className = 'InputBoxRF'rows="14" cols="10" wrap="soft" placeholder='Text here...' 
                value={this.state.writtenRemarks}
              onChange={this.handleInputChange}></textarea>
            <div className='ButtonArea'>
              <GenButtonEl className='Submitbtn' buttonText="Submit" btnColor = 'SubmitColor' onClick={this.handleSubmitClick}/>
              <GenButtonEl className='Cancelbtn' buttonText="Cancel" btnColor = 'Cancel_Color' onClick={this.handleCancelClick}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export { ReviewFormEl };