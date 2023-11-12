import React from 'react';
import { CourseBoxes } from './CourseBoxes'; // Assuming CourseBoxes is the component you've defined
import './CourseBoxesArray.css'

class CourseBoxArray extends React.Component {
  render() {
    // Sample data for demonstration
    const courses = [
      { title: 'CSCE 1000', lastName: 'Mikaelson' , firstName: 'Klaus' },
      { title: 'CSCE 4000', lastName: 'Forbes', firstName: 'Caroline' },
      { title: 'CSCE 5000', lastName: 'Gilbert', firstName: 'Elena' },
      { title: 'CSCE 2000', lastName: 'Gilbert', firstName: 'Jeremy' },
      { title: 'CSCE 3000', lastName: 'Saltzman', firstName: 'Alaric' },
      { title: 'CSCE 2000', lastName: 'Salvatore', firstName: 'Damon' },
      { title: 'CSCE 1000', lastName: 'Fells', firstName: 'Merridith' },
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