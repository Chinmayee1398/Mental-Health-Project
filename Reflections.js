import React from 'react';
import './Reflections.css';

const Reflections = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="background"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <img src="https://via.placeholder.com/3x3" alt="Placeholder" className="navbar-image" />
        <img src="https://via.placeholder.com/3x3" alt="Placeholder" className="navbar-image" style={{ transform: "rotate(180deg)", transformOrigin: "0 0" }} />
      </div>
      <div className="footer">
        <div className="bar"></div>
      </div>
      <div className="title">Reflections</div>
      <div className="button-green">
        <p>Done</p>
      </div>
      <div className="button-black">Cancel</div>
    </div>
  );
};

export default Reflections;
