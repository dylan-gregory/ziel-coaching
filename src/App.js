import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="">
            <ul className="navbar">
              <li className="navlink"><Link className="link" to="/">Home</Link></li>
              <li className="navlink"><Link className="link" to="/about">About</Link></li>
              <li className="navlink"><Link className="link" to="/programs">Programs</Link></li>
            </ul>
          </div>


          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/programs" component={Programs}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
