import QuestionCard from "./components/QuestionCard";
import {shuffleArray} from "./utils";

export type Question = {
    category: string,
    difficulty: string,
    correct_answer: any,
    incorrect_answers: string[],
    type: string,
    question: any
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endPoint_API = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await(await fetch(endPoint_API)).json()
    return data.results.map((question: Question) => ({
        ...question, answers: shuffleArray([
            ...question.incorrect_answers, 
            question.correct_answer
        ])
    }))
}