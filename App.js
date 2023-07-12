import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';


const App = () => {
  return (
    <Router>
      <div className="container">
        <div>
          <img src="https://via.placeholder.com/189x250" alt="" />
        </div>
        <div>
          Welcome to Happyfox!
        </div>
        <div>
          <div></div>
          <div></div>
          <div>I am Foxy! Here to support you on your journey towards better mental health and emotional balance.</div>
        </div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
        <div className="buttons">
          <div className="account-button">
            <div></div>
            <div>
              I have an account
            </div>
          </div>
          <Link to="/Signup" className="account-button">
            I'm new here
          </Link>
        </div>
      </div>
      <Route path="/Signup" component={Signup} />
    </Router>
  );
};

export default App;
