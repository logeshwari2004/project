import React from 'react';

const Question = ({ question, onAnswer }) => {
  const { questionText, options, type } = question;

  const handleOptionClick = (option) => {
    onAnswer(question._id, option);
  };

  return (
    <div className="question">
      <p className="question-text">{questionText}</p>
      {type === 'multiple-choice' && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} className="option">
              <button onClick={() => handleOptionClick(option)}>{option}</button>
            </li>
          ))}
        </ul>
      )}
      {type === 'open-ended' && (
        <input type="text" onBlur={(e) => handleOptionClick(e.target.value)} />
      )}
    </div>
  );
};

export default Question;

