import React from 'react';
import { Link } from 'react-router-dom';
import './GenericButton.css';

class GenButtonEl extends React.Component{
    render(){
    const { buttonText, btnColor, onClick } = this.props;
    return (
    <div>
      <Link to="" className={`Genbtn ${btnColor}`} onClick={onClick}> {buttonText} </Link>
    </div>
    )
  }
}


export {GenButtonEl};