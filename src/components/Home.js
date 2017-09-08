import React, { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div className="container">


        <div className="image-container">

          <div className="title-container">
            <span className="z"><img src={require('../images/white-Z.png')}/></span>
            <span className="ziel">iel Coaching</span>
          </div>

          <span className="time"><span>now</span> is your time</span>
        </div>

        <div>
          <div>
            <div className="what-is">
              What is Ziel Coaching?
            </div>
            <span className="meaning"><span className="word">Ziel</span> (<span className="dutch">n. Dutch <span className="zeel">\zeel\</span></span>) - soul, mind, heart</span>
            <div className="what-vision what-coach">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ziel Coaching is the catalyst you’ve been looking for to create vision for your life and discover your heart and soul dreams. Through our unique programs, you’ll learn how to eliminate habits that have once led to discouragement and create habits that propel you into your best, most fulfilling life. Now is your time.

              <a href="/about" className="learn-more"><button>Learn More</button></a>

            </div>

          </div>


        </div>

        <div>
          <div className="what-is">
            What is a Vision Coach?
          </div>

          <p className="what-vision">
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A vision coach seeks to help you discover your goals, but also what might be stopping you or slowing you down from achieving said goals. A vision coach encourages you to take a step out of your current situation to get a bird's eye view in order to evaluate and take action to move forward into the version of yourself that you envision. Through different techniques, including one-on-one coaching, guided visualization and physical projects (vision boards, journaling exercises, etc.), you will have the ability to break through your barriers and make real progress toward seeing your vision become reality.
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
              <img className="prog-icons" src={require('../images/ziel-pvb.png')} />
            </div>
            The first step on your journey towards discovering yourself and your vision.
            <a ><button>Learn more</button></a>
          </div>

          <div className="program">
            <div className="program-header">
              Upward Vision Transformation
            </div>
            <img className="prog-icons" src={require('../images/ziel-uvt.png')} />
            Taking the plunge into discovering your vision with accountability to get you there.
            <button>Learn more</button>
          </div>

          <div className="program">
            <div className="program-header">
              Envision Journey
            </div>
            <img className="prog-icons" src={require('../images/ziel-ej.png')} />
            Support, encouragement, and accountability in a trustful group setting.
            <button>Learn more</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
