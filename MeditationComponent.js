import React from 'react';
import './MeditationComponent.css';

const MeditationComponent = () => {
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
      <div className="box" style={{ top: '408px' }}>
        Meditation
      </div>
      <div className="box">Breathing Exercise</div>
      <div className="footer">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default MeditationComponent;
