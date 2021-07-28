import React, {Dispatch} from "react";

export type Option = {
    text: string;
    isRight: boolean;
}

export type Question = {
    question: string;
    options: Option[];
}


export type Props = {
    children?:React.ReactNode
}

export type Quiz = {
    _id: string;
    name: string;
    description: string;
    questions:Question[];
}

export type QuizData = {
    quiz: Quiz[];
}

export type ContextAction = 
| {type: "SETQUIZ"; payload:{quiz: Quiz[];}}
| {type: "INCREMENT_SCORE"; payload:{score: number}}
| {type: "NEXT_QUESTION"; payload:{currentQuestionNo: number}}
| {type: "RESET_QUIZ"}


export type ContextState = {
    quiz:Quiz[];
    score: number;
    currentQuestionNo: number;
}

export type ContextType = {
    quiz: Quiz[];
    score: number;
    currentQuestionNo: number;
    dispatch?: Dispatch<ContextAction>
}
