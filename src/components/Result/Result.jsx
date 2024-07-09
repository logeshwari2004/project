import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score, total } = location.state;

  return (
    <div className="result">
      <h1>Quiz Completed</h1>
      <p>Your score: {score} out of {total}</p>
      <Link to="/" className="link-back">Go back to Quiz List</Link>
    </div>
  );
};

export default Result;

