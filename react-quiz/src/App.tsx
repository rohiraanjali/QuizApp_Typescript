import React, {useState} from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { Difficulty, fetchQuizQuestions } from './API';
const Total_QUESTIONS = 10;

const startTrivia = async() => {
}
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
}
const nextQuesion = () => {

}

function App() {
const [loading, setLoading] = useState(false);
const [questions, setQuestions] = useState([]);
const [questionNr, setQuestionNr] = useState(0);
const [userAnswer, setUserAnswer] = useState([]);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);

console.log(fetchQuizQuestions(Total_QUESTIONS, Difficulty.EASY))

  return (
    <div className="App">
      React Quiz app
      <button className="start-question" onClick={startTrivia}>Start</button>
      <h3 className="score">Score: </h3>
      <p>loading questions...</p>
      {/* <QuestionCard 
      questionNr={questionNr + 1}
      totalQuestion={Total_QUESTIONS}
      question={questions.question}
      answers={questions.answers}
      userAnswers={userAnswer ? userAnswer : undefined}
      callback={checkAnswer}

      /> */}
      <button className="next-question" onClick={nextQuesion}>Next</button>
    </div>
  );
}

export default App;
