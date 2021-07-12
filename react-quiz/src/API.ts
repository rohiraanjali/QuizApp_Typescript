export type Question = {
    category: string,
    difficulty: string,
    correct_answer: string,
    incorrect_answers: string[],
    type: string,
    question: string
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endPoint_API = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await(await fetch(endPoint_API)).json()
    console.log(data)
}