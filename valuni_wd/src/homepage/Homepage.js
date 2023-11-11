import React, {Component} from 'react';  
import './Homepage.css'
import {TopBar} from '../react_components/TopBar'

class HomePage extends React.Component{
    render(){
    return (
    <div className='homepage-container'> 
      <TopBar/>
    </div>
    )
  }
}


export {HomePage};
