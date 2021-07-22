type QuestionProps = {
    question: string;
}

const Question = ({question}:QuestionProps) => {
    return (
        <>
        <h3>{question}</h3>
        </>
    )
}

export default Question;