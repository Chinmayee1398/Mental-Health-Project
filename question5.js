import React, { useState } from 'react';
import './question5.css';

const Question5 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="container">
      <div className="question">
        <div className="question-text">Set some basic goals with your fox to finish with you.</div>
      </div>

      <div className="options-container">
        <div className="option">
          <input
            type="checkbox"
            id="drinkWater"
            checked={selectedOptions.includes('drinkWater')}
            onChange={() => handleOptionToggle('drinkWater')}
          />
          <label htmlFor="drinkWater">Drink Water</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="takeBreak"
            checked={selectedOptions.includes('takeBreak')}
            onChange={() => handleOptionToggle('takeBreak')}
          />
          <label htmlFor="takeBreak">Take a 10 min break</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="makeBed"
            checked={selectedOptions.includes('makeBed')}
            onChange={() => handleOptionToggle('makeBed')}
          />
          <label htmlFor="makeBed">Make your Bed</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="relax"
            checked={selectedOptions.includes('relax')}
            onChange={() => handleOptionToggle('relax')}
          />
          <label htmlFor="relax">Relax for 10 min</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="exercise"
            checked={selectedOptions.includes('exercise')}
            onChange={() => handleOptionToggle('exercise')}
          />
          <label htmlFor="exercise">Exercise</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="listenSong"
            checked={selectedOptions.includes('listenSong')}
            onChange={() => handleOptionToggle('listenSong')}
          />
          <label htmlFor="listenSong">Listen to a song that makes you happy</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="meditate"
            checked={selectedOptions.includes('meditate')}
            onChange={() => handleOptionToggle('meditate')}
          />
          <label htmlFor="meditate">Meditate for 10 mins</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="readBook"
            checked={selectedOptions.includes('readBook')}
            onChange={() => handleOptionToggle('readBook')}
          />
          <label htmlFor="readBook">Read a chapter from any book</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="doSomething"
            checked={selectedOptions.includes('doSomething')}
            onChange={() => handleOptionToggle('doSomething')}
          />
          <label htmlFor="doSomething">Do 1 thing that makes you happy</label>
        </div>
      </div>

      <button className="next-button">Next</button>
    </div>
  );
};

export default Question5;
