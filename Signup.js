import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="container">
      <div className="app-version">App Version 1.0.0</div>
      <div className="title">
        <div className="title-text">Let’s Begin</div>
      </div>
      <div className="notification"></div>

      <div className="email-enter">
        <div className="field-container">
          <div className="field-bg"></div>
          <div className="field-icon">
            <div className="indicator-line"></div>
            <div className="indicator-line"></div>
          </div>
          <input type="text" className="field-text" placeholder="Enter your email" />
        </div>
      </div>

      <div className="password-enter">
        <div className="field-container">
          <div className="field-bg"></div>
          <div className="field-text">Enter your password</div>
          <input type="password" className="field-text" placeholder="Enter your password" />
        </div>
        <div className="field-indicator">
          <div className="indicator-line"></div>
          <div className="indicator-line"></div>
        </div>
      </div>

      <div className="password-reenter">
        <div className="field-container">
          <div className="field-bg"></div>
          <div className="field-text">Re-enter your password</div>
          <input type="password" className="field-text" placeholder="Re-enter your password" />
        </div>
        <div className="field-indicator">
          <div className="indicator-line"></div>
          <div className="indicator-line"></div>
        </div>
      </div>

      <div className="signup-button">
        <div className="button-bg"></div>
        <button className="button-text">Sign Up</button>
      </div>

      <div className="divider">
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Signup;
