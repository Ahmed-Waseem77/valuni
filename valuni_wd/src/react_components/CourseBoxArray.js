import React from 'react';
import { CourseBoxes } from './CourseBoxes'; // Assuming CourseBoxes is the component you've defined
import './CourseBoxesArray.css'

export function getTitle(index) 
{

};

class CourseBoxArray extends React.Component 
{
  render() {
    // Sample data for demonstration
    const courses = [
      { title: 'CSCE 231/2303', lastName: 'Salama' , firstName: 'Cherif' },
      { title: 'CSCE 253/2501', lastName: 'Sharara', firstName: 'Hossam' },
      { title: 'CSCE 330/3301', lastName: 'Salama', firstName: 'Cherif' },
      { title: 'CSCE 341/3701 ', lastName: 'El Ghamrawy', firstName: 'Sally' },
      { title: 'CSCE 490/4950 ', lastName: 'Sharara', firstName: 'Hossam' },
      { title: 'CSCE 2000', lastName: 'Salvatore', firstName: 'Damon' },
      { title: 'CSCE 1000', lastName: 'Waseem', firstName: 'Ahmed' },
      { title: 'CSCE 4000', lastName: 'Bennet', firstName: 'Bonnie' },
      { title: 'CSCE 5000', lastName: 'Petrova', firstName: 'Katerina' },

      // Add more courses as needed
    ];

    return (
      <div className='container'>
       
        {courses.map((course, index) => (
          <CourseBoxes
            key={index}
            title={course.title}
            lastName={course.lastName}
            firstName={course.firstName}
          />
        ))}
        
      </div>
    );
  }
}

export  {CourseBoxArray};
