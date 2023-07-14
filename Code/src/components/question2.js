import React from 'react';
import { useNavigate } from 'react-router-dom';
import './question1.css';

const Question2 = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/question3');
  };
  return (
    <div className="container">
      <div className="question">
        <div className="question-text">How would you describe your current mental well-being?</div>
      </div>

      <div className="options-container">
        <button className="option-button">Happy</button>
        <button className="option-button">Stressed</button>
        <button className="option-button">Tired</button>
        <button className="option-button">Anxious</button>
        <button className="option-button">Lonely</button>
        <button className="option-button">Calm</button>
      </div>

      <button className="next-button" onClick={handleLoginButtonClick} >Next</button>
    </div>
  );
};

export default Question2;