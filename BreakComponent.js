import React from 'react';
import './BreakComponent.css';

const BreakComponent = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-inner"></div>
        <div className="circle"></div>
        <div className="rectangle"></div>
        <img src="https://via.placeholder.com/3x3" alt="Placeholder" />
        <img
          src="https://via.placeholder.com/3x3"
          alt="Placeholder"
          style={{ transform: 'rotate(180deg)', transformOrigin: '0 0' }}
        />
      </div>
      <img
        className="image"
        src="C:\Users\sahan\OneDrive\Desktop\MENTAL\Screenshot_2023-07-12_025810-removebg-preview.png"
        alt="Placeholder"
      />
      <div className="info-box">
        <div className="info-box-text">
          Hi!
          <br /> It’s time for a break.
          <br /> Choose any activity to start.
        </div>
      </div>
      <div className="box" style={{ top: '408px' }}>
        Take a walk
      </div>
      <div className="box" style={{ top: '476px' }}>
        Drink Water
      </div>
      <div className="box" style={{ top: '544px' }}>
        Just Relax
      </div>
      <div className="footer">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default BreakComponent;
