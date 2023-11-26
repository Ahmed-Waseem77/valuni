import React, { Component } from 'react';
import './Homepage.css';
import { TopBar } from '../react_components/TopBar';
import { Scroll } from '../react_components/Scroll';
import { getData } from '../react_components/getData'; // Import the getData function

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesData: [],
    };
  }

  componentDidMount() {
    // Call getData function and update state with fetched data
    getData().then((data) => {
      this.setState({ coursesData: data });
    });
  }

  render() {
    const { coursesData } = this.state;
    console.log(coursesData);
    return (
      <div className='homepage-container'>
        <TopBar />
        <div className="homepage-title"> <h5>COURSES IN YOUR MAJOR</h5> </div>
        <Scroll data={coursesData} /> {/* Pass the fetched data to Scroll component */}
        <div className="divider"> </div>
        <div className="homepage-title"> <h5>COURSES YOU HAVE TAKEN</h5> </div>
        <Scroll data={coursesData} /> {/* Pass the fetched data to Scroll component */}
      </div>
    );
  }
}

export { HomePage };
