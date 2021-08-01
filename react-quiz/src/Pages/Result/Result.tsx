import Navbar from "../../components/Navbar/Navbar";
import { useLocation} from "react-router-dom";
import { Location } from "./Result.types";
import { useQuiz } from "../../context/quizContext";
import wrong from "../../assets/wrong.png";
import correct from "../../assets/correct.png"
import { useNavigate } from "react-router";

const Result = () => {
const navigate = useNavigate();
const {dispatch} = useQuiz();
const location:Location = useLocation()
const score = location.state?.score;


const handleReset = () => {
    if(dispatch) {
    dispatch({type: "RESET_QUIZ"})
}
navigate(-1)
}
    return (
        <>
        <Navbar />
        <div className="flex w-full h-auto justify-center items-center ">
        <div className="bg-white p-12 rounded-lg shadow-lg w-90 mt-8 h-auto ">
        <div>{score === 0 ? (
            <img className="w-65 h-25 object-center align-center" src={wrong} alt="lessScore" />
            ) : (
                <img className="w-65 h-25 align-center" src={correct} alt="moreScore" />
            )
    }</div>


<div>{score === 0 ? (
        <h3 className="text-gray-400 text-center">The next time you must be lucky</h3>
      ) : (
        <h3 className="text-gray-400 text-center">You have passed th test within 2.5 minutes !!</h3>

      )}</div>
        <br />
        <h3 className="text-1.5xl text-center font-bold text-gray-400">YOUR SCORE</h3>
        <div className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600">{score||0} / 5</div>
        <br />
        <div>{score === 0 ? (
        <button style={{width: "100%"}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border rounded" onClick={handleReset}>TRY ONCE AGAIN</button>
      ) : (
        <button style={{width: "100%"}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded" onClick={handleReset}>ONCE MORE</button>
      )}</div>
      <br />
        <button style={{width: "100%"}} className="text-blue-500 font-bold py-2 px-4 border border-green-700 rounded" onClick={() => navigate("/")}>QUIT</button>

        </div>
        </div>
        </>
    )
}

export default Result;