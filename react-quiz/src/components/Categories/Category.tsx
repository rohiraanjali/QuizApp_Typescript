import { useQuiz } from "../../context/quizContext";
import {Link} from "react-router-dom"
import Navbar from "../Navbar/Navbar";

const Category = () => {
    const {quiz} = useQuiz();
    return (
        <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen bg-gray-300">
            
            <div className="flex-1 max-w-5xl p-16 z-0 opacity-6">
            <h1 className="text-8xl font-extrabold text-opacity-40 text-gray-400">1/6</h1>
            <h2 style={{position: "absolute", top: "27%"}} className=" md:text-5xl font-bold text-blue-500">Select Categories</h2>
            <p style={{position: "absolute", top: "38%"}} className=" md:text-2xl hidden md:block font-nomal text-gray-500">Select one of your skills to continue taking the test.</p>
            <br />
            <br />
            <br />
            <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-2 gap-4 grid-flow-col auto-cols-fr">
                    {quiz.map(quiz => (
                    <Link to={`/quiz/${quiz._id}`}>
                    <div key={quiz._id} className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                   
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fa fa-question" ></i>
                  </div>
                    <h2 className="text-lg font-semibold leading-6">{quiz.name}</h2>

                          <p className="text-gray-600">{quiz.description}</p>
                      </div>
                      </Link>
                      
                        ))}
                  </div> 
              
            </div>
        </div>
        </>
    )
}
export default Category;