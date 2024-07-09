const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());

// Dummy data for quizzes
let quizzes = [
  {
    id: 1,
    title: 'Sample Quiz 1',
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        correctAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
      },
    ],
  },
  {
    id: 2,
    title: 'Sample Quiz 2',
    questions: [
      {
        id: 1,
        question: 'What is the capital of Spain?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        correctAnswer: 'Madrid',
      },
      {
        id: 2,
        question: 'What is 3 + 3?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '6',
      },
    ],
  },
];

// API endpoints

// Get all quizzes
app.get('/api/quizzes', (req, res) => {
  res.json(quizzes);
});

// Get a specific quiz by ID
app.get('/api/quizzes/:id', (req, res) => {
  const quizId = parseInt(req.params.id, 10);
  const quiz = quizzes.find(q => q.id === quizId);
  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).send('Quiz not found');
  }
});

// Add a new quiz
app.post('/api/quizzes', (req, res) => {
  const newQuiz = req.body;
  newQuiz.id = quizzes.length + 1;
  quizzes.push(newQuiz);
  res.status(201).json(newQuiz);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
