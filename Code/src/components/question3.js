import React from 'react';
import { useNavigate } from 'react-router-dom';
import './question3.css';

const Question3 = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/question4');
  };
  return (
    <div className="container">
      <div className="question">
        <div className="question-text">Are there any particular areas of focus within mental health that you are interested in ?</div>
      </div>

      <div className="options-container">
        <button className="option-button">Stress management</button>
        <button className="option-button">Anxiety</button>
        <button className="option-button">Lonliness</button>
        <button className="option-button">Self-care and well-being</button>
      </div>

      <button className="next-button" onClick={handleLoginButtonClick} >Next</button>
    </div>
  );
};

export default Question3;





