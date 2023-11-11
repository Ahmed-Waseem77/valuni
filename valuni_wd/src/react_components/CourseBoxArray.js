import React from 'react';
import { CourseBoxes } from './CourseBoxes'; // Assuming CourseBoxes is the component you've defined

class CourseBoxArray extends React.Component {
  render() {
    // Sample data for demonstration
    const courses = [
      { title: 'CSCE 1000', professor: 'Prof. Smith' },
      { title: 'CSCE 2000', professor: 'Prof. Johnson' },
      { title: 'CSCE 3000', professor: 'Prof. Williams' },
      // Add more courses as needed
    ];

    return (
      <div>
        {courses.map((course, index) => (
          <CourseBoxes
            key={index}
            title={course.title}
            professor={course.professor}
          />
        ))}
      </div>
    );
  }
}

export default CourseBoxArray;