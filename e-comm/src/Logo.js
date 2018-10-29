import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Logo.css'

class Logo extends Component {
    render() {
      return (
        <div className="logo">
          <i className="fa fa-user" aria-hidden="true"></i>   
        </div>
      );
    }
  }
export default Logo;  