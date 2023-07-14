import React from 'react';
import { useNavigate } from 'react-router-dom';
import './question1.css';

const Question1 = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/question2');
  };
  return (
    <div className="container">
      <div className="question">
        <div className="question-text">Which age group do you belong to?</div>
      </div>

      <div className="options-container">
        <button className="option-button">15 - 24</button>
        <button className="option-button">25 - 38</button>
        <button className="option-button">39 - 60</button>
        <button className="option-button">61 - 80</button>
        <button className="option-button">Greater than 80</button>
      </div>

      <button className="next-button" onClick={handleLoginButtonClick} >Next</button>
    </div>
  );
};

export default Question1;
