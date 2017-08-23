import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Navbar extends Component {
  render(){
    return (
      <ul className="navbar">
        <li className="navlink"><Link className="link" to="/">Home</Link></li>
        <li className="navlink"><Link className="link" to="/about">About</Link></li>
        <li className="navlink"><Link className="link" to="/contact">Contact</Link></li>
      </ul>
    );
  }
}

export default Navbar;
