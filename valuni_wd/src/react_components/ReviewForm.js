
import React from 'react';
import './ReviewForm.css';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import RatingsEmpty from '../resources/VAL-STAR_EMPTY.svg';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import {GenButtonEl} from '../react_components/GenericButton'



class ReviewFormEl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      writtentRemarks: '',
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      clickoccurred1: false,       
      clickoccurred2: false,
      clickoccurred3: false,
      clickoccurred4: false,
      clickoccurred5: false,

    };
  };

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


  handleClick1 = () => {
    if (this.state.clickoccurred1) {
      // Cancel the click and revert to the original state
      this.setState({
        clickoccurred1: false,
        isHovered1: false,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    } else {
      // Set the state when the click occurs
      this.setState({
        clickoccurred1: true,
        isHovered1: true,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    }
  }
  
  handleClick2 = () => {
    if (this.state.clickoccurred2) {
      // Cancel the click and revert to the original state
      this.setState({
        clickoccurred2: false,
        isHovered1: false,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    } else {
      // Set the state when the click occurs
      this.setState({
        clickoccurred2: true,
        isHovered1: true,
        isHovered2: true,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    }
  }
  
  handleClick3 = () => {
    if (this.state.clickoccurred3) {
      // Cancel the click and revert to the original state
      this.setState({
        clickoccurred3: false,
        isHovered1: false,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    } else {
      // Set the state when the click occurs
      this.setState({
        clickoccurred3: true,
        isHovered1: true,
        isHovered2: true,
        isHovered3: true,
        isHovered4: false,
        isHovered5: false,
      });
    }
  }
  
  handleClick4 = () => {
    if (this.state.clickoccurred4) {
      // If clickoccurred4 is already true, consider it as a cancel action
      this.setState({
        clickoccurred4: false,
        isHovered1: false,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    } else {
      // If clickoccurred4 is false, set it to true and other isHovered states accordingly
      this.setState({
        clickoccurred4: true,
        isHovered1: true,
        isHovered2: true,
        isHovered3: true,
        isHovered4: true,
        isHovered5: false,
      });
    }
  }
  handleClick5 = () => {
    if (this.state.clickoccurred5) {
      // Cancel the click and revert to the original state
      this.setState({
        clickoccurred5: false,
        isHovered1: false,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
        isHovered5: false,
      });
    } else {
      // Set the state when the click occurs
      this.setState({
        clickoccurred5: true,
        isHovered1: true,
        isHovered2: true,
        isHovered3: true,
        isHovered4: true,
        isHovered5: true,
      });
    }
  }
  


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
                 <button id="btn1" className='StarsRF' onClick={this.handleClick1} style={{backgroundImage: this.state.isHovered1?  `url(${Ratings})` : this.state.isHovered2?  `url(${Ratings})` : this.state.isHovered3?  `url(${Ratings})` : this.state.isHovered4?  `url(${Ratings})` : this.state.isHovered5?  `url(${Ratings})` : `url(${RatingsEmpty})`}}/> 
                 <button id="btn2" className='StarsRF' onClick={this.handleClick2} style={{backgroundImage: this.state.isHovered2?  `url(${Ratings})` : this.state.isHovered3?  `url(${Ratings})` : this.state.isHovered4?  `url(${Ratings})` : this.state.isHovered5?  `url(${Ratings})` : `url(${RatingsEmpty})`}}/> 
                 <button id="btn3" className='StarsRF' onClick={this.handleClick3} style={{backgroundImage: this.state.isHovered3?  `url(${Ratings})` : this.state.isHovered4?  `url(${Ratings})` : this.state.isHovered5?  `url(${Ratings})` : `url(${RatingsEmpty})`}}/> 
                 <button id="btn4" className='StarsRF' onClick={this.handleClick4} style={{backgroundImage: this.state.isHovered4?  `url(${Ratings})` : this.state.isHovered5?  `url(${Ratings})` : `url(${RatingsEmpty})`}}/> 
                 <button id="btn5" className='StarsRF' onClick={this.handleClick5} style={{backgroundImage: this.state.isHovered5?  `url(${Ratings})` : `url(${RatingsEmpty})`}}/> 
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