import React from 'react';
import './ExitApp.css';

const ExitApp = () => {
  return (
    <div className="container">
      <div className="circle-1">
        <div></div>
      </div>
      <div className="line"></div>
      <div className="circle-2"></div>
      <div className="circle-3">
        <div></div>
      </div>
      <div className="circle-4"></div>
      <div className="background-overlay"></div>
      <div className="popup"></div>
      <div className="message">Exit App?</div>
      <div className="button-yes">
        <div></div>
        <div>Yes</div>
      </div>
      <div className="button-no">
        <div></div>
        <div>No</div>
      </div>
    </div>
  );
};

export default ExitApp;
