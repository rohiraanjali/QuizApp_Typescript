import React, {useState, useEffect} from 'react';
import './App.css';
import FeatureCard from "./Home/FeatureCard"
import Footer from './Home/Footer';
import LandingPage from './Home/LandingPage';
import Navbar from "./Home/Navbar";
import UserForm from "./Home/Form";
import {useQuiz} from "./context/quizContext"
import { getQuestion } from './services/quizService';

function App() {
  const {dispatch} = useQuiz()
  const [error, setError] = useState(false)


  useEffect(() => {
    (async function () {
        try {
          const data = await getQuestion();
          if ("quiz" in data && dispatch) {
             dispatch({ type: "SETQUIZ", payload: { quiz: data.quiz } });
          }
        } catch (error) {
          setError(true);
          setTimeout(() => {
            setError(false);
          },1000)
        }
    })();
  }, [dispatch]);

  
return(
  <div className="App">
    <Navbar />
    <LandingPage />
    <FeatureCard />
    <Footer />
    <UserForm />


  </div>
)}

export default App;