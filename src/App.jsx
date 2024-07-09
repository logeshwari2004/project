import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizList from './components/QuizList/QuizList';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Quiz Application</h1>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
