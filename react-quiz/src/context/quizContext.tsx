import { createContext, useContext, useReducer } from "react";
import { ContextState, ContextType, Props } from "./quizContext.types";
import { quizReducer } from "../reducer/quizReducer";

export const QuizContext = createContext<ContextType>({quiz:[],score:0,currentQuestionNo:0});

export const QuizContextProvider = ({children}:Props) => {
    const initialState:ContextState = {
        quiz:[],
        score:0,
        currentQuestionNo:0
    } 

    const [{quiz,score,currentQuestionNo}, dispatch] = useReducer(quizReducer, initialState)
    return (
        <QuizContext.Provider value={{quiz, score, currentQuestionNo, dispatch}}>
            {children}</QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext)
}