import React, { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div className="container">
        <div className="">

          <div className="col-lg-4">
          This is home left
          </div>

          <div className="col-lg-4">
          This is home middle
          </div>

          <div className="col-lg-4">
          This is home right
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
