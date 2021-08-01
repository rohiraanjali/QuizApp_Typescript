import { QuestionProps } from "./question.types"

const Question = ({question}:QuestionProps) => {
    return (
        <h3 className="font-sans md:text-2xl text-center">{question}</h3>
    )
}

export default Question
