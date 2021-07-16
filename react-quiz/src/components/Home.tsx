import React, {useState} from 'react';
import './App.css';
import QuestionCard from './QuestionCard';
import { QuestionState ,Difficulty, fetchQuizQuestions } from '../API';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const Total_QUESTIONS = 10;

function Home() {

  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

   try {
    const newQuestions = await fetchQuizQuestions(Total_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setQuestionNr(0);
    setLoading(false);
   } catch (error) {
     throw Error
   }

    
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value
      console.log(answer)
      const correct = questions[questionNr].correct_answer === answer;
      
      if(correct) {
        setScore((prev) => prev + 1)
      }

      const answerObject = {
        question: questions[questionNr].question,
        answer,
        correct,
        correctAnswer: questions[questionNr].correct_answer,
      };
      setUserAnswer(prev=> [...prev, answerObject ])
      console.log(answerObject)
    }
  }
  const nextQuestion = () => {
  
    const nextQ = questionNr + 1;
    if(nextQ === questionNr) {
      setGameOver(true);
    }
    setQuestionNr(nextQ);
  }

const [loading, setLoading] = useState(false);
const [questions, setQuestions] = useState<QuestionState[]>([]);
const [questionNr, setQuestionNr] = useState(0);
const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);

console.log(fetchQuizQuestions(Total_QUESTIONS, Difficulty.EASY))

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswer.length === Total_QUESTIONS ? 
      <button className="start-question" onClick={startTrivia}>Start</button>
      : null
      }
      <br />
      {!gameOver ? <h3 className="score">Score: {score} </h3> : null}
      {loading && <p>loading questions...</p>}
     {!loading && !gameOver ? <QuestionCard 
      questionNr={questionNr + 1}
      totalQuestion={Total_QUESTIONS}
      question={questions[questionNr].question}
      answers={questions[questionNr].answers}
      userAnswers={userAnswer ? userAnswer : undefined}
      callback={checkAnswer}
      />: null}

      {/* {!gameOver && !loading && userAnswer.length === questionNr + 1 && questionNr !== Total_QUESTIONS - 1 ? (
      <button className='next' onClick={nextQuestion}>
      Next Question
      </button>
      ) : null} */}
       <button className='next' onClick={nextQuestion}>
      Next Question
      </button>


    </div>
  );
}

export default Home;
