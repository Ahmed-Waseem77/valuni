import React from 'react';
import { CourseBoxes } from './CourseBoxes';
import './CourseBoxesArray.css';

class CourseBoxArray extends React.Component {
  render() {
    // Use the data passed via props
    const { data } = this.props;
    console.log('Data is not an array');
    //put the contents of data[0] into array courses
    const courses = data;
    console.log(courses);
    return (
      <div className='container'>
        {courses.map((course, index) => (
          <CourseBoxes
            key={index}
            title={course.CRN}
            lastName={course.Last_Name}
            firstName={course.First_Name}
          />
        ))}
      </div>
    );
  }
}

export { CourseBoxArray };
