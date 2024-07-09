import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quizzes')
      .then(response => {
        setQuizzes(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="quiz-list">
      {quizzes.map(quiz => (
        <div key={quiz.id} className="quiz-item">
          {quiz.title}
        </div>
      ))}
    </div>
  );
};

export default QuizList;
