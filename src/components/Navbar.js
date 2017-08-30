import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Navbar extends Component {
  render(){
    return (
      <ul className="navbar">
        <li className="navlink"><NavLink activeClassName="active" className="link" exact to="/">Home</NavLink></li>
        <li className="navlink"><NavLink activeClassName="active" className="link" to="/about">About</NavLink></li>
        <li className="navlink"><NavLink activeClassName="active" className="link" to="/contact">Contact</NavLink></li>
      </ul>
    );
  }
}

export default Navbar;
