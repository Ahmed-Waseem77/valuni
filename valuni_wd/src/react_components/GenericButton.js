import React from 'react';
import { Link } from 'react-router-dom';
import './GenericButton.css';

class GenButtonEl extends React.Component{
    render(){
    const { buttonText } = this.props;
    const { btnColor } = this.props;
    return (
    <div>
      <Link to="" className={`Genbtn ${btnColor}`}> {buttonText} </Link>
    </div>
    )
  }
}


export {GenButtonEl};