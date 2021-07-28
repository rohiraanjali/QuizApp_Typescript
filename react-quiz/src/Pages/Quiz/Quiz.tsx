import {useQuiz} from "../../context/quizContext"
import Question from "../../components/Questions/Question"
import {useParams, useLocation, Navigate, useNavigate} from "react-router-dom";
import {Location } from "./QuizTypes"
import { nanoid } from "nanoid";
import Options from "../../components/Options/Options"
import {useState, useEffect} from "react"
import Navbar from "../../components/Navbar/Navbar";
import Timer from "../../components/Timer/Timer";
import { getJSDocReadonlyTag } from "typescript";
import Spinner from "../../utils/Spinner/Spinner";

const Quiz = () => {
    const navigate = useNavigate()
    const quizId:string = useParams()?.quizId;
    const {quiz, score, currentQuestionNo, dispatch } = useQuiz()
    const location:Location = useLocation();
    const state = location.state;
    const [time, setTime] = useState<number>(30);
    const [stopTime, setStopTime] = useState<boolean>(false)
    const[spinner, setSpinner] = useState<boolean>(false)

    const currentQuiz = quiz?.find(q => q._id === quizId)
    const [isClicked, setIsClicked] = useState<boolean|number>(false)


    useEffect(() => {
        let timer= 30;
        function timeout() {
            setIsClicked(true);
            setStopTime(true)
        }

        let a = setInterval(() => {
            if(timer === 1) {
                clearInterval(a);
                timeout()
            }
            setTime(state => state - 1)
            timer = timer - 1
        },1000)

        if(stopTime) {
            clearInterval(a)
        }
        return () => {
            clearInterval(a)
        }
    }, [stopTime])

    

    const  gameOver = async() => {
        if(state?.name && score){
            
        }
        return navigate("/results",{state:{score}})
    }

    const handleNextQues = () => {
        setIsClicked(false)
        setStopTime(false);
        if(currentQuestionNo && currentQuiz?.questions.length === currentQuestionNo  + 1 ) {
            return gameOver();
        }
        if(dispatch) {
            dispatch({type: "NEXT_QUESTION", payload: {currentQuestionNo}})
        }
        setTime(30);

    }
    const handleOption = (isRight:boolean,i:number) => {
        if(isRight) {
        setIsClicked(true);
        setStopTime(true)
        if(dispatch) {
            dispatch({type:"INCREMENT_SCORE", payload:{score}})
           
        }} else {
            setIsClicked(i)
            setStopTime(true)
        }}

        const handleQuit = () => {
            if(dispatch) {
                dispatch({type: "RESET_QUIZ"})
                navigate(-1)
            }
        }
    return (
        <>
        <Navbar />
        <div className="flex w-full h-auto justify-center items-center ">
        <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg w-90 mt-8 h-auto ">
        <h4 className="float-right md-float-left font-semibold bg-yellow">{score}&nbsp; <i className="fas fa-coins fill-current text-yellow-600"></i></h4>
        <div className="display__question__number">Question: {currentQuestionNo + 1}/10</div>
        <br />
        <Timer time={time}/>
        <br />
        <Question key={nanoid()} question={currentQuiz?.questions[currentQuestionNo].question} />
        <Options currentQuiz={currentQuiz} currentQuestionNo={currentQuestionNo} isClicked={isClicked} handleOption={handleOption}/>
        <br />
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" disabled={isClicked === false} onClick={handleNextQues}>NEXT</button>
        <button className="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleQuit}>Quit</button>
            </div>
        <Spinner show={spinner} />

            </div>

        </>
    )
}
export default Quiz;