import React from 'react';
import { useNavigate } from 'react-router-dom';
import './question3.css';

const Question4 = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/question5');
  };
  return (
    <div className="container">
      <div className="question">
        <div className="question-text">Are you comfortable sharing personal experiences or insights within a community forum?</div>
      </div>

      <div className="options-container">
        <button className="option-button">Yes</button>
        <button className="option-button">No</button>
      </div>

      <button className="next-button" onClick={handleLoginButtonClick} >Next</button>
    </div>
  );
};

export default Question4;





