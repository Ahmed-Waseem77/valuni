import React, {Component} from 'react';  
import './Homepage.css'
import {TopBar} from '../react_components/TopBar' 
import {Scroll} from '../react_components/Scroll'

class HomePage extends React.Component{
    render(){
    return (
    <div className='homepage-container'> 
      <TopBar/>  
      <div className="homepage-title"> COURSES IN YOUR MAJOR  </div>
      <Scroll/>  
      <div className="divider"> </div>
      <div className="homepage-title"> COURSES YOU HAVE TAKEN  </div>
      <Scroll/> 
    </div>
    )
  }
}


export {HomePage};
