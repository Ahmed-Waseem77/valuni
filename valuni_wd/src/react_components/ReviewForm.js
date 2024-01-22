
import React from 'react';
import './ReviewForm.css';
import Ratings from '../resources/VAL-STAR_FULL.svg';
import RatingsEmpty from '../resources/VAL-STAR_EMPTY.svg';
import Ratings1 from '../resources/VAL-STAR-BLUE.svg';
import RatingsEmpty1 from '../resources/BR-STARS_BLUE_EMPTY.svg';

import {GenButtonEl} from '../react_components/GenericButton'



class ReviewFormEl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      writtentRemarks: '',
    };
  };

  handleCancelClick = () => {
    this.setState({ isVisible: false });
    this.props.onClose(); 
  };

  handleSubmitClick = () => {
    const { writtenRemarks } = this.state;
    const {
      User_Major,
      Semester,
      courseCRN,
      onReviewSubmit,
      onClose,
      Inst_ID,
    } = this.props;
    console.log('courseCRN:', courseCRN);
    const Grading = this.getStarRating('isHoveredBlue2');
    const Workload = this.getStarRating('isHoveredBlue1');
    const Difficulty = this.getStarRating('isHoveredBlue4');
    const Support = this.getStarRating('isHoveredBlue5');
    const ContentQuality = this.getStarRating('isHoveredBlue3');
  
    const reviewData = {
      User_Major: 'Construction Engineering', // Replace with the actual user major
      RText: writtenRemarks,
      User_Email: 'ahmedmohamed@aucegypt.edu', // Replace with the actual user email
      Semester: 'Fall 2022', // Replace with the actual semester
      CRN: courseCRN, // Replace with the actual CRN
      Grading,
      Workload,
      Difficulty,
      Support,
      ContentQuality,
      Inst_ID: Inst_ID, // Replace with the actual instructor ID
    };
  
    fetch('http://localhost:3005/insertReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        onReviewSubmit(writtenRemarks); // Assuming you want to do something after successful submission
        this.setState({ isVisible: false, writtenRemarks: '' });
        onClose();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
      });
  };

  getStarRating = (ratingKey) => {
    // Extract the rating from the state based on the provided ratingKey
    const ratingIndex = parseInt(ratingKey.slice(-1), 10); // Extract the numeric part from the ratingKey
    console.log('Rating index:', ratingIndex);
    return ratingIndex; // If the state property is true, return the rating index, otherwise 0
  };  

  handleInputChange = (event) => {

    this.setState({ writtenRemarks: event.target.value });
  };

  handleClick = (index) => {
    const clickOccurredKey = `clickoccurred${index}`;
    const isHoveredKeys = Array.from({ length: 5 }, (_, i) => `isHovered${i + 1}`);
  
    if (this.state[clickOccurredKey]) {
      // Cancel the click and revert to the original state
      const resetState = {
        [clickOccurredKey]: false,
      };
      isHoveredKeys.forEach((key) => (resetState[key] = false));
      this.setState(resetState);
    } else {
      // Set the state when the click occurs
      const setStateOnOccur = {
        [clickOccurredKey]: true,
      };
      for (let i = 0; i < index; i++) {
        setStateOnOccur[isHoveredKeys[i]] = true;
      }
      this.setState(setStateOnOccur);
    }
  }
  handleClickBlue1 = (index) => {
    const clickOccurredKey = `clickoccurredBlue1${index}`;
    const isHoveredKeys = Array.from({ length: 5 }, (_, i) => `isHoveredBlue1${i + 1}`);
  
    if (this.state[clickOccurredKey]) {
      // Cancel the click and revert to the original state
      const resetState = {
        [clickOccurredKey]: false,
      };
      isHoveredKeys.forEach((key) => (resetState[key] = false));
      this.setState(resetState);
    } else {
      // Set the state when the click occurs
      const setStateOnOccur = {
        [clickOccurredKey]: true,
      };
      for (let i = 0; i < index; i++) {
        setStateOnOccur[isHoveredKeys[i]] = true;
      }
      this.setState(setStateOnOccur);
    }
  }
  handleClickBlue2 = (index) => {
    const clickOccurredKey = `clickoccurredBlue2${index}`;
    const isHoveredKeys = Array.from({ length: 5 }, (_, i) => `isHoveredBlue2${i + 1}`);
  
    if (this.state[clickOccurredKey]) {
      // Cancel the click and revert to the original state
      const resetState = {
        [clickOccurredKey]: false,
      };
      isHoveredKeys.forEach((key) => (resetState[key] = false));
      this.setState(resetState);
    } else {
      // Set the state when the click occurs
      const setStateOnOccur = {
        [clickOccurredKey]: true,
      };
      for (let i = 0; i < index; i++) {
        setStateOnOccur[isHoveredKeys[i]] = true;
      }
      this.setState(setStateOnOccur);
    }
  }
  handleClickBlue3 = (index) => {
    const clickOccurredKey = `clickoccurredBlue3${index}`;
    const isHoveredKeys = Array.from({ length: 5 }, (_, i) => `isHoveredBlue3${i + 1}`);
  
    if (this.state[clickOccurredKey]) {
      // Cancel the click and revert to the original state
      const resetState = {
        [clickOccurredKey]: false,
      };
      isHoveredKeys.forEach((key) => (resetState[key] = false));
      this.setState(resetState);
    } else {
      // Set the state when the click occurs
      const setStateOnOccur = {
        [clickOccurredKey]: true,
      };
      for (let i = 0; i < index; i++) {
        setStateOnOccur[isHoveredKeys[i]] = true;
      }
      this.setState(setStateOnOccur);
    }
  }
  handleClickBlue4 = (index) => {
    const clickOccurredKey = `clickoccurredBlue4${index}`;
    const isHoveredKeys = Array.from({ length: 5 }, (_, i) => `isHoveredBlue4${i + 1}`);
  
    if (this.state[clickOccurredKey]) {
      // Cancel the click and revert to the original state
      const resetState = {
        [clickOccurredKey]: false,
      };
      isHoveredKeys.forEach((key) => (resetState[key] = false));
      this.setState(resetState);
    } else {
      // Set the state when the click occurs
      const setStateOnOccur = {
        [clickOccurredKey]: true,
      };
      for (let i = 0; i < index; i++) {
        setStateOnOccur[isHoveredKeys[i]] = true;
      }
      this.setState(setStateOnOccur);
    }
  }
  handleClickBlue5 = (index) => {
    const clickOccurredKey = `clickoccurredBlue5${index}`;
    const isHoveredKeys = Array.from({ length: 5 }, (_, i) => `isHoveredBlue5${i + 1}`);
  
    if (this.state[clickOccurredKey]) {
      // Cancel the click and revert to the original state
      const resetState = {
        [clickOccurredKey]: false,
      };
      isHoveredKeys.forEach((key) => (resetState[key] = false));
      this.setState(resetState);
    } else {
      // Set the state when the click occurs
      const setStateOnOccur = {
        [clickOccurredKey]: true,
      };
      for (let i = 0; i < index; i++) {
        setStateOnOccur[isHoveredKeys[i]] = true;
      }
      this.setState(setStateOnOccur);
    }
  }
  // Usage in your component
  handleClick1 = () => this.handleClick(1);
  handleClick2 = () => this.handleClick(2);
  handleClick3 = () => this.handleClick(3);
  handleClick4 = () => this.handleClick(4);
  handleClick5 = () => this.handleClick(5);
  handleClickBlue11 = () => this.handleClickBlue1(1);
  handleClickBlue12 = () => this.handleClickBlue1(2);
  handleClickBlue13 = () => this.handleClickBlue1(3);
  handleClickBlue14 = () => this.handleClickBlue1(4);
  handleClickBlue15 = () => this.handleClickBlue1(5);
  handleClickBlue21 = () => this.handleClickBlue2(1);handleClickBlue22 = () => this.handleClickBlue2(2);handleClickBlue23 = () => this.handleClickBlue2(3);handleClickBlue24 = () => this.handleClickBlue2(4);handleClickBlue25 = () => this.handleClickBlue2(5);
  handleClickBlue31 = () => this.handleClickBlue3(1);handleClickBlue32 = () => this.handleClickBlue3(2);handleClickBlue33 = () => this.handleClickBlue3(3);handleClickBlue34 = () => this.handleClickBlue3(4);handleClickBlue35 = () => this.handleClickBlue3(5);
  handleClickBlue41 = () => this.handleClickBlue4(1);handleClickBlue42 = () => this.handleClickBlue4(2);handleClickBlue43 = () => this.handleClickBlue4(3);handleClickBlue44 = () => this.handleClickBlue4(4);handleClickBlue45 = () => this.handleClickBlue4(5);
  handleClickBlue51 = () => this.handleClickBlue5(1);handleClickBlue52 = () => this.handleClickBlue5(2);handleClickBlue53 = () => this.handleClickBlue5(3);handleClickBlue54 = () => this.handleClickBlue5(4);handleClickBlue55 = () => this.handleClickBlue5(5);

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
              <div className='BlueStarsContainerRF'>
                 <button id="btn1" className='BlueStarsRF' onClick={this.handleClickBlue11} style={{backgroundImage: this.state.isHoveredBlue11?  `url(${Ratings1})` : this.state.isHoveredBlue12?  `url(${Ratings1})` : this.state.isHoveredBlue13?  `url(${Ratings1})` : this.state.isHoveredBlue14?  `url(${Ratings1})` : this.state.isHoveredBlue15?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn2" className='BlueStarsRF' onClick={this.handleClickBlue12} style={{backgroundImage: this.state.isHoveredBlue12?  `url(${Ratings1})` : this.state.isHoveredBlue13?  `url(${Ratings1})` : this.state.isHoveredBlue14?  `url(${Ratings1})` : this.state.isHoveredBlue15?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn3" className='BlueStarsRF' onClick={this.handleClickBlue13} style={{backgroundImage: this.state.isHoveredBlue13?  `url(${Ratings1})` : this.state.isHoveredBlue14?  `url(${Ratings1})` : this.state.isHoveredBlue15?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn4" className='BlueStarsRF' onClick={this.handleClickBlue14} style={{backgroundImage: this.state.isHoveredBlue14?  `url(${Ratings1})` : this.state.isHoveredBlue15?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn5" className='BlueStarsRF' onClick={this.handleClickBlue15} style={{backgroundImage: this.state.isHoveredBlue15?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
              </div>
            </div>
            <div className='DecorativeLine'></div>

            <div className='Section'>
              <div className='SectionAtt'>
                Grading
              </div>
              <div className='BlueStarsContainerRF'>
                 <button id="btn1" className='BlueStarsRF' onClick={this.handleClickBlue21} style={{backgroundImage: this.state.isHoveredBlue21?  `url(${Ratings1})` : this.state.isHoveredBlue22?  `url(${Ratings1})` : this.state.isHoveredBlue23?  `url(${Ratings1})` : this.state.isHoveredBlue24?  `url(${Ratings1})` : this.state.isHoveredBlue25?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn2" className='BlueStarsRF' onClick={this.handleClickBlue22} style={{backgroundImage: this.state.isHoveredBlue22?  `url(${Ratings1})` : this.state.isHoveredBlue23?  `url(${Ratings1})` : this.state.isHoveredBlue24?  `url(${Ratings1})` : this.state.isHoveredBlue25?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn3" className='BlueStarsRF' onClick={this.handleClickBlue23} style={{backgroundImage: this.state.isHoveredBlue23?  `url(${Ratings1})` : this.state.isHoveredBlue24?  `url(${Ratings1})` : this.state.isHoveredBlue25?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn4" className='BlueStarsRF' onClick={this.handleClickBlue24} style={{backgroundImage: this.state.isHoveredBlue24?  `url(${Ratings1})` : this.state.isHoveredBlue25?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn5" className='BlueStarsRF' onClick={this.handleClickBlue25} style={{backgroundImage: this.state.isHoveredBlue25?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
              </div>
            </div>
            <div className='DecorativeLine'></div>

            <div className='Section'>
              <div className='SectionAtt'>
                Content Quality
              </div>
              <div className='BlueStarsContainerRF'>
                 <button id="btn1" className='BlueStarsRF' onClick={this.handleClickBlue31} style={{backgroundImage: this.state.isHoveredBlue31?  `url(${Ratings1})` : this.state.isHoveredBlue32?  `url(${Ratings1})` : this.state.isHoveredBlue33?  `url(${Ratings1})` : this.state.isHoveredBlue34?  `url(${Ratings1})` : this.state.isHoveredBlue35?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn2" className='BlueStarsRF' onClick={this.handleClickBlue32} style={{backgroundImage: this.state.isHoveredBlue32?  `url(${Ratings1})` : this.state.isHoveredBlue33?  `url(${Ratings1})` : this.state.isHoveredBlue34?  `url(${Ratings1})` : this.state.isHoveredBlue35?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn3" className='BlueStarsRF' onClick={this.handleClickBlue33} style={{backgroundImage: this.state.isHoveredBlue33?  `url(${Ratings1})` : this.state.isHoveredBlue34?  `url(${Ratings1})` : this.state.isHoveredBlue35?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn4" className='BlueStarsRF' onClick={this.handleClickBlue34} style={{backgroundImage: this.state.isHoveredBlue34?  `url(${Ratings1})` : this.state.isHoveredBlue35?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn5" className='BlueStarsRF' onClick={this.handleClickBlue35} style={{backgroundImage: this.state.isHoveredBlue35?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
              </div>
            </div>
            <div className='DecorativeLine'></div>

            <div className='Section'>
              <div className='SectionAtt'>
                Difficulty
              </div>
              <div className='BlueStarsContainerRF'>
                 <button id="btn1" className='BlueStarsRF' onClick={this.handleClickBlue41} style={{backgroundImage: this.state.isHoveredBlue41?  `url(${Ratings1})` : this.state.isHoveredBlue42?  `url(${Ratings1})` : this.state.isHoveredBlue43?  `url(${Ratings1})` : this.state.isHoveredBlue44?  `url(${Ratings1})` : this.state.isHoveredBlue45?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn2" className='BlueStarsRF' onClick={this.handleClickBlue42} style={{backgroundImage: this.state.isHoveredBlue42?  `url(${Ratings1})` : this.state.isHoveredBlue43?  `url(${Ratings1})` : this.state.isHoveredBlue44?  `url(${Ratings1})` : this.state.isHoveredBlue45?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn3" className='BlueStarsRF' onClick={this.handleClickBlue43} style={{backgroundImage: this.state.isHoveredBlue43?  `url(${Ratings1})` : this.state.isHoveredBlue44?  `url(${Ratings1})` : this.state.isHoveredBlue45?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn4" className='BlueStarsRF' onClick={this.handleClickBlue44} style={{backgroundImage: this.state.isHoveredBlue44?  `url(${Ratings1})` : this.state.isHoveredBlue45?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn5" className='BlueStarsRF' onClick={this.handleClickBlue45} style={{backgroundImage: this.state.isHoveredBlue45?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
              </div>
            </div>
            <div className='DecorativeLine'></div>

            <div className='Section'>
              <div className='SectionAtt'>
                Support
              </div>
              <div className='BlueStarsContainerRF'>
                 <button id="btn1" className='BlueStarsRF' onClick={this.handleClickBlue51} style={{backgroundImage: this.state.isHoveredBlue51?  `url(${Ratings1})` : this.state.isHoveredBlue52?  `url(${Ratings1})` : this.state.isHoveredBlue53?  `url(${Ratings1})` : this.state.isHoveredBlue54?  `url(${Ratings1})` : this.state.isHoveredBlue55?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn2" className='BlueStarsRF' onClick={this.handleClickBlue52} style={{backgroundImage: this.state.isHoveredBlue52?  `url(${Ratings1})` : this.state.isHoveredBlue53?  `url(${Ratings1})` : this.state.isHoveredBlue54?  `url(${Ratings1})` : this.state.isHoveredBlue55?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn3" className='BlueStarsRF' onClick={this.handleClickBlue53} style={{backgroundImage: this.state.isHoveredBlue53?  `url(${Ratings1})` : this.state.isHoveredBlue54?  `url(${Ratings1})` : this.state.isHoveredBlue55?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn4" className='BlueStarsRF' onClick={this.handleClickBlue54} style={{backgroundImage: this.state.isHoveredBlue54?  `url(${Ratings1})` : this.state.isHoveredBlue55?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
                 <button id="btn5" className='BlueStarsRF' onClick={this.handleClickBlue55} style={{backgroundImage: this.state.isHoveredBlue55?  `url(${Ratings1})` : `url(${RatingsEmpty1})`}}/> 
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