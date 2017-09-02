import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Navbar />

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
