import React, {useState, useEffect} from 'react';
import './App.css';
import LandingPage from './Pages/Home/LandingPage';
import {useQuiz} from "./context/quizContext"
import { getQuestion } from './services/quizService';
import {Routes, Route} from "react-router-dom"
import Form from "./components/Categories/Form";
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Category from './components/Categories/Category';
import Spinner from './utils/Spinner/Spinner';
import { ErrorToast } from './utils/Toast/Toast';
import RouteNotFound from './utils/RouteNotFound/RouteNotFound';

function App() {
  const {dispatch} = useQuiz()
  const [error, setError] = useState(false)
  const[spinner, setSpinner] = useState<boolean>(false)


  useEffect(() => {
    (async function () {
      setSpinner(true)
        try {
          const data = await getQuestion();
          if ("quiz" in data && dispatch) {
             dispatch({ type: "SETQUIZ", payload: { quiz: data.quiz } });
          }
          setSpinner(false)
        } catch (error) {
          setSpinner(false)
          setError(true)
          setTimeout(() => {
          setError(false);
          },2000)
        }
    })();
  }, [dispatch]);

  
return(
  <>
  <div className="App">
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<RouteNotFound />} />

        </Routes>
  </div>
   <Spinner show={spinner}/>
   <ErrorToast show={error} message={"something went wrong"} />

   </>
)}

export default App;