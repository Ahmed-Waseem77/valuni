import React, {Component} from 'react';  
import './Homepage.css'
import {TopBar} from '../react_components/TopBar' 
import {Scroll} from '../react_components/Scroll'

class HomePage extends React.Component{
    render(){
    return (
    <div className='homepage-container'> 
      <TopBar/>  
      <div className="homepage-title"> <h5>COURSES IN YOUR MAJOR</h5>  </div>
      <Scroll/>  
      <div className="divider"> </div>
      <div className="homepage-title"> <h5>COURSES YOU HAVE TAKEN</h5>  </div>
      <Scroll/> 
    </div>
    )
  }
}


export {HomePage};
