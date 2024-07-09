import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Question from '../Question/Question';
import './Quiz.css';

const Quiz = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        console.log('Fetching quiz data...');
        const response = await axios.get(`/api/quiz/${id}`);
        console.log('Data fetched:', response.data);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [id]);

  if (loading) {
    console.log('Loading...');
    return <p>Loading...</p>;
  }
  
  if (error) {
    console.log('Error:', error);
    return <p>Error loading quiz: {error}</p>;
  }

  return (
    <div className="quiz-container">
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Question key={index} question={question} />
        ))
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};

export default Quiz;
