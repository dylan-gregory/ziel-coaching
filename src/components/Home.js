import React, { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div className="container">


        <div className="image-container">

          <span className="ziel">Ziel Coaching</span>
          <span className="coaching"></span>

          <span className="time"><span className="now">now</span> is your time</span>
        </div>

        <div>
          <div>
            <div className="what-is">
              What is Ziel Coaching?
            </div>
            <span className="meaning"><span className="word">Ziel</span> (<span className="dutch">n. Dutch <span className="zeel">\zeel\</span></span>) - soul, mind, heart</span>
          </div>


        </div>

        <div>
          <div className="what-is">
            What is a Vision Coach?
          </div>

          <p className="what-vision">
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A vision coach seeks to help you discover your goals, but also what might be stopping you or slowing you down from
           achieving said goals. A vision coach encourages you to take a step out of your current situation to get a bird's eye view in
           order to evaluate and take action to move forward into the version of yourself that you envision. Through different
           techniques, including one-on-one coaching, guided mental rehearsals and physical projects (vision boards, journaling
           exercises, etc.), you will have the ability to break through your barriers and make real progress toward seeing your vision
           become reality.
          </p>
        </div>

        <div>
          <div className="what-is offer">
            What We Offer
          </div>
        </div>


        <div className="home-container">

          <div className="program">
            <div className="program-header">
              Personal Vision Breakthrough
            </div>
            <div className="break-icons">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            The first step on your journey towards discovering yourself and your vision.
            <button>Learn more</button>
          </div>

          <div className="program">
            <div className="program-header">
              Upward Vision Transformation
            </div>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
            Taking the plunge into discovering your vision with accountability to get you there.
            <button>Learn more</button>
          </div>

          <div className="program">
            <div className="program-header">
              Envision Journey
            </div>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            Support, encouragement, and accountability in a trustful group setting.
            <button>Learn more</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
