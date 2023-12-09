import './ReviewBoxesArray.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import { RatingsBoxesEL } from './RatingsBoxes'; // Assuming CourseBoxes is the component you've defined

class ReviewBoxesArray extends React.Component {
  render() {
    // Sample data for demonstration
    const list1 = [
      // { Text: 'YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!YOU CANT SEE ME!🙈', 
      // ProfLast: 'Cena' , ProfFirst: 'John' , Sem: 'Spring'},
      { Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ullamcorper ipsum. Etiam gravida malesuada augue sit amet vulputate. Praesent eget mi purus. Proin sed consequat odio. Nullam a iaculis elit, at laoreet leo. In non justo convallis augue tempus gravida vitae in tellus. Cras auctor commodo ante sed lobortis. Duis vitae lacus odio.', 
      ProfLast: 'Salama' , ProfFirst: 'Cherif' , Sem: 'Spring'},      { title: 'CSCE 330/3301', lastName: 'Salama', firstName: 'Cherif' },
      { Text: 'CSCE 341/3701 ', ProfLast: 'El Ghamrawy', ProfFirst: 'Sally', Sem:'Fall' },
      { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
      { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
      { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
      { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
      { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
      { Text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.', ProfLast: 'Sally', ProfFirst: 'Elghamrawy', Sem:'Fall' },
      

      // Add more courses as needed
    ];
    const list2 = [
       
       
        { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
        { Text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.', ProfLast: 'Sally', ProfFirst: 'Elghamrawy', Sem:'Fall' },
        { Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada sagittis lectus et interdum. Aenean ac ullamcorper ipsum. Etiam gravida malesuada augue sit amet vulputate. Donec feugiat mi libero, sed euismod neque gravida lacinia. Sed hendrerit magna faucibus odio lobortis vulputate. Praesent eget mi purus. Proin sed consequat odio. Nullam a iaculis elit, at laoreet leo. In non justo convallis augue tempus gravida vitae in tellus. Cras auctor commodo ante sed lobortis. Duis vitae lacus odio. Fusce et pulvinar erat, in tristique mauris. Nullam sit amet dolor non ipsum venenatis ultricies sed eget elit. Sed feugiat vitae nibh sed semper.', 
        ProfLast: 'Salama' , ProfFirst: 'Cherif' , Sem: 'Spring'},
        { Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ullamcorper ipsum. Etiam gravida malesuada augue sit amet vulputate. Praesent eget mi purus. Proin sed consequat odio. Nullam a iaculis elit, at laoreet leo. In non justo convallis augue tempus gravida vitae in tellus. Cras auctor commodo ante sed lobortis. Duis vitae lacus odio.', 
        ProfLast: 'Salama' , ProfFirst: 'Cherif' , Sem: 'Spring'},      
        { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
        { Text: 'Easy Grader, very amazing course ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },
        { Text: 'CSCE 341/3701 ', ProfLast: 'Sharara', ProfFirst: 'Hossam', Sem:'Fall' },


        // Add more courses as needed
      ];
    //const { Text, ProfLast, ProfFirst, Sem } = this.props;
    return (
      <div className="containerRatingBoxes">
         <div className="containerperbox">

        {list1.map((RateBox, index) => (
          <RatingsBoxesEL
            key={index}
            Text={RateBox.Text}
            ProfLast={RateBox.ProfLast}
            ProfFirst={RateBox.ProfFirst}
            Sem={RateBox.Sem}
          />
        ))}
        </div>
        <div className="containerperbox">
        {list2.map((RateBox, index) => (
          <RatingsBoxesEL
            key={index}
            Text={RateBox.Text}
            ProfLast={RateBox.ProfLast}
            ProfFirst={RateBox.ProfFirst}
            Sem={RateBox.Sem}
          />
        ))}
        </div>
        
      </div>
    
    );
  }
}

export  {ReviewBoxesArray};
