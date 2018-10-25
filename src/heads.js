import React, { Component } from 'react';
import './App.css';
import banner from './banner.png';

class Heads extends Component {
  render() {
    return (
      <div className="Heads">
        <img src={banner} className='Responsive image'/>
      </div>
    );
  }
}

export default Heads;
