import {OptionProps} from "./OptionsTypes"
import { Option } from "../../context/quizContext.types"
import { nanoid } from "nanoid"

const Options = ({currentQuiz, currentQuestionNo, isClicked, handleOption}:OptionProps) => {
    const getOption = (isRight: boolean,i:number):string => {
if(isClicked !== false) {
if(isClicked === true) {
    return isRight ? "block mt-4 border border-gray-400 rounded-lg py-2 px-6 md:text-lg bg-green-500 text-white" : "block mt-4 border border-gray-400 rounded-lg py-2 px-6 md:text-lg"
}
    return isRight ? "block mt-4 border border-gray-400 rounded-lg py-2 px-6 md:text-lg bg-green-500 text-white" : (i === isClicked ? "block mt-4 border border-gray-400 rounded-lg py-2 px-6 text-lg bg-red-500 border-none text-white" : "block mt-4 border border-gray-400 rounded-lg py-2 px-6 md:text-lg")
}
    return "block mt-4 border border-gray-400 rounded-lg py-2 px-6 md:text-lg"
    }
    
    return (
        <>
        
        <div className="grid grid-cols-1 gap-4 align-center p-4 md:p-12 h-auto w-auto">
            {currentQuiz?.questions[currentQuestionNo].options.map((option: Option,i) => (
            <button 
            disabled={isClicked !== false}
            className={getOption(option.isRight,i)}
            key={nanoid()}
            onClick={() => handleOption(option.isRight,i)}
            >
                {option.text}
            </button>
        ))}</div>
        </>
    )
}

export default Options;