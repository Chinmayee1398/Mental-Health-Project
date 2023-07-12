import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Component.css';
import Question1 from './question1';

const Component = () => {
  return (
    <Router>
      <div className="container">
        <img className="image" src="https://via.placeholder.com/378x260" alt="" />
        <div className="shape">
          <div className="shape-inner">
            <div className="shape-line"></div>
            <div className="shape-box">
              <div className="shape-inner-box">
                <div className="shape-line"></div>
                <div className="shape-box-inner">
                  <div className="shape-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-wrapper">
            <div className="content-text">Let’s get Started</div>
          </div>
        </div>
        <Link to="/Question1" className="arrow-button">
          <div className="arrow-icon"></div>
        </Link>
      </div>
    </Router>
  );
};

export default Component;
