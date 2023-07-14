import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <div className="time">9:41</div>
        <div className="icons">
          <img src="https://via.placeholder.com/15x11" alt="icon" />
          <img src="https://via.placeholder.com/17x11" alt="icon" />
        </div>
      </div>
      <div className="content-container">
        <div className="greeting-container">
          <span className="greeting-text">Good Morning</span>
          <span className="name">Andrew</span>
        </div>
        <div className="question">How are you feeling today?</div>
      </div>
      <div className="emergency-container">
        <div className="emergency-button">
          <div className="emergency-icon">❗️</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
