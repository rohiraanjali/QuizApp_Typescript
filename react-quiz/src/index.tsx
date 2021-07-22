import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import {BrowserRouter} from 'react-router-dom'
import {QuizContextProvider} from "./context/quizContext";

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </QuizContextProvider>
    </React.StrictMode>,
  document.getElementById('root')
);


