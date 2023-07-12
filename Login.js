import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the email and password values as needed
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the email and password fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="background"></div>
      <div className="app-version">App Version 1.0.0</div>

      <div className="header"></div>
      <div className="welcome">Welcome Back!</div>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <div className="input-field-wrapper">
            <div className="input-field-bg"></div>
            <input
              type="text"
              className="input-text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div className="input-field">
          <div className="input-field-wrapper">
            <div className="input-field-bg"></div>
            <input
              type="password"
              className="input-text"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
